import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { vtvPoints } from '../data/vtvContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { Wrench, ShieldCheck, Gauge, AlertTriangle, BadgeCheck } from 'lucide-react';

export function SeguridadTecnicaModule() {
    const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

    return (
        <div className="py-6 md:py-12 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12 gap-4">
                <div>
                    <h1 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter mb-2">
                        Seguridad <span className="text-blue-500">Técnica y VTV</span>
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
                        Aprendé a identificar los puntos críticos que hacen a la seguridad de un vehículo. La física no perdona: un mantenimiento adecuado salva vidas.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-blue-500 font-bold uppercase tracking-tighter text-xs border border-blue-500/30 px-3 py-1 bg-blue-500/5 w-fit">
                        🏢 Experiencia Planta VTV - GCBA
                    </div>
                </div>
                <Link to="/vtv-simulador">
                    <Button size="lg" className="shadow-hard group text-sm md:text-base bg-blue-600 hover:bg-blue-500 border-blue-400">
                        <BadgeCheck className="mr-2 w-5 h-5" /> SER INSPECTOR
                    </Button>
                </Link>
            </div>

            {/* Desktop split view or mobile stack */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Interactive Diagram / List */}
                <div className="lg:col-span-4 space-y-3">
                    <h3 className="text-white font-brand-heading font-bold italic uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-blue-500" /> Puntos de Inspección
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
                                                {point.id === 'frenos' && "Un sistema de frenos desequilibrado puede hacer que el vehículo pierda la trayectoria y patine (efecto tijera) ante una frenada de pánico."}
                                                {point.id === 'neumaticos' && "El neumático 'liso' (testigo al ras) aumenta la distancia de frenado en mojado hasta un 50% y anula la dirección del vehículo."}
                                                {point.id === 'luces' && "Un faro quemado o desalineado no solo reduce tu visión, sino que impide que otros conductores dimensionen el tamaño del vehículo de noche."}
                                                {point.id === 'suspension' && "Amortiguadores vencidos provocan cabeceo, inestabilidad en curvas y aumentan el desgaste de los neumáticos."}
                                                {point.id === 'emisiones' && "Un escape libre o defectuoso genera fatiga por ruido en el conductor y daño ambiental directo a los pulmones de los peatones."}
                                                {point.id === 'seguridad' && "El cinturón de seguridad y el matafuego cargado son la última línea de defensa entre la supervivencia y la fatalidad."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-800 rounded-lg text-center bg-brand-dark-grey/20">
                            <Wrench className="w-16 h-16 text-gray-700 mb-6 animate-bounce-slow" />
                            <h3 className="text-gray-500 font-brand-heading font-bold italic uppercase text-2xl mb-2">Ingresá a la fosa</h3>
                            <p className="text-gray-600 max-w-sm">
                                Seleccioná un punto de inspección del listado de la izquierda para ver el detalle de los controles técnicos.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* VTV Results Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-24">
                <div className="p-6 border-l-4 border-green-500 bg-green-500/5">
                    <h4 className="text-green-500 font-bold uppercase italic mb-1">APTO</h4>
                    <p className="text-xs text-gray-400">Vehículo sin fallas o leves que no comprometen la seguridad. Oblea habilitada por 1 año.</p>
                </div>
                <div className="p-6 border-l-4 border-brand-yellow bg-brand-yellow/5">
                    <h4 className="text-brand-yellow font-bold uppercase italic mb-1">CONDICIONAL</h4>
                    <p className="text-xs text-gray-400">Una o más fallas leves. El vehículo puede circular pero tiene 60 días para volver a verificar gratis.</p>
                </div>
                <div className="p-6 border-l-4 border-brand-red bg-brand-red/5">
                    <h4 className="text-brand-red font-bold uppercase italic mb-1">RECHAZADO</h4>
                    <p className="text-xs text-gray-400">Falla crítica detectada. El vehículo NO está habilitado para circular hasta ser reparado.</p>
                </div>
            </div>
        </div>
    );
}
