import { useRef } from 'react';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

interface DiplomaProps {
    userName: string;
    dni: string;
    institution?: string;
    date: string;
}

export function DiplomaNew({ userName, dni }: DiplomaProps) {
    const diplomaRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto px-4">
            {/* Diploma Container */}
            <div
                ref={diplomaRef}
                id="diploma-to-print"
                className="w-full aspect-[1.414/1] bg-white relative overflow-hidden shadow-2xl flex flex-col pt-12 pb-8 px-16"
            >
                {/* Top Blue Bar */}
                <div className="h-4 bg-brand-navy w-full absolute top-0 left-0 z-20"></div>

                {/* Background Pattern (Subtle Grid) */}
                <div className="absolute inset-0 z-0 opacity-[0.05]" style={{
                    backgroundImage: 'linear-gradient(#001C30 1px, transparent 1px), linear-gradient(90deg, #001C30 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Central Shield Watermark */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 24 24" className="w-[70%] h-[70%] fill-brand-navy" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center h-full text-center">
                    {/* BA Logo (Top Left) */}
                    <div className="absolute top-0 left-0">
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEwIDIwIEMxMCAxNSAxNSAxMCAyMCAxMCBMODAgMTAgQzg1IDEwIDkwIDE1IDkwIDIwIEw5MCA4MCBDOTAgODUgODUgOTAgODAgOTAgTDIwIDkwIEMxNSA5MCAxMCA4NSAxMCA4MCBaIiBmaWxsPSIjRkZEMjAwIi8+CiAgPHRleHQgeD0iNTAiIHk9IjY1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNTAiIGZpbGw9IiMwMDAwMDAiPkJBPC90ZXh0Pgo8L3N2Zz4="
                            alt="Logo BA"
                            className="h-16 w-auto"
                        />
                    </div>

                    {/* Header */}
                    <div className="mb-10">
                        <div className="flex flex-wrap justify-center items-baseline gap-2 text-3xl md:text-5xl font-brand-heading font-bold italic uppercase tracking-tighter">
                            <span className="text-brand-navy">DIPLOMA DE</span>
                            <span className="text-brand-yellow" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>RECONOCIMIENTO</span>
                        </div>
                    </div>

                    <p className="text-gray-500 uppercase font-bold text-xs md:text-sm tracking-[0.2em] mb-8">
                        LA SECRETARÍA DE TRANSPORTE OTORGA EL PRESENTE A:
                    </p>

                    {/* Recipient Name */}
                    <div className="mb-8 w-full max-w-2xl flex flex-col items-center">
                        <h3 className="text-4xl md:text-6xl font-brand-heading font-bold italic text-brand-navy mb-1 break-words leading-tight px-4 uppercase">
                            {userName}
                        </h3>
                        {/* Yellow Underline Bar */}
                        <div className="h-1.5 bg-brand-yellow w-full max-w-lg rounded-full mt-2"></div>
                    </div>

                    <p className="text-brand-navy font-bold text-lg mb-8 uppercase tracking-wider">
                        DNI: {dni}
                    </p>

                    <div className="space-y-2 mb-8">
                        <p className="text-gray-500 text-sm md:text-base font-medium">
                            Por haber completado con éxito el trayecto formativo de
                        </p>
                        <h4 className="text-2xl md:text-3xl font-brand-heading font-bold italic text-brand-navy">
                            MULTIPLICADOR VIAL 2026
                        </h4>
                    </div>

                    {/* Signatures Footer - Pushed to bottom but contained */}
                    <div className="w-full grid grid-cols-2 gap-16 mt-auto px-12">
                        <div className="flex flex-col items-center">
                            <div className="w-full h-px bg-brand-navy mb-2"></div>
                            <p className="text-[10px] md:text-xs font-bold text-brand-navy uppercase tracking-wider text-center">
                                Director de la Dirección General <br /> de Seguridad Vial
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full h-px bg-brand-navy mb-2"></div>
                            <p className="text-[10px] md:text-xs font-bold text-brand-navy uppercase tracking-wider text-center">
                                Gerencia de Educación <br /> y Convivencia Vial
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions (Hidden on Print) */}
            <div className="flex flex-col sm:flex-row gap-4 no-print w-full max-w-lg">
                <Button
                    onClick={handlePrint}
                    className="flex-1 py-4 text-lg bg-brand-navy text-white hover:bg-brand-navy/90 shadow-lg"
                >
                    DESCARGAR DIPLOMA <Download className="ml-2 w-5 h-5" />
                </Button>
            </div>

            <style>{`
                @media print {
                    @page {
                        size: landscape;
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    body * { visibility: hidden; }
                    .no-print { display: none !important; }
                    #diploma-to-print, #diploma-to-print * { visibility: visible; }
                    #diploma-to-print {
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100vw;
                        height: 100vh;
                        padding: 2cm; /* Safe print margin */
                        margin: 0;
                        border: none;
                        border-radius: 0;
                        box-shadow: none;
                        z-index: 9999;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background: white;
                    }
                }
            `}</style>
        </div>
    );
}
