import { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Heart, MessageSquare, Star, Send } from 'lucide-react';

interface PostSurveyFormProps {
    onComplete: (data: any) => void;
}

export function PostSurveyForm({ onComplete }: PostSurveyFormProps) {
    const [formData, setFormData] = useState({
        cambioHabito: '',
        valoracionRCP: '',
        sorpresa: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onComplete(formData);
    };

    return (
        <Card className="max-w-3xl mx-auto p-8 border-brand-yellow/20 shadow-hard animate-in fade-in duration-500">
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase text-brand-yellow mb-4">
                    Final del <span className="text-white">Trayecto</span>
                </h2>
                <p className="text-gray-400 uppercase tracking-widest font-bold">Cierre e Impacto del Programa</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-10">
                {/* Pregunta 1: Cambio de hábito */}
                <div className="space-y-4">
                    <label className="block text-xl font-bold text-white flex items-center gap-3">
                        <Star className="text-brand-yellow w-6 h-6" />
                        ¿Vas a cambiar algo de tu forma de caminar o conducir? ¿Qué?
                    </label>
                    <textarea
                        required
                        className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 h-32 text-white focus:border-brand-yellow outline-none transition-all"
                        placeholder="Describe el compromiso que vas a asumir..."
                        value={formData.cambioHabito}
                        onChange={e => setFormData({ ...formData, cambioHabito: e.target.value })}
                    />
                </div>

                {/* Pregunta 2: Valoración RCP */}
                <div className="space-y-4">
                    <label className="block text-xl font-bold text-white flex items-center gap-3">
                        <Heart className="text-brand-red w-6 h-6" />
                        ¿Sentís que ahora podrías salvar una vida gracias a la práctica de primeros auxilios?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Totalmente preparado', 'Me siento con más confianza', 'Necesito más práctica', 'Aún tengo dudas'].map(opt => (
                            <button
                                key={opt}
                                type="button"
                                onClick={() => setFormData({ ...formData, valoracionRCP: opt })}
                                className={`py-4 px-6 text-left font-bold border rounded-lg transition-all ${formData.valoracionRCP === opt ? 'bg-brand-red text-white border-brand-red' : 'bg-transparent border-gray-700 text-gray-400 hover:border-white'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pregunta 3: Sorpresa */}
                <div className="space-y-4">
                    <label className="block text-xl font-bold text-white flex items-center gap-3">
                        <MessageSquare className="text-blue-500 w-6 h-6" />
                        ¿Qué fue lo que más te sorprendió de las tareas que hace la Gerencia de Seguridad Vial?
                    </label>
                    <textarea
                        required
                        className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 h-24 text-white focus:border-brand-yellow outline-none transition-all"
                        placeholder="Lo que más te impacto..."
                        value={formData.sorpresa}
                        onChange={e => setFormData({ ...formData, sorpresa: e.target.value })}
                    />
                </div>

                <Button type="submit" className="w-full py-8 text-2xl shadow-hard">
                    COMPLETAR PROGRAMA <Send className="ml-2 w-6 h-6" />
                </Button>
            </form>
        </Card>
    );
}
