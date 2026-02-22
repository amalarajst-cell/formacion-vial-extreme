import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { signs } from '../data/signs';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Play, Download } from 'lucide-react';

export function SenalesModule() {
    const [filter, setFilter] = useState<'all' | 'reglamentarias' | 'preventivas' | 'informativas' | 'transitorias' | 'horizontales'>('all');

    const categoryLabels = {
        all: 'Todas',
        reglamentarias: 'Reglamentarias',
        preventivas: 'Preventivas',
        informativas: 'Informativas',
        transitorias: 'Transitorias',
        horizontales: 'Horizontales'
    };

    const categories = ['reglamentarias', 'preventivas', 'informativas', 'transitorias', 'horizontales'] as const;

    const renderCategoryHeader = (cat: typeof categories[number]) => {
        switch (cat) {
            case 'reglamentarias':
                return (
                    <div className="mb-6 md:mb-8 p-4 border-l-4 border-red-500 bg-red-500/5">
                        <h2 className="text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Reglamentarias</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            Indican limitaciones, prohibiciones o restricciones especiales que rigen la circulación. Son normas legales de cumplimiento obligatorio; su violación constituye una infracción.
                        </p>
                    </div>
                );
            case 'preventivas':
                return (
                    <div className="mb-6 md:mb-8 p-4 border-l-4 border-brand-yellow bg-yellow-500/5">
                        <h2 className="text-brand-yellow text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Preventivas</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            Tienen por objeto advertir al usuario la existencia de un peligro real o potencial. Requieren que el conductor adopte precauciones, generalmente reduciendo la velocidad.
                        </p>
                    </div>
                );
            case 'informativas':
                return (
                    <div className="mb-6 md:mb-8 p-4 border-l-4 border-blue-500 bg-blue-500/5">
                        <h2 className="text-blue-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Informativas</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            Tienen la función de guiar y orientar al usuario, proporcionándole datos para llegar a su destino o identificar servicios de la manera más directa.
                        </p>
                    </div>
                );
            case 'transitorias':
                return (
                    <div className="mb-6 md:mb-8 p-4 border-l-4 border-orange-500 bg-orange-500/5">
                        <h2 className="text-orange-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Transitorias</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            Indican cambios temporales en la circulación por obras o eventos. Tienen prioridad jurídica sobre la señalización fija existente mientras dure la situación.
                        </p>
                    </div>
                );
            case 'horizontales':
                return (
                    <div className="mb-6 md:mb-8 p-4 border-l-4 border-gray-400 bg-gray-500/5">
                        <h2 className="text-gray-300 text-xs md:text-sm font-bold uppercase tracking-widest mb-2">Horizontales</h2>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            Son marcas aplicadas mediante pintura vial sobre la calzada. Tienen la misma validez que una señal vertical y delimitan áreas de prioridad y prohibiciones.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter mb-2">
                        Señales de Tránsito
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Las señales de tránsito son normas legales de carácter jurídico expresadas a través de su color, tamaño y posición. Nos indican lo que se debe hacer o lo que está prohibido hacer en un punto determinado del espacio vial.
                    </p>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed mt-2">
                        Su cumplimiento es un deber jurídico; el color nos anticipa la naturaleza del mensaje, el tamaño garantiza su visibilidad y su posición define el área de influencia legal de la norma, ya sea sobre un poste o marcada sobre la calzada.
                    </p>
                </div>
                <Link to="/quiz">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base">
                        <Play className="mr-2 fill-current w-4 h-4 md:w-5 md:h-5" /> HACER TEST
                    </Button>
                </Link>
            </div>

            {/* Filters - Mobile optimized with horizontal scroll */}
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
                            {categoryLabels[cat]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Signs Sections by Category */}
            <div className="space-y-12 md:space-y-16">
                {categories.map((cat) => {
                    // Si hay un filtro y no es esta categoría, saltar
                    if (filter !== 'all' && filter !== cat) return null;

                    const catSigns = signs.filter(s => s.category === cat);
                    if (catSigns.length === 0) return null;

                    return (
                        <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {renderCategoryHeader(cat)}

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                                {catSigns.map((sign) => (
                                    <Card key={sign.id} hoverEffect className="group cursor-pointer p-3 md:p-6 flex flex-col h-full">
                                        {/* Image container */}
                                        <div className="aspect-square bg-gray-200/5 flex items-center justify-center mb-2 md:mb-4 p-4 md:p-8 rounded-lg">
                                            <img
                                                src={sign.image}
                                                alt={sign.name}
                                                className="w-full h-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow">
                                            <span className={cn(
                                                "text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 block",
                                                {
                                                    'text-red-500': sign.category === 'reglamentarias',
                                                    'text-brand-yellow': sign.category === 'preventivas',
                                                    'text-blue-500': sign.category === 'informativas',
                                                    'text-orange-500': sign.category === 'transitorias',
                                                    'text-gray-400': sign.category === 'horizontales',
                                                }
                                            )}>
                                                {categoryLabels[sign.category]}
                                            </span>
                                            <h3 className="text-base md:text-xl font-brand-heading font-bold italic uppercase text-white mb-2 leading-tight">
                                                {sign.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs md:text-sm mt-auto line-clamp-3">
                                                {sign.description}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Vademecum Access Button */}
            <div className="mt-16 mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('https://drive.google.com/uc?export=download&id=16W0tOL4p6U4QWOhvJ75RMdwNVRgvVp1r', '_blank')}
                    className="border-2 border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy shadow-hard group flex items-center gap-3 px-8 py-6 text-base md:text-xl font-brand-heading italic uppercase tracking-tighter"
                >
                    <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    DESCARGAR SEÑALÈTICA COMPLETA
                </Button>
            </div>
        </div>

    );
}
