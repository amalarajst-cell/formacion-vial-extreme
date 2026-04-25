const fs = require('fs');

const content = fs.readFileSync('./src/data/simulatorQuestions.ts', 'utf8');

// Extract just the array
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
const arr = content.substring(startIdx, endIdx + 1);
const parsed = JSON.parse(arr);

// Write as pure JSON file
fs.writeFileSync('./src/data/simulatorQuestions.json', JSON.stringify(parsed, null, 2), 'utf8');
console.log('Written JSON with', parsed.length, 'questions.');

// Write a slim TS file that just re-exports from JSON
const tsContent = `export interface SimulatorOption {
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
`;

fs.writeFileSync('./src/data/simulatorQuestions.ts', tsContent, 'utf8');
console.log('Written slim TS wrapper.');
