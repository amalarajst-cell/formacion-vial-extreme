import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { riesgosViales } from '../data/auditoriaContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Binoculars, Eye, Map, ClipboardCheck, ArrowRight } from 'lucide-react';

export function AuditoriaVialModule() {
    const [selectedRiesgo, setSelectedRiesgo] = useState<string | null>(null);

    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter mb-2">
                        Auditoría <span className="text-green-500">en Campo</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Entrená tu ojo crítico para detectar riesgos invisibles en la vía pública. Antes de bajar a la calle con tu bitácora, aprendé qué observar.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-green-500 font-bold uppercase tracking-tighter text-xs border border-green-500/30 px-3 py-1 bg-green-500/5 w-fit">
                        🔍 Investigador de Seguridad Vial
                    </div>
                </div>
                <Link to="/adventure">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base bg-green-600 hover:bg-green-500 border-green-400">
                        <Binoculars className="mr-2 w-5 h-5" /> IR A LA BITÁCORA
                    </Button>
                </Link>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {riesgosViales.map((riesgo) => (
                    <Card
                        key={riesgo.id}
                        hoverEffect
                        className={cn(
                            "p-6 flex flex-col h-full bg-brand-dark-grey/50 transition-all border-gray-800",
                            selectedRiesgo === riesgo.id ? "border-green-500 ring-1 ring-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]" : ""
                        )}
                        onClick={() => setSelectedRiesgo(selectedRiesgo === riesgo.id ? null : riesgo.id)}
                    >
                        {/* Icon & Category */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-4xl">{riesgo.icon}</span>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border",
                                riesgo.category === 'infraestructura' ? "text-blue-500 border-blue-500/30" :
                                    riesgo.category === 'conducta' ? "text-brand-yellow border-brand-yellow/30" :
                                        "text-orange-500 border-orange-500/30"
                            )}>
                                {riesgo.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-brand-heading font-bold italic uppercase text-white mb-2 leading-tight">
                            {riesgo.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                            {riesgo.description}
                        </p>

                        {/* Detailed "What to observe" section (expanded on click) */}
                        <div className={cn(
                            "mt-2 overflow-hidden transition-all duration-300",
                            selectedRiesgo === riesgo.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        )}>
                            <div className="pt-4 border-t border-white/5">
                                <h4 className="text-green-500 font-bold uppercase text-[10px] mb-2 flex items-center gap-1">
                                    <Eye className="w-3 h-3" /> LISTA DE CHEQUEO:
                                </h4>
                                <p className="text-white text-[11px] md:text-xs italic bg-green-500/5 p-3 rounded-sm border-l-2 border-green-500">
                                    “{riesgo.queObservar}”
                                </p>
                            </div>
                        </div>

                        {/* Hint to expand */}
                        {selectedRiesgo !== riesgo.id && (
                            <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-2 flex items-center gap-1">
                                <ArrowRight className="w-3 h-3" /> Tocar para ver más
                            </div>
                        )}
                    </Card>
                ))}
            </div>

            {/* Bottom Methodology Tip */}
            <div className="mt-12 md:mt-24 max-w-4xl mx-auto">
                <div className="bg-brand-navy border border-gray-800 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-green-500/10 p-4 rounded-full border border-green-500/20">
                        <ClipboardCheck className="w-10 h-10 text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-white font-brand-heading font-bold italic uppercase text-2xl mb-2">
                            Metodología de <span className="text-green-500 text-3xl">Auditoría</span>
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Durante la actividad en la calle (Día 4), no juzgues a los conductores. Tu objetivo es <strong>registrar datos objetivos</strong>: ¿Cuántos cruzan por la senda? ¿Cuántos usan el celular? ¿Cuántas esquinas tienen la senda borrada? Estos datos generan las estadísticas que luegos usamos para mejorar la Ciudad.
                        </p>
                    </div>
                </div>
            </div>

            {/* Final CTA link to Adventure page for the real log */}
            <div className="mt-12 text-center">
                <Link to="/adventure" state={{ openFieldLog: true }}>
                    <Button size="lg" className="bg-brand-yellow text-brand-navy hover:bg-white text-lg py-6 px-10 shadow-hard">
                        ACTIVAR BITÁCORA DE CAMPO <Map className="ml-2 w-6 h-6" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
