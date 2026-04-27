
import { useLocalState } from '../hooks/useLocalState';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { emergentologiaQuestions } from '../data/emergentologiaQuiz';
import { cn } from '../utils/cn';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Home, Siren } from 'lucide-react';

export function QuizEmergentologia() {
    const [currentQuestion, setCurrentQuestion] = useLocalState('quiz_em_currentQuestion', 0);
    const [selectedAnswer, setSelectedAnswer] = useLocalState<number | null>('quiz_em_selectedAnswer', null);
    const [showResult, setShowResult] = useLocalState('quiz_em_showResult', false);
    const [score, setScore] = useLocalState('quiz_em_score', 0);
    const [quizCompleted, setQuizCompleted] = useLocalState('quiz_em_quizCompleted', false);

    const { setEmergentologiaScore } = useSurveyStore();

    const question = emergentologiaQuestions[currentQuestion];

    const handleAnswer = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
        setShowResult(true);
        if (index === question.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const nextQuestion = () => {
        setSelectedAnswer(null);
        setShowResult(false);
        if (currentQuestion < emergentologiaQuestions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setEmergentologiaScore(score);
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setQuizCompleted(false);
    };

    if (quizCompleted) {
        return (
            <div className="py-12 md:py-24 max-w-2xl mx-auto px-4 text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-8">
                    <CheckCircle2 className="w-20 h-20 text-brand-yellow mx-auto mb-6" />
                    <h2 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase tracking-tighter mb-4">
                        Simulación <span className="text-brand-yellow">Completada</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Has demostrado capacidad para actuar como primer respondiente. Recordá: la calma es tu mejor herramienta.
                    </p>
                    <div className="text-6xl font-brand-heading font-bold italic text-white mb-12">
                        {score} <span className="text-gray-600">/ {emergentologiaQuestions.length}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button onClick={restartQuiz} variant="outline" size="lg" className="w-full">
                        <RotateCcw className="mr-2 w-5 h-5" /> REPETIR SIMULACIÓN
                    </Button>
                    <Link to="/modules">
                        <Button size="lg" className="w-full">
                            <Home className="mr-2 w-5 h-5" /> MÓDULOS
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
                    <Siren className="w-6 h-6 text-brand-red animate-pulse" />
                    <h1 className="text-xl md:text-2xl font-brand-heading font-bold italic uppercase tracking-tighter">
                        Simulación de <span className="text-brand-red">Emergencia</span>
                    </h1>
                </div>
                <div className="text-xs md:text-sm font-mono text-gray-400">
                    CASO {currentQuestion + 1} DE {emergentologiaQuestions.length}
                </div>
            </div>

            {/* Scenario Card */}
            <Card className="p-6 md:p-10 mb-8 border-brand-red/20 bg-brand-dark-grey/50">
                <div className="mb-6 md:mb-8">
                    <span className="text-xs font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-3 py-1 rounded border border-brand-red/20">
                        Escenario de Siniestro
                    </span>
                    <h2 className="text-xl md:text-3xl font-brand-heading font-bold italic uppercase text-white mt-6 leading-tight">
                        {question.scenario}
                    </h2>
                </div>

                {showResult && (
                    <div className="mb-8 p-5 md:p-6 bg-brand-navy border border-gray-700 animate-in slide-in-from-top-4 duration-500 rounded-lg">
                        <div className="flex items-start gap-3">
                            <Siren className={cn(
                                "w-6 h-6 shrink-0 mt-1",
                                selectedAnswer === question.correctAnswer ? "text-green-500" : "text-brand-red"
                            )} />
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-white">
                                    {selectedAnswer === question.correctAnswer ? '¡Correcto!' : 'Fundamento del Protocolo'}
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {question.explanation}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={nextQuestion}
                            className="mt-6 w-full md:w-auto"
                        >
                            {currentQuestion === emergentologiaQuestions.length - 1 ? 'FINALIZAR' : 'SIGUIENTE ESCENARIO'} <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                )}

                <div className="space-y-3">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                            className={cn(
                                "w-full text-left p-4 md:p-5 border-2 transition-all duration-200 flex items-center justify-between group rounded-sm",
                                showResult
                                    ? index === question.correctAnswer
                                        ? "bg-green-500/10 border-green-500 text-green-500"
                                        : index === selectedAnswer
                                            ? "bg-red-500/10 border-brand-red text-brand-red"
                                            : "opacity-40 border-gray-800 text-gray-500"
                                    : "bg-brand-dark-grey border-gray-800 hover:border-gray-500 text-gray-300 hover:text-white"
                            )}
                        >
                            <span className="text-sm md:text-lg font-medium">{option}</span>
                            {showResult && index === question.correctAnswer && <CheckCircle2 className="w-6 h-6 shrink-0" />}
                            {showResult && index === selectedAnswer && index !== question.correctAnswer && <XCircle className="w-6 h-6 shrink-0" />}
                        </button>
                    ))}
                </div>
            </Card>

            <div className="text-center">
                <Link to="/emergentologia" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">
                    Abandona la simulación
                </Link>
            </div>
        </div>
    );
}
