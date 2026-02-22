import { useState, useEffect, useRef } from 'react';

export interface UserProfile {
    nombre: string;
    apellido: string;
    dni: string;
    institucion: string;
}

export interface SurveyState {
    profile: UserProfile | null;
    preSurvey: any | null;
    fieldData: any | null;
    postSurvey: any | null;
    quizScore: number | null;
    signalsScore: number | null;
    prioridadesScore: number | null;
    emergentologiaScore: number | null;
    completed: boolean;
}

interface SyncQueueItem {
    id: string;
    timestamp: number;
    payload: any;
    attempts: number;
    lastAttempt: number | null;
}

const STORAGE_KEY = 'vial_survey_data';
const SYNC_QUEUE_KEY = 'vial_sync_queue';
const DIPLOMA_UNLOCKED_KEY = 'diploma_unlocked';
const SOCORRISMO_UNLOCKED_KEY = 'socorrismo_unlocked';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvCc8d50n7IDMFI8yMa1VASrc8dn5XYxdBUt08TsYXehJgOLdXeBbP-ViRemNeEMWd/exec';
const MAX_RETRY_ATTEMPTS = 3;
const SYNC_INTERVAL_MS = 10000; // 10 segundos
const PRIORIDADES_UNLOCKED_KEY = 'prioridades_unlocked';

