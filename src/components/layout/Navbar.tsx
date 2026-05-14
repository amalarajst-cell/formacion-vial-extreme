import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SyncStatusIndicator } from '../SyncStatusIndicator';
import { useSurveyStore } from '../../hooks/useSurveyStore';
import { useAuthContext } from '../../context/AuthContext';
import { ChevronDown, Lock, BookOpen, AlertTriangle, Shield, LogOut } from 'lucide-react';

export function Navbar() {
    const [modulesOpen, setModulesOpen] = useState(false);
    const { prioridadesUnlocked } = useSurveyStore();
    const { sessionType, signOut } = useAuthContext();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setModulesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-[100] bg-brand-navy border-b border-gray-800">
            <div className="container-extreme">
                <div className="flex items-center justify-between h-20 md:h-28">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <span className="font-brand-heading font-bold italic text-sm sm:text-xl md:text-3xl text-white tracking-tighter uppercase">
                                MULTIPLICADORES <span className="text-brand-red">VIALES</span>
                                <span className="ml-2 text-[10px] text-gray-600 not-italic font-normal">v3.0</span>
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Indicador de Sincronización */}
                        <SyncStatusIndicator />

                        <div className="flex items-center space-x-1 sm:space-x-4">
                            {/* Panel Docente (solo para admins) */}
                            {sessionType === 'admin' && (
                                <Link
                                    to="/admin"
                                    className="hidden sm:flex items-center gap-2 bg-brand-red text-white px-4 py-2 text-xs sm:text-base font-brand-heading font-bold uppercase italic tracking-wider hover:bg-red-600 transition-colors"
                                >
                                    <Shield className="w-4 h-4" />
                                    Panel
                                </Link>
                            )}

                            {/* Dropdown de Módulos */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setModulesOpen(!modulesOpen)}
                                    className="flex items-center gap-1.5 bg-brand-yellow text-brand-navy px-4 py-3 text-xs sm:text-lg font-brand-heading font-bold uppercase italic tracking-wider whitespace-nowrap hover:bg-yellow-400 transition-colors"
                                >
                                    Módulos
                                    <ChevronDown className={`w-3 h-3 sm:w-5 sm:h-5 transition-transform duration-200 ${modulesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {modulesOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-brand-dark-grey border border-gray-700 shadow-xl shadow-black/50 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                        <div className="p-1">
                                            {/* Link móvil al panel docente */}
                                            {sessionType === 'admin' && (
                                                <Link
                                                    to="/admin"
                                                    onClick={() => setModulesOpen(false)}
                                                    className="flex sm:hidden items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                                                >
                                                    <Shield className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
                                                    <div>
                                                        <span className="text-white text-sm font-bold uppercase block">Panel Docente</span>
                                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider">Gestión</span>
                                                    </div>
                                                </Link>
                                            )}

                                            <Link
                                                to="/introduccion"
                                                onClick={() => setModulesOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                                            >
                                                <AlertTriangle className="w-5 h-5 text-brand-yellow group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <span className="text-white text-sm font-bold uppercase block">Introducción</span>
                                                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">Módulo 0</span>
                                                </div>
                                            </Link>

                                            <div className="h-px bg-gray-700/50 mx-3"></div>

                                            <Link
                                                to="/modules"
                                                onClick={() => setModulesOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                                            >
                                                <BookOpen className="w-5 h-5 text-brand-yellow group-hover:scale-110 transition-transform" />
                                                <div>
                                                    <span className="text-white text-sm font-bold uppercase block">Señales de Tránsito</span>
                                                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">Módulo 1</span>
                                                </div>
                                            </Link>

                                            <div className="h-px bg-gray-700/50 mx-3"></div>

                                            {(prioridadesUnlocked || sessionType === 'admin') ? (
                                                <Link
                                                    to="/prioridades"
                                                    onClick={() => setModulesOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                                                >
                                                    <AlertTriangle className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
                                                    <div>
                                                        <span className="text-white text-sm font-bold uppercase block">Prioridades de Paso</span>
                                                        <span className="text-gray-500 text-[10px] uppercase tracking-wider">Módulo 2</span>
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className="flex items-center gap-3 px-4 py-3 opacity-40 cursor-not-allowed">
                                                    <Lock className="w-5 h-5 text-gray-600" />
                                                    <div>
                                                        <span className="text-gray-500 text-sm font-bold uppercase block">Prioridades de Paso</span>
                                                        <span className="text-gray-600 text-[10px] uppercase tracking-wider">Completá Señales para desbloquear</span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="h-px bg-gray-700 mx-1 my-1"></div>
                                            <button
                                                onClick={() => {
                                                    setModulesOpen(false);
                                                    signOut();
                                                }}
                                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 text-brand-red transition-colors group"
                                            >
                                                <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                <span className="text-sm font-bold uppercase block">Cerrar Sesión</span>
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
