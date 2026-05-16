import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import logoBA from '../../assets/logo_ba.svg';

export function Layout() {
    const isEmbedded = window.location.href.includes('embedded=true');

    return (
        <div className="flex flex-col min-h-screen bg-brand-navy text-white font-brand-body selection:bg-brand-red selection:text-white">
            {!isEmbedded && <Navbar />}
            <main className="flex-grow pt-12 md:pt-14">
                <Outlet />
            </main>
            {!isEmbedded && (
                <footer className="bg-black py-4 md:py-16 border-t border-gray-900">
                    <div className="container-extreme">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
                            {/* Logo BA */}
                            <div className="text-center md:text-left md:border-r md:border-gray-800 md:pr-12">
                                <img src={logoBA} alt="Buenos Aires Ciudad" className="h-10 md:h-20 w-auto drop-shadow-[0_0_8px_rgba(255,214,0,0.2)]" />
                            </div>
                            
                            {/* Textos de la Gerencia y Dirección */}
                            <div className="text-center md:text-left">
                                <p className="font-brand-heading uppercase tracking-[0.2em] text-[10px] sm:text-sm md:text-lg text-gray-200 font-bold">
                                    GERENCIA DE EDUCACIÓN Y CONVIVENCIA VIAL
                                </p>
                                <p className="font-brand-heading uppercase tracking-[0.2em] text-[8px] sm:text-xs md:text-sm text-gray-500 mt-1 md:mt-2">
                                    DIRECCIÓN GENERAL DE SEGURIDAD VIAL
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
