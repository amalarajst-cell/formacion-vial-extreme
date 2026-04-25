export interface VTVPoint {
    id: string;
    title: string;
    description: string;
    faultLevel: 'grave' | 'leve';
    icon: string;
}

export const vtvPoints: VTVPoint[] = [
    {
        id: 'semaforos',
        title: 'SISTEMA DE SEMÁFOROS',
        description: 'Se monitorea el correcto funcionamiento de la red semafórica y su sincronización según la carga de tráfico.',
        faultLevel: 'grave',
        icon: '🚦'
    },
    {
        id: 'camaras',
        title: 'CÁMARAS DE MONITOREO',
        description: 'Control visual en tiempo real de avenidas e intersecciones para detectar incidentes o congestiones.',
        faultLevel: 'leve',
        icon: '📹'
    },
    {
        id: 'velocidad',
        title: 'CONTROL DE VELOCIDAD',
        description: 'Supervisión de radares que fiscalizan las velocidades máximas permitidas para reducir siniestros.',
        faultLevel: 'grave',
        icon: '📸'
    },
    {
        id: 'flujo',
        title: 'SENSORES DE FLUJO',
        description: 'Dispositivos que miden la cantidad de vehículos para adaptar los tiempos de los semáforos.',
        faultLevel: 'leve',
        icon: '📊'
    },
    {
        id: 'carteles',
        title: 'CARTELES VARIABLES',
        description: 'Mensajes dinámicos en avenidas para informar sobre desvíos, demoras o alertas.',
        faultLevel: 'leve',
        icon: '🪧'
    },
    {
        id: 'anillo',
        title: 'ANILLO DIGITAL',
        description: 'Pórticos con lectoras de patentes para identificar vehículos con pedidos de captura.',
        faultLevel: 'grave',
        icon: '⭕'
    }
];

export interface VTVScenario {
    id: number;
    vehicleType: string;
    observation: string;
    correctResult: 'normal' | 'alerta' | 'critico';
    explanation: string;
}

export const vtvScenarios: VTVScenario[] = [
    {
        id: 1,
        vehicleType: "Av. 9 de Julio y Corrientes",
        observation: "Corte total de calzada por manifestación. Flujo vehicular completamente detenido.",
        correctResult: 'critico',
        explanation: "Situación crítica. Se debe emitir una alerta a los carteles de leyenda variable y coordinar con Agentes de Tránsito para desvíos inmediatos."
    },
    {
        id: 2,
        vehicleType: "Autopista 25 de Mayo",
        observation: "Vehículo detenido en la banquina por falla mecánica. Tráfico fluido, sin obstrucción de carriles.",
        correctResult: 'alerta',
        explanation: "Situación de alerta. Se debe dar aviso a seguridad vial de la autopista para remolque, pero no requiere cortes de tránsito."
    },
    {
        id: 3,
        vehicleType: "Av. General Paz",
        observation: "Tránsito fluido en ambas manos. Velocidades dentro de los límites permitidos. Sin incidentes.",
        correctResult: 'normal',
        explanation: "Situación normal. No se requieren acciones operativas. Se continúa con el monitoreo habitual."
    }
];
