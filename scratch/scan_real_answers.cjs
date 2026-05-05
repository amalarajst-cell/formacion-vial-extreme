const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('--- SCANNING FOR REAL ANSWERS ---');
for (let i = 1; i < 200; i++) {
    const row = rawData[i];
    const resp = String(row[5] || '');
    if (resp !== '' && !resp.includes('Opción')) {
        console.log(`Row ${i} (REAL):`, JSON.stringify(row));
    }
}
