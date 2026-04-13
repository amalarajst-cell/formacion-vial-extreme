import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
    Trophy,
    Zap,
    Rocket,
    Target,
    Heart,
    Wrench,
    Eye,
    Users,
    Award,
    CheckCircle2,
    ClipboardList,
    Play,
    ArrowRight,
    ChevronDown,
    Binoculars,
    MapPin,
    Bus,
    TrainFront,
    Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PreSurveyForm } from '../components/survey/PreSurveyForm';
import { FieldLog } from '../components/survey/FieldLog';
import { useSurveyStore } from '../hooks/useSurveyStore';
import { useToast } from '../components/ui/Toast';
import { cn } from '../utils/cn';

import { SCHEDULE_ACTIVITIES } from '../data/schedule';

export function Adventure() {
    const { state, setPreSurvey, setProfile, setFieldData, syncData, clearState, lastSync } = useSurveyStore();
    const { showToast } = useToast();
    const [expandedDay, setExpandedDay] = useState<number | null>(null);
    const [view, setView] = useState<'intro' | 'survey' | 'journey' | 'fieldlog'>(
        state.profile ? 'journey' : 'intro'
    );

    const handleStartSurvey = () => setView('survey');

    const handleSurveyComplete = (data: any) => {
        const profile = {
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
            email: data.email,
            institucion: data.institucion
        };

        setProfile(profile);
        setPreSurvey(data);

        // Sincronización NO bloqueante de datos PRE
        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': profile.nombre || '',
            'Apellido': profile.apellido || '',
            'DNI': profile.dni || '',
            'Email': profile.email || '',
            'Escuela': profile.institucion || '',
            'Percepción_de_Seguridad': data.percepcion,
            'Conocimiento_RCP': '',
            'Auditoria_Celular': '',
            'Sin_Celular': '',
            'Fuera_de_Senda': '',
            'Encuesta_Final_1': '',
            'Encuesta_Final_2': '',
            'Encuesta_Final_3': ''
        });

        showToast('Encuesta PRE guardada correctamente', 'success');
        setView('journey');
    };

    const handleFieldLogComplete = (data: any) => {
        setFieldData(data);



        // Sincronización NO bloqueante de datos de Bitácora (Día 4)
        syncData({
            'Fecha': new Date().toLocaleString('es-AR'),
            'Nombre': state.profile?.nombre || '',
            'Apellido': state.profile?.apellido || '',
            'DNI': state.profile?.dni || '',
            'Escuela': state.profile?.institucion || '',
            'Percepción_de_Seguridad': state.preSurvey?.percepcion || '',
            'Conocimiento_RCP': '',
            'Auditoria_Celular': data.counts.celular,
            'Sin_Celular': data.counts.cinturon,
            'Fuera_de_Senda': data.counts.senda,
            'Encuesta_Final_1': '',
            'Encuesta_Final_2': '',
            'Encuesta_Final_3': ''
        });

        showToast('Bitácora de campo guardada correctamente', 'success');
        setView('journey');
    };

    const navigationButtons = (
        <nav className="sticky top-0 z-40 bg-brand-navy/95 backdrop-blur-md border-b border-white/5 py-0.5 px-4 md:px-8 shadow-2xl">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
                <div className="flex gap-2">
                    <Link to="/">
                        <Button variant="outline" size="sm" className="border-white/10 text-gray-400 hover:text-white px-1.5 py-0 md:px-2 md:py-0.5 text-[8px] md:text-[9px]">
                            ← INICIO
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                            if (confirm('¿Reiniciar todo el progreso?')) {
                                clearState();
                                window.location.reload();
                            }
                        }}
                        className="border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white px-1.5 py-0 md:px-2 md:py-0.5 text-[8px] md:text-[9px]"
                    >
                        REINICIAR APP
                    </Button>
                </div>
                {lastSync && (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[8px] font-bold uppercase tracking-widest">
                        <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
                        Último envío: {lastSync}
                    </div>
                )}
            </div>
        </nav>
    );

    if (view === 'fieldlog') {
        return (
            <div className="min-h-screen bg-brand-navy p-6">
                <Button
                    variant="outline"
                    onClick={() => setView('journey')}
                    className="mb-8"
                >
                    ← VOLVER AL TRAYECTO
                </Button>
                <div className="max-w-4xl mx-auto">
                    <FieldLog onComplete={handleFieldLogComplete} />
                </div>
            </div>
        );
    }

    if (view === 'survey') {
        return (
            <div className="min-h-screen bg-brand-navy flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-2xl bg-brand-navy border border-gray-800 p-8 shadow-2xl mt-8">
                    <h2 className="text-3xl font-brand-heading font-bold italic uppercase mb-8 text-brand-yellow">
                        Registro de <span className="text-white">Participante</span>
                    </h2>
                    <PreSurveyForm onComplete={handleSurveyComplete} />
                </div>
            </div>
        );
    }

    if (view === 'intro') {
        return (
            <div className="min-h-screen bg-brand-navy text-white flex flex-col relative overflow-hidden">
                {navigationButtons}

                <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
                    <div className="text-center max-w-4xl animate-in fade-in zoom-in duration-700">
                        <div className="inline-block bg-brand-yellow text-brand-navy px-4 py-1 mb-6 font-bold skew-x-[-12deg] tracking-tighter">
                            FASE DE ENTRENAMIENTO
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-brand-heading font-bold italic uppercase tracking-tighter leading-none mb-4">
                            Multiplicadores<br />
                            <span className="text-brand-yellow">Viales</span>
                        </h1>
                        <p className="text-sm md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Bienvenido al programa de transformación ciudadana. Prepárate para convertirte en un <span className="text-white font-bold">Multiplicador de Seguridad Vial</span> en la Ciudad.
                        </p>

                        <div className="w-full max-w-2xl mx-auto bg-brand-navy/90 backdrop-blur-md border border-brand-yellow/30 p-8 shadow-2xl mt-8 text-left rounded-xl">
                            <h2 className="text-3xl font-brand-heading font-bold italic uppercase mb-8 text-brand-yellow text-center">
                                Registro de <span className="text-white">Participante</span>
                            </h2>
                            <PreSurveyForm onComplete={handleSurveyComplete} />
                        </div>
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-yellow/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-yellow/5 to-transparent pointer-events-none" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-navy text-white flex flex-col">
            {navigationButtons}

            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-yellow font-bold tracking-widest uppercase italic mb-4 block text-xs">Trayecto Formativo 2026</span>
                            <h2 className="text-2xl md:text-6xl font-brand-heading font-bold italic uppercase tracking-tighter leading-none mb-8">
                                MULTIPLICADORES<br />
                                <span className="text-brand-yellow">VIALES</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
                                No es solo una capacitación. Es tu entrenamiento para liderar el cambio en la seguridad vial de Buenos Aires.
                            </p>

                            <div className="bg-brand-yellow/10 border-l-4 border-brand-yellow p-6 rounded-r-lg">
                                <div className="flex items-center gap-4 mb-3">
                                    <CheckCircle2 className="text-brand-yellow w-6 h-6" />
                                    <h3 className="text-xl font-bold text-white uppercase italic">Nuestra Solución</h3>
                                </div>
                                <p className="text-gray-300">Un trayecto formativo integral de 5 jornadas donde dejarás de ser un espectador para ser un protagonista de la prevención.</p>
                            </div>
                        </div>

                        <Card className="p-8 border-white/5 bg-brand-navy shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Award className="w-48 h-48 text-white" />
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-6 text-brand-yellow flex items-center gap-3">
                                <Rocket className="w-6 h-6" /> Tu Valor Agregado
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Adquirirás habilidades técnicas de seguridad vial y conocimientos vitales de RCP, posicionándote como un actor responsable y preparado en la vía pública.
                            </p>
                            <div className="pt-6 border-t border-white/10">
                                <h4 className="text-white font-bold uppercase italic mb-4">Nuestra Misión</h4>
                                <p className="text-gray-400">Queremos brindarte una experiencia que te conecte con el mundo laboral y ciudadano. Al finalizar, no solo serás un peatón responsable, sino un agente de cambio capaz de promover la seguridad y salvar vidas en nuestra Ciudad.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Trayecto de los 5 días */}
            <section className="py-24 bg-brand-navy">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-brand-heading font-bold italic uppercase tracking-tighter text-white mb-4">
                            Resumen de tu <span className="text-brand-yellow">Trayecto</span>
                        </h2>
                        <p className="text-gray-400 text-lg uppercase tracking-widest font-bold">
                            {state.profile ? `ALUMNO: ${state.profile.nombre.toUpperCase()} ${state.profile.apellido.toUpperCase()} ` : '(Los 5 días del programa)'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Día 1 */}
                        <Card
                            hoverEffect
                            onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                            className={cn(
                                "group transition-all duration-300 cursor-pointer",
                                expandedDay === 1 ? "ring-2 ring-brand-yellow bg-brand-yellow/5" : ""
                            )}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Zap className="w-12 h-12 text-brand-yellow" />
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <div className="border border-brand-yellow/50 bg-brand-yellow/10 px-3 py-1 text-[10px] font-bold text-brand-yellow uppercase tracking-tighter w-fit">
                                            Día 1
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 px-2 text-[9px] border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy gap-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open('https://maps.app.goo.gl/34QvmfmhUYcMEGhG9', '_blank');
                                            }}
                                        >
                                            <MapPin className="w-3 h-3" />
                                            COMO LLEGO
                                        </Button>
                                    </div>
                                </div>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                                    expandedDay === 1 ? "rotate-180 text-brand-yellow" : ""
                                )} />
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-2 text-white group-hover:text-brand-yellow transition-colors leading-tight">
                                Seguridad Vial, el Estado y la Licencia
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Proceso administrativo y educativo para el otorgamiento de las licencias de conducir en CABA.
                            </p>

                            {expandedDay === 1 && (
                                <div className="mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {SCHEDULE_ACTIVITIES[1].map((act, i) => (
                                        <div key={i} className="flex gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-xl">{act.icon}</span>
                                            <div>
                                                {act.link ? (
                                                    <a
                                                        href={act.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-white uppercase tracking-tighter hover:text-brand-yellow hover:underline transition-all"
                                                    >
                                                        {act.title}
                                                    </a>
                                                ) : (
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-tighter">{act.title}</h4>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Información Logística de Acceso */}
                                    <div className="mt-4 p-4 bg-brand-yellow/5 border border-brand-yellow/20 rounded-xl space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-brand-navy shadow-lg">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-black text-brand-yellow uppercase tracking-widest">Sede de Licencias (Roca)</h4>
                                                <a
                                                    href="https://maps.app.goo.gl/34QvmfmhUYcMEGhG9"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-white font-bold hover:underline decoration-brand-yellow underline-offset-4"
                                                >
                                                    Av. Coronel Roca 5252, CABA
                                                </a>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                            <div className="flex items-start gap-2">
                                                <Bus className="w-3.5 h-3.5 text-brand-yellow mt-0.5" />
                                                <div>
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase block">Colectivos</span>
                                                    <p className="text-[10px] text-gray-300 leading-tight">28, 47, 91, 114, 115, 117, 145, 150, 185</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <TrainFront className="w-3.5 h-3.5 text-brand-yellow mt-0.5" />
                                                <div>
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase block">Premetro</span>
                                                    <p className="text-[10px] text-gray-300 leading-tight">Estaciones Larrazábal / Gabino Ezeiza</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Material de Estudio Día 1 */}
                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-[10px] font-black text-brand-yellow uppercase tracking-widest px-1">Material de Estudio</h4>
                                        <Button
                                            fullWidth
                                            size="sm"
                                            variant="outline"
                                            className="justify-between border-brand-yellow/30 text-white hover:bg-brand-yellow hover:text-brand-navy group/manual"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open('https://drive.google.com/uc?export=download&id=1R85QOJLpCDupt9YqMBob29MJJxMLmAjS', '_blank');
                                            }}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Download className="w-3.5 h-3.5 text-brand-yellow group-hover/manual:text-brand-navy" />
                                                <span className="text-[10px] font-bold">DESCARGAR MANUAL DEL CONDUCTOR</span>
                                            </div>
                                            <ArrowRight className="w-3 h-3 opacity-50 group-hover/manual:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            <div
                                className="pt-4 border-t border-white/5 space-y-3"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link to="/quiz" className="block">
                                    <Button fullWidth size="sm" variant="outline" className="justify-between group/btn border-gray-800 hover:border-brand-yellow">
                                        TEST SEÑALES <Play className="w-3 h-3 fill-current group-hover/btn:scale-125 transition-transform" />
                                    </Button>
                                </Link>
                                {true && (
                                    <Link to="/dia1" className="block animate-in slide-in-from-left duration-500">
                                        <Button fullWidth size="sm" variant="outline" className="justify-between group/btn border-brand-yellow/50 bg-brand-yellow/5 text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy">
                                            BIENVENIDOS AL DÍA 1 <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </Card>

                        {/* Día 2 */}
                        <Card
                            hoverEffect
                            onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                            className={cn(
                                "group transition-all duration-300 cursor-pointer",
                                expandedDay === 2 ? "ring-2 ring-brand-red bg-brand-red/5" : ""
                            )}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Heart className="w-12 h-12 text-brand-red" />
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <div className="border border-brand-red/50 bg-brand-red/10 px-3 py-1 text-[10px] font-bold text-brand-red uppercase tracking-tighter w-fit">
                                            Día 2
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-7 px-2 text-[9px] border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white gap-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open('https://www.google.com/maps/search/Estados+Unidos+3275,+CABA', '_blank');
                                            }}
                                        >
                                            <MapPin className="w-3 h-3" />
                                            COMO LLEGO
                                        </Button>
                                    </div>
                                </div>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                                    expandedDay === 2 ? "rotate-180 text-brand-red" : ""
                                )} />
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-2 text-white group-hover:text-brand-red transition-colors leading-tight">Socorrismo y Emergencias</h3>
                            <p className="text-gray-400 text-sm mb-4">Capacitación en RCP con Defensa Civil para saber cómo actuar legal y físicamente ante un choque.</p>

                            <div
                                className="pt-4 border-t border-white/5"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link to="/dia2">
                                    <Button fullWidth size="sm" variant="outline" className="justify-between group/btn border-brand-red/50 bg-brand-red/5 text-brand-red hover:bg-brand-red hover:text-white">
                                        BIENVENIDOS AL DÍA 2 <Play className="w-3 h-3 fill-current group-hover/btn:scale-125 transition-transform" />
                                    </Button>
                                </Link>
                            </div>

                            {expandedDay === 2 && (
                                <div className="mt-6 mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {SCHEDULE_ACTIVITIES[2].map((act, i) => (
                                        <div key={i} className="flex gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-xl">{act.icon}</span>
                                            <div>
                                                {act.link ? (
                                                    <a
                                                        href={act.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-white uppercase tracking-tighter hover:text-brand-red hover:underline transition-all"
                                                    >
                                                        {act.title}
                                                    </a>
                                                ) : (
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-tighter">{act.title}</h4>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Información Logística de Acceso Día 2 */}
                                    <div className="mt-4 p-4 bg-brand-red/5 border border-brand-red/20 rounded-xl space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-black text-brand-red uppercase tracking-widest">Defensa Civil</h4>
                                                <a
                                                    href="https://www.google.com/maps/search/Estados+Unidos+3275,+CABA"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-white font-bold hover:underline decoration-brand-red underline-offset-4"
                                                >
                                                    Estados Unidos 3275, CABA
                                                </a>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                                            <div className="flex items-start gap-2">
                                                <Bus className="w-3.5 h-3.5 text-brand-red mt-0.5" />
                                                <div>
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase block">Colectivos</span>
                                                    <p className="text-[10px] text-gray-300 leading-tight">31, 32, 41, 88, 96, 126, 127</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <TrainFront className="w-3.5 h-3.5 text-brand-red mt-0.5" />
                                                <div>
                                                    <span className="text-[9px] font-bold text-gray-500 uppercase block">Subte</span>
                                                    <p className="text-[10px] text-gray-300 leading-tight">Línea E (Urquiza) / Línea H (Humberto I)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Card>

                        {/* Día 3 */}
                        <Card
                            hoverEffect
                            onClick={() => setExpandedDay(expandedDay === 3 ? null : 3)}
                            className={cn(
                                "group transition-all duration-300 cursor-pointer",
                                expandedDay === 3 ? "ring-2 ring-blue-500 bg-blue-500/5" : ""
                            )}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Wrench className="w-12 h-12 text-blue-500" />
                                    <div className="border border-blue-500/50 bg-blue-500/10 px-3 py-1 text-[10px] font-bold text-blue-500 uppercase tracking-tighter">
                                        Día 3
                                    </div>
                                </div>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                                    expandedDay === 3 ? "rotate-180 text-blue-500" : ""
                                )} />
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-2 text-white group-hover:text-blue-500 transition-colors leading-tight">Seguridad Técnica y Control</h3>
                            <p className="text-gray-400 text-sm mb-4">Visita a la planta VTV para entender el mantenimiento vehicular y simulacros operativos con Agentes de Tránsito.</p>

                            <div
                                className="pt-4 border-t border-white/5"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link to="/vtv">
                                    <Button fullWidth size="sm" variant="outline" className="justify-between group/btn border-gray-800 hover:border-blue-500">
                                        REVISIÓN TÉCNICA <Play className="w-3 h-3 fill-current group-hover/btn:scale-125 transition-transform" />
                                    </Button>
                                </Link>
                            </div>

                            {expandedDay === 3 && (
                                <div className="mt-6 mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {SCHEDULE_ACTIVITIES[3].map((act, i) => (
                                        <div key={i} className="flex gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-xl">{act.icon}</span>
                                            <div>
                                                {act.link ? (
                                                    <a
                                                        href={act.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-white uppercase tracking-tighter hover:text-blue-500 hover:underline transition-all"
                                                    >
                                                        {act.title}
                                                    </a>
                                                ) : (
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-tighter">{act.title}</h4>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>

                        {/* Día 4 */}
                        <Card
                            hoverEffect
                            onClick={() => setExpandedDay(expandedDay === 4 ? null : 4)}
                            className={cn(
                                "group transition-all duration-300 cursor-pointer",
                                expandedDay === 4 ? "ring-2 ring-green-500 bg-green-500/5" : (state.fieldData ? 'border-green-500/50 bg-green-500/10' : '')
                            )}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Eye className="w-12 h-12 text-green-500" />
                                    <div className="border border-green-500/50 bg-green-500/10 px-3 py-1 text-[10px] font-bold text-green-500 uppercase tracking-tighter">
                                        Día 4
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-gray-500 transition-transform duration-300",
                                        expandedDay === 4 ? "rotate-180 text-green-500" : ""
                                    )} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-2 text-white group-hover:text-green-500 transition-colors leading-tight">Auditoría en Campo</h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                Actividad en una intersección crítica real para diagnosticar riesgos con tu propia plantilla.
                            </p>

                            {state.fieldData && (
                                <div className="mb-4 text-green-500 text-xs font-bold flex items-center gap-2 bg-green-500/10 p-2 border border-green-500/20">
                                    <CheckCircle2 className="w-4 h-4" /> DATOS REGISTRADOS CON ÉXITO
                                </div>
                            )}

                            <div
                                className="pt-4 border-t border-white/5 space-y-3"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {state.profile && (
                                    <Link to="/auditoria" className="block">
                                        <Button
                                            fullWidth
                                            size="sm"
                                            variant="outline"
                                            className={cn(
                                                "justify-between group/btn transition-all duration-300",
                                                state.fieldData
                                                    ? "border-green-500/50 bg-green-500/5 text-green-500 hover:bg-green-500 hover:text-brand-navy"
                                                    : "border-gray-800 hover:border-green-500 animate-pulse"
                                            )}
                                        >
                                            ENTRENAMIENTO AUDITOR <Binoculars className="w-3 h-3 group-hover/btn:scale-125 transition-transform" />
                                        </Button>
                                    </Link>
                                )}
                            </div>

                            {expandedDay === 4 && (
                                <div className="mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {SCHEDULE_ACTIVITIES[4].map((act, i) => (
                                        <div key={i} className="flex gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-xl">{act.icon}</span>
                                            <div>
                                                {act.link ? (
                                                    <a
                                                        href={act.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-white uppercase tracking-tighter hover:text-green-500 hover:underline transition-all"
                                                    >
                                                        {act.title}
                                                    </a>
                                                ) : (
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-tighter">{act.title}</h4>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>

                        {/* Día 5 */}
                        <Card
                            hoverEffect
                            onClick={() => setExpandedDay(expandedDay === 5 ? null : 5)}
                            className={cn(
                                "group transition-all duration-300 cursor-pointer",
                                expandedDay === 5 ? "ring-2 ring-purple-500 bg-purple-500/5" : ""
                            )}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <Users className="w-12 h-12 text-purple-500" />
                                    <div className="border border-purple-500/50 bg-purple-500/10 px-3 py-1 text-[10px] font-bold text-purple-500 uppercase tracking-tighter">
                                        Día 5
                                    </div>
                                </div>
                                <ChevronDown className={cn(
                                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                                    expandedDay === 5 ? "rotate-180 text-purple-500" : ""
                                )} />
                            </div>
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-2 text-white group-hover:text-purple-500 transition-colors leading-tight">El Efecto Multiplicador</h3>
                            <p className="text-gray-400 text-sm mb-4">Debate final, cierre de jornada y preparación para replicar lo aprendido en tu escuela.</p>

                            <div
                                className="pt-4 border-t border-white/5"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Link to="/multiplicador">
                                    <Button fullWidth size="sm" variant="outline" className="justify-between group/btn border-gray-800 hover:border-purple-500 text-[10px]">
                                        RECLAMAR LOGROS <Award className="w-3 h-3 transition-transform group-hover/btn:scale-125" />
                                    </Button>
                                </Link>
                            </div>

                            {expandedDay === 5 && (
                                <div className="mb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {SCHEDULE_ACTIVITIES[5].map((act, i) => (
                                        <div key={i} className="flex gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-xl">{act.icon}</span>
                                            <div>
                                                {act.link ? (
                                                    <a
                                                        href={act.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs font-bold text-white uppercase tracking-tighter hover:text-purple-500 hover:underline transition-all"
                                                    >
                                                        {act.title}
                                                    </a>
                                                ) : (
                                                    <h4 className="text-xs font-bold text-white uppercase tracking-tighter">{act.title}</h4>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>

                        {/* Final Reward */}
                        <Card hoverEffect className={cn(
                            "group border-brand-yellow/30",
                            state.completed ? "border-brand-yellow bg-brand-yellow/10" : "bg-gradient-to-br from-brand-yellow/20 to-transparent"
                        )}>
                            <Trophy className="w-12 h-12 text-brand-yellow mb-6 animate-pulse" />
                            <h3 className="text-2xl font-brand-heading font-bold italic uppercase mb-4 text-white">Logro Final</h3>
                            <p className="text-gray-300">Al completar este camino, recibirás tu <strong>Diploma de Multiplicador Vial</strong>, reconociéndote como un referente para tu comunidad.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-brand-navy/80 border-t border-white/10 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-brand-heading font-bold italic uppercase mb-10 text-white">
                        {state.completed ? '¡Trayecto Finalizado!' : 'Tu entrenamiento comienza ahora'}
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {!state.profile ? (
                            <Button size="lg" onClick={handleStartSurvey} className="bg-brand-yellow text-brand-navy hover:bg-white text-xl py-8 px-12 shadow-hard">
                                EMPEZAR DESAFÍO <Target className="ml-2 w-6 h-6" />
                            </Button>
                        ) : state.completed ? (
                            <Link to="/results">
                                <Button size="lg" className="bg-brand-yellow text-brand-navy hover:bg-white text-xl py-8 px-12 shadow-hard">
                                    VER RESULTADOS Y DIPLOMA <Award className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                        ) : (
                            <Link to="/results">
                                <Button size="lg" className="bg-brand-red text-white hover:bg-red-600 text-xl py-8 px-12 shadow-hard">
                                    IR AL CIERRE (POST-SURVEY) <ClipboardList className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                        )}
                        <Link to="/">
                            <Button variant="outline" className="text-xl py-8 px-12">
                                REVISAR CRONOGRAMA
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
