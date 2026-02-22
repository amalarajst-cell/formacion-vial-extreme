import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { emergentologiaSteps, categoryLabels } from '../data/emergentologiaContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Play, Siren, Heart, Activity } from 'lucide-react';

const categories = ['pas', 'trauma', 'rcp'] as const;
type Category = typeof categories[number];

export function EmergentologiaModule() {
    const [filter, setFilter] = useState<'all' | Category>('all');

    const categoryColors: Record<Category, { border: string; text: string; bg: string; icon: any }> = {
        pas: { border: 'border-brand-red', text: 'text-brand-red', bg: 'bg-red-500/5', icon: Siren },
        trauma: { border: 'border-orange-500', text: 'text-orange-500', bg: 'bg-orange-500/5', icon: Activity },
        rcp: { border: 'border-brand-yellow', text: 'text-brand-yellow', bg: 'bg-yellow-500/5', icon: Heart },
    };

    const renderCategoryHeader = (cat: Category) => {
        const colors = categoryColors[cat];
        const descriptions: Record<Category, string> = {
            pas: 'El protocolo universal de respuesta ante emergencias. Proteger la escena, Avisar a los profesionales y Socorrer con maniobras básicas.',
            trauma: 'Guías de acción rápida para lesiones comunes en siniestros viales. La clave es el control sin realizar acciones invasivas.',
            rcp: 'Maniobras de Soporte Vital Básico. En Buenos Aires disponemos de una red de DEAs para aumentar las probabilidades de supervivencia.',
        };
        const Icon = colors.icon;
        return (
            <div className={cn("mb-6 md:mb-8 p-4 border-l-4", colors.border, colors.bg)}>
                <div className="flex items-center gap-2 mb-2">
                    <Icon className={cn("w-4 h-4", colors.text)} />
                    <h2 className={cn("text-xs md:text-sm font-bold uppercase tracking-widest", colors.text)}>
                        {categoryLabels[cat]}
                    </h2>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {descriptions[cat]}
                </p>
            </div>
        );
    };

    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter mb-2">
                        Respuesta Inicial en <span className="text-brand-red">Siniestros</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Protocolos de Defensa Civil 2026 para primeros respondientes en la vía pública. Actuar con calma y conocimiento salva vidas.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-orange-500 font-bold uppercase tracking-tighter text-xs border border-orange-500/30 px-3 py-1 bg-orange-500/5 w-fit">
                        ⚠️ ATENCIÓN: Solo maniobras NO INVASIVAS
                    </div>
                </div>
                <Link to="/quiz-emergentologia">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base">
                        <Play className="mr-2 fill-current w-4 h-4 md:w-5 md:h-5" /> SIMULACIÓN
                    </Button>
                </Link>
            </div>

            {/* Filters */}
            <div className="mb-6 md:mb-12 border-b border-gray-800 pb-4 overflow-x-auto -mx-3 px-3">
                <div className="flex gap-2 min-w-max">
                    {(['all', ...categories] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-3 py-2 text-[10px] md:px-4 md:py-2.5 md:text-sm font-brand-heading font-bold uppercase italic tracking-wider border transition-all whitespace-nowrap",
                                filter === cat
                                    ? "bg-brand-red text-white border-brand-red shadow-lg"
                                    : "bg-brand-dark-grey text-gray-400 border-gray-700 hover:border-gray-500"
                            )}
                        >
                            {cat === 'all' ? 'Ver Todo' : categoryLabels[cat]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Sections by Category */}
            <div className="space-y-12 md:space-y-16">
                {categories.map((cat) => {
                    if (filter !== 'all' && filter !== cat) return null;

                    const steps = emergentologiaSteps.filter(s => s.category === cat);
                    if (steps.length === 0) return null;
                    const colors = categoryColors[cat];

                    return (
                        <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {renderCategoryHeader(cat)}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                                {steps.map((step) => (
                                    <Card key={step.id} hoverEffect className="group cursor-default p-4 md:p-6 flex flex-col h-full bg-brand-dark-grey/50 border-gray-800">
                                        {/* Icon & Title Group */}
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-4xl md:text-5xl">{step.icon}</span>
                                            <div className={cn(
                                                "px-2 py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-widest border",
                                                colors.text,
                                                colors.border
                                            )}>
                                                {step.id.toUpperCase()}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-brand-heading font-bold italic uppercase text-white mb-2 leading-tight">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                            {step.description}
                                        </p>

                                        {/* Action Box */}
                                        <div className={cn("p-3 md:p-4 rounded-sm border-l-2", colors.bg, colors.border)}>
                                            <p className="text-[11px] md:text-xs text-white font-medium leading-relaxed italic">
                                                “{step.action}”
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Buenos Aires Cardioprotegida Footer Tip */}
            <div className="mt-12 md:mt-16 p-6 border-2 border-dashed border-brand-yellow/30 bg-brand-yellow/5 text-center rounded-lg max-w-3xl mx-auto">
                <Heart className="w-8 h-8 text-brand-yellow mx-auto mb-3 animate-pulse" />
                <h3 className="text-brand-yellow font-brand-heading font-bold italic uppercase text-xl mb-2">Buenos Aires Cardioprotegida</h3>
                <p className="text-gray-400 text-sm">
                    Recordá que los edificios públicos, estaciones de subte y grandes comercios de la Ciudad cuentan con <strong>DEA (Desfibrilador Externo Automático)</strong>. En caso de paro cardiorrespiratorio, pedí ayuda y buscá el equipo más cercano.
                </p>
            </div>
        </div>
    );
}
