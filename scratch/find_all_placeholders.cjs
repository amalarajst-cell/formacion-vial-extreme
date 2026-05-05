const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('--- FINDING ALL PLACEHOLDERS ---');
const seenQ = new Set();
for (let i = 1; i < rawData.length; i++) {
    const row = rawData[i];
    const qId = String(row[2] || '');
    const rText = String(row[5] || '');
    if (qId !== '' && rText.includes('Opción')) {
        if (!seenQ.has(qId)) {
            console.log(`ID ${qId}: ${row[4]}`);
            seenQ.add(qId);
        }
    }
}
