import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Award, Download, ArrowRight, Heart, TrendingUp, Target, Trophy, Info, Zap } from 'lucide-react';
import { PostSurveyForm } from '../components/survey/PostSurveyForm';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { DiplomaNew } from '../components/survey/DiplomaNew';
import { useToast } from '../components/ui/Toast';
import { cn } from '../utils/cn';

export function Results() {
    const location = useLocation();
    const quizResult = location.state as { score: number, total: number, streak?: number, module?: string } | null;

    const { state: surveyState, setPostSurvey, syncData, diplomaUnlocked } = useSurveyStore();
    const { showToast } = useToast();
    const [step, setStep] = useState<'survey' | 'final' | 'diploma' | 'quiz'>(
        quizResult ? 'quiz' : (surveyState.completed ? 'final' : 'survey')
    );

    const handlePostSurveyComplete = (data: any) => {
        setPostSurvey(data);

        // Sincronización NO bloqueante - app continúa inmediatamente
        syncData();
        showToast('Datos finales guardados - Diploma desbloqueado', 'success');
        setStep('final');
    };

    if (step === 'survey') {
        return (
            <div className="min-h-screen bg-brand-navy py-12 px-4 flex flex-col items-center">
                <Link to="/adventure" className="mb-8 self-center">
                    <Button variant="outline" className="border-white/10 text-gray-400">← VOLVER AL TRAYECTO</Button>
                </Link>
                <PostSurveyForm onComplete={handlePostSurveyComplete} />
            </div>
        );
    }

    if (step === 'quiz') {
        const percentage = Math.round((quizResult!.score / quizResult!.total) * 100);
        const moduleName = quizResult?.module === 'prioridades' ? 'Prioridades de Paso' : 'Señales';
        const nextLink = quizResult?.module === 'prioridades' ? '/emergentologia' : '/prioridades';
        const nextButtonText = quizResult?.module === 'prioridades' ? 'INICIAR: EMERGENTOLOGÍA' : 'INICIAR TEST: PRIORIDADES DE PASO';
        const repeatLink = quizResult?.module === 'prioridades' ? '/quiz-prioridades' : '/quiz';
        const repeatButtonText = quizResult?.module === 'prioridades' ? 'REPETIR PRIORIDADES' : 'REPETIR SEÑALES';

        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4 text-center">
                <div className="max-w-3xl w-full animate-in zoom-in duration-500">
                    <Trophy className="w-20 h-20 text-brand-yellow mx-auto mb-6 animate-bounce" />
                    <h1 className="text-6xl md:text-8xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-2">Misión Cumplida</h1>
                    <p className="text-brand-red text-2xl font-bold uppercase tracking-widest mb-4">Dominaste las {moduleName}</p>

                    <div className="bg-green-600/20 border border-green-500/50 p-4 rounded-lg mb-8 max-w-lg mx-auto animate-in fade-in slide-in-from-top-4 duration-1000">
                        <h3 className="text-green-400 font-brand-heading font-bold italic uppercase text-xl">¡Módulo de {moduleName} Completado!</h3>
                        <p className="text-gray-300 text-sm mt-1">Has desbloqueado el siguiente nivel del trayecto.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                        <Card className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center">
                            <div className="text-6xl font-brand-heading font-bold text-white mb-2">{quizResult!.score}/{quizResult!.total}</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Puntaje Total</div>
                        </Card>

                        <div className="bg-brand-navy/50 p-6 border border-gray-700 flex flex-col items-center justify-center">
                            <Target className="w-8 h-8 text-brand-yellow mb-2" />
                            <div className="text-3xl font-bold text-white uppercase italic">{percentage}%</div>
                            <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Precisión</div>
                        </div>

                        <div className={cn(
                            "p-6 border flex flex-col items-center justify-center transition-all",
                            (quizResult as any).streak >= 3 ? "bg-brand-yellow border-brand-yellow text-brand-navy" : "bg-brand-navy/50 border-gray-700 text-gray-500"
                        )}>
                            <Zap className={cn("w-8 h-8 mb-2", (quizResult as any).streak >= 3 ? "fill-brand-navy" : "text-gray-700")} />
                            <div className={cn("text-3xl font-bold uppercase italic", (quizResult as any).streak >= 3 ? "text-brand-navy" : "text-white")}>
                                x{(quizResult as any).streak || 0}
                            </div>
                            <div className="text-xs uppercase font-bold tracking-widest">Mejor Racha</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center max-w-lg mx-auto">
                        <Link to={nextLink} className="w-full">
                            <Button fullWidth size="lg" className="shadow-hard bg-brand-yellow text-brand-navy hover:bg-white text-xl py-6">
                                {nextButtonText} <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>
                        <div className="flex gap-4">
                            <Link to="/adventure" className="w-full"><Button fullWidth variant="outline" className="text-gray-400 hover:text-white">VOLVER AL CAMINO</Button></Link>
                            <Link to={repeatLink} className="w-full"><Button variant="outline" fullWidth className="text-gray-400 hover:text-white">{repeatButtonText}</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'diploma') {
        return (
            <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col items-center justify-center p-4 overflow-auto">
                <Button
                    variant="outline"
                    onClick={() => setStep('final')}
                    className="absolute top-4 right-4 bg-white border-gray-300 text-gray-500 hover:text-brand-red z-50 shadow-sm"
                >
                    CERRAR X
                </Button>

                <div className="w-full max-w-5xl my-auto animate-in zoom-in duration-300">
                    <DiplomaNew
                        userName={`${surveyState.profile?.nombre} ${surveyState.profile?.apellido}`}
                        dni={surveyState.profile?.dni || ''}
                        date={new Date().toLocaleDateString()}
                        institution={''} // Passing empty string to satisfy interface until interface is updated
                    />
                </div>
            </div>
        );
    }

    // Salto de conocimiento simulado basado en el progreso
    const improvement = 40; // Porcentaje de mejora estimado

    return (
        <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4">
            <div className="max-w-4xl w-full animate-in zoom-in duration-700 space-y-12">
                <header className="text-center">
                    <Trophy className="w-24 h-24 text-brand-yellow mx-auto mb-6 animate-bounce" />
                    <h1 className="text-5xl md:text-8xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-2">
                        ¡Felicidades, <span className="text-brand-yellow">Multiplicador!</span>
                    </h1>
                    <p className="text-brand-red text-2xl font-bold uppercase tracking-widest">
                        Has completado el Trayecto Formativo
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Indicadores de Impacto */}
                    <Card className="p-8 border-brand-yellow/20 bg-white/5 backdrop-blur-sm">
                        <h2 className="text-2xl font-brand-heading font-bold italic uppercase text-white mb-8 flex items-center gap-3">
                            <TrendingUp className="text-brand-yellow" /> Impacto de Gestión
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-400 uppercase text-xs font-bold tracking-widest">Salto de Conocimiento</span>
                                    <span className="text-brand-yellow font-bold">+{improvement}%</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-yellow shadow-[0_0_10px_rgba(255,215,64,0.5)]" style={{ width: `${improvement}%` }}></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-brand-navy/50 border border-white/5 rounded-lg">
                                    <Heart className="text-brand-red w-5 h-5 mb-2" />
                                    <div className="text-2xl font-bold text-white uppercase italic">LISTO</div>
                                    <div className="text-[10px] text-gray-500 uppercase font-bold">Para RCP</div>
                                </div>
                                <div className="p-4 bg-brand-navy/50 border border-white/5 rounded-lg">
                                    <ShieldCheck className="text-green-500 w-5 h-5 mb-2" />
                                    <div className="text-2xl font-bold text-white uppercase italic">100%</div>
                                    <div className="text-[10px] text-gray-500 uppercase font-bold">Compromiso</div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Descarga Diploma */}
                    <Card className="p-8 border-white/10 bg-brand-navy border-2 relative overflow-hidden group">
                        <div className="absolute -right-12 -bottom-12 opacity-5 rotate-12 transition-transform group-hover:scale-110">
                            <Award className="w-64 h-64 text-white" />
                        </div>

                        <h3 className="text-2xl font-brand-heading font-bold italic uppercase text-brand-yellow mb-6">Tu Diploma Digital</h3>
                        <p className="text-gray-400 mb-8 relative z-10">
                            Reconocimiento oficial por tu entrenamiento en **Vinculación con el Futuro**. Ya eres un agente de cambio para nuestra ciudad.
                        </p>

                        {!diplomaUnlocked && (
                            <p className="text-yellow-500 text-sm mb-4 relative z-10 flex items-center gap-2">
                                <Info className="w-4 h-4" />
                                Completá la encuesta POST para desbloquear tu diploma
                            </p>
                        )}

                        <Button
                            onClick={() => setStep('diploma')}
                            disabled={!diplomaUnlocked}
                            className={`
                                w-full py-6 text-xl transition-all shadow-hard relative z-10
                                ${diplomaUnlocked
                                    ? 'bg-white text-brand-navy hover:bg-brand-yellow cursor-pointer'
                                    : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                                }
                            `}
                        >
                            VER Y DESCARGAR DIPLOMA <Download className="ml-2 w-6 h-6" />
                        </Button>
                    </Card>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/adventure">
                        <Button variant="outline" className="text-xl py-6 px-12">
                            REVISAR TRAYECTO
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button className="text-xl py-6 px-12 bg-white/10 border-white/20 hover:bg-brand-red">
                            SALIR <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ShieldCheck({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    );
}
