import { useRef } from 'react';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';
import logoVinculacion from '../../assets/logo-vinculacion.png';

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
                className="w-full aspect-[1.414/1] bg-white relative overflow-hidden shadow-2xl flex flex-col pt-8 pb-6 px-12 border-[10px] border-brand-navy/5"
            >
                {/* Top Blue Bar */}
                <div className="h-3 bg-brand-navy w-full absolute top-0 left-0 z-20"></div>

                {/* Background Pattern (Subtle Grid) */}
                <div className="absolute inset-0 z-0 opacity-[0.05]" style={{
                    backgroundImage: 'linear-gradient(#001C30 1px, transparent 1px), linear-gradient(90deg, #001C30 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Central Shield Watermark */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.03] pointer-events-none">
                    <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] fill-brand-navy" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center h-full text-center">
                    {/* Logos Header */}
                    <div className="w-full flex justify-between items-center mb-4 px-4">
                        {/* Perfect sharp vector BA Logo */}
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                            <rect width="40" height="40" fill="#FCD108" />
                            <text x="20" y="27" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#000000">BA</text>
                        </svg>
                        <img
                            src={logoVinculacion}
                            alt="Vinculación con el futuro"
                            className="h-8 w-auto grayscale brightness-50 contrast-125"
                        />
                    </div>

                    {/* Header */}
                    <div className="mb-2">
                        <h2 className="text-base md:text-lg font-brand-heading font-bold uppercase tracking-tight text-brand-navy">
                            LA SECRETARIA DE TRANSPORTE <br />
                            <span className="text-brand-yellow">DEL MINISTERIO DE INFRAESTRUCTURA</span>
                        </h2>
                    </div>

                    <div className="mb-2">
                        <div className="flex flex-wrap justify-center items-baseline gap-2 text-xl md:text-3xl font-brand-heading font-bold italic uppercase tracking-tighter">
                            <span className="text-brand-navy">CERTIFICADO DE</span>
                            <span className="text-brand-yellow" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>PARTICIPACIÓN</span>
                        </div>
                    </div>

                    {/* Body Text */}
                    <div className="max-w-2xl mx-auto">
                        <p className="text-sm md:text-base text-brand-navy leading-tight font-medium">
                            Este certificado acredita que: <br />
                            <span className="text-xl md:text-2xl font-brand-heading font-bold italic block my-1 uppercase">
                                {userName}
                            </span>
                            <span className="font-bold">DNI: {dni}</span>
                        </p>
                        
                        <p className="mt-3 text-[10px] md:text-xs text-gray-700 leading-relaxed px-12">
                            participó y aprobó la capacitación <span className="font-bold text-brand-navy italic">"Multiplicador Vial"</span> bajo la modalidad presencial en la sede de Avenida Coronel Roca 5252 con una duración de 20 horas dictada por la Gerencia de Educación y Convivencia Vial.
                        </p>
                    </div>

                    {/* Signatures Footer - Pushed to bottom but contained */}
                    <div className="w-full grid grid-cols-2 gap-16 mt-auto mb-2 px-12">
                        <div className="flex flex-col items-center">
                            <div className="w-full h-px bg-brand-navy mb-2"></div>
                            <p className="text-[11px] md:text-sm font-black text-brand-navy uppercase tracking-wider text-center mb-0.5">
                                Roberto Dmecq
                            </p>
                            <p className="text-[8px] md:text-[10px] font-bold text-brand-navy/80 uppercase tracking-wider text-center">
                                Director de la Dirección General <br /> de Seguridad Vial
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full h-px bg-brand-navy mb-2"></div>
                            <p className="text-[11px] md:text-sm font-black text-brand-navy uppercase tracking-wider text-center mb-0.5">
                                Pablo La Spina
                            </p>
                            <p className="text-[8px] md:text-[10px] font-bold text-brand-navy/80 uppercase tracking-wider text-center">
                                Gerente de Educación <br /> y Convivencia Vial
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
