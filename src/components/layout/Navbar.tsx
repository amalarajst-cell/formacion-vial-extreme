import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SyncStatusIndicator } from '../SyncStatusIndicator';
import { useSurveyStore } from '../../hooks/useSurveyStore';
import { useAuthContext } from '../../context/AuthContext';
import { ChevronDown, Lock, BookOpen, AlertTriangle, Shield, LogOut } from 'lucide-react';

export function Navbar() {
    const [modulesOpen, setModulesOpen] = useState(false);
    const { prioridadesUnlocked } = useSurveyStore();
    const { signOut, sessionType } = useAuthContext();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setModulesOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isEmbedded = window.location.href.includes('embedded=true');
    if (isEmbedded) return null;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-brand-navy border-b border-gray-800 shadow-2xl">
            <div className="container-extreme">
                <div className="flex items-center justify-between h-20 md:h-24">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <span className="font-brand-heading font-bold italic text-sm sm:text-lg md:text-2xl text-white tracking-tighter uppercase">
                                MULTIPLICADORES <span className="text-brand-yellow font-bold">VIALES</span>
                                <span className="ml-2 text-[9px] text-gray-500 not-italic font-normal opacity-50">v3.4 FINAL</span>
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <SyncStatusIndicator />

                        {sessionType && (
                            <div className="flex items-center gap-4">
                                {sessionType === 'admin' && (
                                    <Link
                                        to="/admin"
                                        className="hidden sm:flex items-center gap-2 bg-brand-yellow text-black px-6 py-2 text-sm sm:text-base font-brand-heading font-extrabold uppercase italic tracking-wider hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    >
                                        <Shield className="w-4 h-4" />
                                        PANEL
                                    </Link>
                                )}

                                {/* Dropdown de Módulos */}
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setModulesOpen(!modulesOpen)}
                                        className="flex items-center gap-2 bg-brand-yellow text-black px-6 py-2 text-sm sm:text-base font-brand-heading font-extrabold uppercase italic tracking-wider whitespace-nowrap hover:bg-yellow-400 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    >
                                        MÓDULOS
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${modulesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {modulesOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-64 bg-brand-dark-grey border border-gray-700 shadow-xl shadow-black/50 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                            <div className="p-1">
                                                {/* Link móvil al panel docente */}
                                                {sessionType === 'admin' && (
                                                    <Link
                                                        to="/admin"
                                                        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-brand-yellow hover:bg-white/5 transition-colors sm:hidden"
                                                        onClick={() => setModulesOpen(false)}
                                                    >
                                                        <Shield className="w-4 h-4" /> Panel Docente
                                                    </Link>
                                                )}

                                                <Link
                                                    to="/introduccion"
                                                    className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                                                    onClick={() => setModulesOpen(false)}
                                                >
                                                    <BookOpen className="w-4 h-4" /> Introducción
                                                </Link>
                                                
                                                <Link
                                                    to="/senales"
                                                    className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                                                    onClick={() => setModulesOpen(false)}
                                                >
                                                    <AlertTriangle className="w-4 h-4" /> Señales
                                                </Link>

                                                <Link
                                                    to="/prioridades"
                                                    className={`flex items-center gap-2 w-full px-4 py-3 text-sm font-medium transition-colors ${
                                                        prioridadesUnlocked 
                                                            ? 'text-white hover:bg-white/5' 
                                                            : 'text-gray-500 cursor-not-allowed'
                                                    }`}
                                                    onClick={(e) => {
                                                        if (!prioridadesUnlocked) e.preventDefault();
                                                        else setModulesOpen(false);
                                                    }}
                                                >
                                                    {prioridadesUnlocked ? <BookOpen className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                                                    Prioridades
                                                </Link>

                                                <div className="border-t border-gray-800 my-1"></div>
                                                
                                                <button
                                                    onClick={() => {
                                                        signOut();
                                                        setModulesOpen(false);
                                                    }}
                                                    className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
