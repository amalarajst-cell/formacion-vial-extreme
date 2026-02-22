import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SyncStatusIndicator } from '../SyncStatusIndicator';
import { useSurveyStore } from '../../hooks/useSurveyStore';
import { ChevronDown, Lock, BookOpen, AlertTriangle } from 'lucide-react';

export function Navbar() {
    const [modulesOpen, setModulesOpen] = useState(false);
    const { prioridadesUnlocked } = useSurveyStore();
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <span className="font-brand-heading font-bold italic text-xs sm:text-lg md:text-2xl text-white tracking-tighter uppercase">
                                MULTIPLICADORES <span className="text-brand-red">VIALES</span>
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Indicador de Sincronización */}
                        <SyncStatusIndicator />

                        <div className="flex items-center space-x-1 sm:space-x-4">
                            {/* Dropdown de Módulos */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setModulesOpen(!modulesOpen)}
                                    className="flex items-center gap-1.5 bg-brand-yellow text-brand-navy px-4 py-2 text-xs sm:text-base font-brand-heading font-bold uppercase italic tracking-wider whitespace-nowrap hover:bg-yellow-400 transition-colors"
                                >
                                    Módulos
                                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${modulesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {modulesOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-64 bg-brand-dark-grey border border-gray-700 shadow-xl shadow-black/50 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                        <div className="p-1">
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

                                            {prioridadesUnlocked ? (
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
