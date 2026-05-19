import { useState, useEffect, useCallback } from 'react';
import {
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

export interface StudentProfile {
    id: string;
    nombre: string;
    apellido: string;
    dni: string;
    acompanante: string;
    institucion: string;
    curso?: string;
    ultimoIngreso?: string;
}

export type SessionType = 'admin' | 'student' | null;

interface AuthState {
    sessionType: SessionType;
    adminUser: User | null;
    studentProfile: StudentProfile | null;
    loading: boolean;
    error: string | null;
}

const STUDENT_SESSION_KEY = 'vial_student_session';

export function useAuth() {
    const [state, setState] = useState<AuthState>(() => {
        // Inicializar con sesión de alumno si existe en localStorage
        const stored = localStorage.getItem(STUDENT_SESSION_KEY);
        if (stored) {
            try {
                const student = JSON.parse(stored) as StudentProfile;
                return {
                    sessionType: 'student',
                    adminUser: null,
                    studentProfile: student,
                    loading: true, // sigue en true hasta que Firebase confirme que no hay admin
                    error: null,
                };
            } catch {
                localStorage.removeItem(STUDENT_SESSION_KEY);
            }
        }
        return {
            sessionType: null,
            adminUser: null,
            studentProfile: null,
            loading: true, // espera a que Firebase resuelva
            error: null,
        };
    });

    // Escuchar estado de autenticación de Firebase (admin)
    // Este es el único efecto que controla `loading`
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Admin autenticado → limpiar sesión de alumno y tomar control
                localStorage.removeItem(STUDENT_SESSION_KEY);
                setState({
                    sessionType: 'admin',
                    adminUser: user,
                    studentProfile: null,
                    loading: false,
                    error: null,
                });
            } else {
                // No hay admin → restaurar alumno si había sesión guardada
                setState(s => {
                    if (s.sessionType === 'student' && s.studentProfile) {
                        // Mantener sesión de alumno
                        return { ...s, adminUser: null, loading: false };
                    }
                    // Sin sesión activa
                    return {
                        sessionType: null,
                        adminUser: null,
                        studentProfile: null,
                        loading: false,
                        error: null,
                    };
                });
            }
        });
        return unsub;
    }, []);

    // Login admin con email + password
    const loginAdmin = useCallback(async (email: string, password: string) => {
        setState(s => ({ ...s, loading: true, error: null }));
        try {
            // Limpiar cualquier sesión previa de alumno inmediatamente para evitar conflictos
            localStorage.removeItem(STUDENT_SESSION_KEY);
            await signInWithEmailAndPassword(auth, email, password);
            // El observador onAuthStateChanged se encargará de actualizar el estado final
        } catch (err: any) {
            console.error('Admin login error:', err);
            let msg = 'Email o contraseña incorrectos.';
            if (err.code === 'auth/network-request-failed') msg = 'Error de conexión. Revisá tu internet.';
            if (err.code === 'auth/too-many-requests') msg = 'Demasiados intentos. Intentá más tarde.';
            setState(s => ({ ...s, loading: false, error: msg }));
        }
    }, []);

    // Login alumno con DNI
    const loginStudent = useCallback(async (dni: string) => {
        setState(s => ({ ...s, loading: true, error: null }));
        try {
            const dniStr = dni.trim();
            const dniNum = Number(dniStr);

            // Intentar con DNI como string primero
            let snap = await getDocs(
                query(collection(db, 'alumnos'), where('dni', '==', dniStr))
            );

            // Si no encontró, intentar con DNI como número (por si fue cargado desde consola)
            if (snap.empty && !isNaN(dniNum)) {
                snap = await getDocs(
                    query(collection(db, 'alumnos'), where('dni', '==', dniNum))
                );
            }

            if (snap.empty) {
                setState(s => ({ ...s, loading: false, error: 'DNI no encontrado. Consultá a tu docente.' }));
                return;
            }
            const docSnap = snap.docs[0];
            const data = docSnap.data();
            // Normalizar DNI a string por consistencia
            const student: StudentProfile = {
                id: docSnap.id,
                ...data,
                dni: String(data.dni),
            } as StudentProfile;

            // Actualizar ultimo ingreso en Firebase
            try {
                const now = new Date().toISOString();
                await updateDoc(doc(db, 'alumnos', docSnap.id), { ultimoIngreso: now });
                student.ultimoIngreso = now;
            } catch (e) {
                console.warn('No se pudo actualizar ultimoIngreso', e);
            }

            localStorage.setItem(STUDENT_SESSION_KEY, JSON.stringify(student));
            setState(s => ({ ...s, sessionType: 'student', studentProfile: student, loading: false, error: null }));
        } catch {
            setState(s => ({ ...s, loading: false, error: 'Error al conectar. Intentá de nuevo.' }));
        }
    }, []);

    // Cerrar sesión (admin y alumno)
    const signOut = useCallback(async () => {
        localStorage.removeItem(STUDENT_SESSION_KEY);
        if (auth.currentUser) await firebaseSignOut(auth);
        setState({ sessionType: null, adminUser: null, studentProfile: null, loading: false, error: null });
    }, []);

    const clearError = useCallback(() => {
        setState(s => ({ ...s, error: null }));
    }, []);

    return { ...state, loginAdmin, loginStudent, signOut, clearError };
}
