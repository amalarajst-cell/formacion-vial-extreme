import { useState } from 'react';
import { AlertTriangle, Send } from 'lucide-react';

export function IntroduccionModule() {
    const [answer, setAnswer] = useState('');
    const [isAnswered, setIsAnswered] = useState(false);

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
                        <h3 className="text-2xl font-black italic uppercase text-brand-yellow mb-6 text-center tracking-tighter mix-blend-screen">
                            VISIÓN CERO
                        </h3>
                        <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-black/80 border-4 border-gray-800 bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/oYj6BMjy8m8"
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
                )}
            </main>
        </div>
    );
}
