import { useState, useEffect, useCallback } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Clock, CheckCircle, XCircle, AlertCircle, ArrowRight, ArrowLeft, Trophy, RotateCcw, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXAM_TIME_MINUTES = 45;
const QUESTIONS_COUNT = 40;
const PASSING_PERCENTAGE = 85;

interface SimulatorOption {
    text: string;
    isCorrect: boolean;
}

interface SimulatorQuestion {
    id: string;
    question: string;
    options: SimulatorOption[];
    tema: string;
    manual: string;
}

export function SimuladorTeorico() {
    const [allQuestions, setAllQuestions] = useState<SimulatorQuestion[]>([]);
    const [loadingQuestions, setLoadingQuestions] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(EXAM_TIME_MINUTES * 60);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [examQuestions, setExamQuestions] = useState<SimulatorQuestion[]>([]);

    const loadAndStartExam = useCallback(async () => {
        setLoadingQuestions(true);
        try {
            let questions = allQuestions;
            if (questions.length === 0) {
                const mod = await import('../data/simulatorQuestions.json');
                questions = mod.default as SimulatorQuestion[];
                setAllQuestions(questions);
            }
            const shuffled = [...questions].sort(() => 0.5 - Math.random());
            setExamQuestions(shuffled.slice(0, QUESTIONS_COUNT));
            setSelectedAnswers({});
            setTimeLeft(EXAM_TIME_MINUTES * 60);
            setCurrentQuestionIndex(0);
            setIsStarted(true);
            setIsFinished(false);
        } catch (e) {
            console.error('Error loading questions', e);
        } finally {
            setLoadingQuestions(false);
        }
    }, [allQuestions]);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (isStarted && !isFinished && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isStarted && !isFinished) {
            setIsFinished(true);
        }
        return () => clearInterval(timer);
    }, [isStarted, isFinished, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
    };

    const handleSelectOption = (questionId: string, optionIndex: number) => {
        if (isFinished) return;
        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const calculateScore = () => {
        let correct = 0;
        examQuestions.forEach(q => {
            const selectedIdx = selectedAnswers[q.id];
            if (selectedIdx !== undefined && q.options[selectedIdx] && q.options[selectedIdx].isCorrect) {
                correct++;
            }
        });
        const total = examQuestions.length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { correct, total, percentage, passed: percentage >= PASSING_PERCENTAGE };
    };

    // Pantalla de inicio
    if (!isStarted) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
                <Card className="text-center p-8 border-brand-yellow/30 bg-brand-navy/95">
                    <Trophy className="w-20 h-20 text-brand-yellow mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-brand-heading font-bold italic uppercase mb-6 text-white">
                        Simulador Teorico de Examen
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Pon a prueba tus conocimientos antes de rendir el examen oficial para obtener la licencia de conducir.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                            <AlertCircle className="text-brand-yellow w-8 h-8 shrink-0" />
                            <div>
                                <h3 className="font-bold text-white uppercase">{QUESTIONS_COUNT} Preguntas</h3>
                                <p className="text-sm text-gray-400">Opcion multiple</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                            <Clock className="text-brand-yellow w-8 h-8 shrink-0" />
                            <div>
                                <h3 className="font-bold text-white uppercase">{EXAM_TIME_MINUTES} Minutos</h3>
                                <p className="text-sm text-gray-400">Tiempo limite</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                            <CheckCircle className="text-brand-yellow w-8 h-8 shrink-0" />
                            <div>
                                <h3 className="font-bold text-white uppercase">{PASSING_PERCENTAGE}% para Aprobar</h3>
                                <p className="text-sm text-gray-400">Calificacion minima</p>
                            </div>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="w-full sm:w-auto text-xl py-6 px-12"
                        onClick={loadAndStartExam}
                        disabled={loadingQuestions}
                    >
                        {loadingQuestions
                            ? <><Loader className="mr-2 w-6 h-6 animate-spin" /> Cargando...</>
                            : <><span>Comenzar Simulacro</span><ArrowRight className="ml-2 w-6 h-6" /></>
                        }
                    </Button>
                </Card>
            </div>
        );
    }

    // Pantalla de resultados
    if (isFinished) {
        const score = calculateScore();
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
                <Card className="text-center p-8 border-brand-yellow/30 bg-brand-navy/95">
                    {score.passed
                        ? <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                        : <XCircle className="w-24 h-24 text-brand-red mx-auto mb-6" />
                    }
                    <h2 className="text-4xl font-brand-heading font-bold italic uppercase mb-2 text-white">
                        {score.passed ? 'Examen Aprobado!' : 'Examen Reprobado'}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Respondiste correctamente {score.correct} de {score.total} preguntas ({score.percentage}%).
                    </p>
                    <div className="bg-white/5 rounded-lg p-6 mb-8 text-left max-h-96 overflow-y-auto">
                        <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-6 text-brand-yellow border-b border-brand-yellow/20 pb-2">
                            Revision de Respuestas
                        </h3>
                        {examQuestions.map((q, i) => {
                            const selectedIdx = selectedAnswers[q.id];
                            const isCorrect = selectedIdx !== undefined && q.options[selectedIdx] && q.options[selectedIdx].isCorrect;
                            return (
                                <div key={q.id} className="mb-6 pb-6 border-b border-white/10 last:border-0">
                                    <p className="font-bold text-lg mb-3 flex items-start gap-3">
                                        <span className="text-gray-500 w-6 shrink-0">{i + 1}.</span>
                                        <span className="text-white">{q.question}</span>
                                    </p>
                                    <div className="pl-9 space-y-2">
                                        {q.options.map((opt, optIdx) => {
                                            let cls = 'p-3 rounded-lg border text-sm ';
                                            if (opt.isCorrect) {
                                                cls += 'bg-green-500/20 border-green-500/50 text-green-200';
                                            } else if (selectedIdx === optIdx) {
                                                cls += 'bg-red-500/20 border-red-500/50 text-red-200';
                                            } else {
                                                cls += 'bg-white/5 border-white/10 text-gray-400';
                                            }
                                            return <div key={optIdx} className={cls}>{opt.text}</div>;
                                        })}
                                    </div>
                                    {!isCorrect && q.manual && (
                                        <p className="pl-9 mt-3 text-sm text-brand-yellow/80">
                                            <strong>Referencia:</strong> {q.manual}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="outline" onClick={loadAndStartExam}>
                            <RotateCcw className="w-5 h-5 mr-2" /> Reintentar
                        </Button>
                        <Link to="/"><Button>Volver al Inicio</Button></Link>
                    </div>
                </Card>
            </div>
        );
    }

    // Pantalla de examen
    const question = examQuestions[currentQuestionIndex];
    if (!question) return null;

    const hasAnsweredCurrent = selectedAnswers[question.id] !== undefined;
    const answeredCount = Object.keys(selectedAnswers).length;
    const isLastQuestion = currentQuestionIndex === examQuestions.length - 1;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 bg-brand-navy/50 p-4 rounded-xl border border-white/10">
                <div className="flex flex-col items-start gap-1 w-full md:w-auto">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                        Pregunta {currentQuestionIndex + 1} de {QUESTIONS_COUNT}
                    </span>
                    <div className="w-full md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-yellow rounded-full transition-all duration-300"
                            style={{ width: ((currentQuestionIndex + 1) / QUESTIONS_COUNT * 100) + '%' }}
                        />
                    </div>
                </div>
                <div className={'flex items-center gap-2 font-bold ' + (timeLeft < 300 ? 'text-brand-red animate-pulse' : 'text-brand-yellow')}>
                    <Clock className="w-5 h-5" />
                    <span className="text-xl tracking-widest">{formatTime(timeLeft)}</span>
                </div>
            </div>

            <Card className="p-6 md:p-10 mb-6 bg-brand-navy/95 border-brand-yellow/20">
                {question.manual && (
                    <span className="text-xs font-bold text-brand-yellow/70 uppercase tracking-widest mb-4 block">
                        {question.manual}
                    </span>
                )}
                <h2 className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                    {question.question}
                </h2>
                <div className="space-y-4">
                    {question.options.map((opt, idx) => {
                        const isSelected = selectedAnswers[question.id] === idx;
                        const base = 'w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center gap-4 ';
                        const sel = 'bg-brand-yellow text-brand-navy border-brand-yellow font-bold shadow-[0_0_15px_rgba(255,214,0,0.3)]';
                        const unsel = 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30';
                        return (
                            <button
                                key={idx}
                                onClick={() => handleSelectOption(question.id, idx)}
                                className={base + (isSelected ? sel : unsel)}
                            >
                                <div className={'w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-sm ' + (isSelected ? 'border-brand-navy' : 'border-gray-500')}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="text-lg">{opt.text}</span>
                            </button>
                        );
                    })}
                </div>
            </Card>

            <div className="flex justify-between items-center">
                <Button
                    variant="outline"
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Anterior
                </Button>
                {isLastQuestion ? (
                    <div className="flex flex-col items-end gap-2">
                        <Button
                            onClick={() => setIsFinished(true)}
                            className="bg-brand-red hover:bg-brand-red/90 text-white"
                            disabled={answeredCount < QUESTIONS_COUNT}
                        >
                            Finalizar Examen <CheckCircle className="w-5 h-5 ml-2" />
                        </Button>
                        {answeredCount < QUESTIONS_COUNT && (
                            <p className="text-brand-red text-xs">Respondiste {answeredCount}/{QUESTIONS_COUNT}</p>
                        )}
                    </div>
                ) : (
                    <Button
                        onClick={() => setCurrentQuestionIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                        disabled={!hasAnsweredCurrent}
                    >
                        Siguiente <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                )}
            </div>
        </div>
    );
}
