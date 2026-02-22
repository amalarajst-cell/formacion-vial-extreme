
// Importar TODAS las nuevas imágenes desde src/assets/senales/ (Migradas de dist)

// REGLAMENTARIAS
import prohibicionAutosImg from '../assets/senales/Prohibiciòn de circular autos.png';
import prohibicionMotosImg from '../assets/senales/Prohibiciòn de circular motos.png';
import prohibidoAdelantarImg from '../assets/senales/Prohibido adelantar.png';
import prohibidoEstacionarImg from '../assets/senales/Prohibido estacionar.png';
import prohibidoEstacionarDetenerseImg from '../assets/senales/Prohibido estacionar y detenerse.png';
import prohibidoGirarIzquierdaImg from '../assets/senales/Prohibido girar a la izquierda.png';
import prohibidoGirarUImg from '../assets/senales/Prohibido girar en U.png';
import limiteVelocidadMaximaImg from '../assets/senales/Lìmite de velocidad màxima.png';
import limiteVelocidadMinimaImg from '../assets/senales/Lìmite de velocidad minima.png';
import limitacionAlturaImg from '../assets/senales/Limitaciòn de altura.png';
import limitacionPesoImg from '../assets/senales/Limitaciòn de peso.png';
import contramanoImg from '../assets/senales/Contramano.png';

// PREVENTIVAS
import badenImg from '../assets/senales/Badèn.png';
import calzadaResbaladizaImg from '../assets/senales/Calzada resbaladiza.png';
import caminoSinuosoImg from '../assets/senales/Camino sinuoso.png';
import cruceFerroviarioImg from '../assets/senales/Cruce ferroviario.png';
import curvaComunImg from '../assets/senales/Curva comùn.png';
import estrechamientoCalzadaImg from '../assets/senales/Estrechamiento de calzada.png';
import estrechamientoManoImg from '../assets/senales/Estrechamiento en una sola mano.png';
import incorporacionTransitoImg from '../assets/senales/Incorporaciòn de trànsito lateral.png';
import pendienteAscendenteImg from '../assets/senales/Pendiente ascendente.jpg';
import puenteAngostoImg from '../assets/senales/Puente angosto.png';
import tunelImg from '../assets/senales/Tùnel.png';
import zonaDerrumbesImg from '../assets/senales/Zona de derrumbes.png';
import zonaEscolaresImg from '../assets/senales/Zona escolares.png';

// INFORMATIVAS
import aerodromoImg from '../assets/senales/Aeròdromo.png';
import estacionServicioImg from '../assets/senales/Estaciòn de servicio.png';
import gomeriaImg from '../assets/senales/Gomerìa.png';
import policiaImg from '../assets/senales/Policìa.png';
import puestoSanitarioImg from '../assets/senales/Puesto sanitario.png';
import restauranteImg from '../assets/senales/Restaurante.png';
import comienzosAutopistaImg from '../assets/senales/Comienzo de autopista.png';
import finAutopistaImg from '../assets/senales/Fin de autopista.png';
import esquemaRecorridoImg from '../assets/senales/Esquema de recorrido.png';
import orientacionImg from '../assets/senales/Orientaciòn - En caminos primarios y secundarios.png';
import indicadoraCarrilesImg from '../assets/senales/Indicadora de utilizaciòn de carriles.png';

// TRANSITORIAS
import banderilleroImg from '../assets/senales/Banderillero.png';
import conosImg from '../assets/senales/Conos.png';
import delineadoresImg from '../assets/senales/Delineadores.png';
import desvioSentidoImg from '../assets/senales/Desvìo por cambio de sentido de circulaciòn.png';
import equipoPesadoImg from '../assets/senales/Equipo pesado en la vìa.png';
import finConstruccionImg from '../assets/senales/Fin de construcciòn.png';
import hombresTrabajandoImg from '../assets/senales/Hombres trabajando.png';
import longitudConstruccionImg from '../assets/senales/Longitud en la construcciòn.png';
import muroJerseyImg from '../assets/senales/Muro Jersey.png';
import personasTrabajandoImg from '../assets/senales/Personas trabajando.png';
import vallaObraImg from '../assets/senales/Valla de obra.png';
import tamborObraImg from '../assets/senales/Tambor de obra.png';

