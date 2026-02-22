import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { quizQuestions } from '../data/quiz';
import { cn } from '../utils/cn';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { Heart, Zap, RotateCcw, Timer, Trophy, ArrowRight } from 'lucide-react';
import { useToast } from '../components/ui/Toast';

export function Quiz() {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { setQuizScore, completeSignalsModule } = useSurveyStore();

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [isAnswered, setIsAnswered] = useState(false);

    // Gamification states
    const [lives, setLives] = useState(3);
    const [streak, setStreak] = useState(0);
    const [isTurbo, setIsTurbo] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [shake, setShake] = useState(false);

    const currentQuestion = quizQuestions[currentQuestionIdx];

    if (!currentQuestion) {
        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-white font-bold italic uppercase tracking-widest text-sm">Cargando desafío vial...</p>
                </div>
            </div>
        );
    }

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

    const handleTimeOut = () => {
        setIsAnswered(true);
        handleFailure();
    };

    const handleOptionSelect = (idx: number) => {
        if (isAnswered || gameOver) return;

        setSelectedOption(idx);
        setIsAnswered(true);

        if (idx === currentQuestion.correctAnswer) {
            const pointsToAdd = isTurbo ? 2 : 1;
            setScore(prev => prev + pointsToAdd);
            setStreak(prev => prev + 1);

            // Auto-advance after 1.2s for signals
            setTimeout(() => {
                nextQuestion();
            }, 1200);
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
        if (currentQuestionIdx < quizQuestions.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setTimeLeft(20);
        } else {
            setQuizScore(score);
            completeSignalsModule(score);
            showToast('¡Desafío de Señales Completado!', 'success');
            navigate('/results', { state: { score, total: quizQuestions.length, streak, module: 'signals' } });
        }
    };

    const resetQuiz = () => {
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setScore(0);
        setLives(3);
        setStreak(0);
        setIsAnswered(false);
        setTimeLeft(20);
        setGameOver(false);
    };

    if (gameOver) {
        return (
            <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-6 text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-red/20 blur-3xl animate-pulse rounded-full" />
                    <RotateCcw className="text-brand-red w-20 h-20 mb-6 relative animate-spin-slow" />
                </div>
                <h1 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase text-white mb-4">RE-ENTRENAMIENTO</h1>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-sm mx-auto">
                    La seguridad técnica y el conocimiento de señales salvan vidas en el camino.
                </p>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <Button onClick={resetQuiz} size="lg" className="text-xl py-7 shadow-hard-yellow bg-brand-yellow text-black hover:bg-brand-yellow/90">
                        INICIAR NUEVA MISIÓN
                    </Button>
                    <Button onClick={() => navigate('/modules')} variant="outline" size="lg" className="text-xl py-7 border-white/20 text-gray-400 hover:text-white">
                        REPASAR CATÁLOGO
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={cn(
            "min-h-screen bg-brand-navy flex flex-col items-center justify-center p-4 transition-all duration-700 relative overflow-hidden",
            isTurbo && "ring-inset ring-[12px] ring-brand-yellow/5",
            shake && "animate-[shake_0.5s_ease-in-out]"
        )}>
            {/* Turbo background effects */}
            {isTurbo && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute h-full w-[2px] bg-brand-yellow left-[20%] animate-[speedLine_0.8s_linear_infinite]" style={{ left: `${15 * i + 10}%`, animationDelay: `${i * 0.15}s` }}></div>
                    ))}
                </div>
            )}

            <div className="w-full max-w-4xl relative z-10 flex flex-col">
                {/* Compact Stats Header */}
                <div className="grid grid-cols-3 items-center mb-6 bg-brand-dark-grey/40 backdrop-blur-md border border-white/5 p-4 md:p-6 rounded-2xl shadow-2xl">
                    <div className="flex gap-1.5 md:gap-2">
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
                        <div className="flex items-center gap-2 mb-0.5 opacity-60">
                            <Trophy className={cn("w-3.5 h-3.5", streak > 0 ? "text-brand-yellow" : "text-gray-400")} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Puntaje</span>
                        </div>
                        <span className="text-xl md:text-3xl font-mono font-black text-white leading-none tracking-tighter">{score}</span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <div className={cn(
                            "flex items-center gap-1.5 px-4 py-1.5 rounded-full border transition-all duration-300",
                            timeLeft < 5 ? "bg-brand-red/10 border-brand-red/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "bg-white/5 border-white/10"
                        )}>
                            <Timer className={cn("w-4 h-4", timeLeft < 5 ? "text-brand-red animate-pulse" : "text-brand-yellow")} />
                            <span className={cn("text-xl md:text-2xl font-mono font-black leading-none", timeLeft < 5 ? "text-brand-red" : "text-white")}>
                                {timeLeft}s
                            </span>
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <Zap className={cn("w-3 h-3 transition-colors", streak > 0 ? "text-brand-yellow" : "text-gray-600")} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Misión {currentQuestionIdx + 1} de {quizQuestions.length}</span>
                    </div>
                    {streak > 1 && (
                        <div className="flex items-center gap-1.5 animate-in slide-in-from-right duration-300">
                            <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest">Multiplicador x{streak}</span>
                            <div className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
                        </div>
                    )}
                </div>

                {/* Main Challenge Area */}
                <div className="bg-brand-dark-grey/20 backdrop-blur-sm border border-white/5 p-6 md:p-10 rounded-3xl mb-8 flex flex-col md:flex-row gap-8 items-center md:items-stretch">
                    {/* Visual Reference (The Sign) */}
                    <div className={cn(
                        "w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-white/5 p-6 flex items-center justify-center border-2 transition-all duration-500 rounded-2xl relative group",
                        isAnswered && selectedOption === currentQuestion.correctAnswer ? "border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] bg-green-500/5" : "border-white/10"
                    )}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 rounded-2xl" />
                        <img
                            src={currentQuestion.sign.image}
                            alt="Desafío Vial"
                            className={cn(
                                "max-w-full max-h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-700",
                                isTurbo && "scale-110",
                                !isAnswered && "group-hover:scale-110"
                            )}
                        />
                    </div>

                    {/* Question & Options Grid */}
                    <div className="flex-grow flex flex-col">
                        <h2 className="text-2xl md:text-4xl font-brand-heading font-black italic uppercase text-white mb-8 md:mb-10 leading-[1.15] text-center md:text-left drop-shadow-md">
                            {currentQuestion.question}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-grow">
                            {currentQuestion.options.map((option, idx) => {
                                const isCorrect = idx === currentQuestion.correctAnswer;
                                const isSelected = selectedOption === idx;

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        disabled={isAnswered}
                                        className={cn(
                                            "w-full text-left px-5 py-4 md:py-6 border-2 font-bold text-sm md:text-base uppercase transition-all duration-300 relative group overflow-hidden rounded-xl h-full flex items-center",
                                            !isAnswered && "bg-brand-dark-grey/40 text-gray-400 border-white/10 hover:border-brand-yellow hover:text-white hover:bg-brand-yellow/5",
                                            isAnswered && isCorrect && "bg-green-600/20 border-green-500 text-green-400 translate-y-[-2px] shadow-lg",
                                            isAnswered && isSelected && !isCorrect && "bg-red-600/20 border-red-500 text-red-200",
                                            isAnswered && !isSelected && !isCorrect && "opacity-20 grayscale scale-[0.98]"
                                        )}
                                    >
                                        <div className="flex gap-4 items-center w-full">
                                            <span className={cn(
                                                "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-black border transition-all duration-300",
                                                !isAnswered && "border-white/10 bg-white/5",
                                                isAnswered && isCorrect && "border-green-500 bg-green-500 text-black shadow-[0_0_10px_rgba(34,197,94,0.5)]",
                                                isAnswered && isSelected && !isCorrect && "border-red-500 bg-red-500 text-white",
                                                isAnswered && !isSelected && "border-white/5 opacity-50"
                                            )}>
                                                {idx + 1}
                                            </span>
                                            <span className="flex-grow">{option}</span>
                                        </div>
                                        {!isAnswered && (
                                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="w-3 h-3 text-brand-yellow" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Navigation Button - Correcting the flow break */}
                <div className={cn(
                    "mb-8 md:mb-12 transition-all duration-500 overflow-hidden",
                    isAnswered ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <Button
                        onClick={nextQuestion}
                        fullWidth
                        size="lg"
                        className="text-lg md:text-xl py-6 md:py-8 bg-white text-brand-navy hover:bg-gray-200 shadow-hard group"
                    >
                        <span className="flex items-center gap-2">
                            {currentQuestionIdx < quizQuestions.length - 1 ? 'SIGUIENTE SEÑAL' : 'FINALIZAR MISIÓN'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                </div>

                {/* Progress Bar - Minimalist Footer Style */}
                <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Nivel de Seguridad Operativa</span>
                        <span className="text-[10px] font-mono font-bold text-brand-yellow">{Math.round(((currentQuestionIdx + 1) / quizQuestions.length) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-brand-yellow via-brand-yellow to-white transition-all duration-1000 ease-out"
                            style={{ width: `${((currentQuestionIdx + 1) / quizQuestions.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
                @keyframes speedLine { from { transform: translateY(-100%); opacity: 0; } 50% { opacity: 0.5; } to { transform: translateY(100%); opacity: 0; } }
                .shadow-hard-yellow { box-shadow: 0 8px 0 rgba(184, 146, 0, 1); }
            ` }} />
        </div>
    );
}
