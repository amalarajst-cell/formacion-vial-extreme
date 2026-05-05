const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('--- DATA FOR QUESTION ID 3 ---');
for (let i = 1; i < 20; i++) {
    const row = rawData[i];
    if (String(row[2]) === '3') {
        console.log(`Row ${i}:`, JSON.stringify(row));
    }
}
