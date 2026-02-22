export interface VTVPoint {
    id: string;
    title: string;
    description: string;
    faultLevel: 'grave' | 'leve';
    icon: string;
}

export const vtvPoints: VTVPoint[] = [
    {
        id: 'frenos',
        title: 'SISTEMA DE FRENADO',
        description: 'Se verifica la eficacia de frenado y el desequilibrio entre ruedas del mismo eje. Un desequilibrio mayor al 30% es falla crítica.',
        faultLevel: 'grave',
        icon: '🛑'
    },
    {
        id: 'luces',
        title: 'SISTEMA DE LUCES',
        description: 'Funcionamiento de luces de giro, freno, posición, marcha atrás y alineación de faros delanteros.',
        faultLevel: 'leve',
        icon: '💡'
    },
    {
        id: 'neumaticos',
        title: 'NEUMÁTICOS Y LLANTAS',
        description: 'El dibujo debe tener una profundidad mínima de 1.6 mm. Se inspeccionan deformaciones, cortes o telas a la vista.',
        faultLevel: 'grave',
        icon: '🛞'
    },
    {
        id: 'suspension',
        title: 'SUSPENSIÓN Y DIRECCIÓN',
        description: 'Estado de amortiguadores, bujes, extremos de dirección y juegos en la caja de dirección.',
        faultLevel: 'grave',
        icon: '⚙️'
    },
    {
        id: 'emisiones',
        title: 'EMISIÓN DE GASES',
        description: 'Control de niveles de contaminación y ruidos del sistema de escape.',
        faultLevel: 'leve',
        icon: '💨'
    },
    {
        id: 'seguridad',
        title: 'SEGURIDAD PASIVA',
        description: 'Estado de cinturones de seguridad, apoyacabezas y matafuego (vencimiento y carga).',
        faultLevel: 'grave',
        icon: '🦺'
    }
];

export interface VTVScenario {
    id: number;
    vehicleType: string;
    observation: string;
    correctResult: 'apto' | 'condicional' | 'rechazado';
    explanation: string;
}

export const vtvScenarios: VTVScenario[] = [
    {
        id: 1,
        vehicleType: "Moto 250cc",
        observation: "Neumático trasero con dibujo de 0.8 mm de profundidad. Luces de giro funcionan correctamente.",
        correctResult: 'rechazado',
        explanation: "El límite legal de profundidad es de 1.6 mm. Por debajo de 1.0 mm en motos es considerado una falla crítica que compromete la adherencia (efecto aquaplaning)."
    },
    {
        id: 2,
        vehicleType: "Auto Particular",
        observation: "Pérdida leve de líquido de limpieza de parabrisas. Alineación de faros levemente desviada. Frenos OK.",
        correctResult: 'condicional',
        explanation: "Las fallas de alineación de faros son leves. El vehículo es condicional: puede circular pero debe subsanar y volver a verificar en 60 días."
    },
    {
        id: 3,
        vehicleType: "Camioneta",
        observation: "Falta el matafuego. Cinturón de seguridad del conductor trabado.",
        correctResult: 'rechazado',
        explanation: "Los elementos de seguridad pasiva (cinturones) y el equipo de emergencia (matafuego) son obligatorios y su falla o ausencia motiva el rechazo inmediato."
    }
];
