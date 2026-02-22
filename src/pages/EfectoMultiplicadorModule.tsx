import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Trophy, Star, Users, Share2, Award, Zap, Heart, Shield } from 'lucide-react';

export function EfectoMultiplicadorModule() {
    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Hero Section */}
            <div className="text-center mb-16 md:mb-24">
                <div className="inline-block p-4 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6 animate-bounce-slow">
                    <Trophy className="w-16 h-16 text-brand-yellow" />
                </div>
                <h1 className="text-4xl md:text-7xl font-brand-heading font-bold italic uppercase tracking-tighter mb-4 leading-none">
                    El Efecto <span className="text-purple-500">Multiplicador</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                    "No sos solo un conductor o peatón, sos un Agente de Cambio. Tu conocimiento salva vidas cuando lo compartís."
                </p>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {[
                    { day: 1, title: 'CONSCIENCIA LEGAL', icon: <Shield />, color: 'bg-brand-red' },
                    { day: 2, title: 'HÉROE INICIAL (PAS)', icon: <Heart />, color: 'bg-brand-yellow text-brand-navy' },
                    { day: 3, title: 'INSPECTOR TÉCNICO', icon: <Zap />, color: 'bg-blue-500' },
                    { day: 4, title: 'AUDITOR URBANO', icon: <Users />, color: 'bg-green-500' },
                ].map((item) => (
                    <Card key={item.day} className="p-6 border-white/5 bg-brand-dark-grey/50 group hover:border-purple-500/30 transition-all">
                        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.color)}>
                            {item.icon}
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">DÍA {item.day} COMPLETADO</span>
                        <h3 className="text-white font-brand-heading font-bold italic uppercase group-hover:text-purple-400 transition-colors">
                            {item.title}
                        </h3>
                    </Card>
                ))}
            </div>

            {/* Core Message */}
            <div className="max-w-4xl mx-auto mb-20">
                <Card className="p-8 md:p-12 border-purple-500/30 bg-purple-500/5 relative overflow-hidden">
                    <Star className="absolute -right-8 -bottom-8 w-48 h-48 text-purple-500/10 rotate-12" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-brand-yellow p-0.5 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                                <div className="w-full h-full bg-brand-navy rounded-full flex items-center justify-center">
                                    <Share2 className="w-10 h-10 text-brand-yellow" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-brand-heading font-bold italic uppercase text-white mb-4">Tu Misión: <span className="text-brand-yellow">Multiplicar</span></h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Las estadísticas de la Ciudad mejoran cuando la educación sale de las aulas. Te desafiamos a contarle a <strong>tres personas</strong> algo nuevo que aprendiste esta semana. Un consejo sobre el casco, el 107 o los neumáticos puede cambiar un destino.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">#SeguridadVialExtreme</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">#AgentesDeCambio</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400">#GCBA2026</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Final CTA */}
            <div className="text-center animate-bounce-slow">
                <Link to="/results">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white px-12 py-8 text-2xl shadow-[0_0_50px_rgba(168,85,247,0.4)] border-purple-400 font-brand-heading italic uppercase tracking-tighter">
                        <Award className="mr-3 w-8 h-8" /> RECLAMAR MI DIPLOMA
                    </Button>
                </Link>
                <p className="mt-6 text-gray-500 text-sm font-bold uppercase tracking-widest">
                    Certificación Oficial - Ciudad de Buenos Aires
                </p>
            </div>
        </div>
    );
}

// Utility to handle conditional classes (mimicking existing project structure)
function cn(...classes: (string | undefined | null | boolean)[]) {
    return classes.filter(Boolean).join(' ');
}
