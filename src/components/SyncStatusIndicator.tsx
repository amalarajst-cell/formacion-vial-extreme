import React, { useEffect } from 'react';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { useToast } from './ui/Toast';
import { Cloud, CloudOff, RefreshCw } from 'lucide-react';

export const SyncStatusIndicator: React.FC = () => {
    const { pendingSyncCount, forceSyncNow, setSyncCallback } = useSurveyStore();
    const { showToast } = useToast();
    const [isSyncing, setIsSyncing] = React.useState(false);

    // Registrar callback para mostrar toasts cuando se sincroniza
    useEffect(() => {
        setSyncCallback((success, message) => {
            if (success) {
                showToast(message, 'success');
            } else {
                showToast(message, 'error');
            }
        });
    }, [setSyncCallback, showToast]);

    const handleManualSync = () => {
        if (pendingSyncCount === 0) return;

        setIsSyncing(true);
        showToast('Sincronizando datos...', 'info');
        forceSyncNow();

        // Resetear estado después de 2 segundos
        setTimeout(() => {
            setIsSyncing(false);
        }, 2000);
    };

    const hasPending = pendingSyncCount > 0;

    if (!hasPending) {
        return null;
    }

    return (
        <div className="flex items-center gap-2">
            {/* Indicador visual */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                {/* Punto de estado */}
                <div className="relative flex items-center">
                    {hasPending ? (
                        <>
                            <CloudOff className="w-4 h-4 text-red-400" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        </>
                    ) : (
                        <Cloud className="w-4 h-4 text-green-400" />
                    )}
                </div>

                {/* Contador */}
                <span className="text-xs font-medium text-gray-300">
                    {hasPending && (
                        <span className="text-red-400">{pendingSyncCount} pendiente{pendingSyncCount !== 1 ? 's' : ''}</span>
                    )}
                </span>
            </div>

            {/* Botón de sincronización manual */}
            {hasPending && (
                <button
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="
                        flex items-center gap-1.5 px-3 py-1.5 
                        bg-brand-yellow/10 hover:bg-brand-yellow/20 
                        border border-brand-yellow/30 hover:border-brand-yellow/50
                        rounded-full text-brand-yellow text-xs font-medium
                        transition-all duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed
                    "
                    title="Sincronizar ahora"
                >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                    <span className="hidden sm:inline">Sincronizar ahora</span>
                </button>
            )}
        </div>
    );
};
