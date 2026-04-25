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
}

import rawQuestions from './simulatorQuestions.json';
export const simulatorQuestions: SimulatorQuestion[] = rawQuestions as SimulatorQuestion[];