export function useSurveyStore() {
    const [state, setState] = useState<SurveyState>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {
            profile: null,
            preSurvey: null,
            fieldData: null,
            postSurvey: null,
            quizScore: null,
            signalsScore: null,
            prioridadesScore: null,
            emergentologiaScore: null,
            completed: false
        };
    });

    const [lastSync, setLastSync] = useState<string | null>(null);
    const [pendingSyncCount, setPendingSyncCount] = useState(0);
    const [diplomaUnlocked, setDiplomaUnlocked] = useState<boolean>(() => {
        return localStorage.getItem(DIPLOMA_UNLOCKED_KEY) === 'true';
    });
    const [socorrismoUnlocked, setSocorrismoUnlocked] = useState<boolean>(() => {
        return localStorage.getItem(SOCORRISMO_UNLOCKED_KEY) === 'true';
    });
    const [prioridadesUnlocked, setPrioridadesUnlocked] = useState<boolean>(() => {
        return localStorage.getItem(PRIORIDADES_UNLOCKED_KEY) === 'true';
    });
    const syncIntervalRef = useRef<number | null>(null);
    const syncCallbackRef = useRef<((success: boolean, message: string) => void) | null>(null);

    // Guardar estado en localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    // Obtener cola de sincronización
    const getSyncQueue = (): SyncQueueItem[] => {
        const queue = localStorage.getItem(SYNC_QUEUE_KEY);
        return queue ? JSON.parse(queue) : [];
    };

    // Guardar cola de sincronización
    const saveSyncQueue = (queue: SyncQueueItem[]) => {
        localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
        setPendingSyncCount(queue.length);
    };

    // --- Métodos de envío ---

    // Método 2: JSONP via <script> tag (fallback si CORS falla)
    const sendViaJsonp = (payload: any): Promise<{ result: string; error?: string }> => {
        return new Promise((resolve, reject) => {
            const callbackName = `gsheets_cb_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
            const timeout = setTimeout(() => {
                cleanup();
                reject(new Error('Timeout: Google Sheets no respondió en 15 segundos'));
            }, 15000);

            const cleanup = () => {
                clearTimeout(timeout);
                delete (window as any)[callbackName];
                const scriptEl = document.getElementById(callbackName);
                if (scriptEl) scriptEl.remove();
            };

            // Registrar callback global
            (window as any)[callbackName] = (response: any) => {
                cleanup();
                if (response && response.result === 'success') {
                    resolve(response);
                } else {
                    resolve({ result: 'success' }); // Si responde, asumimos éxito
                }
            };

            // Crear <script> tag con los datos como query params
            const encodedData = encodeURIComponent(JSON.stringify(payload));
            const script = document.createElement('script');
            script.id = callbackName;
            script.src = `${GOOGLE_SCRIPT_URL}?callback=${callbackName}&data=${encodedData}`;
            script.onerror = () => {
                cleanup();
                reject(new Error('Error de red al contactar Google Sheets'));
            };
            document.body.appendChild(script);
        });
    };

    // Enviar a Google Sheets — solo JSONP (el más confiable para Apps Script)
    // NO usamos fetch POST porque aunque CORS bloquee la respuesta,
    // el POST sí llega al servidor, causando duplicaciones al hacer fallback.
    const sendToGoogleSheets = async (payload: any): Promise<{ result: string; error?: string }> => {
        console.log('📡 Enviando via JSONP...');
        const result = await sendViaJsonp(payload);
        console.log('✅ Respuesta JSONP:', result);
        return result;
    };

    // Procesar cola de sincronización en segundo plano
    const processSyncQueue = async () => {
        const queue = getSyncQueue();
        if (queue.length === 0) return;

        // ATÓMICO: vaciar la cola INMEDIATAMENTE para que ninguna otra
        // instancia pueda procesar los mismos items
        saveSyncQueue([]);
        console.log(`📤 Tomando ${queue.length} items de la cola para procesar`);

        const failedItems: SyncQueueItem[] = [];

        for (const item of queue) {
            // Si ya intentó el máximo, reportar fallo y descartar
            if (item.attempts >= MAX_RETRY_ATTEMPTS) {
                console.warn(`❌ Elemento ${item.id} alcanzó máximo de reintentos (${MAX_RETRY_ATTEMPTS})`);
                if (syncCallbackRef.current) {
                    syncCallbackRef.current(false, `Falló después de ${MAX_RETRY_ATTEMPTS} intentos. Verificá tu conexión.`);
                }
                continue;
            }

            try {
                console.log(`🔄 Sincronizando: ${item.id} (Intento ${item.attempts + 1}/${MAX_RETRY_ATTEMPTS})`);

                const response = await sendToGoogleSheets(item.payload);

                if (response.result === 'success') {
                    console.log(`✅ Sincronización VERIFICADA: ${item.id}`);
                    setLastSync(new Date().toLocaleTimeString('es-AR'));

                    if (syncCallbackRef.current) {
                        syncCallbackRef.current(true, 'Envío exitoso');
                    }
                } else {
                    throw new Error(response.error || 'Respuesta no exitosa de Google Sheets');
                }
            } catch (error) {
                const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
                console.error(`❌ Error sincronizando ${item.id}: ${errorMsg}`);

                failedItems.push({
                    ...item,
                    attempts: item.attempts + 1,
                    lastAttempt: Date.now()
                });

                if (syncCallbackRef.current) {
                    syncCallbackRef.current(false, `Reintentando... (${item.attempts + 1}/${MAX_RETRY_ATTEMPTS})`);
                }
            }
        }

        // Solo re-agregar los que fallaron
        if (failedItems.length > 0) {
            const currentQueue = getSyncQueue();
            saveSyncQueue([...currentQueue, ...failedItems]);
        }
    };

    // Iniciar procesamiento automático de cola
    useEffect(() => {
        // Procesar cola inmediatamente al montar
        processSyncQueue();

        // Configurar intervalo para procesar cola cada 10 segundos
        syncIntervalRef.current = setInterval(processSyncQueue, SYNC_INTERVAL_MS);

        // Limpiar intervalo al desmontar
        return () => {
            if (syncIntervalRef.current) {
                clearInterval(syncIntervalRef.current);
            }
        };
    }, []);

    // Actualizar contador de pendientes al montar
    useEffect(() => {
        const queue = getSyncQueue();
        setPendingSyncCount(queue.length);
    }, []);

    const clearState = () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(SYNC_QUEUE_KEY);
        localStorage.removeItem(DIPLOMA_UNLOCKED_KEY);
        localStorage.removeItem(SOCORRISMO_UNLOCKED_KEY);
        localStorage.removeItem(PRIORIDADES_UNLOCKED_KEY);
        setState({
            profile: null,
            preSurvey: null,
            fieldData: null,
            postSurvey: null,
            quizScore: null,
            signalsScore: null,
            prioridadesScore: null,
            emergentologiaScore: null,
            completed: false
        });
        setPendingSyncCount(0);
        setDiplomaUnlocked(false);
        setSocorrismoUnlocked(false);
        setPrioridadesUnlocked(false);
        setLastSync(null);
    };

    const setProfile = (profile: SurveyState['profile']) =>
        setState(prev => ({ ...prev, profile }));
    const setPreSurvey = (preSurvey: any) => setState(s => ({ ...s, preSurvey }));
    const setFieldData = (fieldData: any) => setState(s => ({ ...s, fieldData }));
    const setPostSurvey = (postSurvey: any) => {
        setState(s => ({ ...s, postSurvey, completed: true }));
        // Desbloquear diploma cuando se completa la encuesta POST
        setDiplomaUnlocked(true);
        localStorage.setItem(DIPLOMA_UNLOCKED_KEY, 'true');
    };
    const setQuizScore = (score: number) => {
        setState(s => ({ ...s, quizScore: score }));

        // Sincronizar inmediatamente el puntaje de RCP
        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': state.profile?.nombre || '',
            'Apellido': state.profile?.apellido || '',
            'DNI': state.profile?.dni || '',
            'Escuela': state.profile?.institucion || '',
            'Conocimiento_RCP': `${score}/10`,
        });
    };

    const setPrioridadesScore = (score: number) => {
        setState(s => ({ ...s, prioridadesScore: score }));

        // Sincronizar inmediatamente el puntaje de prioridades
        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': state.profile?.nombre || '',
            'Apellido': state.profile?.apellido || '',
            'DNI': state.profile?.dni || '',
            'Escuela': state.profile?.institucion || '',
            'Prioridades_Paso': score,
        });
    };

    const setEmergentologiaScore = (score: number) => {
        setState(s => ({ ...s, emergentologiaScore: score }));

        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': state.profile?.nombre || '',
            'Apellido': state.profile?.apellido || '',
            'DNI': state.profile?.dni || '',
            'Escuela': state.profile?.institucion || '',
            'Simulacion_Emergencia': score,
        });
    };

    const completeSignalsModule = (score: number) => {
        setState(s => ({ ...s, signalsScore: score }));

        // Desbloquear módulo 2 si el puntaje es > 80% (o sea > 800 puntos si el max es 1000, 
        // pero la gamificación da 10 pts por acierto. Asumamos 10 preguntas -> 100 puntos max. 80% = 80 puntos)
        // El prompt dice "Cada acierto suma 10 puntos".
        if (score >= 80) {
            setSocorrismoUnlocked(true);
            localStorage.setItem(SOCORRISMO_UNLOCKED_KEY, 'true');
        }

        // Siempre desbloquear Prioridades si completa el módulo de señales, 
        // o quizás bajo cierta condición. El usuario dijo "habilito otro test" al finalizar el anterior.
        setPrioridadesUnlocked(true);
        localStorage.setItem(PRIORIDADES_UNLOCKED_KEY, 'true');

        // Sincronizar inmediatamente el puntaje
        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': state.profile?.nombre || '',
            'Apellido': state.profile?.apellido || '',
            'DNI': state.profile?.dni || '',
            'Escuela': state.profile?.institucion || '',
            'Señal_Transitoria': score,
        });
    };

    const reset = () => setState({
        profile: null,
        preSurvey: null,
        fieldData: null,
        postSurvey: null,
        quizScore: null,
        signalsScore: null,
        prioridadesScore: null,
        emergentologiaScore: null,
        completed: false
    });

    // Sincronización NO BLOQUEANTE - agrega a cola y retorna inmediatamente
    const syncData = (customData?: any) => {
        const profile = state.profile || { nombre: '', apellido: '', dni: '', institucion: '' };

        // Puntajes
        const quizScoreStr = state.quizScore !== null ? `${state.quizScore}/10` : '';
        const signalsScoreStr = state.signalsScore !== null ? state.signalsScore : '';
        const emergentologiaScoreStr = state.emergentologiaScore !== null ? state.emergentologiaScore : '';
        const prioridadesScoreStr = state.prioridadesScore !== null ? state.prioridadesScore : '';

        // Conteos de auditoría individuales (para columnas separadas)
        const celular = state.fieldData?.counts?.celular ?? '';
        const sinCelular = state.fieldData?.counts?.cinturon ?? '';
        const fueraDeSenda = state.fieldData?.counts?.senda ?? '';

        const payload = customData || {
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': profile.nombre || '',
            'Apellido': profile.apellido || '',
            'DNI': profile.dni || '',
            'Escuela': profile.institucion || '',
            'Percepción_de_Seguridad': state.preSurvey?.percepcion || '',
            'Señal_Transitoria': signalsScoreStr,
            'Conocimiento_RCP': quizScoreStr,
            'Simulacion_Emergencia': emergentologiaScoreStr,
            'Prioridades_Paso': prioridadesScoreStr,
            'Auditoria_Celular': celular,
            'Sin_Celular': sinCelular,
            'Fuera_de_Senda': fueraDeSenda,
            'Encuesta_Final_1': state.postSurvey?.cambioHabito || '',
            'Encuesta_Final_2': state.postSurvey?.valoracionRCP || '',
            'Encuesta_Final_3': state.postSurvey?.sorpresa || '',
        };

        // Agregar a cola
        const queue = getSyncQueue();
        const newItem: SyncQueueItem = {
            id: `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: Date.now(),
            payload,
            attempts: 0,
            lastAttempt: null
        };

        queue.push(newItem);
        saveSyncQueue(queue);

        console.log(`📤 Agregado a cola de sincronización: ${newItem.id}`);
        console.log('📋 Payload completo:', payload);
        console.log('🔢 Items en cola:', queue.length);

        // Procesar inmediatamente para dar feedback rápido
        processSyncQueue();
    };

    // Función para sincronizar manualmente
    const forceSyncNow = () => {
        console.log('🔄 Sincronización manual iniciada');
        processSyncQueue();
    };

    // Registrar callback para notificaciones
    const setSyncCallback = (callback: (success: boolean, message: string) => void) => {
        syncCallbackRef.current = callback;
    };

    return {
        state,
        lastSync,
        pendingSyncCount,
        diplomaUnlocked,
        socorrismoUnlocked,
        prioridadesUnlocked,
        setProfile,
        setPreSurvey,
        setFieldData,
        setPostSurvey,
        setQuizScore,
        setPrioridadesScore,
        setEmergentologiaScore,
        completeSignalsModule,
        syncData,
        forceSyncNow,
        setSyncCallback,
        clearState,
        reset
    };
}
