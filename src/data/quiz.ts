
import { signs } from './signs';

const getSignById = (id: string) => signs.find(s => s.id === id) || signs[0];

export const quizQuestions = [
    {
        id: 1,
        sign: getSignById('reg_12'), // CONTRAMANO
        question: "¿Qué indica esta señal?",
        options: [
            "Contramano.",
            "Dirección obligatoria.",
            "Calle sin salida.",
            "Inicio de zona de obras."
        ],
        correctAnswer: 0
    },
    {
        id: 2,
        sign: getSignById('reg_8'), // VELOCIDAD MAXIMA
        question: "¿Qué significa esta señal?",
        options: [
            "Velocidad mínima recomendada.",
            "Indica el límite máximo de velocidad permitido.",
            "Distancia al próximo pueblo.",
            "Número de ruta nacional."
        ],
        correctAnswer: 1
    },
    {
        id: 3,
        sign: getSignById('prev_13'), // ZONA ESCOLAR
        question: "¿A qué se debe estar atento ante esta señal?",
        options: [
            "A la presencia de niños y cruce escolar.",
            "A una zona de talleres mecánicos.",
            "A un cruce de peatones común.",
            "A la proximidad de una plaza."
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        sign: getSignById('reg_2'), // PROHIBICION MOTOS
        question: "¿Qué significa esta señal?",
        options: [
            "Circular por la vereda.",
            "No ingresar a esa vía.",
            "Usar obligatoriamente el casco.",
            "Prohibido circular motos."
        ],
        correctAnswer: 3
    },
    {
        id: 8,
        sign: getSignById('reg_3'), // PROHIBIDO ADELANTAR
        question: "¿Qué prohíbe esta señal?",
        options: [
            "Girar a la derecha.",
            "Realizar maniobras de sobrepaso.",
            "Detenerse a cargar combustible.",
            "Circular con luces bajas."
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        sign: getSignById('info_5'), // PUESTO SANITARIO
        question: "¿Qué servicio indica esta señal informativa?",
        options: [
            "Baños públicos.",
            "Centro de salud o primeros auxilios.",
            "Farmacia de turno.",
            "Venta de artículos de limpieza."
        ],
        correctAnswer: 1
    },
    {
        id: 11,
        sign: getSignById('prev_3'), // CAMINO SINUOSO
        question: "¿Qué advierte esta señal?",
        options: [
            "Camino con riesgo de hielo.",
            "Sucesión de curvas próximas.",
            "Fin de la ruta.",
            "Proximidad de una rotonda."
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        sign: getSignById('tran_11'), // ESTRECHAMIENTO
        question: "¿Qué precaución se debe tomar ante esta señal?",
        options: [
            "Aumentar la velocidad para pasar antes.",
            "Tener cuidado porque la calzada reduce su ancho.",
            "Frenar a cero y esperar paso.",
            "Encender las balizas."
        ],
        correctAnswer: 1
    },
    {
        id: 14,
        sign: getSignById('reg_10'), // ALTURA LIMITADA
        question: "¿Qué indica la medida en esta señal?",
        options: [
            "Ancho máximo permitido.",
            "Largo máximo del vehículo.",
            "Altura máxima permitida bajo el obstáculo.",
            "Distancia al próximo puente."
        ],
        correctAnswer: 2
    },
    {
        id: 15,
        sign: getSignById('hor_13'), // CRUCE FERROVIARIO
        question: "¿Qué indica esta señal preventiva?",
        options: [
            "Proximidad de un cruce con vías del ferrocarril.",
            "Estación de tren cercana.",
            "Cruce exclusivo de tranvías.",
            "Prohibido circular cerca de las vías."
        ],
        correctAnswer: 0
    }
];
