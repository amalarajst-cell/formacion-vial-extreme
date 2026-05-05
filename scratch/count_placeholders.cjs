const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

let placeholders = 0;
let real = 0;
const seenQ = new Set();

for (let i = 1; i < rawData.length; i++) {
    const row = rawData[i];
    const qText = String(row[4] || '');
    const rText = String(row[5] || '');
    if (qText === '' || rText === '') continue;
    
    const qId = String(row[2] || '');
    if (seenQ.has(qId)) continue;
    seenQ.add(qId);

    if (rText.includes('Opción')) {
        placeholders++;
    } else {
        real++;
    }
}
console.log('Placeholders:', placeholders);
console.log('Real:', real);
