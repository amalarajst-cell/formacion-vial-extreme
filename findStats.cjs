const XLSX = require('xlsx');
const wb = XLSX.readFile('Excel y fotos/Preguntas Sep 2023 - ultima versión (1).xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws, {header:1, defval: ''});
const matches = data.filter((row, index) => {
    const isMatch = row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes('estadisticas'));
    if (isMatch) row._rowNum = index + 1;
    return isMatch;
});
console.log(JSON.stringify(matches, null, 2));
