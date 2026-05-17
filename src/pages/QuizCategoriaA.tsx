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
    HelpCircle,
    ArrowLeft,
    BookOpen,
    Sparkles
} from 'lucide-react';
import { useToast } from '../components/ui/Toast';


export function QuizCategoriaA() {
    const navigate = useNavigate();
    const { showToast } = useToast();

    // Mode Selector State
    const [quizMode, setQuizMode] = useLocalState<'quick' | 'official' | 'hardcore' | 'all' | null>('quiz_catA_mode', null);
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useLocalState<string>('quiz_catA_categoryFilter', 'all');

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

    // Scroll reinforcement when question changes
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [currentQuestionIdx, quizMode]);

    // Timer effect
    useEffect(() => {
        // Disallowed in study mode 'all'
        if (quizMode === 'all' || !quizMode) return;

        if (timeLeft > 0 && !isAnswered && !gameOver && !quizCompleted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isAnswered && !gameOver && !quizCompleted) {
            handleTimeOut();
        }
    }, [timeLeft, isAnswered, gameOver, quizCompleted, quizMode]);

    // Turbo Mode activation
    useEffect(() => {
        if (streak >= 3) setIsTurbo(true);
        else setIsTurbo(false);
    }, [streak]);

    // Get unique categories list from database
    const categoriesList = [
        { id: 'all', label: 'Todas las Categorías (502 preguntas)' },
        { id: 'Introducción', label: 'Introducción (13 preguntas)' },
        { id: 'Capítulo 1: Aspectos Generales y Legales', label: 'Capítulo 1: Aspectos Generales y Legales (32 preguntas)' },
        { id: 'Capítulo 2: Normas de Conducción y Prioridades', label: 'Capítulo 2: Normas de Conducción y Prioridades (69 preguntas)' },
        { id: 'Capítulo 3: Condiciones Adversas e Incidentes', label: 'Capítulo 3: Condiciones Adversas e Incidentes (47 preguntas)' },
        { id: 'Anexo I: Motovehículos', label: 'Anexo I: Motovehículos (160 preguntas)' },
        { id: 'Anexo V: Señales Viales', label: 'Anexo V: Señales Viales (181 preguntas)' }
    ];

    // Helper to start the quiz with specific mode and category filter
    const startQuiz = (mode: 'quick' | 'official' | 'hardcore' | 'all', categoryFilter: string) => {
        setQuizMode(mode);
        setSelectedCategoryFilter(categoryFilter);

        // Get matching indices from the global list
        const filteredIndices: number[] = [];
        examenCategoriaAQuestions.forEach((q, idx) => {
            if (categoryFilter === 'all' || q.category === categoryFilter) {
                filteredIndices.push(idx);
            }
        });

        if (filteredIndices.length === 0) {
            showToast('No hay preguntas en esta categoría', 'error');
            return;
        }

        let chosenIndices: number[] = [];
        if (mode === 'all') {
            // Sequential study mode: include all matching questions in order
            chosenIndices = [...filteredIndices];
        } else {
            // Exam practice mode: randomly choose N questions from matching set
            let count = 10;
            if (mode === 'official') count = 30;
            else if (mode === 'hardcore') count = 50;

            const shuffled = [...filteredIndices].sort(() => 0.5 - Math.random());
            chosenIndices = shuffled.slice(0, Math.min(count, shuffled.length));
        }

        setActiveQuestionIndices(chosenIndices);
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setScore(0);
        // Study mode 'all' gets infinite/very high lives, timed mode gets 3
        setLives(mode === 'all' ? 9999 : 3);
        setStreak(0);
        setIsAnswered(false);
        // Study mode gets infinite timer
        setTimeLeft(mode === 'all' ? 9999 : 20);
        setGameOver(false);
        setQuizCompleted(false);
        showToast(`Iniciando Modo: ${mode === 'all' ? 'Estudio' : 'Examen'}`, 'success');
    };

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
        if (quizMode === 'all') {
            // Mistakes in Study mode do not deduct lives or trigger game over
            setStreak(0);
            setShake(true);
            setTimeout(() => setShake(false), 500);
            showToast('Respuesta Incorrecta. ¡Repasá la explicación!', 'error');
            return;
        }

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
            setTimeLeft(quizMode === 'all' ? 9999 : 20);
        } else {
            setQuizCompleted(true);
            showToast('¡Simulador Categoría A Completado!', 'success');
        }
    };

    const resetQuiz = () => {
        if (!quizMode) return;
        startQuiz(quizMode, selectedCategoryFilter);
    };

    const exitToSelector = () => {
        if (confirm('¿Deseás salir al selector de modos? Tu progreso en esta simulación se perderá.')) {
            setQuizMode(null);
        }
    };

    // Safe indices resolution
    const indices = activeQuestionIndices && activeQuestionIndices.length > 0
        ? activeQuestionIndices
        : [0];

    const currentQuestion = examenCategoriaAQuestions[indices[currentQuestionIdx]] || examenCategoriaAQuestions[0];

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
        if (quizMode === 'all') {
            return { title: 'REPASO COMPLETADO 📚', desc: '¡Gran trabajo! Completaste todo el bloque de estudio. Incorporar estos conceptos te hará un conductor ejemplar en la calle.', color: 'text-brand-yellow border-brand-yellow' };
        }
        const percentage = Math.min(100, Math.round((finalScore / (indices.length * 10)) * 100));
        if (percentage >= 90) return { title: 'PILOTO DE ÉLITE 👑', desc: '¡Perfecto! Dominás por completo las leyes de tránsito y la seguridad de motovehículos en CABA.', color: 'text-brand-yellow border-brand-yellow' };
        if (percentage >= 70) return { title: 'MOTO-EXPERTO 🏍️', desc: '¡Muy bien! Contás con un excelente criterio de seguridad y prevención vial.', color: 'text-green-400 border-green-400' };
        return { title: 'PRINCIPIANTE VIAL 🛡️', desc: 'Buen intento, pero es necesario repasar la teoría para circular seguro y pasar el examen oficial.', color: 'text-brand-red border-brand-red' };
    };

    // SCREEN 1: MODE SELECTOR
    if (quizMode === null) {
        return (
            <div className="min-h-screen bg-brand-navy grid-bg-overlay flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 ambient-glow-yellow pointer-events-none opacity-20" />
                <div className="absolute bottom-0 left-0 w-96 h-96 ambient-glow-red pointer-events-none opacity-10" />

                <div className="w-full max-w-5xl z-10 flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <Button 
                                onClick={() => navigate('/adventure')} 
                                variant="outline" 
                                size="sm" 
                                className="border-white/10 text-gray-400 hover:text-white mb-2 px-3 py-1 flex items-center gap-1 text-[10px]"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" /> VOLVER AL TRAYECTO
                            </Button>
                            <h1 className="text-3xl md:text-5xl font-brand-heading font-black italic uppercase text-white leading-none">
                                Simulador <span className="text-brand-yellow">Categoría A</span>
                            </h1>
                            <p className="text-gray-400 text-xs md:text-sm mt-1 uppercase tracking-widest font-bold">
                                BANCO OFICIAL DE PREGUNTAS CABA — MOTOVEHÍCULOS
                            </p>
                        </div>
                        <div className="bg-brand-yellow/10 border border-brand-yellow/20 px-4 py-2 flex items-center gap-3">
                            <span className="text-2xl">🏍️</span>
                            <div>
                                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">BANCO TOTAL</span>
                                <span className="text-lg font-mono font-bold text-brand-yellow">502 PREGUNTAS</span>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter dropdown */}
                    <Card className="p-5 border border-white/5 bg-[#0a192f]/60 backdrop-blur-md mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-brand-yellow w-5 h-5" />
                            <div>
                                <h3 className="text-white text-sm font-bold uppercase">Filtrar por Capítulo o Anexo</h3>
                                <p className="text-gray-400 text-xs">Alineá tu práctica a la sección específica del manual que estás estudiando.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <select 
                                value={selectedCategoryFilter} 
                                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                                className="w-full md:w-80 bg-brand-navy border border-white/10 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-lg focus:outline-none focus:border-brand-yellow transition-all"
                            >
                                {categoriesList.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                        </div>
                    </Card>

                    {/* Mode Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mode 1: Quick Practice */}
                        <div 
                            onClick={() => startQuiz('quick', selectedCategoryFilter)}
                            className="glass-panel p-6 border border-white/5 hover:border-brand-yellow/40 transition-all rounded-2xl flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase bg-brand-yellow/10 border border-brand-yellow/30 px-3 py-1 text-brand-yellow rounded-full">
                                        10 PREGUNTAS
                                    </span>
                                </div>
                                <h3 className="text-2xl font-brand-heading font-black italic uppercase text-white mb-2 group-hover:text-brand-yellow transition-colors">
                                    Práctica Express
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Evaluación veloz y dinámica de 10 preguntas seleccionadas al azar. Perfecto para un repaso rápido entre clases o antes del examen.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                <span>3 VIDAS • 20s POR PREGUNTA</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Mode 2: Official Exam */}
                        <div 
                            onClick={() => startQuiz('official', selectedCategoryFilter)}
                            className="glass-panel p-6 border border-white/5 hover:border-brand-red/40 transition-all rounded-2xl flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase bg-brand-red/10 border border-brand-red/30 px-3 py-1 text-brand-red rounded-full">
                                        30 PREGUNTAS
                                    </span>
                                </div>
                                <h3 className="text-2xl font-brand-heading font-black italic uppercase text-white mb-2 group-hover:text-brand-red transition-colors">
                                    Examen Oficial CABA
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Simulación estricta con 30 preguntas de todas las categorías en base al manual de tránsito de CABA. Prepárate para el verdadero desafío.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                <span>3 VIDAS • 20s POR PREGUNTA</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-pulse" />
                            </div>
                        </div>

                        {/* Mode 3: Hardcore Marathon */}
                        <div 
                            onClick={() => startQuiz('hardcore', selectedCategoryFilter)}
                            className="glass-panel p-6 border border-white/5 hover:border-orange-500/40 transition-all rounded-2xl flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-orange-500 rounded-full">
                                        50 PREGUNTAS
                                    </span>
                                </div>
                                <h3 className="text-2xl font-brand-heading font-black italic uppercase text-white mb-2 group-hover:text-orange-500 transition-colors">
                                    Maratón Extrema
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Un desafío de alto rendimiento con 50 preguntas aleatorias de alta dificultad para comprobar que realmente dominás toda la teoría vial.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                <span>3 VIDAS • 20s POR PREGUNTA</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Mode 4: Progressive Advanced Study Mode */}
                        <div 
                            onClick={() => startQuiz('all', selectedCategoryFilter)}
                            className="glass-panel p-6 border border-brand-yellow/20 bg-brand-yellow/[0.02] hover:border-brand-yellow/50 transition-all rounded-2xl flex flex-col justify-between cursor-pointer group hover:-translate-y-1 relative"
                        >
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 border border-brand-yellow/40 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest uppercase bg-brand-yellow/20 border border-brand-yellow/40 px-3 py-1 text-brand-yellow rounded-full">
                                        ESTUDIO COMPLETO
                                    </span>
                                </div>
                                <h3 className="text-2xl font-brand-heading font-black italic uppercase text-white mb-2 group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                                    Modo de Estudio Avanzado <Sparkles className="w-4 h-4 text-brand-yellow" />
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Estudiá e incorporá de forma ordenada las 502 preguntas del banco oficial. Sin vidas ni límites de tiempo. Tu progreso se guardará automáticamente para que continúes cuando quieras.
                                </p>
                            </div>
                            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-brand-yellow uppercase tracking-widest">
                                <span>VIDAS INFINITAS • SIN CRONÓMETRO • EXPLICACIÓN SIEMPRE</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // SCREEN 2: GAME OVER / FAIL SCREEN
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
                    <Button onClick={exitToSelector} variant="outline" size="lg" className="text-xl py-7 border-white/20 text-gray-400 hover:text-white">
                        CAMBIAR DE MODO
                    </Button>
                </div>
            </div>
        );
    }

    // SCREEN 3: QUIZ COMPLETE / RESULTS SCREEN
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
                    <p className="text-brand-red text-xl font-bold uppercase tracking-widest mb-8">
                        EXAMEN CATEGORÍA A — {quizMode === 'all' ? 'ESTUDIO COMPLETO' : 'PRÁCTICA ACTIVA'}
                    </p>

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
                            <div className="text-5xl md:text-6xl font-brand-heading font-bold text-brand-yellow mb-2">
                                {quizMode === 'all' ? '100%' : `${percentage}%`}
                            </div>
                            <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Nivel de Aprobación</div>
                        </Card>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <Button onClick={resetQuiz} size="lg" className="flex-grow shadow-hard bg-brand-yellow text-brand-navy hover:bg-white text-xl py-6">
                            REPETIR SIMULADOR <RotateCcw className="ml-2 w-5 h-5" />
                        </Button>
                        <Button onClick={() => setQuizMode(null)} variant="outline" size="lg" className="flex-grow text-xl py-6 text-gray-400 hover:text-white border-white/20">
                            CAMBIAR DE MODO
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // SCREEN 4: ACTIVE QUESTION SIMULATOR LAYOUT
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
                <div className="grid grid-cols-3 items-center mb-6 bg-brand-dark-grey/40 backdrop-blur-md border border-white/5 p-4 md:p-6 rounded-2xl shadow-2xl relative">
                    <div className="flex flex-col gap-1.5 md:gap-2">
                        {quizMode === 'all' ? (
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-[9px] font-bold uppercase tracking-wider w-fit">
                                <span className="text-sm">⚡</span> MODO ESTUDIO
                            </div>
                        ) : (
                            <div className="flex gap-1">
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
                        )}
                        <button 
                            onClick={exitToSelector}
                            className="text-[9px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors w-fit underline mt-1"
                        >
                            ← CAMBIAR MODO
                        </button>
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-0.5 opacity-60">
                            <Trophy className={cn("w-3.5 h-3.5", streak > 0 ? "text-brand-yellow" : "text-gray-400")} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Puntaje</span>
                        </div>
                        <span className="text-xl md:text-3xl font-mono font-black text-white leading-none tracking-tighter">{score}</span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        {quizMode === 'all' ? (
                            <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold uppercase tracking-widest">
                                ∞ ILIMITADO
                            </div>
                        ) : (
                            <div className={cn(
                                "flex items-center gap-1.5 px-4 py-1.5 rounded-full border transition-all duration-300",
                                timeLeft < 5 ? "bg-brand-red/10 border-brand-red/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "bg-white/5 border-white/10"
                            )}>
                                <Timer className={cn("w-4 h-4", timeLeft < 5 ? "text-brand-red animate-pulse" : "text-brand-yellow")} />
                                <span className={cn("text-xl md:text-2xl font-mono font-black leading-none", timeLeft < 5 ? "text-brand-red" : "text-white")}>
                                    {timeLeft}s
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <Bike className="w-5 h-5 text-brand-yellow" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Pregunta {currentQuestionIdx + 1} de {indices.length} • {currentQuestion.category}
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
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-medium">
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