// HORIZONTALES
import flechaCombinadaImg from '../assets/senales/Flecha combinada.png';
import flechaSimpleImg from '../assets/senales/Flecha simple.png';
import sendaCiclistasImg from '../assets/senales/Senda para ciclistas.png';
import ciclistaImg from '../assets/senales/Ciclista.jpg';
import lineaCarrilContinuaImg from '../assets/senales/Lìnea de carril - Lìnea continua divisoria de corrientes del mismo sentido.png';
import lineaCarrilDiscontinuaImg from '../assets/senales/Lìnea de carril - Lìnea discontinua divisoria de corriente del mismo sentido.png';
import lineaSepContinuaDiscontinuaImg from '../assets/senales/Lìnea de separaciòn de sentido de circulaciòn - Lìnea divisoria continua paralela a otra discontìnua.png';
import lineaSepIndividualImg from '../assets/senales/Lìnea de separaciòn de sentido de circulaciòn - Lìnea individual continua.png';
import lineaSepParalelasImg from '../assets/senales/Lìnea de separaciòn de sentido de circulaciòn - Lìneas divisorias paralelas continuas.png';
import lineaSepReversiblesImg from '../assets/senales/Lìnea de separaciòn de sentido de circulaciòn - Lìneas divisorias paralelas discontinuas para carriles reversibles.png';
import lineasAuxReduccionImg from '../assets/senales/Lìneas auxiliares para reducciòn de velocidad.png';
import marcasCanalizadorasImg from '../assets/senales/Marcas especiales canalizadoras del trànsito.png';

export interface Sign {
    id: string;
    name: string;
    category: 'reglamentarias' | 'preventivas' | 'informativas' | 'horizontales' | 'transitorias';
    image: string;
    description: string;
}

