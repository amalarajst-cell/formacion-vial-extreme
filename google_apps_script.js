/**
 * Formación Vial Extreme - Script de Sincronización
 * 
 * INSTRUCCIONES:
 * 1. Copia todo este código.
 * 2. Ve a tu Hoja de Cálculo de Google.
 * 3. Extensiones > Apps Script.
 * 4. Pega este código reemplazando CUALQUIER contenido existente.
 * 5. Guarda (Ctrl+S) y haz clic en "Implementar" > "Nueva implementación".
 * 6. Selecciona "Aplicación web".
 * 7. En "Quién puede acceder", selecciona "Cualquier persona".
 * 8. Copia la URL de la aplicación web y actualízala en tu código si cambió.
 */

// Función auxiliar para guardar datos (usada por doPost y doGet)
function guardarDatos(data) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Definir los encabezados esperados
    var desiredHeaders = [
        'Fecha',
        'Nombre',
        'Apellido',
        'DNI',
        'Escuela',
        'Percepción_de_Seguridad',
        'Señal_Transitoria',
        'Conocimiento_RCP',
        'Simulacion_Emergencia',
        'Auditoria_Celular',
        'Sin_Celular',
        'Fuera_de_Senda',
        'Encuesta_Final_1',
        'Encuesta_Final_2',
        'Encuesta_Final_3',
        'Prioridades_Paso'
    ];

    // 1. Obtener encabezados actuales
    var lastCol = sheet.getLastColumn();
    var currentHeaders = [];
    if (lastCol > 0) {
        currentHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    }

    // 2. Identificar y crear encabezados faltantes
    var newHeaders = [];
    for (var i = 0; i < desiredHeaders.length; i++) {
        if (currentHeaders.indexOf(desiredHeaders[i]) === -1) {
            newHeaders.push(desiredHeaders[i]);
            currentHeaders.push(desiredHeaders[i]);
        }
    }

    // 3. Si hay nuevos, agregarlos a la hoja
    if (newHeaders.length > 0) {
        var startCol = lastCol > 0 ? lastCol + 1 : 1;
        sheet.getRange(1, startCol, 1, newHeaders.length).setValues([newHeaders]);
    }

    // Mapeo de datos a las columnas correctas
    var rowData = [];
    for (var i = 0; i < currentHeaders.length; i++) {
        var headerName = currentHeaders[i];
        var cellValue = data[headerName] !== undefined ? data[headerName] : "";
        rowData.push(cellValue);
    }

    // Agregar la fila
    sheet.appendRow(rowData);
}

// POST: recibe datos via fetch
function doPost(e) {
    try {
        var data = JSON.parse(e.parameter.data);
        guardarDatos(data);
        return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// GET: recibe datos via JSONP (fallback)
function doGet(e) {
    try {
        var callback = e.parameter.callback || "callback";
        var data = JSON.parse(e.parameter.data);
        guardarDatos(data);
        var output = callback + '({"result":"success"})';
        return ContentService.createTextOutput(output)
            .setMimeType(ContentService.MimeType.JAVASCRIPT);
    } catch (error) {
        var cb = (e.parameter && e.parameter.callback) || "callback";
        var output = cb + '({"result":"error","error":"' + error.message + '"})';
        return ContentService.createTextOutput(output)
            .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
}

