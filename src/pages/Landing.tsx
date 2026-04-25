import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowRight, Trophy, Zap, Shield, Heart, Monitor, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSurveyStore } from '../hooks/useSurveyStore';

export function Landing() {
    const { state } = useSurveyStore();

    return (
        <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center overflow-hidden">
                {/* Background Image Placeholder - Replace with actual lively street image */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 opacity-40"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-5xl md:text-8xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-6 leading-[0.8]">
                            Vinculación <br />
                            <span className="text-brand-red">con el futuro</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl font-light">
                            Transformando la movilidad urbana con conciencia y acción.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/adventure">
                                <Button
                                    size="lg"
                                    className="text-xl py-6 px-12"
                                >
                                    Comienza Tu Aventura <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            {state.profile && (
            <section className="py-24 bg-brand-navy relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-16 text-center">
                        <span className="text-brand-red">Cronograma</span> Semanal y Eventos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link to="/dia1">
                            <Card
                                hoverEffect
                                className="group transition-all duration-300 cursor-pointer border-brand-yellow/20 hover:border-brand-yellow/50 h-full"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <Zap className="w-12 h-12 text-brand-yellow" />
                                        <span className="text-xs font-bold text-white bg-brand-yellow/20 px-2 py-1 rounded border border-brand-yellow/30 uppercase tracking-widest">Día 1</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    Seguridad Vial, el Estado y la Licencia
                                </h3>
                                <p className="text-gray-400">
                                    Proceso administrativo y educativo para el otorgamiento de las licencias de conducir en CABA.
                                </p>
                            </Card>
                        </Link>

                        <Link to="/dia2">
                            <Card hoverEffect className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <Heart className="w-12 h-12 text-brand-yellow" />
                                    <span className="text-xs font-bold text-white bg-brand-yellow/20 px-2 py-1 rounded border border-brand-yellow/30 uppercase tracking-widest">Día 2</span>
                                </div>
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    Socorrismo y Emergencias
                                </h3>
                                <p className="text-gray-400">
                                    Junto a Defensa Civil aprenderemos técnicas de asistencia inicial, primeros auxilios y RCP.
                                </p>
                            </Card>
                        </Link>
                        <Link to="/vtv">
                            <Card hoverEffect className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <Monitor className="w-12 h-12 text-brand-yellow" />
                                    <span className="text-xs font-bold text-white bg-brand-yellow/20 px-2 py-1 rounded border border-brand-yellow/30 uppercase tracking-widest">Día 3</span>
                                </div>
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    Centro de Monitoreo
                                </h3>
                                <p className="text-gray-400">
                                    Conocé el Centro de Monitoreo de la Movilidad Urbana de CABA: descubrí cómo se gestiona y controla el tránsito de la ciudad en tiempo real.
                                </p>
                            </Card>
                        </Link>
                        <Link to="/auditoria">
                            <Card hoverEffect className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <Eye className="w-12 h-12 text-brand-yellow" />
                                    <span className="text-xs font-bold text-white bg-brand-yellow/20 px-2 py-1 rounded border border-brand-yellow/30 uppercase tracking-widest">Día 4</span>
                                </div>
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    Auditoría Vial
                                </h3>
                                <p className="text-gray-400">
                                    Investigación en territorio: auditaremos conductas reales en la calle e infraestructura urbana.
                                </p>
                            </Card>
                        </Link>
                        <Link to="/multiplicador">
                            <Card hoverEffect className="group">
                                <div className="flex items-center gap-4 mb-6">
                                    <Trophy className="w-12 h-12 text-brand-yellow" />
                                    <span className="text-xs font-bold text-white bg-brand-yellow/20 px-2 py-1 rounded border border-brand-yellow/30 uppercase tracking-widest">Día 5</span>
                                </div>
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    El Efecto Multiplicador
                                </h3>
                                <p className="text-gray-400">
                                    Cierre de la capacitación: cómo transformar lo aprendido en acciones que mejoren la seguridad de todos.
                                </p>
                            </Card>
                        </Link>
                        <Link to="/simulador">
                            <Card hoverEffect className="group">
                                <Shield className="w-12 h-12 text-brand-yellow mb-6" />
                                <h3 className="text-3xl font-brand-heading font-bold italic uppercase mb-4 group-hover:text-brand-yellow transition-colors">
                                    Simulador teórico para obtener la licencia de conducir
                                </h3>
                                <p className="text-gray-400">
                                    Ponete a prueba con 40 preguntas del manual oficial. Simulá el examen real y verificá si estás listo/a para obtener tu licencia.
                                </p>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>
            )}
        </div>
    );
}
