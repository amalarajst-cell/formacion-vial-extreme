import { useState, useEffect } from 'react';
import { useLocalState } from '../hooks/useLocalState';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { examenCategoriaAQuestions } from '../data/examenCategoriaA';
import { cn } from '../utils/cn';
import { 
    Heart, 
    Zap, 
    RotateCcw, 
    Timer, 
    Trophy, 
    ArrowRight, 
    Bike, 
    Award, 
    ShieldAlert,
    Eye,
    Lightbulb,
    HelpCircle
} from 'lucide-react';
import { useToast } from '../components/ui/Toast';

function getRandomIndices(count: number, max: number): number[] {
    const indices: number[] = [];
    while (indices.length < Math.min(count, max)) {
        const rand = Math.floor(Math.random() * max);
        if (!indices.includes(rand)) {
            indices.push(rand);
        }
    }
    return indices;
}

export function QuizCategoriaA() {
    const navigate = useNavigate();
    const { showToast } = useToast();

    // Game state
    const [currentQuestionIdx, setCurrentQuestionIdx] = useLocalState('quiz_catA_currentQuestionIdx', 0);
    const [selectedOption, setSelectedOption] = useLocalState<number | null>('quiz_catA_selectedOption', null);
    const [score, setScore] = useLocalState('quiz_catA_score', 0);
    const [timeLeft, setTimeLeft] = useLocalState('quiz_catA_timeLeft', 20);
    const [isAnswered, setIsAnswered] = useLocalState('quiz_catA_isAnswered', false);

    // Gamification states
    const [lives, setLives] = useLocalState('quiz_catA_lives', 3);
    const [streak, setStreak] = useLocalState('quiz_catA_streak', 0);
    const [isTurbo, setIsTurbo] = useLocalState('quiz_catA_isTurbo', false);
    const [gameOver, setGameOver] = useLocalState('quiz_catA_gameOver', false);
    const [quizCompleted, setQuizCompleted] = useLocalState('quiz_catA_completed', false);
    const [shake, setShake] = useState(false);

    // Persistent random question indices for the current simulator practice run
    const [activeQuestionIndices, setActiveQuestionIndices] = useLocalState<number[]>('quiz_catA_activeQuestionIndices', []);

    // Ensure activeQuestionIndices has 10 random questions on initialization
    useEffect(() => {
        if (!activeQuestionIndices || activeQuestionIndices.length === 0) {
            const newIndices = getRandomIndices(10, examenCategoriaAQuestions.length);
            setActiveQuestionIndices(newIndices);
        }
    }, [activeQuestionIndices, setActiveQuestionIndices]);

    // Fallback in case state isn't loaded yet
    const indices = activeQuestionIndices && activeQuestionIndices.length > 0
        ? activeQuestionIndices
        : Array.from({ length: Math.min(10, examenCategoriaAQuestions.length) }, (_, i) => i);

    // Reset scroll when question changes
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [currentQuestionIdx]);

    const currentQuestion = examenCategoriaAQuestions[indices[currentQuestionIdx]] || examenCategoriaAQuestions[0];

    // Timer effect
    useEffect(() => {
        if (timeLeft > 0 && !isAnswered && !gameOver && !quizCompleted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isAnswered && !gameOver && !quizCompleted) {
            handleTimeOut();
        }
    }, [timeLeft, isAnswered, gameOver, quizCompleted]);

    // Turbo Mode activation
    useEffect(() => {
        if (streak >= 3) setIsTurbo(true);
        else setIsTurbo(false);
    }, [streak]);

    const handleTimeOut = () => {
        setIsAnswered(true);
        setSelectedOption(-1); // Marked as timed out
        handleFailure();
    };

    const handleOptionSelect = (idx: number) => {
        if (isAnswered || gameOver || quizCompleted) return;

        setSelectedOption(idx);
        setIsAnswered(true);

        if (idx === currentQuestion.correctAnswer) {
            // Correct answer
            const pointsToAdd = isTurbo ? 20 : 10;
            setScore(prev => prev + pointsToAdd);
            setStreak(prev => prev + 1);
            showToast('¡Correcto! +10 Puntos', 'success');
        } else {
            // Incorrect answer
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
        showToast('Respuesta Incorrecta', 'error');
    };

    const nextQuestion = () => {
        if (currentQuestionIdx < indices.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setTimeLeft(20);
        } else {
            setQuizCompleted(true);
            showToast('¡Simulador Categoría A Completado!', 'success');
        }
    };

    const resetQuiz = () => {
        // Generate a new set of 10 random questions on restart
        const newIndices = getRandomIndices(10, examenCategoriaAQuestions.length);
        setActiveQuestionIndices(newIndices);

        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setScore(0);
        setLives(3);
        setStreak(0);
        setIsAnswered(false);
        setTimeLeft(20);
        setGameOver(false);
        setQuizCompleted(false);
    };

    // Render large illustrative icons based on question type
    const renderQuestionIcon = (type: string) => {
        switch (type) {
            case 'helmet':
            case 'crash':
            case 'expired':
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-yellow/10 border-2 border-brand-yellow/30 rounded-2xl flex items-center justify-center text-brand-yellow shadow-inner animate-pulse">
                        <Award className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
            case 'lights':
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-yellow/10 border-2 border-brand-yellow/30 rounded-2xl flex items-center justify-center text-brand-yellow shadow-inner animate-pulse">
                        <Zap className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
            case 'mirrors':
            case 'blindspot':
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                        <Eye className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
            case 'straps':
            case 'passenger':
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-green-500/10 border-2 border-green-500/30 rounded-2xl flex items-center justify-center text-green-400 shadow-inner">
                        <HelpCircle className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
            case 'brakes':
            case 'rain':
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-red/10 border-2 border-brand-red/30 rounded-2xl flex items-center justify-center text-brand-red shadow-inner">
                        <ShieldAlert className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
            default:
                return (
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-yellow/10 border-2 border-brand-yellow/30 rounded-2xl flex items-center justify-center text-brand-yellow shadow-inner">
                        <Bike className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                );
        }
    };

    // Calculate dynamic feedback achievements/badges
    const getFinalAchievement = (finalScore: number) => {
        if (finalScore >= 100) return { title: 'PILOTO DE ÉLITE 👑', desc: '¡Perfecto! Dominás por completo las leyes de tránsito y la seguridad de motovehículos.', color: 'text-brand-yellow border-brand-yellow' };
        if (finalScore >= 70) return { title: 'MOTO-EXPERTO 🏍️', desc: '¡Muy bien! Contás con un excelente criterio de seguridad y prevención vial.', color: 'text-green-400 border-green-400' };
        return { title: 'PRINCIPIANTE VIAL 🛡️', desc: 'Buen intento, pero es necesario repasar la teoría para circular seguro.', color: 'text-brand-red border-brand-red' };
    };

    if (gameOver) {
        return (
            <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-6 text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-red/20 blur-3xl animate-pulse rounded-full" />
                    <RotateCcw className="text-brand-red w-20 h-20 mb-6 relative animate-spin-slow" />
                </div>
                <h1 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase text-white mb-4">RE-ENTRENAMIENTO</h1>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md mx-auto leading-relaxed">
                    La seguridad técnica y el conocimiento normativo salvan vidas en moto. ¡Probá de nuevo hasta lograr la perfección!
                </p>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <Button onClick={resetQuiz} size="lg" className="text-xl py-7 shadow-hard bg-brand-yellow text-black hover:bg-brand-yellow/90">
                        INICIAR NUEVA MISIÓN
                    </Button>
                    <Button onClick={() => navigate('/adventure')} variant="outline" size="lg" className="text-xl py-7 border-white/20 text-gray-400 hover:text-white">
                        VOLVER AL TRAYECTO
                    </Button>
                </div>
            </div>
        );
    }

    if (quizCompleted) {
        const achievement = getFinalAchievement(score);
        const percentage = Math.min(100, Math.round((score / (indices.length * 10)) * 100));

        return (
            <div className="min-h-screen bg-brand-navy flex items-center justify-center p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 ambient-glow-yellow pointer-events-none opacity-20" />
                <div className="absolute bottom-0 left-0 w-96 h-96 ambient-glow-red pointer-events-none opacity-10" />

                <div className="max-w-3xl w-full animate-in zoom-in duration-500 relative z-10">
                    <Trophy className="w-20 h-20 text-brand-yellow mx-auto mb-6 animate-bounce" />
                    <h1 className="text-5xl md:text-7xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-2">Simulador Completado</h1>
                    <p className="text-brand-red text-xl font-bold uppercase tracking-widest mb-8">EXAMEN CATEGORÍA A — MOTOVEHÍCULOS</p>

                    <div className={cn(
                        "border-2 bg-white/5 backdrop-blur-sm p-6 rounded-2xl mb-8 max-w-xl mx-auto animate-in fade-in slide-in-from-top-4 duration-1000",
                        achievement.color
                    )}>
                        <h3 className="font-brand-heading font-bold italic uppercase text-2xl mb-2">{achievement.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{achievement.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
                        <Card className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center rounded-xl">
                            <div className="text-5xl md:text-6xl font-brand-heading font-bold text-white mb-2">{score} pts</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Puntaje Acumulado</div>
                        </Card>

                        <Card className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center justify-center rounded-xl">
                            <div className="text-5xl md:text-6xl font-brand-heading font-bold text-brand-yellow mb-2">{percentage}%</div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Nivel de Aprobación</div>
                        </Card>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <Button onClick={resetQuiz} size="lg" className="flex-grow shadow-hard bg-brand-yellow text-brand-navy hover:bg-white text-xl py-6">
                            REPETIR SIMULADOR <RotateCcw className="ml-2 w-5 h-5" />
                        </Button>
                        <Button onClick={() => navigate('/adventure')} variant="outline" size="lg" className="flex-grow text-xl py-6 text-gray-400 hover:text-white border-white/20">
                            VOLVER AL CAMINO
                        </Button>
                    </div>
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
                        <div 
                            key={i} 
                            className="absolute h-full w-[2px] bg-brand-yellow left-[20%] animate-[speedLine_0.8s_linear_infinite]" 
                            style={{ left: `${15 * i + 10}%`, animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>
            )}

            <div className="w-full max-w-4xl relative z-10 flex flex-col">
                {/* Header Stats */}
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

                {/* Progress Indicators */}
                <div className="flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <Bike className="w-5 h-5 text-brand-yellow" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Examen Motos: Pregunta {currentQuestionIdx + 1} de {indices.length}
                        </span>
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
                    {/* Visual Icon Area */}
                    <div className={cn(
                        "w-full md:w-64 h-48 md:h-auto min-h-[192px] flex-shrink-0 bg-white/5 flex items-center justify-center border-2 transition-all duration-500 rounded-2xl relative overflow-hidden",
                        isAnswered && selectedOption === currentQuestion.correctAnswer ? "border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] bg-green-500/5" : "border-white/10"
                    )}>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 rounded-2xl pointer-events-none" />
                        {currentQuestion.image ? (
                            <img 
                                src={`${import.meta.env.BASE_URL}simulator/images/${currentQuestion.image}`} 
                                alt={currentQuestion.question} 
                                className="w-full h-full object-contain p-2 transition-all duration-500 hover:scale-105"
                            />
                        ) : (
                            renderQuestionIcon(currentQuestion.iconType)
                        )}
                    </div>

                    {/* Question & Options Grid */}
                    <div className="flex-grow flex flex-col justify-center">
                        <h2 className="text-xl md:text-3xl font-brand-heading font-black italic uppercase text-white mb-6 md:mb-8 leading-snug text-left drop-shadow-md">
                            {currentQuestion.question}
                        </h2>

                        <div className="grid grid-cols-1 gap-3 md:gap-4 flex-grow">
                            {currentQuestion.options.map((option, idx) => {
                                const isCorrect = idx === currentQuestion.correctAnswer;
                                const isSelected = selectedOption === idx;

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        disabled={isAnswered}
                                        className={cn(
                                            "w-full text-left px-5 py-4 md:py-5 border-2 font-bold text-sm md:text-base uppercase transition-all duration-300 relative group overflow-hidden rounded-xl h-full flex items-center",
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
                                                {String.fromCharCode(65 + idx)}
                                            </span>
                                            <span className="flex-grow leading-tight text-xs md:text-sm">{option}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Educational Explanation Box */}
                {isAnswered && (
                    <Card className="mb-6 p-5 border border-white/10 bg-brand-navy/60 backdrop-blur-sm animate-in slide-in-from-top-4 duration-500 flex gap-4 items-start rounded-2xl">
                        <Lightbulb className={cn(
                            "w-6 h-6 shrink-0 mt-0.5",
                            selectedOption === currentQuestion.correctAnswer ? "text-brand-yellow" : "text-brand-red animate-pulse"
                        )} />
                        <div>
                            <h4 className="font-bold text-xs uppercase tracking-widest mb-1 text-white">
                                {selectedOption === currentQuestion.correctAnswer ? '¡EXCELENTE CRITERIO!' : 'REGLA DE SEGURIDAD VIAL'}
                            </h4>
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                                {currentQuestion.explanation}
                            </p>
                        </div>
                    </Card>
                )}

                {/* Next Question Navigation */}
                <div className={cn(
                    "mb-8 transition-all duration-500 overflow-hidden",
                    isAnswered ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
                )}>
                    <Button
                        onClick={nextQuestion}
                        fullWidth
                        size="lg"
                        className="text-lg md:text-xl py-6 md:py-8 bg-white text-brand-navy hover:bg-gray-200 shadow-hard group"
                    >
                        <span className="flex items-center gap-2">
                            {currentQuestionIdx < indices.length - 1 ? 'SIGUIENTE PREGUNTA' : 'FINALIZAR EXAMEN'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Button>
                </div>

                {/* Bottom Progress Bar */}
                <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Progreso del Examen Teórico</span>
                        <span className="text-[10px] font-mono font-bold text-brand-yellow">
                            {Math.round(((currentQuestionIdx + 1) / indices.length) * 100)}%
                        </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-brand-yellow via-brand-yellow to-white transition-all duration-1000 ease-out"
                            style={{ width: `${((currentQuestionIdx + 1) / indices.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-10px); } 75% { transform: translateX(10px); } }
                @keyframes speedLine { from { transform: translateY(-100%); opacity: 0; } 50% { opacity: 0.5; } to { transform: translateY(100%); opacity: 0; } }
            ` }} />
        </div>
    );
}