export const signs: Sign[] = [
    // REGLAMENTARIAS
    { id: 'reg_1', name: 'Prohibición de circular autos', category: 'reglamentarias', image: prohibicionAutosImg, description: 'Prohíbe la circulación de vehículos automotores.' },
    { id: 'reg_2', name: 'Prohibición de circular motos', category: 'reglamentarias', image: prohibicionMotosImg, description: 'Prohíbe la circulación de motovehículos.' },
    { id: 'reg_3', name: 'Prohibido adelantar', category: 'reglamentarias', image: prohibidoAdelantarImg, description: 'Prohíbe realizar maniobras de sobrepaso.' },
    { id: 'reg_4', name: 'Prohibido estacionar', category: 'reglamentarias', image: prohibidoEstacionarImg, description: 'Prohíbe el estacionamiento en el sector indicado.' },
    { id: 'reg_5', name: 'Prohibido estacionar y detenerse', category: 'reglamentarias', image: prohibidoEstacionarDetenerseImg, description: 'Prohíbe tanto el estacionamiento como la detención momentánea.' },
    { id: 'reg_6', name: 'Prohibido girar a la izquierda', category: 'reglamentarias', image: prohibidoGirarIzquierdaImg, description: 'Prohíbe realizar giros hacia la izquierda.' },
    { id: 'reg_7', name: 'Prohibido girar en U', category: 'reglamentarias', image: prohibidoGirarUImg, description: 'Prohíbe realizar giros de 180 grados.' },
    { id: 'reg_8', name: 'Límite de velocidad máxima', category: 'reglamentarias', image: limiteVelocidadMaximaImg, description: 'Indica la velocidad máxima permitida en la vía.' },
    { id: 'reg_9', name: 'Límite de velocidad mínima', category: 'reglamentarias', image: limiteVelocidadMinimaImg, description: 'Indica la velocidad mínima obligatoria para circular.' },
    { id: 'reg_10', name: 'Limitación de altura', category: 'reglamentarias', image: limitacionAlturaImg, description: 'Restricción de paso para vehículos que superen la altura indicada.' },
    { id: 'reg_11', name: 'Limitación de peso', category: 'reglamentarias', image: limitacionPesoImg, description: 'Restricción de paso para vehículos que superen el peso indicado.' },
    { id: 'reg_12', name: 'Contramano', category: 'reglamentarias', image: contramanoImg, description: 'Indica sentido contrario de circulación.' },

    // PREVENTIVAS
    { id: 'prev_1', name: 'Badén', category: 'preventivas', image: badenImg, description: 'Advierte sobre la proximidad de una depresión transversal en la calzada.' },
    { id: 'prev_2', name: 'Calzada resbaladiza', category: 'preventivas', image: calzadaResbaladizaImg, description: 'Advierte que la calzada puede perder adherencia.' },
    { id: 'prev_3', name: 'Camino sinuoso', category: 'preventivas', image: caminoSinuosoImg, description: 'Advierte sobre una sucesión de curvas próximas.' },
    { id: 'prev_5', name: 'Curva común', category: 'preventivas', image: curvaComunImg, description: 'Advierte sobre una curva en la vía.' },
    { id: 'prev_7', name: 'Estrechamiento en una sola mano', category: 'preventivas', image: estrechamientoManoImg, description: 'Advierte una reducción en el ancho de la calzada de un solo lado.' },
    { id: 'prev_8', name: 'Incorporación de tránsito lateral', category: 'preventivas', image: incorporacionTransitoImg, description: 'Advierte sobre el ingreso de vehículos desde una vía lateral.' },
    { id: 'prev_9', name: 'Pendiente ascendente', category: 'preventivas', image: pendienteAscendenteImg, description: 'Advierte sobre una cuesta o subida pronunciada.' },
    { id: 'prev_10', name: 'Puente angosto', category: 'preventivas', image: puenteAngostoImg, description: 'Advierte sobre un puente con ancho reducido respecto a la calzada.' },
    { id: 'prev_11', name: 'Túnel', category: 'preventivas', image: tunelImg, description: 'Advierte sobre la proximidad de un túnel.' },
    { id: 'prev_12', name: 'Zona de derrumbes', category: 'preventivas', image: zonaDerrumbesImg, description: 'Advierte sobre el riesgo de caída de piedras u otros materiales.' },
    { id: 'prev_13', name: 'Zona escolares', category: 'preventivas', image: zonaEscolaresImg, description: 'Advierte sobre la posible presencia de escolares en la zona.' },
    { id: 'prev_14', name: 'Ciclista', category: 'preventivas', image: ciclistaImg, description: 'Advierte sobre la posible presencia de ciclistas en la vía.' },

    // INFORMATIVAS
    { id: 'info_1', name: 'Aeródromo', category: 'informativas', image: aerodromoImg, description: 'Indica la ubicación de un aeropuerto o aeródromo.' },
    { id: 'info_2', name: 'Estación de servicio', category: 'informativas', image: estacionServicioImg, description: 'Indica la ubicación de una estación de carga de combustible.' },
    { id: 'info_3', name: 'Gomería', category: 'informativas', image: gomeriaImg, description: 'Indica la ubicación de un taller de reparación de neumáticos.' },
    { id: 'info_4', name: 'Policía', category: 'informativas', image: policiaImg, description: 'Indica la proximidad de una comisaría o puesto policial.' },
    { id: 'info_5', name: 'Puesto sanitario', category: 'informativas', image: puestoSanitarioImg, description: 'Indica la ubicación de un centro de salud o primeros auxilios.' },
    { id: 'info_6', name: 'Restaurante', category: 'informativas', image: restauranteImg, description: 'Indica la ubicación de un establecimiento de comida.' },
    { id: 'info_7', name: 'Comienzo de autopista', category: 'informativas', image: comienzosAutopistaImg, description: 'Indica el inicio de una vía con características de autopista.' },
    { id: 'info_8', name: 'Fin de autopista', category: 'informativas', image: finAutopistaImg, description: 'Indica el término de la autopista y retorno a vía común.' },
    { id: 'info_9', name: 'Esquema de recorrido', category: 'informativas', image: esquemaRecorridoImg, description: 'Muestra un diagrama del recorrido o intersecciones próximas.' },
    { id: 'info_10', name: 'Orientación', category: 'informativas', image: orientacionImg, description: 'Indica destinos y distancias en caminos primarios o secundarios.' },
    { id: 'info_11', name: 'Indicadora de utilización de carriles', category: 'informativas', image: indicadoraCarrilesImg, description: 'Informa sobre el uso permitido de cada carril.' },
    { id: 'info_12', name: 'Desvío por cambio de sentido', category: 'informativas', image: desvioSentidoImg, description: 'Indica un cambio de trayectoria o desvío en el recorrido.' },

    // TRANSITORIAS
    { id: 'tran_1', name: 'Banderillero', category: 'transitorias', image: banderilleroImg, description: 'Indica presencia de personal regulando el tránsito por obras.' },
    { id: 'tran_2', name: 'Conos', category: 'transitorias', image: conosImg, description: 'Elementos de canalización temporal del tránsito.' },
    { id: 'tran_3', name: 'Delineadores', category: 'transitorias', image: delineadoresImg, description: 'Señalización vertical temporal para guiar el flujo vehicular.' },
    { id: 'tran_5', name: 'Equipo pesado en la vía', category: 'transitorias', image: equipoPesadoImg, description: 'Advierte sobre maquinaria de gran porte operando.' },
    { id: 'tran_6', name: 'Fin de construcción', category: 'transitorias', image: finConstruccionImg, description: 'Indica el término de la zona de obras.' },
    { id: 'tran_7', name: 'Hombres trabajando', category: 'transitorias', image: hombresTrabajandoImg, description: 'Presencia de obreros en la zona de camino.' },
    { id: 'tran_8', name: 'Longitud en la construcción', category: 'transitorias', image: longitudConstruccionImg, description: 'Indica la extensión total del tramo en obra.' },
    { id: 'tran_9', name: 'Muro Jersey', category: 'transitorias', image: muroJerseyImg, description: 'Separador físico temporal de carriles o protección de zona de obra.' },
    { id: 'tran_10', name: 'Personas trabajando', category: 'transitorias', image: personasTrabajandoImg, description: 'Indica personas realizando tareas en la calzada.' },
    { id: 'tran_11', name: 'Estrechamiento de calzada', category: 'transitorias', image: estrechamientoCalzadaImg, description: 'Señal transitoria que advierte una reducción en el ancho de la calzada por obras.' },
    { id: 'tran_13', name: 'Valla de obra', category: 'transitorias', image: vallaObraImg, description: 'Barrera temporal para delimitar zonas de trabajo o peligro.' },
    { id: 'tran_14', name: 'Tambor de obra', category: 'transitorias', image: tamborObraImg, description: 'Dispositivo canalizador para guiar el tránsito en zonas de obra.' },

    // HORIZONTALES
    { id: 'hor_1', name: 'Flecha combinada', category: 'horizontales', image: flechaCombinadaImg, description: 'Indica posibilidad de seguir recto o girar.' },
    { id: 'hor_2', name: 'Flecha simple', category: 'horizontales', image: flechaSimpleImg, description: 'Indica dirección obligatoria de circulación.' },
    { id: 'hor_3', name: 'Senda para ciclistas', category: 'horizontales', image: sendaCiclistasImg, description: 'Sector de la calzada destinado al cruce de bicicletas.' },
    { id: 'hor_5', name: 'Línea de carril continua', category: 'horizontales', image: lineaCarrilContinuaImg, description: 'Delimita carriles y prohíbe el cambio de los mismos.' },
    { id: 'hor_6', name: 'Línea de carril discontinua', category: 'horizontales', image: lineaCarrilDiscontinuaImg, description: 'Delimita carriles y permite el sobrepaso si es seguro.' },
    { id: 'hor_7', name: 'Línea individual continua', category: 'horizontales', image: lineaSepIndividualImg, description: 'Separa corrientes de tránsito de igual sentido.' },
    { id: 'hor_8', name: 'Líneas divisorias paralelas continuas', category: 'horizontales', image: lineaSepParalelasImg, description: 'Prohíbe estrictamente el cambio de carril.' },
    { id: 'hor_9', name: 'Líneas para carriles reversibles', category: 'horizontales', image: lineaSepReversiblesImg, description: 'Delimita carriles cuyo sentido varía según el horario.' },
    { id: 'hor_10', name: 'Líneas auxiliares para reducción de velocidad', category: 'horizontales', image: lineasAuxReduccionImg, description: 'Marcas que generan efecto visual para bajar la velocidad.' },
    { id: 'hor_11', name: 'Marcas especiales canalizadoras', category: 'horizontales', image: marcasCanalizadorasImg, description: 'Cebreados o achurados para guiar el flujo en intersecciones.' },
    { id: 'hor_12', name: 'Línea divisoria continua/discontinua', category: 'horizontales', image: lineaSepContinuaDiscontinuaImg, description: 'Permite el sobrepaso solo para el lado que tiene la línea discontinua.' },
    { id: 'hor_13', name: 'Cruce ferroviario', category: 'horizontales', image: cruceFerroviarioImg, description: 'Marca vial que advierte sobre la proximidad de un cruce con vías férreas.' }
];
