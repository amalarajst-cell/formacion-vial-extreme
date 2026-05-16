import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';

export function Landing() {
    const { studentProfile } = useAuthContext();

    return (
        <div className="min-h-screen bg-brand-navy">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image with precise filters */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.35] contrast-125 opacity-70"></div>

                <div className="relative z-20 container-extreme w-full pt-28 pb-10 md:pt-32 md:pb-16">
                    <div className="max-w-7xl">
                        <span className="text-brand-yellow font-brand-heading font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-6 block">
                            2º año consecutivo junto a
                        </span>
                        
                        <div className="mb-5">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-[0.9] tracking-tighter max-w-3xl font-brand-heading uppercase italic">
                                Vinculación<br />con el futuro
                            </h1>
                        </div>
                        <span className="text-brand-yellow font-brand-heading font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm mb-8 block">
                            POLÍTICA PÚBLICA DEL MINISTERIO DE EDUCACIÓN
                        </span>

                        <p className="text-sm md:text-base text-white mb-6 max-w-xl font-medium tracking-tight opacity-80 leading-relaxed">
                            Transformando la movilidad urbana con conciencia y acción.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/adventure">
                                <Button
                                    variant="primary"
                                    className="bg-brand-yellow text-black border-none hover:bg-yellow-400 transition-all px-8 py-3 text-base md:text-lg font-brand-heading font-extrabold italic uppercase tracking-wider flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    COMIENZA TU AVENTURA <span className="text-xl font-bold">→</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            {studentProfile && (
            <section className="py-24 bg-brand-navy relative">
                <div className="container-extreme">
                    <h2 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-16 text-center">
                        <span className="text-brand-red">Cronograma</span> Semanal y Eventos
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { day: 'Día 1', title: 'Introducción', desc: 'Conceptos fundamentales de seguridad vial.', color: 'border-brand-yellow' },
                            { day: 'Día 2', title: 'Señales', desc: 'Identificación y respeto por la señalización.', color: 'border-brand-red' },
                            { day: 'Día 3', title: 'Prioridades', desc: 'Reglas de paso y convivencia en la vía pública.', color: 'border-white' },
                            { day: 'Día 4', title: 'Bitácora', desc: 'Registro de experiencias y evaluación final.', color: 'border-brand-yellow' }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-black/40 p-8 border-t-4 ${item.color} hover:transform hover:-translate-y-2 transition-all duration-300 group`}>
                                <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2 block">{item.day}</span>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-yellow transition-colors">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            )}
        </div>
    );
}
