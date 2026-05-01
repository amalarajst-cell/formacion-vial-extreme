import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
    const isEmbedded = window.location.href.includes('embedded=true');

    return (
        <div className="min-h-screen bg-brand-navy text-white font-brand-body selection:bg-brand-red selection:text-white">
            {!isEmbedded && <Navbar />}
            <main>
                <Outlet />
            </main>
            {!isEmbedded && (
                <footer className="bg-black py-16 border-t border-gray-900 mt-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                {/* Logo Vinculación */}
                                <div className="text-center md:text-left md:border-r md:border-gray-800 md:pr-6">
                                    <p className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-[1.1]">
                                        Vinculación <br />
                                        con el futuro
                                    </p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="font-brand-heading uppercase tracking-[0.2em] text-xs sm:text-sm text-gray-400 font-bold">
                                        POLÍTICA PÚBLICA DEL MINISTERIO DE EDUCACIÓN
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
