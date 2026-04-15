import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { prioridadesQuestions } from '../data/prioridades';
import { cn } from '../utils/cn';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { Heart, RotateCcw, Timer, Trophy, ArrowRight } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export function QuizPrioridades() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { setPrioridadesScore } = useSurveyStore();
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(25);
    const [isAnswered, setIsAnswered] = useState(false);

    // Gamification states
    const [lives, setLives] = useState(3);
    const [streak, setStreak] = useState(0);
    const [isTurbo, setIsTurbo] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [shake, setShake] = useState(false);

    const currentQuestion = prioridadesQuestions[currentQuestionIdx];

    useEffect(() => {
        if (timeLeft > 0 && !isAnswered && !gameOver) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isAnswered && !gameOver) {
            handleTimeOut();
        }
    }, [timeLeft, isAnswered, gameOver]);

    useEffect(() => {
        if (streak >= 3) setIsTurbo(true);
        else setIsTurbo(false);
    }, [streak]);

    if (!currentQuestion) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-white font-bold italic uppercase tracking-widest">Cargando desafío...</p>
                </div>
            </div>
        );
    }

    const handleTimeOut = () => {
        setIsAnswered(true);
        handleFailure();
    };

    const handleOptionSelect = (idx: number) => {
        if (isAnswered || gameOver) return;

        setSelectedOption(idx);
        setIsAnswered(true);

        if (idx === currentQuestion.correctAnswer) {
            const pointsToAdd = isTurbo ? 20 : 10;
            setScore(prev => prev + pointsToAdd);
            setStreak(prev => prev + 1);

            setTimeout(() => {
                nextQuestion();
            }, 1500);
        } else {
            handleFailure();
        }
    };

    const handleFailure = () => {
        setLives(prev => {
            const newLives = prev - 1;
            if (newLives <= 0) setGameOver(true);
            return newLives;
        });
        setStreak(0);
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const nextQuestion = () => {
        if (currentQuestionIdx < prioridadesQuestions.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setTimeLeft(25);
        } else {
            setPrioridadesScore(score);
            showToast('¡Misión Cumplida!', 'success');
            navigate('/results', { state: { score, total: prioridadesQuestions.length, streak, module: 'prioridades' } });
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setScore(0);
        setLives(3);
        setStreak(0);
        setIsAnswered(false);
        setTimeLeft(25);
        setGameOver(false);
    };

    if (gameOver) {
        return (
            <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-6 text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-red opacity-20 blur-3xl rounded-full" />
                    <RotateCcw className="text-brand-red w-20 h-20 mb-6 relative animate-spin-slow" />
                </div>
                <h1 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase text-white mb-4">RE-ENTRENAMIENTO</h1>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-sm mx-auto">
                    El desconocimiento de las prioridades de paso es un factor crítico de riesgo vial.
                </p>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <Button onClick={resetQuiz} size="lg" className="text-xl py-7 shadow-hard-yellow bg-brand-yellow text-black hover:bg-brand-yellow/90">
                        REINTENTAR DESAFÍO
                    </Button>
                    <Button onClick={() => navigate('/prioridades')} variant="outline" size="lg" className="text-xl py-7 border-white/20 text-gray-400 hover:text-white">
                        REPASAR REGLAS
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={cn(
            "min-h-screen bg-brand-navy flex flex-col items-center justify-center p-4 transition-all duration-700 relative overflow-hidden",
            isTurbo && "ring-inset ring-8 ring-brand-yellow/10",
            shake && "animate-[shake_0.5s_ease-in-out]"
        )}>
            {/* Background elements for depth without images */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-50" />

            <div className="w-full max-w-4xl relative z-10 flex flex-col">
                {/* Stats Header - Compact & Premium */}
                <div className="grid grid-cols-3 items-center mb-6 bg-brand-dark-grey/40 backdrop-blur-md border border-white/5 p-4 md:p-6 rounded-2xl">
                    <div className="flex gap-1 md:gap-2">
                        {[...Array(3)].map((_, i) => (
                            <Heart
                                key={i}
                                className={cn(
                                    "w-5 h-5 md:w-6 md:h-6 transition-all duration-300",
                                    i < lives ? "text-brand-red fill-brand-red drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "text-white/10"
                                )}
                            />
                        ))}
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-0.5">
                            <Trophy className={cn("w-4 h-4", isTurbo ? "text-brand-yellow" : "text-gray-500")} />
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Puntaje</span>
                        </div>
                        <span className="text-lg md:text-2xl font-mono font-black text-white leading-none">{score}</span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                            <Timer className={cn("w-4 h-4", timeLeft < 10 ? "text-brand-red animate-pulse" : "text-brand-yellow")} />
                            <span className={cn("text-lg md:text-2xl font-mono font-bold leading-none", timeLeft < 10 ? "text-brand-red" : "text-white")}>
                                {timeLeft}s
                            </span>
                        </div>
                    </div>
                </div>

                {/* Question Area */}
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-brand-red" />
                        <span className="text-[10px] md:text-xs font-black text-brand-red uppercase tracking-[0.3em]">Situación {currentQuestionIdx + 1} de {prioridadesQuestions.length}</span>
                        <div className="h-[2px] w-8 bg-brand-red" />
                    </div>

                    <h2 className="text-2xl md:text-5xl font-brand-heading font-black italic uppercase text-white text-center leading-[1.1] max-w-3xl drop-shadow-lg">
                        {currentQuestion.question}
                    </h2>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {currentQuestion.options.map((option, idx) => {
                        const isCorrect = idx === currentQuestion.correctAnswer;
                        const isSelected = selectedOption === idx;

                        return (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(idx)}
                                disabled={isAnswered}
                                className={cn(
                                    "w-full min-h-[80px] md:min-h-[100px] text-left px-6 py-5 border-2 font-bold text-sm md:text-lg uppercase transition-all duration-300 relative group overflow-hidden rounded-xl",
                                    !isAnswered && "bg-brand-dark-grey/50 border-white/10 text-gray-400 hover:border-brand-red hover:text-white hover:bg-brand-red/5",
                                    isAnswered && isCorrect && "bg-green-600/20 border-green-500 text-green-400 translate-y-[-2px] shadow-[0_8px_20px_rgba(34,197,94,0.2)]",
                                    isAnswered && isSelected && !isCorrect && "bg-red-600/20 border-red-500 text-red-100",
                                    isAnswered && !isSelected && !isCorrect && "opacity-20 scale-[0.98]"
                                )}
                            >
                                <div className="flex items-start gap-4 h-full">
                                    <span className={cn(
                                        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-black border transition-colors",
                                        !isAnswered && "border-white/10 bg-white/5",
                                        isAnswered && isCorrect && "border-green-500 bg-green-500 text-black",
                                        isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white",
                                        isAnswered && !isSelected && "border-white/5 text-gray-700"
                                    )}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>
                                    <span className="flex-grow pt-1">{option}</span>
                                </div>
                                {!isAnswered && (
                                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Explanation Card */}
                <div className={cn(
                    "transition-all duration-500 overflow-hidden",
                    isAnswered ? "max-h-[300px] opacity-100 mb-8" : "max-h-0 opacity-0"
                )}>
                    <div className="bg-brand-dark-grey/80 backdrop-blur-md border border-brand-yellow/30 p-6 md:p-8 rounded-2xl relative">
                        <div className="absolute top-0 right-0 p-2 md:p-4 opacity-10">
                            <Trophy className="w-16 h-16 text-brand-yellow" />
                        </div>
                        <h4 className="text-brand-yellow font-black uppercase italic mb-3 flex items-center gap-2 text-sm md:text-base">
                            <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
                            Fundamentación Legal:
                        </h4>
                        <p className="text-gray-100 italic text-sm md:text-lg leading-relaxed font-medium">
                            {currentQuestion.explanation}
                        </p>
                    </div>
                </div>

                {/* Navigation Button - Only shown when answered to allow progression even on fail/timeout */}
                <div className={cn(
                    "mt-4 md:mt-8 transition-all duration-500 overflow-hidden",
                    isAnswered ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <Button
                        onClick={nextQuestion}
                        fullWidth
                        size="lg"
                        className="text-lg md:text-xl py-6 md:py-8 bg-white text-brand-navy hover:bg-gray-200 shadow-hard group"
                    >
                        <span className="flex items-center gap-2">
                            {currentQuestionIdx < prioridadesQuestions.length - 1 ? 'SIGUIENTE DESAFÍO' : 'FINALIZAR EVALUACIÓN'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                </div>

                {/* Progress Bar - Bottom and Sleek */}
                <div className="mt-auto">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Progreso Operativo</span>
                        <span className="text-xs font-mono font-bold text-brand-red">{Math.round(((currentQuestionIdx + 1) / prioridadesQuestions.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                            className="h-full bg-gradient-to-r from-brand-red to-brand-yellow transition-all duration-1000 ease-out"
                            style={{ width: `${((currentQuestionIdx + 1) / prioridadesQuestions.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
                .shadow-hard-yellow { shadow: 0 8px 0 rgba(184, 146, 0, 1); }
            ` }} />
        </div>
    );
}
