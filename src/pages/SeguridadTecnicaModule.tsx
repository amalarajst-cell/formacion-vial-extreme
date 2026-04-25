import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { vtvPoints } from '../data/vtvContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Monitor, ShieldCheck, Gauge, AlertTriangle, BadgeCheck } from 'lucide-react';

export function SeguridadTecnicaModule() {
    const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter mb-2">
                        Centro de <span className="text-blue-500">Monitoreo</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Conocé cómo se gestiona y controla el tránsito de la ciudad en tiempo real para mejorar la seguridad vial.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-blue-500 font-bold uppercase tracking-tighter text-xs border border-blue-500/30 px-3 py-1 bg-blue-500/5 w-fit">
                        🏢 Centro de Monitoreo - GCBA
                    </div>
                </div>
                <Link to="/vtv-simulador">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base bg-blue-600 hover:bg-blue-500 border-blue-400">
                        <BadgeCheck className="mr-2 w-5 h-5" /> SIMULAR OPERADOR
                    </Button>
                </Link>
            </div>

            {/* Desktop split view or mobile stack */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive Diagram / List */}
                <div className="lg:col-span-4 space-y-3">
                    <h3 className="text-white font-brand-heading font-bold italic uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-blue-500" /> Áreas de Monitoreo
                    </h3>
                    {vtvPoints.map((point) => (
                        <button
                            key={point.id}
                            onClick={() => setSelectedPoint(point.id)}
                            className={cn(
                                "w-full flex items-center gap-4 p-4 border-2 transition-all text-left group",
                                selectedPoint === point.id
                                    ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                    : "bg-brand-dark-grey border-gray-800 hover:border-gray-600"
                            )}
                        >
                            <span className="text-2xl">{point.icon}</span>
                            <div className="flex-grow">
                                <h4 className={cn(
                                    "font-brand-heading font-bold italic uppercase transition-colors text-sm md:text-base",
                                    selectedPoint === point.id ? "text-blue-500" : "text-gray-400 group-hover:text-white"
                                )}>
                                    {point.title}
                                </h4>
                            </div>
                            {point.faultLevel === 'grave' && (
                                <AlertTriangle className="w-4 h-4 text-brand-red opacity-50" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Right: Details / Interactive Content */}
                <div className="lg:col-span-8">
                    {selectedPoint ? (
                        <Card className="p-8 border-blue-500/30 bg-brand-dark-grey/50 animate-in slide-in-from-right-4 duration-500 h-full">
                            {vtvPoints.filter(p => p.id === selectedPoint).map(point => (
                                <div key={point.id}>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <span className="text-6xl">{point.icon}</span>
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-brand-heading font-bold italic uppercase text-white leading-none">
                                                    {point.title}
                                                </h2>
                                                <div className={cn(
                                                    "mt-2 text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded border inline-block",
                                                    point.faultLevel === 'grave'
                                                        ? "text-brand-red border-brand-red/30 bg-brand-red/5"
                                                        : "text-brand-yellow border-brand-yellow/30 bg-brand-yellow/5"
                                                )}>
                                                    Falla {point.faultLevel}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4" /> ¿Qué se controla?
                                            </h4>
                                            <p className="text-gray-200 text-lg leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>

                                        <div className="p-6 bg-brand-navy border border-white/5 rounded-lg">
                                            <h4 className="text-white font-bold uppercase text-xs mb-3 flex items-center gap-2 italic">
                                                <Gauge className="w-4 h-4 text-blue-500" /> Impacto en el riesgo vial
                                            </h4>
                                            <p className="text-gray-400 text-sm italic">
                                                {point.id === 'semaforos' && "Un semáforo desincronizado o fuera de servicio puede generar congestionamientos severos y alto riesgo de colisiones en cruces."}
                                                {point.id === 'camaras' && "La detección temprana de un incidente reduce el tiempo de respuesta de emergencias, salvando vidas."}
                                                {point.id === 'velocidad' && "El exceso de velocidad es el principal factor de riesgo en siniestros viales mortales."}
                                                {point.id === 'flujo' && "Conocer el volumen vehicular permite evitar colapsos que demoran los servicios de emergencia."}
                                                {point.id === 'carteles' && "La información anticipada evita frenadas bruscas y choques en cadena ante obstáculos inesperados."}
                                                {point.id === 'anillo' && "Restringir la circulación de vehículos irregulares o peligrosos aumenta la seguridad general de la Ciudad."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-800 rounded-lg text-center bg-brand-dark-grey/20">
                            <Monitor className="w-16 h-16 text-gray-700 mb-6 animate-bounce-slow" />
                            <h3 className="text-gray-500 font-brand-heading font-bold italic uppercase text-2xl mb-2">Ingresá al Centro</h3>
                            <p className="text-gray-600 max-w-sm">
                                Seleccioná un área de monitoreo del listado de la izquierda para ver el detalle de la gestión de tránsito.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* VTV Results Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-24">
                <div className="p-6 border-l-4 border-green-500 bg-green-500/5">
                    <h4 className="text-green-500 font-bold uppercase italic mb-1">NORMAL</h4>
                    <p className="text-xs text-gray-400">Tránsito fluido sin incidentes ni demoras significativas. No requiere acciones inmediatas.</p>
                </div>
                <div className="p-6 border-l-4 border-brand-yellow bg-brand-yellow/5">
                    <h4 className="text-brand-yellow font-bold uppercase italic mb-1">ALERTA</h4>
                    <p className="text-xs text-gray-400">Situación que requiere atención (vehículo detenido, congestión leve). Monitoreo preventivo.</p>
                </div>
                <div className="p-6 border-l-4 border-brand-red bg-brand-red/5">
                    <h4 className="text-brand-red font-bold uppercase italic mb-1">CRÍTICO</h4>
                    <p className="text-xs text-gray-400">Incidente grave o corte total. Requiere coordinación inmediata con emergencias y desvíos.</p>
                </div>
            </div>
        </div>
    );
}
