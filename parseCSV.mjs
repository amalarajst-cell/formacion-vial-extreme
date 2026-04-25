import fs from 'fs';

const fileContent = fs.readFileSync('C:\\Users\\HP07\\.gemini\\antigravity\\brain\\3f092242-cbda-4c18-9311-9ad2805bc9e8\\.system_generated\\steps\\29\\content.md', 'utf-8');

// Skip header lines
const lines = fileContent.split('\n');
let startIndex = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('CONTEO,')) {
        startIndex = i;
        break;
    }
}

const csvLines = lines.slice(startIndex).join('\n');

function parseCSV(text) {
    let ret = [''], i = 0, p = '', s = true;
    for (let l in text) {
        l = text[l];
        if ('"' === l) {
            s = !s;
            if ('"' === p) {
                ret[i] += '"';
                l = '-';
            } else if (p === '') l = ''; 
        } else if (s && l === ',') l = ret[++i] = '';
        else ret[i] += l;
        p = l;
    }
    return ret;
}

const rawLines = csvLines.split('\n');
let currentQuestionId = null;
let currentQuestion = null;
const questionsMap = new Map();

for (let i = 1; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) continue;
    
    // Simple regex to split by comma, respecting quotes
    const row = [];
    let currentField = '';
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            row.push(currentField);
            currentField = '';
        } else {
            currentField += char;
        }
    }
    row.push(currentField);

    if (row.length < 7) continue;

    const nro = row[2];
    const cat = row[3];
    const preg = row[4];
    const resp = row[5];
    const correcta = row[6] === 'X';
    const manual = row[9];
    const tema = row[10];

    // If preg is empty, it means it's an option for the previous question
    let qText = preg ? preg : (currentQuestion ? currentQuestion.question : '');
    
    // We can group by "Nro + Categoria"
    if (nro && cat) {
        const id = `${nro}-${cat}`;
        if (!questionsMap.has(id)) {
            questionsMap.set(id, {
                id,
                nro: nro.trim(),
                category: cat.trim(),
                question: qText.trim(),
                options: [],
                manual: manual ? manual.trim() : '',
                tema: tema ? tema.trim() : ''
            });
        }
        currentQuestionId = id;
        currentQuestion = questionsMap.get(id);
    }
    
    if (currentQuestion && resp) {
        currentQuestion.options.push({
            text: resp.trim().replace(/^[A-Z]\.\s*/, ''), // Remove leading "A. "
            isCorrect: correcta
        });
    }
}

const questionsArray = Array.from(questionsMap.values()).filter(q => q.options.length > 0);

// Filter to keep only distinct questions (often they are repeated across categories)
const uniqueQuestionsMap = new Map();
questionsArray.forEach(q => {
    if (!uniqueQuestionsMap.has(q.nro)) {
        uniqueQuestionsMap.set(q.nro, {
            id: q.nro,
            question: q.question,
            options: q.options,
            tema: q.tema,
            manual: q.manual
        });
    }
});

const finalQuestions = Array.from(uniqueQuestionsMap.values());

// Generate TypeScript file
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

export const simulatorQuestions: SimulatorQuestion[] = ${JSON.stringify(finalQuestions, null, 2)};
`;

fs.writeFileSync('C:\\Users\\HP07\\Desktop\\Antigravity y Stich\\formacion-vial-extreme\\src\\data\\simulatorQuestions.ts', tsContent);
console.log('Successfully generated simulatorQuestions.ts with ' + finalQuestions.length + ' questions.');
