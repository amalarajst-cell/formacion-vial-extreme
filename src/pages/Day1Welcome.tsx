import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Zap, Play } from 'lucide-react';

export function Day1Welcome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
            <Card className="p-8 border-brand-yellow/30 bg-brand-navy shadow-hard">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Zap className="w-12 h-12 text-brand-yellow" />
                        <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter text-white">
                            Bienvenidos al <span className="text-brand-yellow">Día 1</span>
                        </h1>
                    </div>
                    <h2 className="text-xl md:text-3xl font-brand-heading font-bold italic uppercase tracking-tighter text-gray-400 pl-16">
                        Seguridad Vial, El Estado y la Licencia
                    </h2>
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
                    <p>
                        En esta primera jornada nos enfocaremos en entender el proceso administrativo y educativo para el otorgamiento de las licencias de conducir en CABA.<br />
                        Aquí abajo podrás acceder a la ubicación del encuentro, Avenida Coronel Roca 5252 CABA.
                    </p>

                    <div className="mt-6 flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-[#0a192f]">
                        <div className="w-10 h-10 rounded-full bg-[#3d4a2d] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-5 h-5 text-brand-yellow" />
                        </div>
                        <div>
                            <h4 className="text-white font-brand-heading font-bold italic uppercase tracking-widest text-[17px] mb-1">
                                Sede Central Licencias de Conducir CABA
                            </h4>
                            <a
                                href="https://maps.app.goo.gl/34QvmfmhUYcMEGhG9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-yellow text-sm hover:underline"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>

                    <div className="border-l-4 border-brand-yellow/50 pl-4 py-3 bg-brand-yellow/5 mt-8 border-brand-yellow">
                        <p className="font-bold text-brand-yellow uppercase text-sm tracking-widest mb-1">
                            ¡Comienza tu entrenamiento!
                        </p>
                        <p className="text-sm text-gray-400">
                            Estás dando el primer paso para convertirte en un Multiplicador Vial.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                    <Link to="/" className="flex-1">
                        <Button variant="outline" className="w-full text-lg py-4 border-white/10 hover:border-white">
                            ← VOLVER
                        </Button>
                    </Link>
                    <Link to="/prioridades" className="flex-[2]">
                        <Button className="w-full text-lg py-4 bg-brand-yellow text-brand-navy hover:bg-white shadow-hard">
                            CONTINUAR A PRIORIDADES <Play className="ml-2 w-5 h-5 fill-current" />
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
