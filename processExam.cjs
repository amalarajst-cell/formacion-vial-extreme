const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const FOTOS_BASE = 'Excel y fotos';
const OUTPUT_JSON = path.join('src', 'data', 'simulatorQuestions.json');
const OUTPUT_IMAGES = path.join('public', 'simulator', 'images');

const MANUAL_FIXES = {
    '3': {
        'Opción A.': 'Automóvil',
        'Opción B.': 'Motovehículo',
        'Opción C.': 'Bicicleta'
    },
    '98': {
        'Opción A': 'Por el sector izquierdo del carril',
        'Opción B.': 'Por el centro del carril',
        'Opción C.': 'Por el sector derecho del carril'
    },
    '193': {
        'Opción A. Ya que al utilizar un sólo auricular la audición no se encuentra afectada.': 'Un auricular (no afecta la audición)',
        'Opción B. Ya que al activar el manos libres las manos quedan disponibles para la conducción.': 'Manos libres (manos disponibles)',
        'C. Ambos sistemas son riesgosos.': 'Ambos sistemas son riesgosos'
    },
    '355': {
        'Opción A.': 'Perpendicular a las vías (90°)',
        'Opción B.': 'Diagonal a las vías',
        'Opción C.': 'Paralelo a las vías'
    },
    '361': {
        'Opción A.': 'Grabado de autopartes',
        'Opción B.': 'Verificación Técnica Vehicular (VTV)',
        'C.': 'Ninguna de las anteriores'
    },
    '386': {
        'Opción A.': 'La rueda trasera',
        'Opción B.': 'La rueda delantera'
    },
    '394': {
        'Opción A.': 'La mano derecha',
        'Opción B.': 'La mano izquierda'
    }
};

function cleanText(t, qId) {
    if (t === null || t === undefined) return '';
    let text = String(t)
        .replace(/\u201c|\u201d/g, '"')
        .replace(/\u2018|\u2019/g, "'")
        .replace(/^[A-Z][\.\)]\s+/, '')
        .replace(/\n|\r/g, ' ')
        .trim();
    
    // Apply manual fixes for placeholders
    if (MANUAL_FIXES[qId]) {
        for (let key in MANUAL_FIXES[qId]) {
            if (t.includes(key)) return MANUAL_FIXES[qId][key];
        }
    }
    return text;
}

function isPlaceholder(text) {
    const t = text.toLowerCase().trim();
    return t === 'opción a.' || t === 'opción b.' || t === 'opción c.' || t === 'opción d.' || t === 'opción e.';
}

function padNum(n) {
    if (!n) return '000';
    return String(parseInt(n)).padStart(3, '0');
}

function findPhoto(imageNum) {
    if (!imageNum || imageNum === '' || String(imageNum).trim() === '') return null;
    const numStr = String(imageNum).trim();
    if (isNaN(parseInt(numStr))) return null;
    const padded = padNum(numStr);

    const rangeFolders = ['001 - 100', '101 - 200', '201 -300', '301 - 400'];
    for (var rIdx = 0; rIdx < rangeFolders.length; rIdx++) {
        const range = rangeFolders[rIdx];
        const questionFolder = path.join(FOTOS_BASE, range, padded);
        if (fs.existsSync(questionFolder)) {
            const hFile = path.join(questionFolder, padded + '-H.png');
            const lFile = path.join(questionFolder, padded + '-L.png');
            if (fs.existsSync(hFile)) return hFile;
            if (fs.existsSync(lFile)) return lFile;
            const files = fs.readdirSync(questionFolder).filter(function(f) { return /\.(png|jpg|jpeg|gif|webp)$/i.test(f); });
            if (files.length > 0) return path.join(questionFolder, files[0]);
        }
    }
    for (var sIdx = 0; sIdx < 2; sIdx++) {
        const special = ['grandes', 'gráficos'][sIdx];
        const specialFolder = path.join(FOTOS_BASE, special);
        if (fs.existsSync(specialFolder)) {
            const questionFolder = path.join(specialFolder, padded);
            if (fs.existsSync(questionFolder)) {
                const files = fs.readdirSync(questionFolder).filter(function(f) { return /\.(png|jpg|jpeg|gif|webp)$/i.test(f); });
                if (files.length > 0) return path.join(questionFolder, files[0]);
            }
        }
    }
    return null;
}

function copyPhoto(srcPath, imageNum, questionId) {
    if (!srcPath) return null;
    var ext = path.extname(srcPath);
    // Use the original image number in the filename for easier debugging
    var destName = 'q_' + String(questionId).replace(/[^a-z0-9]/gi, '_') + '_img' + padNum(imageNum) + ext;
    var destPath = path.join(OUTPUT_IMAGES, destName);
    try {
        fs.copyFileSync(srcPath, destPath);
        return '/simulator/images/' + destName;
    } catch(e) {
        console.warn('Warning copy:', e.message);
        return null;
    }
}

console.log('=== Generando simulatorQuestions.json desde Excel ===');
console.log('MAREO: Col E=Pregunta, Col F=Respuesta, Col G=Correcta, Col H=Imagen');
console.log('NOTA: Se usa la Columna H (index 7) para el número de imagen/carpeta.');

if (!fs.existsSync(OUTPUT_IMAGES)) {
    fs.mkdirSync(OUTPUT_IMAGES, { recursive: true });
} else {
    var oldImages = fs.readdirSync(OUTPUT_IMAGES).filter(function(f) { return f.startsWith('q_'); });
    console.log('Eliminando ' + oldImages.length + ' imágenes antiguas...');
    oldImages.forEach(function(f) { fs.unlinkSync(path.join(OUTPUT_IMAGES, f)); });
}

