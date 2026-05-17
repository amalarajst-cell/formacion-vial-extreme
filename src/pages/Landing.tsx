import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import { useSurveyStore } from '../hooks/useSurveyStore';

export function Landing() {
    const { studentProfile } = useAuthContext();
    const { state } = useSurveyStore();

    // Calcular progreso dinámico real del alumno
    const hasProfile = !!studentProfile;
    
    let approvedCount = 0;
    let activeModule = 'SIN INICIAR';
    let progressPercentage = 0;

    if (hasProfile) {
        if (state.signalsScore !== null) approvedCount++;
        if (state.quizScore !== null) approvedCount++;
        if (state.emergentologiaScore !== null) approvedCount++;
        if (state.prioridadesScore !== null) approvedCount++;

        // Determinar módulo activo
        if (!state.profile) {
            activeModule = 'REGISTRO';
        } else if (state.signalsScore === null) {
            activeModule = 'SEÑALES';
        } else if (state.quizScore === null) {
            activeModule = 'RCP Y SOCORRISMO';
        } else if (state.emergentologiaScore === null) {
            activeModule = 'DEFENSA CIVIL';
        } else if (state.prioridadesScore === null) {
            activeModule = 'PRIORIDADES';
        } else {
            activeModule = 'COMPLETADO';
        }

        // Calcular porcentaje:
        // - Perfil de encuesta completado = 20%
        // - Cada test completado = +20% (4 tests = 80%)
        // Total = 100%
        progressPercentage = (state.profile ? 20 : 0) + (approvedCount * 20);
    }

    return (
        <div className="flex-grow flex flex-col bg-brand-navy grid-bg-overlay relative overflow-hidden">
            {/* Ambient glows in the background */}
            <div className="absolute top-0 right-0 w-96 h-96 ambient-glow-yellow pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 ambient-glow-red pointer-events-none z-0" />

            {/* Hero Section */}
            <section className="relative overflow-hidden flex-grow flex flex-col justify-center py-4 md:py-12 z-10">
                {/* Background Image with precise filters */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.3] contrast-125 opacity-60 z-0"></div>

                <div className="relative z-10 container-extreme w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left Column (Content & CTA) */}
                        <div className="lg:col-span-7 flex flex-col">
                            <span className="text-brand-yellow font-brand-heading font-bold uppercase tracking-[0.2em] text-[9px] md:text-sm mb-2 block">
                                2º año consecutivo junto a
                            </span>

                            <div className="mb-2">
                                <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-[0.95] tracking-tighter font-brand-heading uppercase italic text-gradient-amber">
                                    Vinculación<br />con el futuro
                                </h1>
                            </div>
                            <span className="text-brand-yellow font-brand-heading font-bold uppercase tracking-[0.2em] text-[9px] md:text-sm mb-3 block">
                                POLÍTICA PÚBLICA DEL MINISTERIO DE EDUCACIÓN
                            </span>

                            <p className="text-xs md:text-base text-gray-300 mb-4 max-w-xl font-medium tracking-tight leading-relaxed">
                                Transformando la movilidad urbana con conciencia y acción. Desarrollá tus habilidades viales mediante simulación interactiva, bitácoras integradas y contenido gamificado.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link to="/adventure">
                                    <Button
                                        variant="primary"
                                        className="btn-extreme bg-brand-yellow text-black border-none hover:bg-yellow-400 transition-all px-6 py-3 text-sm md:text-lg font-brand-heading font-extrabold italic uppercase tracking-wider flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
                                    >
                                        COMIENZA TU AVENTURA <span className="text-base font-bold">→</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column (Premium Dashboard Preview - HIDDEN ON MOBILE to keep it ultra compact) */}
                        <div className="hidden lg:flex lg:col-span-5 justify-end">
                            <div className="glass-panel p-6 w-full max-w-md border border-brand-yellow/10 rounded-none shadow-2xl relative overflow-hidden group">
                                {/* Glowing corner decorations */}
                                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-red" />
                                
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 bg-brand-yellow animate-ping" />
                                        <span className="font-brand-heading font-bold text-xs uppercase tracking-widest text-gray-400">
                                            SALA DE ENTRENAMIENTO
                                        </span>
                                    </div>
                                    <span className="text-[10px] bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 px-2 py-0.5 font-bold uppercase tracking-wider">
                                        ONLINE v2.0
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    {/* Real Student Progress */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-brand-heading text-white tracking-wider">PROGRESO DEL CURSO</span>
                                            <span className="text-sm font-bold text-brand-yellow font-mono">{progressPercentage}%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-none overflow-hidden p-[1px] border border-white/10">
                                            <div className="bg-brand-yellow h-full progress-glow" style={{ width: `${progressPercentage}%` }} />
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-black/30 p-3 border border-white/5">
                                            <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">TESTS APROBADOS</span>
                                            <span className="text-xl font-bold font-mono text-white">{approvedCount} / 4</span>
                                        </div>
                                        <div className="bg-black/30 p-3 border border-white/5">
                                            <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">MÓDULO ACTIVO</span>
                                            <span className="text-sm font-brand-heading text-brand-yellow truncate uppercase font-bold">{activeModule}</span>
                                        </div>
                                    </div>

                                    {/* Decorative prompt */}
                                    <div className="bg-[#0a192f] border border-brand-yellow/10 p-3 text-[11px] font-mono text-gray-400 leading-relaxed italic">
                                        "El conductor consciente es aquel que multiplica conductas seguras en la vía pública."
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Grid */}
            {studentProfile && (
            <section className="py-16 md:py-24 bg-brand-navy relative z-10 border-t border-white/5">
                <div className="container-extreme">
                    <h2 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-12 md:mb-16 text-center">
                        <span className="text-brand-yellow text-gradient-amber">Cronograma</span> Semanal y Eventos
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { day: 'Día 1', title: 'Introducción', desc: 'Proceso administrativo y educativo para el otorgamiento de licencias en CABA.', color: 'border-brand-yellow' },
                            { day: 'Día 2', title: 'Defensa Civil', desc: 'Capacitación presencial en RCP y asistencia inicial ante emergencias médicas.', color: 'border-brand-red' },
                            { day: 'Día 3', title: 'Centro de Monitoreo', desc: 'Descubrí cómo se gestiona y controla el tránsito en tiempo real para mejorar la seguridad vial.', color: 'border-blue-500' },
                            { day: 'Día 4', title: 'Auditoría Vial', desc: 'Investigación en campo para registrar datos de infraestructura y conductas viales.', color: 'border-green-500' }
                        ].map((item, idx) => (
                            <div key={idx} className={`glass-panel p-6 md:p-8 border-t-4 ${item.color} group`}>
                                <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2 block">{item.day}</span>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            )}
        </div>

    );
}
