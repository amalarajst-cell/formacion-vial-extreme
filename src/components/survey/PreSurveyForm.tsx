import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Rocket, ArrowRight } from 'lucide-react';

interface PreSurveyFormProps {
    onComplete: (data: any) => void;
    onBack?: () => void;
}

export function PreSurveyForm({ onComplete, onBack }: PreSurveyFormProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        institucion: '',
        percepcion: 5,
        conocimientoSemanas: '',
        habilidadSiniestro: ''
    });

    const handleNext = () => setStep(s => s + 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onComplete(formData);
    };

    return (
        <Card className="max-w-2xl mx-auto p-8 border-brand-yellow/20 shadow-hard animate-in zoom-in-95 duration-300">
            <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                        <header className="mb-8">
                            <h2 className="text-3xl font-brand-heading font-bold italic uppercase text-brand-yellow">
                                Tus Datos <span className="text-white">Personales</span>
                            </h2>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Paso 1 de 2</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">Nombre</label>
                                <input
                                    required
                                    className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 text-white focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Ej: Juan"
                                    value={formData.nombre}
                                    onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">Apellido</label>
                                <input
                                    required
                                    className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 text-white focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Ej: Pérez"
                                    value={formData.apellido}
                                    onChange={e => setFormData({ ...formData, apellido: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">DNI</label>
                                <input
                                    required
                                    className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 text-white focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Sin puntos ni espacios"
                                    value={formData.dni}
                                    onChange={e => setFormData({ ...formData, dni: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest">Institución Educativa</label>
                                <input
                                    required
                                    className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 text-white focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Nombre de tu escuela"
                                    value={formData.institucion}
                                    onChange={e => setFormData({ ...formData, institucion: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {onBack && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onBack}
                                    className="flex-1 py-6 text-xl border-white/10"
                                >
                                    CANCELAR
                                </Button>
                            )}
                            <Button
                                type="button"
                                onClick={handleNext}
                                className="flex-[2] py-6 text-xl bg-brand-yellow text-brand-navy hover:bg-white"
                                disabled={!formData.nombre || !formData.apellido || !formData.dni || !formData.institucion}
                            >
                                CONTINUAR <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                        <header className="mb-8">
                            <h2 className="text-3xl font-brand-heading font-bold italic uppercase text-brand-yellow">
                                Encuesta <span className="text-white">Inicial</span>
                            </h2>
                            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Paso 2 de 2</p>
                        </header>

                        <div className="space-y-4">
                            <label className="block text-lg font-bold text-white">
                                ¿Qué tan seguro te sentís hoy circulando por la ciudad? (1 al 10)
                            </label>
                            <div className="flex items-center gap-6">
                                <input
                                    type="range" min="1" max="10"
                                    className="flex-1 accent-brand-yellow"
                                    value={formData.percepcion}
                                    onChange={e => setFormData({ ...formData, percepcion: parseInt(e.target.value) })}
                                />
                                <span className="text-4xl font-brand-heading font-bold text-brand-yellow">{formData.percepcion}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-lg font-bold text-white">
                                ¿Sabés qué significan las señales de tránsito transitorias (naranjas)?
                            </label>
                            <div className="flex gap-4">
                                {['Sí', 'No'].map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, conocimientoSemanas: opt })}
                                        className={`flex-1 py-4 font-bold border rounded-lg transition-all ${formData.conocimientoSemanas === opt ? 'bg-brand-yellow text-brand-navy border-brand-yellow' : 'bg-transparent border-gray-700 text-gray-400 hover:border-white'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block text-lg font-bold text-white">
                                ¿Sabrías qué hacer si presenciás un siniestro vial con heridos?
                            </label>
                            <div className="grid grid-cols-1 gap-3">
                                {['Nada', 'Poco', 'Lo básico'].map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, habilidadSiniestro: opt })}
                                        className={`w-full py-4 px-6 text-left font-bold border rounded-lg transition-all ${formData.habilidadSiniestro === opt ? 'bg-brand-yellow text-brand-navy border-brand-yellow' : 'bg-transparent border-gray-700 text-gray-400 hover:border-white'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button
                                type="submit"
                                className="w-full py-6 text-xl shadow-hard"
                                disabled={!formData.conocimientoSemanas || !formData.habilidadSiniestro}
                            >
                                INICIAR TRAYECTO <Rocket className="ml-2 w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                )}
            </form>
        </Card>
    );
}
