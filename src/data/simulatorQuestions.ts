export interface SimulatorOption {
    text: string;
    isCorrect: boolean;
}

export interface SimulatorQuestion {
    id: string;
    question: string;
    options: SimulatorOption[];
    tema: string;
    manual: string;
    image?: string;
    needsImage?: boolean;
}

import rawQuestions from './simulatorQuestions.json';
export const simulatorQuestions: SimulatorQuestion[] = rawQuestions as SimulatorQuestion[];
