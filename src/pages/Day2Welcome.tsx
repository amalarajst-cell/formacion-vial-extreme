import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Heart, Play, Zap } from 'lucide-react';

export function Day2Welcome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
            <Card className="p-8 border-brand-red/30 bg-brand-navy shadow-hard">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Heart className="w-12 h-12 text-brand-red" />
                        <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter text-white">
                            Defensa Civil <span className="text-brand-red">Día 2</span>
                        </h1>
                    </div>
                    <h2 className="text-xl md:text-3xl font-brand-heading font-bold italic uppercase tracking-tighter text-gray-400 pl-16">
                        Socorrismo y Emergencias
                    </h2>
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
                    <p>
                        En esta segunda jornada nos vamos a encontrar en Defensa Civil para aprender técnicas de asistencia inicial, primeros auxilios y maniobras de RCP.<br /><br />
                        Este programa de capacitación, diseñado por Defensa Civil de Buenos Aires, busca instruir a la ciudadanía en la toma de decisiones críticas ante emergencias médicas cotidianas. A través de una modalidad presencial breve, los participantes aprenden a identificar riesgos de vida y a activar los sistemas de respuesta de manera eficiente. El curso se centra exclusivamente en maniobras no invasivas, proporcionando herramientas prácticas para tratar desde heridas y quemaduras hasta convulsiones sin necesidad de conocimientos médicos previos. En última instancia, el objetivo es que la comunidad actúe como el primer eslabón de auxilio, aplicando cuidados básicos que pueden estabilizar a una persona antes de que llegue la ayuda profesional.<br /><br />
                        Aquí abajo podrás acceder a la ubicación del encuentro, Estados Unidos 3275 CABA.
                    </p>

                    <div className="mt-6 flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-[#0a192f]">
                        <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-5 h-5 text-brand-red" />
                        </div>
                        <div>
                            <h4 className="text-white font-brand-heading font-bold italic uppercase tracking-widest text-[17px] mb-1">
                                Defensa Civil CABA
                            </h4>
                            <a
                                href="https://www.google.com/maps/search/Estados+Unidos+3275,+CABA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-red text-sm hover:underline"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="border-l-4 border-brand-red/50 pl-4 py-3 bg-brand-red/5 mt-8 border-brand-red">
                        <p className="font-bold text-brand-red uppercase text-sm tracking-widest mb-1">
                            ¡Comienza tu entrenamiento!
                        </p>
                        <p className="text-sm text-gray-400">
                            Estás dando otro paso para convertirte en un Multiplicador Vial.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                    <Link to="/" className="flex-1">
                        <Button variant="outline" className="w-full text-lg py-4 border-white/10 hover:border-white">
                            ← VOLVER
                        </Button>
                    </Link>
                    <Link to="/emergentologia" className="flex-[2]">
                        <Button className="w-full text-lg py-4 bg-brand-red text-white hover:bg-red-600 shadow-hard">
                            CONTINUAR A EMERGENCIAS <Play className="ml-2 w-5 h-5 fill-current" />
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
