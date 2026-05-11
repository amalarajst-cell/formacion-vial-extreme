import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { LogIn, Shield, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import logoVinculacion from '../assets/logo-vinculacion.png';

export function LoginPage() {
    const { loginAdmin, loginStudent, loading, error, clearError } = useAuth();

    const [mode, setMode] = useState<'student' | 'admin'>('student');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleStudentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (dni.trim().length < 7) return;
        loginStudent(dni.trim());
    };

    const handleAdminSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        loginAdmin(email, password);
    };

    return (
        <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-yellow/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-yellow/5 to-transparent pointer-events-none" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <img src={logoVinculacion} alt="Vinculación con el futuro" className="h-16 w-auto" />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-2">
                        Bienvenido
                    </h1>
                    <p className="text-gray-400 text-sm">Ingresá para acceder a la plataforma</p>
                </div>

                {/* Mode Toggle */}
                <div className="flex bg-white/5 border border-white/10 rounded-lg p-1 mb-6">
                    <button
                        onClick={() => { setMode('student'); clearError(); }}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                            mode === 'student'
                                ? 'bg-brand-yellow text-brand-navy shadow-lg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <User className="w-4 h-4" /> Alumno
                    </button>
                    <button
                        onClick={() => { setMode('admin'); clearError(); }}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                            mode === 'admin'
                                ? 'bg-brand-red text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <Shield className="w-4 h-4" /> Docente
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-4 flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                )}

                {/* Student Login */}
                {mode === 'student' && (
                    <form onSubmit={handleStudentSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Tu DNI (sin puntos)
                            </label>
                            <input
                                type="number"
                                value={dni}
                                onChange={e => setDni(e.target.value)}
                                placeholder="Ej: 40123456"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-lg font-bold tracking-widest placeholder-gray-600 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all"
                                required
                                minLength={7}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading || dni.trim().length < 7}
                            className="w-full bg-brand-yellow text-brand-navy font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-yellow-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-pulse">Buscando...</span>
                            ) : (
                                <><LogIn className="w-4 h-4" /> Ingresar</>
                            )}
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            Si tu DNI no funciona, consultá a tu docente.
                        </p>
                    </form>
                )}

                {/* Admin Login */}
                {mode === 'admin' && (
                    <form onSubmit={handleAdminSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="docente@ejemplo.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-red text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-pulse">Ingresando...</span>
                            ) : (
                                <><Shield className="w-4 h-4" /> Acceder como Docente</>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
