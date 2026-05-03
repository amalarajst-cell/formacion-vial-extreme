const XLSX = require('xlsx');
const fs = require('fs');

// Find the Excel file - try different possible names
let excelFile = null;
const files = fs.readdirSync('.');
for (const f of files) {
    if (f.toLowerCase().includes('pregunta') && (f.endsWith('.xlsx') || f.endsWith('.xls'))) {
        excelFile = f;
        break;
    }
}

if (!excelFile) {
    console.log('Excel files found:');
    files.filter(f => f.endsWith('.xlsx') || f.endsWith('.xls')).forEach(f => console.log(' -', f));
    process.exit(1);
}

console.log('Leyendo:', excelFile);
const wb = XLSX.readFile(excelFile, { type: 'binary', raw: false });

console.log('Hojas:', wb.SheetNames);

for (const sheetName of wb.SheetNames) {
    console.log(`\n=== HOJA: ${sheetName} ===`);
    const ws = wb.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
    console.log('Total filas:', data.length);
    
    // Print first 15 rows
    for (let i = 0; i < Math.min(15, data.length); i++) {
        const row = data[i];
        if (row.some(cell => cell !== '')) {
            console.log(`Fila ${i}:`, JSON.stringify(row));
        }
    }
    
    if (wb.SheetNames.length > 1) {
        console.log('(Solo mostrando primera hoja completa)');
        break; // Just show first sheet for now
    }
}
