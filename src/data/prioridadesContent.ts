// Contenido educativo para el módulo de Prioridades de Paso
// Cada tarjeta representa una regla de prioridad con su fundamentación legal

export interface PrioridadRule {
    id: string;
    title: string;
    category: 'general' | 'rotondas' | 'emergencias' | 'peatones' | 'senalizacion';
    description: string;
    legalBasis: string;
    icon: string; // emoji para representar visualmente
}

export const prioridadRules: PrioridadRule[] = [
    // GENERALES
    {
        id: 'pg1',
        title: 'PRIORIDAD DE LA DERECHA',
        category: 'general',
        description: 'En las encrucijadas sin semáforo ni señalización, el vehículo que circula por la derecha tiene prioridad de paso sobre el que viene por la izquierda.',
        legalBasis: 'Art. 41 - Ley Nacional de Tránsito 24.449',
        icon: '➡️'
    },
    {
        id: 'pg2',
        title: 'AVENIDA VS CALLE',
        category: 'general',
        description: 'El vehículo que circula por una vía de mayor jerarquía (avenida) tiene prioridad sobre el que viene por una calle. La jerarquía de la vía prevalece sobre la regla de la derecha.',
        legalBasis: 'Art. 41 inc. d - Ley 24.449',
        icon: '🛣️'
    },
    {
        id: 'pg3',
        title: 'GIRO A LA IZQUIERDA',
        category: 'general',
        description: 'El vehículo que gira a la izquierda debe ceder el paso a todos los que circulan en sentido contrario y a los que ya están girando.',
        legalBasis: 'Art. 43 - Ley 24.449',
        icon: '↩️'
    },
    {
        id: 'pg4',
        title: 'INCORPORACIÓN AL TRÁNSITO',
        category: 'general',
        description: 'Todo vehículo que sale de un estacionamiento, garage o calle privada debe ceder el paso a los que circulan por la vía pública. No tiene ninguna prioridad.',
        legalBasis: 'Art. 41 inc. f - Ley 24.449',
        icon: '🅿️'
    },
    // ROTONDAS
    {
        id: 'pr1',
        title: 'CIRCULACIÓN EN ROTONDA',
        category: 'rotondas',
        description: 'El vehículo que ya circula dentro de la rotonda tiene prioridad absoluta sobre el que intenta ingresar. Nunca se debe ingresar sin verificar que la rotonda esté libre.',
        legalBasis: 'Art. 41 inc. e - Ley 24.449',
        icon: '🔄'
    },
    {
        id: 'pr2',
        title: 'SENTIDO DE CIRCULACIÓN',
        category: 'rotondas',
        description: 'En las rotondas se circula siempre en sentido contrario a las agujas del reloj. Se ingresa por la derecha y se sale por la derecha.',
        legalBasis: 'Art. 41 - Ley 24.449',
        icon: '🔃'
    },
    // EMERGENCIAS
    {
        id: 'pe1',
        title: 'VEHÍCULOS DE EMERGENCIA',
        category: 'emergencias',
        description: 'Ambulancias, bomberos y policía en servicio con sirena y balizas encendidas tienen prioridad absoluta. Todos los vehículos deben ceder el paso inmediatamente, desplazándose a la derecha.',
        legalBasis: 'Art. 44 - Ley 24.449',
        icon: '🚑'
    },
    {
        id: 'pe2',
        title: 'COLUMNAS DE EMERGENCIA',
        category: 'emergencias',
        description: 'No se debe cortar ni interrumpir una columna de vehículos de emergencia. Se debe esperar a que pase toda la formación antes de retomar la marcha.',
        legalBasis: 'Art. 44 - Ley 24.449',
        icon: '🚒'
    },
    // PEATONES
    {
        id: 'pp1',
        title: 'PEATÓN EN LA SENDA',
        category: 'peatones',
        description: 'El peatón tiene prioridad absoluta en la senda peatonal o en su prolongación imaginaria en las esquinas. Todo vehículo que gira debe esperar a que el peatón complete el cruce.',
        legalBasis: 'Art. 38 y 41 - Ley 24.449',
        icon: '🚶'
    },
    {
        id: 'pp2',
        title: 'ZONAS ESCOLARES',
        category: 'peatones',
        description: 'En cercanías de escuelas, la velocidad máxima se reduce a 20 km/h durante los horarios de entrada y salida. Los niños tienen prioridad absoluta.',
        legalBasis: 'Art. 51 inc. h - Ley 24.449',
        icon: '🏫'
    },
    // SEÑALIZACIÓN
    {
        id: 'ps1',
        title: 'PARE (STOP)',
        category: 'senalizacion',
        description: 'La señal de PARE obliga a detener completamente el vehículo y ceder el paso a todos los que circulan por la vía transversal. Anula la regla de la derecha.',
        legalBasis: 'Art. 22 inc. a - Ley 24.449',
        icon: '🛑'
    },
    {
        id: 'ps2',
        title: 'CEDA EL PASO',
        category: 'senalizacion',
        description: 'Obliga a reducir la velocidad y, de ser necesario, detener la marcha para ceder el paso. A diferencia de PARE, no exige detención total si la vía está despejada.',
        legalBasis: 'Art. 22 inc. a - Ley 24.449',
        icon: '⚠️'
    },
    {
        id: 'ps3',
        title: 'SEMÁFORO',
        category: 'senalizacion',
        description: 'El semáforo prevalece sobre cualquier otra señalización. Rojo: detención total. Amarillo: precaución, prepararse para detenerse. Verde: paso libre verificando que la intersección esté libre.',
        legalBasis: 'Art. 44 - Ley 24.449',
        icon: '🚦'
    },
];

export const categoryLabels: Record<string, string> = {
    general: 'Reglas Generales',
    rotondas: 'Rotondas',
    emergencias: 'Emergencias',
    peatones: 'Peatones',
    senalizacion: 'Señalización'
};