if (!fs.existsSync(EXCEL_FILE)) {
    console.error('ERROR: No se encontró:', EXCEL_FILE);
    process.exit(1);
}

var wb = XLSX.readFile(EXCEL_FILE, { raw: false });
var sheetName = wb.SheetNames[0];
var ws = wb.Sheets[sheetName];
var rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('Hoja: ' + sheetName + ', Filas: ' + rawData.length);

var questionsMap = new Map();
var lastNro = null;
var lastPregunta = '';
var lastManual = '';
var lastTema = '';
var lastImgNum = null;
var currentQ = null;
var excelOrderCounter = 0; // Tracks insertion order from Excel

for (var i = 1; i < rawData.length; i++) {
    var row = rawData[i];
    
    // Mapping based on user request:
    // Col C [2]: Question ID
    // Col D [3]: Categoria
    // Col E [4]: Pregunta
    // Col F [5]: Respuesta
    // Col G [6]: Respuesta Correcta (X)
    // Col H [7]: Numero de Imagen (Folder name)
    // Col J [9]: Manual
    // Col K [10]: Tema

    var qIdFromRow = String(row[2] || '').trim();
    if (qIdFromRow !== '') {
        lastNro = qIdFromRow;
        lastImgNum = null; 
    }

    var categoria = cleanText(row[3], lastNro);
    var pregunta = cleanText(row[4], lastNro);
    var respuesta = cleanText(row[5], lastNro);
    var correcta = String(row[6] || '').trim().toUpperCase() === 'X';
    var imgNum = String(row[7] || '').trim();
    var manual = cleanText(row[9], lastNro);
    var tema = cleanText(row[10], lastNro);

    if (qIdFromRow !== '') {
        if (pregunta !== '') {
            lastPregunta = pregunta;
            lastManual = manual;
            lastTema = tema;
        }
    }
    
    if (imgNum !== '') {
        lastImgNum = imgNum;
    }

    if (!respuesta) continue;

    var qKey = lastNro + '_' + lastPregunta.substring(0, 100);

    if (!questionsMap.has(qKey)) {
        excelOrderCounter++;
        currentQ = {
            id: lastNro,
            excelRow: i + 1,
            excelOrder: excelOrderCounter,
            question: lastPregunta,
            categories: [],
            options: [],
            tema: lastTema,
            manual: lastManual,
            image: null,
            _imgNum: lastImgNum || String(row[8] || '').trim() // ONLY H -> I. NO fallback to ID.
        };
        questionsMap.set(qKey, currentQ);
    } else {
        currentQ = questionsMap.get(qKey);
        if (lastImgNum && !currentQ._imgNum) {
            currentQ._imgNum = lastImgNum;
        }
    }

    if (categoria && !currentQ.categories.includes(categoria)) {
        currentQ.categories.push(categoria);
    }

    var exists = currentQ.options.some(function(o) { return o.text === respuesta; });
    if (!exists && respuesta !== '') {
        currentQ.options.push({ text: respuesta, isCorrect: correcta });
    }
}

console.log('\nAsignando imágenes y limpiando datos...');
var photoCopied = 0;
var photosNotFound = [];

var finalQuestions = [];
for (var q of questionsMap.values()) {
    // 1. Join categories
    q.categoria = q.categories.join(', ');
    delete q.categories;

    // 2. Assign image
    var imgNum = q._imgNum;
    if (imgNum) {
        var photoSrc = findPhoto(imgNum);
        if (photoSrc) {
            var imgUrl = copyPhoto(photoSrc, imgNum, q.id);
            if (imgUrl) {
                q.image = imgUrl;
                photoCopied++;
            }
        } else {
            photosNotFound.push('Q' + q.id + ' (carpeta: ' + imgNum + ')');
        }
    }
    delete q._imgNum;

    // 3. Validate
    var hasCorrect = q.options.some(function(o) { return o.isCorrect; });
    if (q.options.length >= 2 && hasCorrect) {
        finalQuestions.push(q);
    }
}

// Keep Excel order
finalQuestions.sort(function(a, b) { return a.excelOrder - b.excelOrder; });

finalQuestions.forEach(function(q) {
    if (!q.image) delete q.image;
    delete q._imgNum;
});

console.log('\nPreguntas válidas: ' + finalQuestions.length);
console.log('Fotos copiadas: ' + photoCopied);
console.log('Fotos no encontradas: ' + photosNotFound.length);

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(finalQuestions, null, 2), 'utf8');
console.log('\nGuardado: ' + OUTPUT_JSON);

var tsContent = 'export interface SimulatorOption {\n    text: string;\n    isCorrect: boolean;\n}\n\nexport interface SimulatorQuestion {\n    id: string;\n    excelOrder: number;\n    excelRow: number;\n    question: string;\n    categoria?: string;\n    options: SimulatorOption[];\n    tema: string;\n    manual: string;\n    image?: string;\n    needsImage?: boolean;\n}\n\nimport rawQuestions from \'./simulatorQuestions.json\';\nexport const simulatorQuestions: SimulatorQuestion[] = rawQuestions as SimulatorQuestion[];\n';
fs.writeFileSync(path.join('src', 'data', 'simulatorQuestions.ts'), tsContent, 'utf8');
console.log('Guardado: src/data/simulatorQuestions.ts');

console.log('\n=== MUESTRA ===');
finalQuestions.slice(0, 3).forEach(function(q) {
    console.log('Q' + q.id + ': ' + q.question.substring(0,50));
    console.log('  img: ' + (q.image || 'no-image'));
});
