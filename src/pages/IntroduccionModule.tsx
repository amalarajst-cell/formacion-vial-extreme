import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Send, CheckCircle2, XCircle, Globe, Play } from 'lucide-react';

interface QuizAnswers {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string;
}

export function IntroduccionModule() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [answer, setAnswer] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({ q1: '', q2: '', q3: '', q4: '', q5: '' });
    const [showQuizResults, setShowQuizResults] = useState(false);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const checkQuizComplete = () => {
        const newAnswers = quizAnswers;
        if (newAnswers.q1 && newAnswers.q2 && newAnswers.q3 && newAnswers.q4 && newAnswers.q5) {
            setShowQuizResults(true);
        } else {
            alert('Por favor, responde todas las preguntas del cuestionario antes de verificar.');
        }
    };

    const handleQuizOptionClick = (question: keyof QuizAnswers, value: string) => {
        if (showQuizResults) return; // Prevent changing answers after completion
        setQuizAnswers(prev => ({ ...prev, [question]: value }));
    };

    const quizData = [
        {
            id: 'q1' as const,
            question: "¿Cuántas personas murieron en accidentes de tránsito en Córdoba durante el año 2021, según la cifra inicial presentada en el video?",
            options: [
                { id: '100', label: '100' },
                { id: '381', label: '381' },
                { id: '150', label: '150' },
                { id: '500', label: '500' }
            ],
            correctAnswer: '381'
        },
        {
            id: 'q2' as const,
            question: "Cuando se les pregunta por una meta a la cual aspirar, ¿qué reducción porcentual mínima mencionan los entrevistados?",
            options: [
                { id: '20%', label: '20%' },
                { id: '80%', label: '80%' },
                { id: '10%', label: '10%' },
                { id: '5%', label: '5%' }
            ],
            correctAnswer: '5%'
        },
        {
            id: 'q3' as const,
            question: "¿Cuál es el recurso narrativo que utiliza el video para que las personas cambien su opinión sobre una cifra 'aceptable' de muertes?",
            options: [
                { id: 'A', label: 'Comparar los datos de Córdoba con otras ciudades del mundo.' },
                { id: 'B', label: 'Explicar las leyes de tránsito vigentes y las multas correspondientes.' },
                { id: 'C', label: 'Mostrar imágenes gráficas de los accidentes ocurridos en la ciudad.' },
                { id: 'D', label: 'Personalizar la estadística mostrando a los propios familiares del entrevistado.' }
            ],
            correctAnswer: 'D'
        },
        {
            id: 'q4' as const,
            question: "De acuerdo con el concepto de 'Visión Cero', ¿cuál es el único número aceptable de muertos y heridos graves en el tránsito?",
            options: [
                { id: 'A', label: 'Menos de 10' },
                { id: 'B', label: '0' },
                { id: 'C', label: '100' },
                { id: 'D', label: '3' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 'q5' as const,
            question: "¿Qué reflexión final busca generar el video sobre la seguridad vial?",
            options: [
                { id: 'A', label: 'Que solo el gobierno es responsable de que mueran 381 personas al año.' },
                { id: 'B', label: 'Que es imposible bajar la cifra de accidentes debido al crecimiento de la ciudad.' },
                { id: 'C', label: 'Que la meta de 150 muertos es un éxito inicial suficiente para Córdoba.' },
                { id: 'D', label: 'Que la vida humana no tiene un margen de pérdida aceptable cuando se deja de ver como una estadística.' }
            ],
            correctAnswer: 'D'
        }
    ];

    useEffect(() => {
        if (isAnswered && videoContainerRef.current) {
            setTimeout(() => {
                videoContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600); // 600ms delay to let the animation play first
        }
    }, [isAnswered]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (answer.trim() !== '') {
            setIsAnswered(true);
        }
    };
    return (
        <div className="min-h-screen bg-brand-dark-grey text-white font-brand">
            <div className="bg-brand-navy pt-8 pb-12 px-4 shadow-xl border-b-4 border-brand-yellow">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="font-brand-heading text-4xl sm:text-5xl md:text-6xl text-white font-bold italic uppercase tracking-tighter mix-blend-screen">
                            INTRODUCCIÓN
                        </h1>
                        <p className="font-brand-heading text-xl sm:text-2xl text-brand-yellow font-bold uppercase tracking-wider mt-2">
                            SEGURIDAD VIAL
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Introducción Text */}
                <div className="bg-brand-navy p-6 rounded-lg mb-8 border-l-4 border-brand-yellow">
                    <h2 className="text-xl font-bold uppercase text-brand-yellow mb-4">¿Qué es la Seguridad Vial?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        La seguridad vial es el conjunto de acciones y mecanismos que garantizan el buen funcionamiento de la circulación del tránsito, mediante la utilización de conocimientos (leyes, reglamento y disposiciones) y normas de conducta, bien sea como peatón, pasajero o conductor, a fin de usar correctamente la vía pública previniendo los incidentes de tránsito.
                    </p>
                </div>

                {/* Global Statistics */}
                <div className="bg-brand-navy/80 p-6 sm:p-8 rounded-xl mb-8 border-l-4 border-brand-red shadow-lg flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold uppercase text-brand-red mb-2">A nivel mundial</h2>
                        <h3 className="text-lg font-medium text-white mb-4 italic">Las estadísticas por incidentes fatales nos arrojan datos alarmantes</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Se estima que aproximadamente <span className="text-brand-yellow font-bold">1,35 millones de personas pierden la vida</span> y que otras <span className="text-brand-yellow font-bold">50 millones resultan lesionadas</span> cada año a causa de los traumatismos por siniestros de tránsito.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Debido a que constituyen la décima causa de muerte en todo el mundo, la Organización Mundial de la Salud (OMS) categorizó a los siniestros viales como <span className="text-brand-red font-bold uppercase">"pandemia"</span> y alertó que si no se toman medidas al respecto, podrían llegar a ser la tercera causa de mortalidad mundial para el año 2020.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-brand-dark-grey rounded-full border-4 border-brand-navy p-2 flex flex-col items-center justify-center shadow-xl overflow-hidden group">
                            {/* Placeholder/Fallback para la imagen a subir */}
                            <img
                                src="/formacion-vial-extreme/assets/oms-mundo.PNG"
                                alt="Estadísticas mundiales OMS"
                                className="w-full h-full object-cover rounded-full z-10 relative"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    const fallbackMsg = (e.target as HTMLImageElement).parentElement?.querySelector('.fallback-msg');
                                    if (fallbackMsg) fallbackMsg.classList.remove('hidden');
                                }}
                            />
                            <div className="fallback-msg hidden absolute inset-0 flex flex-col items-center justify-center text-brand-yellow z-0 p-4 text-center">
                                <Globe className="w-12 h-12 opacity-50 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold text-gray-400">Guardar imagen en:<br />public/assets/oms-mundo.png</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question Section */}
                <div className="bg-brand-navy/50 p-6 rounded-lg mb-8 border border-red-500/20">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="bg-brand-red/10 p-3 rounded-full shrink-0">
                            <AlertTriangle className="text-brand-red w-6 h-6" />
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-lg font-bold uppercase text-white mb-2">Reflexión Inicial</h3>
                            <p className="text-xl sm:text-2xl text-white font-medium italic mb-6">
                                "En Argentina el último año murieron alrededor de 4.000 personas. ¿Cuál creés que sería un número aceptable para este año?"
                            </p>

                            {!isAnswered ? (
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1 max-w-sm">
                                        <input
                                            type="number"
                                            value={answer}
                                            onChange={(e) => setAnswer(e.target.value)}
                                            placeholder="Ingresa un número..."
                                            className="w-full bg-brand-dark-grey border-2 border-brand-navy rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow font-bold"
                                            required
                                            min="0"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-brand-yellow text-brand-navy font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Responder
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-brand-yellow/10 border border-brand-yellow/30 p-4 rounded-lg animate-in fade-in duration-500">
                                    <p className="text-brand-yellow font-bold uppercase text-sm mb-1">Tu respuesta:</p>
                                    <p className="text-2xl text-white font-black">{answer} personas</p>
                                    <p className="text-gray-300 mt-3 italic">
                                        Mira el siguiente video para entender por qué la única respuesta aceptable es cero.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* YouTube Video Section */}
                {isAnswered && (
                    <div className="mt-12 animate-in slide-in-from-bottom-8 fade-in duration-1000">
                        <div ref={videoContainerRef}>
                            <h3 className="text-2xl font-black italic uppercase text-brand-yellow mb-6 text-center tracking-tighter mix-blend-screen">
                                VISIÓN CERO
                            </h3>
                            <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/80 border-4 border-gray-800 bg-black">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/oYj6BMjy8m8?autoplay=1"
                                    title="Seguridad Vial Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full border-0"
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <p className="text-gray-400 text-sm mb-2">
                                    ¿El video no carga o te muestra un error?
                                </p>
                                <a
                                    href="https://youtu.be/oYj6BMjy8m8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-brand-yellow font-bold hover:text-white transition-colors border border-brand-yellow hover:bg-brand-yellow/10 px-4 py-2 rounded-lg"
                                >
                                    Ver el video directamente en YouTube
                                </a>
                            </div>
                        </div>

                        {/* Final Reflection Text */}
                        <div className="mt-12 bg-brand-navy/60 p-6 sm:p-8 rounded-xl border-l-4 border-brand-yellow shadow-lg">
                            <p className="text-gray-200 text-lg leading-relaxed mb-4">
                                Chicos, los invito a pensar en lo siguiente: cuando escuchamos que en Córdoba, en un solo año mueren <span className="text-brand-yellow font-bold">381</span> personas en incidentes de tránsito, solemos verlo como una estadística lejana, aunque nos parezca un desastre. Si nos preguntaran a cuánto deberíamos bajar esa cifra, muchos pensaríamos que reducirla a la mitad, o incluso a solo 3 muertes al año, sería un avance "genial" o un escenario "ideal".
                            </p>
                            <p className="text-white text-xl font-medium italic mb-4">
                                Pero hagamos este ejercicio: ¿qué pensarían si les mostraran fotografías de esas únicas 3 víctimas y resultaran ser sus hijos, sus sobrinos o su propia familia?
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed">
                                Cuando le ponemos el rostro de un ser querido a las estadísticas, nuestra perspectiva cambia por completo y nos damos cuenta de que ninguna pérdida es tolerable. <span className="text-brand-yellow font-bold uppercase tracking-wide text-sm sm:text-base border-b border-brand-yellow/50">Detrás de cada número hay una vida y una familia que los espera.</span>
                            </p>
                        </div>

                        {/* Video Quiz */}
                        <div className="mt-12 bg-brand-dark-grey p-6 sm:p-8 rounded-xl border border-gray-700 shadow-xl">
                            <h3 className="text-2xl font-brand-heading text-brand-yellow uppercase italic tracking-wider mb-6 border-b border-gray-700 pb-4">
                                Comprueba lo que viste
                            </h3>

                            <div className="space-y-8">
                                {quizData.map((q, index) => (
                                    <div key={q.id} className="space-y-4">
                                        <p className="text-lg text-white font-medium">
                                            <span className="text-brand-yellow font-bold mr-2">{index + 1}.</span>
                                            {q.question}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {q.options.map((option) => {
                                                const isSelected = quizAnswers[q.id] === option.id;
                                                const isCorrect = option.id === q.correctAnswer;

                                                let buttonStyle = "bg-brand-navy border-gray-600 hover:border-brand-yellow text-gray-300 hover:text-white";
                                                let icon = null;

                                                if (showQuizResults) {
                                                    if (isCorrect) {
                                                        buttonStyle = "bg-green-900/30 border-green-500 text-green-400";
                                                        icon = <CheckCircle2 className="w-5 h-5 ml-auto" />;
                                                    } else if (isSelected && !isCorrect) {
                                                        buttonStyle = "bg-red-900/30 border-red-500 text-red-400 opacity-70";
                                                        icon = <XCircle className="w-5 h-5 ml-auto text-red-500" />;
                                                    } else {
                                                        buttonStyle = "bg-brand-navy border-gray-800 text-gray-500 opacity-50 cursor-not-allowed";
                                                    }
                                                } else if (isSelected) {
                                                    buttonStyle = "bg-brand-yellow/10 border-brand-yellow text-white";
                                                }

                                                return (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => handleQuizOptionClick(q.id, option.id)}
                                                        disabled={showQuizResults}
                                                        className={`text-left flex items-center p-4 rounded-lg border-2 transition-all duration-200 ${buttonStyle}`}
                                                    >
                                                        <span className="font-bold mr-3 opacity-70">
                                                            {['A', 'B', 'C', 'D'][q.options.indexOf(option)]})
                                                        </span>
                                                        <span>{option.label}</span>
                                                        {icon}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {showQuizResults ? (
                                <div className="mt-8 p-6 bg-brand-navy/50 border border-brand-yellow/30 rounded-lg text-center animate-in fade-in duration-500">
                                    <p className="text-white font-medium text-lg mb-8">
                                        ¡Gracias por prestar atención al video!<br />
                                        La seguridad vial empieza por estar <span className="text-brand-yellow font-bold">100% conscientes</span> de lo que sucede a nuestro alrededor.
                                    </p>
                                    <Link to="/modules" className="inline-block w-full sm:w-auto">
                                        <button className="w-full bg-brand-yellow text-brand-navy font-bold uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-3">
                                            CONTINUAR A SEÑALES DE TRÁNSITO
                                            <Play className="w-5 h-5 fill-current" />
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={checkQuizComplete}
                                        className="bg-brand-yellow text-brand-navy font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Verificar Respuestas
                                        <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
