const XLSX = require('xlsx');
const wb = XLSX.readFile('Excel y fotos/Preguntas Sep 2023 - ultima versión (1).xlsx');
console.log('Hojas disponibles:', wb.SheetNames);

wb.SheetNames.forEach(name => {
    const ws = wb.Sheets[name];
    const data = XLSX.utils.sheet_to_json(ws, {header:1, defval: ''});
    const matches = data.filter((row, index) => {
        const isMatch = row.some(cell => typeof cell === 'string' && cell.toLowerCase().includes('estad'));
        if (isMatch) row._rowNum = index + 1;
        return isMatch;
    });
    if (matches.length > 0) {
        console.log(`\n--- Coincidencias en hoja: ${name} ---`);
        console.log(JSON.stringify(matches.slice(0, 5), null, 2));
    }
});
