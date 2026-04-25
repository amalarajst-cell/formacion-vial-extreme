import { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Clock, CheckCircle, XCircle, AlertCircle, ArrowRight, ArrowLeft, Trophy, RotateCcw, Loader, BookOpen, GraduationCap, ChevronRight, Filter, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXAM_TIME_MINUTES = 45;
const EXAM_QUESTIONS_COUNT = 40;
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
    image?: string;
    needsImage?: boolean;
}

type ViewMode = 'intro' | 'mode-selection' | 'theme-selection' | 'chapter-selection' | 'quiz';

export function SimuladorTeorico() {
    const [allQuestions, setAllQuestions] = useState<SimulatorQuestion[]>([]);
    const [loadingQuestions, setLoadingQuestions] = useState(false);
    const [viewMode, setViewMode] = useState<ViewMode>('intro');
    const [isFinished, setIsFinished] = useState(false);
    const [isExamMode, setIsExamMode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(EXAM_TIME_MINUTES * 60);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [examQuestions, setExamQuestions] = useState<SimulatorQuestion[]>([]);
    
    // Categorias dinamicas
    const [themes, setThemes] = useState<string[]>([]);
    const [chapters, setChapters] = useState<string[]>([]);

    const getImageUrl = (imagePath: string | undefined) => {
        if (!imagePath) return '';
        // Si ya es una URL completa (http), no tocar
        if (imagePath.startsWith('http')) return imagePath;
        
        // Limpiar el path si empieza con /
        const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
        
        // En Vite, import.meta.env.BASE_URL contiene la base path configurada (ej: /formacion-vial-extreme/)
        const baseUrl = import.meta.env.BASE_URL;
        const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
        
        return `${normalizedBase}${cleanPath}`;
    };

    const loadQuestionsData = async () => {
        if (allQuestions.length > 0) return allQuestions;
        setLoadingQuestions(true);
        try {
            const mod = await import('../data/simulatorQuestions.json');
            // Filtrar preguntas que necesitan imagen pero no la tienen
            const data = (mod.default as SimulatorQuestion[]).filter(q => !q.needsImage);
            setAllQuestions(data);
            
            // Extraer temas y capitulos unicos
            const uniqueThemes = [...new Set(data.map(q => q.tema))].filter(Boolean).sort();
            const uniqueChapters = [...new Set(data.map(q => q.manual))].filter(Boolean).sort((a, b) => {
                const aIsCap = a.startsWith('CAP');
                const bIsCap = b.startsWith('CAP');
                if (aIsCap && !bIsCap) return -1;
                if (!aIsCap && bIsCap) return 1;
                return a.localeCompare(b);
            });
            setThemes(uniqueThemes);
            setChapters(uniqueChapters);
            
            setLoadingQuestions(false);
            return data;
        } catch (e) {
            console.error('Error loading questions', e);
            setLoadingQuestions(false);
            return [];
        }
    };

    const startExamMode = async () => {
        const data = await loadQuestionsData();
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setExamQuestions(shuffled.slice(0, EXAM_QUESTIONS_COUNT));
        setIsExamMode(true);
        initQuiz();
    };

    const startCategoryStudy = async (type: 'theme' | 'chapter', value: string) => {
        const data = await loadQuestionsData();
        const filtered = data.filter(q => type === 'theme' ? q.tema === value : q.manual === value);
        setExamQuestions(filtered);
        setIsExamMode(false);
        initQuiz();
    };

    const initQuiz = () => {
        setSelectedAnswers({});
        setTimeLeft(EXAM_TIME_MINUTES * 60);
        setCurrentQuestionIndex(0);
        setIsFinished(false);
        setViewMode('quiz');
    };

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (viewMode === 'quiz' && isExamMode && !isFinished && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && viewMode === 'quiz' && isExamMode && !isFinished) {
            setIsFinished(true);
        }
        return () => clearInterval(timer);
    }, [viewMode, isExamMode, isFinished, timeLeft]);

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

    // ─── PANTALLA DE INTRODUCCION ───
    if (viewMode === 'intro') {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
                <Card className="text-center p-8 border-brand-yellow/30 bg-brand-navy/95">
                    <Trophy className="w-20 h-20 text-brand-yellow mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-brand-heading font-bold italic uppercase mb-6 text-white">
                        Simulador de Licencia de Conducir
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Preparate para el examen oficial. Practica con el simulador real o estudia por categorias especificas del manual.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <button 
                            onClick={() => setViewMode('mode-selection')}
                            className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-yellow hover:text-brand-navy transition-all group"
                        >
                            <GraduationCap className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold uppercase mb-2">Simulacro de Examen</h3>
                            <p className="text-sm opacity-70">40 preguntas aleatorias con tiempo limite de 45 minutos.</p>
                        </button>
                        
                        <button 
                            onClick={async () => {
                                await loadQuestionsData();
                                setViewMode('theme-selection');
                            }}
                            className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-yellow hover:text-brand-navy transition-all group"
                        >
                            <BookOpen className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold uppercase mb-2">Modo Estudio</h3>
                            <p className="text-sm opacity-70">Repasa por temas, señales o capitulos especificos del manual.</p>
                        </button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                            <BookOpen className="text-brand-yellow w-6 h-6" />
                            Material de Apoyo
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a 
                                href={getImageUrl('assets/manuals/manual-auto.pdf')} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Manual del Conductor (Auto)</p>
                                    <p className="text-xs opacity-50">PDF • Vehículos 4 Ruedas</p>
                                </div>
                                <ExternalLink className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a 
                                href={getImageUrl('assets/manuals/manual-moto.pdf')} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Manual del Conductor (Moto)</p>
                                    <p className="text-xs opacity-50">PDF • Motovehículos</p>
                                </div>
                                <ExternalLink className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <Link to="/">
                            <Button variant="ghost" className="text-gray-400 hover:text-white">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Volver al Inicio
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    const formatChapterName = (name: string) => {
        // Si tiene el patron "ANEXO X - TEXTO (Subtema)"
        const match = name.match(/^(.*?)\s*-\s*(.*?)\s*\((.*?)\)$/);
        if (match) {
            return {
                main: match[3], // El subtema en parentesis es lo mas importante
                sub: `${match[1]} - ${match[2]}`
            };
        }
        
        // Si tiene el patron "CAPITULO X - Texto"
        const dashMatch = name.match(/^(.*?)\s*-\s*(.*)$/);
        if (dashMatch) {
            return {
                main: dashMatch[2],
                sub: dashMatch[1]
            };
        }

        return { main: name, sub: '' };
    };

    // ─── PANTALLA SELECCION DE MODO ESTUDIO ───
    if (viewMode === 'theme-selection' || viewMode === 'chapter-selection') {
        const isTheme = viewMode === 'theme-selection';
        const list = isTheme ? themes : chapters;
        
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
                <Card className="p-8 border-brand-yellow/30 bg-brand-navy/95">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-white/10 pb-6 gap-4">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setViewMode('intro')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <ArrowLeft className="w-6 h-6 text-white" />
                            </button>
                            <h2 className="text-xl sm:text-3xl font-brand-heading font-bold italic uppercase text-white leading-tight">
                                {isTheme ? 'Seleccionar Tema' : 'Seleccionar Capítulo'}
                            </h2>
                        </div>
                        <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full sm:w-auto"
                            onClick={() => setViewMode(isTheme ? 'chapter-selection' : 'theme-selection')}
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            {isTheme ? 'Ver por Capítulos' : 'Ver por Temas'}
                        </Button>
                    </div>

                    {loadingQuestions ? (
                        <div className="flex flex-col items-center py-20">
                            <Loader className="w-12 h-12 animate-spin text-brand-yellow mb-4" />
                            <p className="text-gray-400">Preparando categorias...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            {list.map((item, idx) => {
                                const info = isTheme ? { main: item, sub: '' } : formatChapterName(item);
                                return (
                                    <button 
                                        key={idx}
                                        onClick={() => startCategoryStudy(isTheme ? 'theme' : 'chapter', item)}
                                        className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-xl hover:border-brand-yellow hover:bg-brand-yellow/5 text-left group transition-all"
                                    >
                                        <div className="flex flex-col gap-1 pr-4">
                                            {info.sub && <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{info.sub}</span>}
                                            <span className="text-white group-hover:text-brand-yellow font-bold text-lg leading-tight uppercase italic">{info.main}</span>
                                        </div>
                                        <ChevronRight className="w-6 h-6 text-gray-600 shrink-0 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </Card>
            </div>
        );
    }

    // ─── SELECCION DE MODO EXAMEN (Confirmacion) ───
    if (viewMode === 'mode-selection') {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in duration-500">
                <Card className="text-center p-8 border-brand-yellow/30 bg-brand-navy/95">
                    <div className="flex justify-start mb-6">
                         <button onClick={() => setViewMode('intro')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                             <ArrowLeft className="w-6 h-6 text-white" />
                         </button>
                    </div>
                    <GraduationCap className="w-20 h-20 text-brand-yellow mx-auto mb-6" />
                    <h2 className="text-4xl font-brand-heading font-bold italic uppercase mb-6 text-white">Preparado para el simulacro?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4">
                            <AlertCircle className="text-brand-yellow w-8 h-8 shrink-0" />
                            <div>
                                <h3 className="font-bold text-white uppercase">{EXAM_QUESTIONS_COUNT} Preguntas</h3>
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
                                <p className="text-sm text-gray-400">Minimo requerido</p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" className="w-full sm:w-auto text-xl py-6 px-12" onClick={startExamMode}>
                        Empezar Examen <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </Card>
            </div>
        );
    }

    // ─── PANTALLA DE RESULTADOS ───
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

                    <div className="bg-white/5 rounded-lg p-6 mb-8 text-left max-h-96 overflow-y-auto custom-scrollbar">
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
                                    
                                    {q.image && (
                                        <div className="pl-9 mb-4">
                                            <img 
                                                src={getImageUrl(q.image)} 
                                                alt="Visual de la pregunta" 
                                                className="max-w-[200px] h-auto rounded border border-white/10"
                                            />
                                        </div>
                                    )}
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
                                        <p className="pl-9 mt-3 text-sm text-brand-yellow/80 bg-brand-yellow/5 p-3 rounded-lg border border-brand-yellow/20">
                                            <strong>Referencia:</strong> {q.manual} {q.tema ? ` - ${q.tema}` : ''}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="outline" onClick={() => setViewMode('intro')}>
                            <RotateCcw className="w-5 h-5 mr-2" /> Volver a Modos
                        </Button>
                        <Link to="/"><Button>Volver al Inicio</Button></Link>
                    </div>
                </Card>
            </div>
        );
    }

    // ─── PANTALLA DE EXAMEN / ESTUDIO ───
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
                        {isExamMode ? 'Pregunta' : 'Practica'} {currentQuestionIndex + 1} de {examQuestions.length}
                    </span>
                    <div className="w-full md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-yellow rounded-full transition-all duration-300"
                            style={{ width: ((currentQuestionIndex + 1) / examQuestions.length * 100) + '%' }}
                        />
                    </div>
                </div>
                
                {isExamMode ? (
                    <div className={'flex items-center gap-2 font-bold ' + (timeLeft < 300 ? 'text-brand-red animate-pulse' : 'text-brand-yellow')}>
                        <Clock className="w-5 h-5" />
                        <span className="text-xl tracking-widest">{formatTime(timeLeft)}</span>
                    </div>
                ) : (
                    <div className="px-4 py-2 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full text-brand-yellow text-sm font-bold uppercase">
                        Modo Estudio
                    </div>
                )}
            </div>

            <Card className="p-6 md:p-10 mb-6 bg-brand-navy/95 border-brand-yellow/20">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-brand-yellow/70 uppercase tracking-widest bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/20">
                        {question.manual}
                    </span>
                    {!isExamMode && (
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                            {question.tema}
                        </span>
                    )}
                </div>
                
                {question.image && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-black/20 flex justify-center">
                        <img 
                            src={getImageUrl(question.image)} 
                            alt="Visual de la pregunta" 
                            className="max-w-full max-h-[300px] object-contain"
                        />
                    </div>
                )}
                
                <h2 className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                    {question.question}
                </h2>
                
                <div className="space-y-4">
                    {question.options.map((opt, idx) => {
                        const isSelected = selectedAnswers[question.id] === idx;
                        const showFeedback = !isExamMode && hasAnsweredCurrent;
                        
                        let optionClass = 'w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center gap-4 ';
                        
                        if (isSelected) {
                            if (showFeedback) {
                                optionClass += opt.isCorrect ? 'bg-green-500 text-white border-green-500 font-bold ' : 'bg-brand-red text-white border-brand-red font-bold ';
                            } else {
                                optionClass += 'bg-brand-yellow text-brand-navy border-brand-yellow font-bold shadow-[0_0_15px_rgba(255,214,0,0.3)] ';
                            }
                        } else {
                            if (showFeedback && opt.isCorrect) {
                                optionClass += 'bg-green-500/20 border-green-500 text-green-200 ';
                            } else {
                                optionClass += 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/30 ';
                            }
                        }
                        
                        return (
                            <button
                                key={idx}
                                onClick={() => handleSelectOption(question.id, idx)}
                                disabled={!isExamMode && hasAnsweredCurrent}
                                className={optionClass}
                            >
                                <div className={'w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-sm ' + (isSelected ? 'border-current' : 'border-gray-500')}>
                                    {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="text-lg">{opt.text}</span>
                                {showFeedback && isSelected && opt.isCorrect && <CheckCircle className="ml-auto w-6 h-6" />}
                                {showFeedback && isSelected && !opt.isCorrect && <XCircle className="ml-auto w-6 h-6" />}
                            </button>
                        );
                    })}
                </div>

                {!isExamMode && hasAnsweredCurrent && (
                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 animate-in slide-in-from-bottom-4">
                        <div className="flex items-center gap-3 mb-2 text-brand-yellow">
                            <BookOpen className="w-5 h-5" />
                            <span className="font-bold uppercase text-sm tracking-wider">Referencia de estudio</span>
                        </div>
                        <p className="text-gray-300">
                             {selectedAnswers[question.id] !== undefined && question.options[selectedAnswers[question.id]].isCorrect 
                                ? 'Correcto! ' 
                                : 'Incorrecto. La respuesta correcta esta marcada en verde. '}
                             Esta pregunta pertenece al manual: <strong>{question.manual}</strong> tema <strong>{question.tema}</strong>.
                        </p>
                    </div>
                )}
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
                            disabled={isExamMode && answeredCount < examQuestions.length}
                        >
                            {isExamMode ? 'Finalizar Examen' : 'Ver Resultados'} <CheckCircle className="w-5 h-5 ml-2" />
                        </Button>
                        {isExamMode && answeredCount < examQuestions.length && (
                            <p className="text-brand-red text-xs">Respondiste {answeredCount}/{examQuestions.length}</p>
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
