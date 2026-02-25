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

                        {/* Accidente vs Incidente */}
                        <div className="mt-16 bg-brand-navy p-6 sm:p-8 rounded-xl border-l-4 border-brand-yellow shadow-xl animate-in slide-in-from-bottom-8 fade-in flex flex-col items-center">
                            <h3 className="text-3xl font-brand-heading text-white uppercase italic tracking-tighter mb-6 w-full">
                                ¿Mala suerte o mala decisión? <span className="text-brand-yellow">Dejemos de llamar "accidente" a la negligencia.</span>
                            </h3>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10 w-full">
                                <p>
                                    Hablemos claro. En la calle, usamos la palabra "accidente" para todo choque, despiste o atropello. Pero las palabras importan, y mucho.
                                </p>
                                <p>
                                    Si vas conduciendo perfecto y un rayo parte un árbol que cae sobre tu auto, eso es un <span className="text-white font-bold uppercase tracking-wider">Accidente</span>. Es el azar, es impredecible, nadie tuvo la culpa. Es la excepción a la regla.
                                </p>
                                <p>
                                    Pero si chocas porque ibas mirando el celular, porque no cambiaste los frenos o porque ibas a 140 km/h en una curva... por favor, no le llames accidente. Eso es un <span className="text-brand-red font-bold uppercase tracking-wider">Incidente</span>.
                                </p>
                                <div className="bg-brand-dark-grey/50 p-6 rounded-lg border border-gray-700 my-8">
                                    <h4 className="text-xl font-bold text-white mb-2">¿La diferencia?</h4>
                                    <p className="text-brand-yellow font-medium">
                                        En el incidente siempre hay un "factor humano": una negligencia, un error o una omisión.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-white">¿Por qué es urgente diferenciarlos?</h4>
                                    <ul className="list-none space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 bg-gray-700 rounded-full p-1"><XCircle className="w-4 h-4 text-gray-400" /></div>
                                            <p>Porque ante el <strong>accidente</strong> (el azar) solo podemos resignarnos.</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="mt-1 bg-brand-red/20 rounded-full p-1"><CheckCircle2 className="w-4 h-4 text-brand-red" /></div>
                                            <p>Porque ante el <strong>incidente</strong> (la negligencia) tenemos el poder absoluto de evitarlo.</p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-xl font-medium text-white italic border-l-4 border-brand-red pl-4 py-2 mt-6 bg-brand-red/10">
                                    Dejemos de echarle la culpa al destino de lo que causamos nosotros mismos.
                                </p>
                            </div>

                            {/* Cuadro Comparativo */}
                            <div className="overflow-x-auto w-full mb-12">
                                <table className="w-full text-left border-collapse bg-brand-dark-grey rounded-xl overflow-hidden">
                                    <thead>
                                        <tr>
                                            <th className="p-4 bg-brand-dark-grey text-white font-bold border-b-2 border-brand-yellow w-1/4">Característica</th>
                                            <th className="p-4 bg-brand-dark-grey/80 text-gray-300 font-bold border-b-2 border-brand-yellow w-3/8 text-center sm:text-left">
                                                <span className="text-2xl mr-2">🌩️</span><br className="sm:hidden" />
                                                El Accidente (El Azar)
                                            </th>
                                            <th className="p-4 bg-red-900/20 text-brand-red font-bold border-b-2 border-brand-red w-3/8 text-center sm:text-left">
                                                <span className="text-2xl mr-2">📱</span><br className="sm:hidden" />
                                                El Incidente (La Negligencia)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300 divide-y divide-gray-700">
                                        <tr className="hover:bg-brand-dark-grey/50 transition-colors">
                                            <td className="p-4 font-medium text-white">¿Qué lo causa?</td>
                                            <td className="p-4 px-4">Fuerzas de la naturaleza, fallas mecánicas súbitas e indetectables.</td>
                                            <td className="p-4 bg-red-900/10">Error humano, imprudencia, violar normas, falta de mantenimiento.</td>
                                        </tr>
                                        <tr className="hover:bg-brand-dark-grey/50 transition-colors">
                                            <td className="p-4 font-medium text-white">Factor Humano</td>
                                            <td className="p-4">Nulo. El conductor no podía hacer nada distinto.</td>
                                            <td className="p-4 bg-red-900/10"><strong className="text-brand-red">Total.</strong> El conductor tomó una mala decisión (activa u omisiva).</td>
                                        </tr>
                                        <tr className="hover:bg-brand-dark-grey/50 transition-colors">
                                            <td className="p-4 font-medium text-white">¿Es predecible?</td>
                                            <td className="p-4">No. Es un hecho sorpresivo.</td>
                                            <td className="p-4 bg-red-900/10">Sí. Si actúas mal, el resultado es predecible.</td>
                                        </tr>
                                        <tr className="hover:bg-brand-dark-grey/50 transition-colors">
                                            <td className="p-4 font-medium text-white">¿Se podía evitar?</td>
                                            <td className="p-4">No directamente.</td>
                                            <td className="p-4 bg-red-900/10 text-brand-red font-bold">Sí, al 100%.</td>
                                        </tr>
                                        <tr className="hover:bg-brand-dark-grey/50 transition-colors">
                                            <td className="p-4 font-medium text-white border-b border-gray-700">El Ejemplo</td>
                                            <td className="p-4 italic border-b border-gray-700 text-gray-400">Una rama sana cae por un viento huracanado sobre el parabrisas.</td>
                                            <td className="p-4 bg-red-900/10 italic border-b border-red-900/30 text-red-200">Un conductor choca al de adelante por ir distraído enviando un audio.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Imagen Descriptiva */}
                            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/80 border-4 border-gray-800 bg-brand-dark-grey mb-12">
                                <img
                                    src="/formacion-vial-extreme/assets/accidente-incidente.png"
                                    alt="Accidente vs Incidente: El Factor Humano"
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/assets/accidente-incidente.png';
                                    }}
                                />
                            </div>

                            {/* Nueva Sección: ¿Por qué se producen los incidentes viales? y Trilogía Vial */}
                            <div className="bg-brand-navy p-6 sm:p-8 rounded-xl border-l-4 border-brand-yellow shadow-xl flex flex-col items-center w-full mt-10">
                                <h3 className="text-3xl font-brand-heading text-brand-yellow uppercase italic tracking-tighter mb-6 w-full">
                                    ¿Por qué se producen los incidentes viales?
                                </h3>

                                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-6 w-full">
                                    <p>
                                        Para entender el origen de un siniestro, debemos alejarnos de la idea de la "mala suerte" o el "destino". Los incidentes viales no son eventos azarosos; son <span className="text-white font-bold uppercase tracking-wider">eventos multicausales</span>. Esto significa que son el resultado de la interacción de diferentes elementos que fallan al mismo tiempo.
                                    </p>
                                </div>

                                {/* 1. El Disparador */}
                                <div className="w-full bg-brand-dark-grey/80 p-6 rounded-xl border border-gray-600 mb-10 shadow-lg">
                                    <h4 className="text-2xl font-bold text-white mb-4 italic flex items-center gap-3">
                                        <div className="bg-brand-yellow p-2 rounded-lg"><Play className="w-5 h-5 text-brand-navy" /></div>
                                        1. El Disparador: El Juego del 100%
                                    </h4>
                                    <p className="text-brand-yellow font-medium text-xl mb-6 pl-14">
                                        "Imaginen que somos peritos e investigamos un choque. Tenemos 100 puntos de responsabilidad para repartir. ¿Cuántos puntos le darían a cada uno de estos tres sospechosos?"
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-brand-navy p-4 rounded-lg border-t-4 border-brand-yellow flex flex-col items-center text-center">
                                            <span className="text-4xl mb-2">👤</span>
                                            <strong className="text-brand-yellow text-lg uppercase tracking-wide">El Conductor</strong>
                                            <span className="text-sm text-gray-400 mt-2">Las personas, sus decisiones y errores.</span>
                                        </div>
                                        <div className="bg-brand-navy p-4 rounded-lg border-t-4 border-brand-red flex flex-col items-center text-center">
                                            <span className="text-4xl mb-2">🏍️</span>
                                            <strong className="text-brand-red text-lg uppercase tracking-wide">El Vehículo</strong>
                                            <span className="text-sm text-gray-400 mt-2">La moto, la bici, fallos mecánicos.</span>
                                        </div>
                                        <div className="bg-brand-navy p-4 rounded-lg border-t-4 border-blue-400 flex flex-col items-center text-center">
                                            <span className="text-4xl mb-2">🌧️</span>
                                            <strong className="text-blue-400 text-lg uppercase tracking-wide">El Camino</strong>
                                            <span className="text-sm text-gray-400 mt-2">Baches, lluvia, falta de semáforos, señales.</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 bg-brand-navy/50 p-4 rounded-lg border-l-4 border-gray-500 italic text-gray-400 text-sm">
                                        <strong className="text-gray-300">Tip para el instructor:</strong> Anotá en el pizarrón lo que digan los chicos. Normalmente, le dan mucha carga al "Camino" o al "Vehículo" para quitarle peso a las personas.
                                    </div>
                                </div>

                                {/* 2. La Herramienta Técnica */}
                                <h3 className="text-3xl font-brand-heading text-white uppercase italic tracking-tighter mb-6 mt-4 w-full">
                                    2. La Herramienta Técnica: <span className="text-brand-yellow">La Trilogía Vial</span>
                                </h3>

                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed w-full">
                                    <p className="mb-6">
                                        Para entender el porqué de un incidente, presentamos el esquema que usamos los investigadores. Nada ocurre por una sola razón; es una combinación de tres factores:
                                    </p>

                                    <div className="flex flex-col gap-6 w-full relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark-grey bg-brand-yellow text-brand-navy shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                                                90%
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-dark-grey/50 p-6 rounded-xl border border-gray-700 shadow-md">
                                                <h4 className="text-xl font-bold text-brand-yellow mb-2 uppercase">Factor Humano</h4>
                                                <p className="text-white">Decisiones, distracciones, pericia y estado físico.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark-grey bg-brand-red text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                                                5%
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-dark-grey/50 p-6 rounded-xl border border-gray-700 shadow-md">
                                                <h4 className="text-xl font-bold text-brand-red mb-2 uppercase">Factor Vehicular</h4>
                                                <p className="text-white">Estado de neumáticos, frenos, luces y mantenimiento general.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-dark-grey bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                                                5%
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-dark-grey/50 p-6 rounded-xl border border-gray-700 shadow-md">
                                                <h4 className="text-xl font-bold text-blue-400 mb-2 uppercase">Factor Ambiental</h4>
                                                <p className="text-white">Clima (lluvia, niebla) y estado de la infraestructura (pavimento, señalización).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. El Momento de la Verdad */}
                                <div className="w-full mt-10">
                                    <h3 className="text-3xl font-brand-heading text-white uppercase italic tracking-tighter mb-6">
                                        3. El Momento de la Verdad: <span className="text-brand-yellow">Percepción vs. Realidad</span>
                                    </h3>

                                    <div className="bg-brand-dark-grey p-6 sm:p-8 rounded-xl border border-gray-700 shadow-lg">
                                        <p className="text-gray-300 text-lg mb-6">
                                            Aquí es donde contrastamos lo que ellos votaron con las estadísticas reales de accidentología.
                                        </p>

                                        <h4 className="text-2xl font-bold text-white mb-4">¿Por qué el Factor Humano es tan alto?</h4>
                                        <p className="text-gray-300 mb-6">
                                            Explicamos que, aunque la calle esté rota o la moto tenga un problema, es la <strong className="text-brand-yellow">persona</strong> quien decide cómo actuar frente a eso:
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                            <div className="bg-brand-navy p-5 rounded-lg border border-gray-600 flex flex-col items-center text-center">
                                                <span className="text-brand-yellow mb-2"><Globe className="w-8 h-8" /></span>
                                                <p className="text-white font-medium">Si hay un bache y <strong className="text-brand-yellow">voy despacio</strong>, no hay incidente.</p>
                                            </div>
                                            <div className="bg-brand-navy p-5 rounded-lg border border-gray-600 flex flex-col items-center text-center">
                                                <span className="text-brand-yellow mb-2"><AlertTriangle className="w-8 h-8" /></span>
                                                <p className="text-white font-medium">Si sé que mi freno está largo y <strong className="text-brand-yellow">guardo distancia</strong>, no hay incidente.</p>
                                            </div>
                                            <div className="bg-brand-navy p-5 rounded-lg border border-gray-600 flex flex-col items-center text-center">
                                                <span className="text-brand-yellow mb-2"><CheckCircle2 className="w-8 h-8" /></span>
                                                <p className="text-white font-medium">Si llueve y <strong className="text-brand-yellow">adapto mi conducción</strong>, no hay incidente.</p>
                                            </div>
                                        </div>

                                        <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-6 rounded-r-lg">
                                            <p className="text-xl font-medium text-white italic">
                                                <strong className="text-brand-yellow not-italic uppercase tracking-wide">La conclusión es clara:</strong> El Factor Humano es el único que puede compensar las fallas de los otros dos.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4. Dinámica de Cierre */}
                                <div className="w-full mt-10 mb-6">
                                    <h3 className="text-3xl font-brand-heading text-brand-yellow uppercase italic tracking-tighter mb-6">
                                        4. Dinámica de Cierre: "Las Excusas al Banquillo"
                                    </h3>

                                    <div className="bg-brand-dark-grey/80 p-6 rounded-xl border-l-4 border-brand-red shadow-lg">
                                        <p className="text-gray-300 text-lg mb-8">
                                            Para terminar, podés proponerles clasificar estas frases típicas de los conductores dentro de la Trilogía Vial. <strong className="text-white">¿Son fallas reales del entorno o es el Factor Humano disfrazado?</strong>
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="flex-1 bg-brand-navy p-4 rounded-lg border border-gray-700 flex items-center">
                                                    <span className="text-lg text-white italic">"Me encandiló el sol"</span>
                                                </div>
                                                <div className="flex-1 bg-brand-dark-grey p-4 rounded-lg border border-gray-600 flex items-center justify-center px-4 py-3 text-center sm:text-left">
                                                    <span className="text-gray-300"><strong className="text-blue-400">Ambiental</strong>, pero el <strong className="text-brand-yellow">humano</strong> debería haber usado visera o bajado la velocidad.</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="flex-1 bg-brand-navy p-4 rounded-lg border border-gray-700 flex items-center">
                                                    <span className="text-lg text-white italic">"Se me cruzó de golpe"</span>
                                                </div>
                                                <div className="flex-1 bg-brand-dark-grey p-4 rounded-lg border border-gray-600 flex items-center justify-center px-4 py-3 text-center sm:text-left">
                                                    <span className="text-gray-300"><strong className="text-brand-yellow">Humano</strong>: falta de percepción o velocidad inadecuada.</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="flex-1 bg-brand-navy p-4 rounded-lg border border-gray-700 flex items-center">
                                                    <span className="text-lg text-white italic">"No me agarró el freno por la lluvia"</span>
                                                </div>
                                                <div className="flex-1 bg-brand-dark-grey p-4 rounded-lg border border-gray-600 flex items-center justify-center px-4 py-3 text-center sm:text-left">
                                                    <span className="text-gray-300"><strong className="text-blue-400">Ambiental</strong> + <strong className="text-brand-yellow">Humano</strong> por no prever la distancia de frenado en mojado.</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="flex-1 bg-brand-navy p-4 rounded-lg border border-gray-700 flex items-center">
                                                    <span className="text-lg text-white italic">"Había un pozo y se me descontroló la moto"</span>
                                                </div>
                                                <div className="flex-1 bg-brand-dark-grey p-4 rounded-lg border border-gray-600 flex items-center justify-center px-4 py-3 text-center sm:text-left">
                                                    <span className="text-gray-300"><strong className="text-blue-400">Ambiental</strong> + <strong className="text-brand-yellow">Humano</strong> por falta de atención o velocidad.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
