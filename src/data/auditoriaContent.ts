export interface RiesgoVial {
    id: string;
    title: string;
    category: 'infraestructura' | 'conducta' | 'entorno';
    description: string;
    queObservar: string;
    icon: string;
}

export const riesgosViales: RiesgoVial[] = [
    {
        id: 'senda',
        title: 'SENDA PEATONAL',
        category: 'infraestructura',
        description: 'La senda es el refugio del peatón. Si está borrosa o falta, el riesgo de atropello aumenta.',
        queObservar: '¿Está pintada? ¿Es visible de noche? ¿Tiene rampas de acceso en ambos lados?',
        icon: '🦓'
    },
    {
        id: 'celular',
        title: 'DISTRACCIÓN TECNOLÓGICA',
        category: 'conducta',
        description: 'El uso del celular reduce la atención un 50%, similar a conducir bajo efectos del alcohol.',
        queObservar: 'Conductores mirando abajo, peatones cruzando sin mirar por ir con la pantalla.',
        icon: '📱'
    },
    {
        id: 'visibilidad',
        title: 'ÁNGULOS MUERTOS Y OBSTÁCULOS',
        category: 'entorno',
        description: 'Vehículos estacionados en las esquinas o contenedores mal ubicados tapan la visión.',
        queObservar: '¿Hay vehículos tapando la visión en la esquina? ¿Vegetación que oculte señales?',
        icon: '👁️'
    },
    {
        id: 'velocidad',
        title: 'VELOCIDAD EN ENCRUCIJADA',
        category: 'conducta',
        description: 'Cruzar una esquina a más de 30 km/h reduce drásticamente el tiempo de reacción.',
        queObservar: '¿Los vehículos frenan antes de la bocacalle o pasan acelerando?',
        icon: '🚀'
    },
    {
        id: 'moto_casco',
        title: 'PROTECCIÓN EN MOTOS',
        category: 'conducta',
        description: 'El casco no es opcional, es el cráneo externo del conductor.',
        queObservar: '¿Llevan el casco abrochado? ¿Es un casco homologado o "de juguete"?',
        icon: '🪖'
    }
];
