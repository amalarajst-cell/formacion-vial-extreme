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
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTEwIDIwIEMxMCAxNSAxNSAxMCAyMCAxMCBMODAgMTAgQzg1IDEwIDkwIDE1IDkwIDIwIEw5MCA4MCBDOTAgODUgODUgOTAgODAgOTAgTDIwIDkwIEMxNSA5MCAxMCA4NSAxMCA4MCBaIiBmaWxsPSIjRkZEMjAwIi8+CiAgPHRleHQgeD0iNTAiIHk9IjY1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNTAiIGZpbGw9IiMwMDAwMDAiPkJBPC90ZXh0Pgo8L3N2Zz4="
                                alt="Logo BA"
                                className="h-12 w-auto"
                            />
                            <div className="text-center md:text-left">
                                <p className="font-brand-heading uppercase tracking-[0.2em] text-xs sm:text-sm text-gray-400 font-bold">
                                    GERENCIA DE EDUCACIÒN Y CONVIVENCIA VIAL - (GCBA)
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
