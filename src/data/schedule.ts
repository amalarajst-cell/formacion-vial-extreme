export interface Activity {
    title: string;
    icon: string;
    desc: string;
    link?: string;
}

export const SCHEDULE_ACTIVITIES: Record<number, Activity[]> = {
    1: [
        {
            title: 'Trámite de Otorgamiento',
            icon: 'id-card',
            desc: 'El rol regulador y educativo en la seguridad vial.',
            link: 'https://buenosaires.gob.ar/gcaba_historico/tramites/otorgamiento-de-licencia-de-conducir'
        },
        {
            title: 'Curso de Educación Vial para Otorgamiento de Licencia',
            icon: 'monitor-play',
            desc: 'Recorrido guiado por las instalaciones de práctica.',
            link: 'https://buenosaires.gob.ar/gcaba_historico/infraestructura/movilidad/curso-de-educacion-vial-para-otorgamiento-de-licencia'
        },
        {
            title: 'Examen Práctico - Motovehículos - Automóviles',
            icon: 'traffic-light',
            desc: 'Observación directa del examen práctico real.',
            link: 'https://buenosaires.gob.ar/gcaba_historico/gobierno/licencias-de-conducir/examen-practico'
        }
    ],
    2: [
        { title: 'Teoría de RCP', icon: 'book-open', desc: 'Conceptos fundamentales de reanimación.' },
        { title: 'Práctica con Muñecos', icon: 'activity', desc: 'Entrenamiento físico de compresiones.' },
        { title: 'Protocolo de Emergencia', icon: 'shield-alert', desc: 'Cómo actuar legalmente ante un siniestro.' }
    ],
    3: [
        { title: 'Visita a la VTV', icon: 'search', desc: 'Recorrido por la planta de verificación técnica.' },
        { title: 'Seguridad Técnica', icon: 'settings', desc: 'Control de frenos, luces y neumáticos.' },
        { title: 'Operativo Agentes', icon: 'user-check', desc: 'Simulacro de control vial en calle.' }
    ],
    4: [
        { title: 'Diagnóstico de Riesgo', icon: 'cone', desc: 'Identificación de puntos críticos en esquinas.' },
        { title: 'Toma de Datos', icon: 'clipboard-list', desc: 'Uso de la bitácora para registrar infracciones.' },
        { title: 'Auditoría Vial', icon: 'bar-chart-3', desc: 'Análisis de comportamiento de conductores.' }
    ],
    5: [
        { title: 'Evaluación Final', icon: 'trophy', desc: 'Cierre de conocimientos y examen integrador.' },
        { title: 'Entrega de Diplomas', icon: 'graduation-cap', desc: 'Reconocimiento como Multiplicador Vial.' }
    ]
};
