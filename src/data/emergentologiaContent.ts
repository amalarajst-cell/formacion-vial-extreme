export interface ProtocolStep {
    id: string;
    title: string;
    category: 'pas' | 'trauma' | 'rcp';
    description: string;
    action: string;
    icon: string;
}

export const emergentologiaSteps: ProtocolStep[] = [
    // PROTOCOLO PAS
    {
        id: 'pas1',
        title: 'PROTEGER',
        category: 'pas',
        description: 'Asegurar la escena para evitar nuevos siniestros. Tu seguridad es lo más importante.',
        action: 'Estacioná tu vehículo en lugar seguro, colocá balizas y chaleco reflectante.',
        icon: '🛡️'
    },
    {
        id: 'pas2',
        title: 'AVISAR',
        category: 'pas',
        description: 'Activar el sistema de emergencias de la Ciudad.',
        action: 'Llamá al 107 (SAME) o 103 (Defensa Civil). Indicá ubicación exacta y cantidad de víctimas.',
        icon: '📞'
    },
    {
        id: 'pas3',
        title: 'SOCORRER',
        category: 'pas',
        description: 'Evaluación primaria de las víctimas sin realizar acciones invasivas.',
        action: 'Verificá si responde y si respira. No muevas a la víctima ni quites el casco.',
        icon: '🩹'
    },
    // MANEJO DE TRAUMATISMOS
    {
        id: 'tr1',
        title: 'HEMORRAGIAS',
        category: 'trauma',
        description: 'Pérdida de sangre por heridas visibles.',
        action: 'Presión directa sobre la herida con gasas o paño limpio. No hacer torniquetes sin capacitación.',
        icon: '🩸'
    },
    {
        id: 'tr2',
        title: 'LESIONES MÚSCULO-ESQUELÉTICAS',
        category: 'trauma',
        description: 'Posibles fracturas o luxaciones por impacto.',
        action: 'No intentes alinear huesos. Mantené la zona quieta hasta que llegue la ambulancia.',
        icon: '🦴'
    },
    {
        id: 'tr3',
        title: 'QUEMADURAS POR FRICCIÓN',
        category: 'trauma',
        description: 'Lesiones causadas por el roce del cuerpo contra el asfalto.',
        action: 'Refrescá abundantemente con agua limpia a temperatura ambiente. No apliques cremas ni remedios caseros.',
        icon: '🔥'
    },
    // RCP Y DEA
    {
        id: 'rcp1',
        title: 'RCP (SOLO MANOS)',
        category: 'rcp',
        description: 'Maniobra de reanimación cuando la víctima no responde y no respira.',
        action: 'Compresiones rápidas y profundas en el centro del pecho (100-120 por minuto). El ritmo es "Stayin\' Alive".',
        icon: '💓'
    },
    {
        id: 'rcp2',
        title: 'USO DEL DEA',
        category: 'rcp',
        description: 'Desfibrilador Externo Automático. Buenos Aires es una ciudad cardioprotegida.',
        action: 'Encendé el equipo y seguí las instrucciones de voz. El aparato analizará y dirá si aplicar descarga.',
        icon: '⚡'
    }
];

export const categoryLabels: Record<string, string> = {
    pas: 'Protocolo P.A.S.',
    trauma: 'Primeros Auxilios',
    rcp: 'Soporte Vital'
};
