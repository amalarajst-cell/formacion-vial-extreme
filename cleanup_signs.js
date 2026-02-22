
import fs from 'fs';
import path from 'path';

const signsDir = 'c:/Users/HP07/Desktop/Antigravity y Stich/formacion-vial-extreme/src/assets/senales';

// Lista de archivos a ELIMINAR (basada en el listado anterior de archivos "viejos")
const filesToDelete = [
    'alturaLimitada.svg', 'banderillero.svg', 'banos.svg', 'cajonMotos.svg', 'caminoReparacion.svg',
    'caminoSinuoso.svg', 'campamento.svg', 'ceda.png', 'conos.svg', 'contramano.png', 'cruceBici.svg',
    'cruceFerroviario.svg', 'curva.svg', 'deslizante.svg', 'desvio.svg', 'detonacion.svg', 'dobleAmarilla.svg',
    'equipoPesado.svg', 'escuela.svg', 'estacionServicio.svg', 'estacionamiento.svg', 'estrechamientoObra.svg',
    'estrechamientoPrev.svg', 'finDesvio.svg', 'flechaGiro.svg', 'flechaRecta.svg', 'giroObligatorio.svg',
    'hombresTrabajando.svg', 'hospital.svg', 'infoTuristica.svg', 'leyendaPare.svg', 'lineaDiscontinua.svg',
    'lineaFrenado.svg', 'lucesPeligro.svg', 'maquinaria.svg', 'materialCalzada.svg', 'museo.svg',
    'noEstacionar.png', 'noEstacionar.svg', 'noGirarIzquierda.svg', 'noGirarU.svg', 'pare.png', 'pare.svg',
    'pasoFerroviario.svg', 'peatones.svg', 'plaza.svg', 'policia.svg', 'prohibidoAdelantar.png',
    'prohibidoAvanzar.png', 'prohibidoCamiones.png', 'prohibidoEstacionarDiscos.png', 'prohibidoGirar.png',
    'prohibidoGiroDerecha.svg', 'prohibidoMotos.png', 'resalto.svg', 'restaurante.svg', 'romboAdvertencia.svg',
    'semaforo.svg', 'senda.svg', 'teleferico.svg', 'telefono.svg', 'trianguloCeda.svg', 'vallaObra.svg',
    'velocidad40.svg', 'velocidadMaxima.png', 'velocidadMinima.png', 'zonaProhibida.svg'
];

console.log(`Iniciando limpieza de ${filesToDelete.length} archivos en: ${signsDir}`);

let deletedCount = 0;
let errorCount = 0;

filesToDelete.forEach(file => {
    const filePath = path.join(signsDir, file);
    if (fs.existsSync(filePath)) {
        try {
            fs.unlinkSync(filePath);
            console.log(`Eliminado: ${file}`);
            deletedCount++;
        } catch (err) {
            console.error(`Error eliminando ${file}:`, err.message);
            errorCount++;
        }
    } else {
        console.log(`No encontrado (omitido): ${file}`);
    }
});

console.log(`\nResumen: ${deletedCount} eliminados, ${errorCount} errores.`);
