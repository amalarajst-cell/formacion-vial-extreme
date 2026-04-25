const fs = require('fs');

const fileContent = fs.readFileSync('C:\\Users\\HP07\\.gemini\\antigravity\\brain\\3f092242-cbda-4c18-9311-9ad2805bc9e8\\.system_generated\\steps\\29\\content.md', 'utf8');

// Find CSV start
const lines = fileContent.split('\n');
let startIndex = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('CONTEO,')) {
        startIndex = i + 1; // skip header
        break;
    }
}

const rawLines = lines.slice(startIndex);

function cleanText(t) {
    if (!t) return '';
    return t
        .trim()
        // Replace curly/smart quotes with straight quotes
        .replace(/\u201c|\u201d/g, '"')
        .replace(/\u2018|\u2019/g, "'")
        // Remove leading option letters like "A. " or "B. "
        .replace(/^[A-Z]\.\s+/, '')
        .replace(/\n/g, ' ')
        .replace(/\r/g, '')
        .trim();
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            // Check for escaped quote ""
            if (inQuotes && line[i+1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += ch;
        }
    }
    result.push(current);
    return result;
}

const uniqueQuestionsMap = new Map();
let currentNro = null;
let currentQ = null;

for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    if (!rawLine || !rawLine.trim()) continue;
    
    const row = parseCSVLine(rawLine);
    if (row.length < 7) continue;

    const nro = (row[2] || '').trim();
    const pregunta = cleanText(row[4] || '');
    const respuesta = cleanText(row[5] || '');
    const correcta = (row[6] || '').trim() === 'X';
    const manual = cleanText(row[9] || '');
    const tema = cleanText(row[10] || '');

    if (nro && pregunta) {
        // New question
        if (!uniqueQuestionsMap.has(nro)) {
            currentQ = {
                id: nro,
                question: pregunta,
                options: [],
                tema: tema,
                manual: manual
            };
            uniqueQuestionsMap.set(nro, currentQ);
        } else {
            currentQ = uniqueQuestionsMap.get(nro);
        }
        currentNro = nro;
        if (respuesta) {
            // Check not already added
            const exists = currentQ.options.some(o => o.text === respuesta);
            if (!exists) {
                currentQ.options.push({ text: respuesta, isCorrect: correcta });
            }
        }
    } else if (respuesta && currentQ) {
        // Additional option for same question
        const exists = currentQ.options.some(o => o.text === respuesta);
        if (!exists) {
            currentQ.options.push({ text: respuesta, isCorrect: correcta });
        }
    }
}

// Filter out questions with fewer than 2 options or no correct answer
const finalQuestions = Array.from(uniqueQuestionsMap.values()).filter(q => {
    const hasCorrect = q.options.some(o => o.isCorrect);
    return q.options.length >= 2 && hasCorrect;
});

// Write JSON
fs.writeFileSync('./src/data/simulatorQuestions.json', JSON.stringify(finalQuestions, null, 2), 'utf8');
console.log('Written simulatorQuestions.json with', finalQuestions.length, 'valid questions.');

// Write slim TS wrapper
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
console.log('Written simulatorQuestions.ts wrapper.');
