import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { prioridadRules, categoryLabels } from '../data/prioridadesContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const categories = ['general', 'rotondas', 'emergencias', 'peatones', 'senalizacion'] as const;
type Category = typeof categories[number];

export function PrioridadesModule() {
    const [filter, setFilter] = useState<'all' | Category>('all');

    const categoryColors: Record<Category, { border: string; text: string; bg: string }> = {
        general: { border: 'border-brand-red', text: 'text-brand-red', bg: 'bg-red-500/5' },
        rotondas: { border: 'border-blue-500', text: 'text-blue-500', bg: 'bg-blue-500/5' },
        emergencias: { border: 'border-orange-500', text: 'text-orange-500', bg: 'bg-orange-500/5' },
        peatones: { border: 'border-green-500', text: 'text-green-500', bg: 'bg-green-500/5' },
        senalizacion: { border: 'border-brand-yellow', text: 'text-brand-yellow', bg: 'bg-yellow-500/5' },
    };

    const renderCategoryHeader = (cat: Category) => {
        const colors = categoryColors[cat];
        const descriptions: Record<Category, string> = {
            general: 'Las reglas fundamentales que determinan quién pasa primero en cada situación de tránsito. Su incumplimiento es la causa del 70% de los choques urbanos.',
            rotondas: 'Las rotondas son dispositivos viales diseñados para ordenar el flujo vehicular en intersecciones. Comprender su funcionamiento es vital.',
            emergencias: 'Los vehículos de emergencia en servicio tienen prioridad legal absoluta. Ceder el paso puede significar salvar una vida.',
            peatones: 'El peatón es el usuario más vulnerable de la vía pública. La ley le otorga protección especial en todas las circunstancias.',
            senalizacion: 'Las señales y dispositivos de control prevalecen sobre las reglas generales. Son la máxima autoridad en la vía.',
        };
        return (
            <div className={cn("mb-6 md:mb-8 p-4 border-l-4", colors.border, colors.bg)}>
                <h2 className={cn("text-xs md:text-sm font-bold uppercase tracking-widest mb-2", colors.text)}>
                    {categoryLabels[cat]}
                </h2>
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
                        Prioridades de <span className="text-brand-red">Paso</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Las prioridades de paso determinan el orden de circulación en intersecciones, rotondas y situaciones especiales. Su conocimiento es obligatorio para todo conductor y peatón.
                    </p>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mt-2">
                        Cada regla tiene un fundamento legal en la Ley Nacional de Tránsito 24.449. El desconocimiento de la ley no exime de su cumplimiento.
                    </p>
                </div>
                <Link to="/quiz-prioridades">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base">
                        <Play className="mr-2 fill-current w-4 h-4 md:w-5 md:h-5" /> HACER TEST
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
                            {cat === 'all' ? 'Todas' : categoryLabels[cat]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Sections by Category */}
            <div className="space-y-12 md:space-y-16">
                {categories.map((cat) => {
                    if (filter !== 'all' && filter !== cat) return null;

                    const rules = prioridadRules.filter(r => r.category === cat);
                    if (rules.length === 0) return null;
                    const colors = categoryColors[cat];

                    return (
                        <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {renderCategoryHeader(cat)}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                                {rules.map((rule) => (
                                    <Card key={rule.id} hoverEffect className="group cursor-default p-4 md:p-6 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl md:text-4xl">{rule.icon}</span>
                                            <span className={cn(
                                                "text-[10px] md:text-xs font-bold uppercase tracking-widest",
                                                colors.text
                                            )}>
                                                {categoryLabels[rule.category]}
                                            </span>
                                        </div>


                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-brand-heading font-bold italic uppercase text-white mb-3 leading-tight">
                                            {rule.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                                            {rule.description}
                                        </p>

                                        {/* Legal basis */}
                                        <div className="pt-3 border-t border-white/5">
                                            <p className="text-[10px] md:text-xs text-gray-600 font-mono uppercase">
                                                📜 {rule.legalBasis}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
