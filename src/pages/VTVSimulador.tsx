import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { vtvScenarios } from '../data/vtvContent';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCcw, Home, BadgeCheck, ClipboardList, Target } from 'lucide-react';

export function VTVSimulador() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [selectedResult, setSelectedResult] = useState<'normal' | 'alerta' | 'critico' | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    const scenario = vtvScenarios[currentScenario];

    const handleVerdict = (verdict: 'normal' | 'alerta' | 'critico') => {
        if (showExplanation) return;
        setSelectedResult(verdict);
        setShowExplanation(true);
        if (verdict === scenario.correctResult) {
            setScore(prev => prev + 1);
        }
    };

    const nextScenario = () => {
        setSelectedResult(null);
        setShowExplanation(false);
        if (currentScenario < vtvScenarios.length - 1) {
            setCurrentScenario(prev => prev + 1);
        } else {
            setCompleted(true);
        }
    };

    const restart = () => {
        setCurrentScenario(0);
        setSelectedResult(null);
        setShowExplanation(false);
        setScore(0);
        setCompleted(false);
    };

    const resultColors = {
        normal: "border-green-500 text-green-500 bg-green-500/10",
        alerta: "border-brand-yellow text-brand-yellow bg-brand-yellow/10",
        critico: "border-brand-red text-brand-red bg-brand-red/10",
    };

    if (completed) {
        return (
            <div className="py-12 md:py-24 max-w-2xl mx-auto px-4 text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-8">
                    <BadgeCheck className="w-20 h-20 text-blue-500 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase tracking-tighter mb-4">
                        Guardia <span className="text-blue-500">Completada</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Has finalizado tu turno operativo en el Centro de Monitoreo.
                    </p>
                    <div className="text-6xl font-brand-heading font-bold italic text-white mb-12">
                        {score} <span className="text-gray-600">/ {vtvScenarios.length}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button onClick={restart} variant="outline" size="lg" className="w-full">
                        <RotateCcw className="mr-2 w-5 h-5" /> REINICIAR TURNO
                    </Button>
                    <Link to="/vtv">
                        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500">
                            <Home className="mr-2 w-5 h-5" /> VOLVER AL TRAYECTO
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-6 md:py-12 max-w-4xl mx-auto px-4 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3">
                    <ClipboardList className="w-6 h-6 text-blue-500" />
                    <h1 className="text-xl md:text-2xl font-brand-heading font-bold italic uppercase tracking-tighter">
                        Simulador <span className="text-blue-500">Centro de Monitoreo</span>
                    </h1>
                </div>
                <div className="text-xs md:text-sm font-mono text-gray-400">
                    EVENTO {currentScenario + 1} DE {vtvScenarios.length}
                </div>
            </div>

            {/* Scenario Card */}
            <Card className="p-6 md:p-10 mb-8 border-blue-500/20 bg-brand-dark-grey/50 overflow-hidden relative">
                <Target className="absolute -right-4 -top-4 w-32 h-32 text-blue-500/5 rotate-12" />

                <div className="mb-8">
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
                        {scenario.vehicleType}
                    </span>
                    <h3 className="text-gray-300 font-bold uppercase text-xs mt-6 mb-2 tracking-widest">REPORTE DE SENSORES/CÁMARAS:</h3>
                    <p className="text-xl md:text-2xl font-brand-heading font-bold italic uppercase text-white leading-tight">
                        “{scenario.observation}”
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(['normal', 'alerta', 'critico'] as const).map((verdict) => {
                        const isCorrect = verdict === scenario.correctResult;
                        const isSelected = selectedResult === verdict;

                        return (
                            <button
                                key={verdict}
                                onClick={() => handleVerdict(verdict)}
                                disabled={showExplanation}
                                className={cn(
                                    "p-6 border-2 font-brand-heading font-bold italic uppercase tracking-wider transition-all duration-200",
                                    showExplanation
                                        ? isCorrect
                                            ? "bg-green-500/10 border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                                            : isSelected
                                                ? "bg-red-500/10 border-brand-red text-brand-red"
                                                : "opacity-30 border-gray-800 text-gray-700"
                                        : "bg-brand-dark-grey border-gray-800 hover:border-blue-500 text-gray-400 hover:text-white"
                                )}
                            >
                                {verdict}
                            </button>
                        );
                    })}
                </div>

                {showExplanation && (
                    <div className="mt-8 p-6 bg-brand-navy border-l-4 border-blue-500 animate-in slide-in-from-top-4 duration-500">
                        <div className="flex items-start gap-4">
                            <BadgeCheck className={cn(
                                "w-6 h-6 shrink-0 mt-1",
                                selectedResult === scenario.correctResult ? "text-green-500" : "text-brand-red"
                            )} />
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-white italic">
                                    NIVEL DE ALERTA: <span className={cn("uppercase", resultColors[scenario.correctResult].split(' ')[1])}>{scenario.correctResult}</span>
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {scenario.explanation}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={nextScenario}
                            className="mt-8 w-full md:w-auto bg-blue-600 hover:bg-blue-500"
                        >
                            {currentScenario === vtvScenarios.length - 1 ? 'FINALIZAR GUARDIA' : 'SIGUIENTE EVENTO'} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                )}
            </Card>

            <div className="text-center">
                <Link to="/vtv" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">
                    Salir del Centro
                </Link>
            </div>
        </div>
    );
}
