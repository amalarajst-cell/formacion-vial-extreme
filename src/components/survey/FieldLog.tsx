import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { PhoneOff, ShieldAlert, Footprints, MessageSquare, Timer } from 'lucide-react';

interface FieldLogProps {
    onComplete: (data: any) => void;
}

export function FieldLog({ onComplete }: FieldLogProps) {
    const [counts, setCounts] = useState({
        celular: 0,
        cinturon: 0,
        senda: 0
    });
    const [diagnosis, setDiagnosis] = useState('');
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const increment = (key: keyof typeof counts) => {
        setCounts(prev => ({ ...prev, [key]: prev[key] + 1 }));
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <header className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-brand-heading font-bold italic uppercase text-brand-yellow">
                    Bitácora de <span className="text-white">Campo</span>
                </h2>
                <div className="inline-flex items-center gap-3 bg-brand-navy/50 border border-white/10 px-6 py-2 rounded-full">
                    <Timer className="w-5 h-5 text-brand-yellow" />
                    <span className="text-2xl font-mono font-bold text-white">{formatTime(timeLeft)}</span>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Conteo Celular */}
                <Card className="p-6 text-center border-white/5 bg-brand-navy/40">
                    <PhoneOff className="w-12 h-12 text-brand-red mx-auto mb-4" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Uso de Celular</h3>
                    <div className="text-6xl font-brand-heading font-bold text-white mb-6">{counts.celular}</div>
                    <Button
                        onClick={() => increment('celular')}
                        className="w-full bg-brand-red hover:bg-red-600 text-white py-6 text-2xl"
                    >
                        +1
                    </Button>
                </Card>

                {/* Conteo Cinturón */}
                <Card className="p-6 text-center border-white/5 bg-brand-navy/40">
                    <ShieldAlert className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Sin Cinturón</h3>
                    <div className="text-6xl font-brand-heading font-bold text-white mb-6">{counts.cinturon}</div>
                    <Button
                        onClick={() => increment('cinturon')}
                        className="w-full bg-brand-yellow text-brand-navy hover:bg-white py-6 text-2xl shadow-hard"
                    >
                        +1
                    </Button>
                </Card>

                {/* Conteo Senda */}
                <Card className="p-6 text-center border-white/5 bg-brand-navy/40">
                    <Footprints className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Fuera de Senda</h3>
                    <div className="text-6xl font-brand-heading font-bold text-white mb-6">{counts.senda}</div>
                    <Button
                        onClick={() => increment('senda')}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 text-2xl"
                    >
                        +1
                    </Button>
                </Card>
            </div>

            <Card className="p-8 border-white/10 bg-brand-navy/60">
                <div className="flex items-center gap-4 mb-6">
                    <MessageSquare className="w-6 h-6 text-brand-yellow" />
                    <h3 className="text-xl font-bold text-white uppercase italic">Diagnóstico Ciudadano</h3>
                </div>
                <p className="text-gray-400 mb-4">Si fueras el Ministro de Transporte, ¿qué cambio harías en esta esquina?</p>
                <textarea
                    className="w-full bg-brand-navy border border-gray-700 rounded-lg p-4 h-32 text-white focus:border-brand-yellow outline-none transition-all placeholder:text-gray-600"
                    placeholder="Escribe tu propuesta aquí..."
                    value={diagnosis}
                    onChange={e => setDiagnosis(e.target.value)}
                ></textarea>
            </Card>

            <Button
                onClick={() => onComplete({ counts, diagnosis })}
                className="w-full py-8 text-2xl bg-white text-brand-navy hover:bg-brand-yellow"
                disabled={timeLeft > 0 && (counts.celular + counts.cinturon + counts.senda === 0)}
            >
                FINALIZAR AUDITORÍA
            </Button>
        </div>
    );
}
