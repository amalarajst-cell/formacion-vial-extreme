export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    iconType: 'helmet' | 'lights' | 'mirrors' | 'straps' | 'brakes' | 'crash' | 'passenger' | 'blindspot' | 'expired' | 'rain';
    image?: string;
}

export const examenCategoriaAQuestions: Question[] = [
    {
        id: 1,
        question: "Según la Ley 2148, al circular con un motovehículo detrás de este camión, ¿cuál es la distancia mínima de seguridad que debe mantener respecto de él?",
        options: [
            "Un segundo.",
            "Dos segundos.",
            "Cinco segundos."
        ],
        correctAnswer: 1,
        explanation: "La Ley 2148 establece que al circular detrás de otro vehículo, se debe mantener una distancia de seguridad mínima equivalente a por lo menos dos segundos de separación, garantizando el espacio suficiente ante una frenada de emergencia.",
        iconType: "crash",
        image: "image1.jpg"
    },
    {
        id: 2,
        question: "El motovehículo de la imagen, ¿se encuentra correctamente estacionado?",
        options: [
            "Sí, porque la vereda tiene más de tres metros y no obstruye el paso peatonal.",
            "No. Sólo puede estacionarse sobre la vereda si existe una señalización que lo autorice.",
            "Sí, sólo los motovehículos pueden estacionarse sobre cualquier vereda."
        ],
        correctAnswer: 1,
        explanation: "Está estrictamente prohibido estacionar motovehículos sobre la vereda o acera, excepto en aquellos lugares donde la autoridad de tránsito lo haya autorizado de forma expresa mediante la señalización correspondiente.",
        iconType: "mirrors",
        image: "image22.jpg"
    },
    {
        id: 3,
        question: "Según la Ley N° 2148, ¿está permitido estacionar un motovehículo del modo que se visualiza en la imagen?",
        options: [
            "No, salvo que exista señalización que lo permita.",
            "Sí, de 07 a 21 horas durante días no hábiles.",
            "Sí, de 21 a 07 horas durante los días hábiles."
        ],
        correctAnswer: 0,
        explanation: "En la Ciudad Autónoma de Buenos Aires está prohibido estacionar en aceras, pasajes, sendas peatonales o ciclovías de manera general, salvo que la señalización vial indique específicamente lo contrario.",
        iconType: "mirrors",
        image: "image165.jpg"
    },
    {
        id: 4,
        question: "Si su motovehículo no funciona, ud. puede estacionarlo durante unos días hasta que sea reparado, tal como se muestra en la imagen.",
        options: [
            "Verdadero.",
            "Falso."
        ],
        correctAnswer: 1,
        explanation: "Es falso. Está prohibido el abandono de vehículos o dejarlos estacionados en estado de descompostura en la vía pública, ya que obstruyen el libre tránsito y representan un riesgo de seguridad vial.",
        iconType: "mirrors",
        image: "image52.jpg"
    },
    {
        id: 5,
        question: "En cuanto al uso reglamentario de luces, ¿este motovehículo circula correctamente?",
        options: [
            "Sí, ya que las luces sólo deben utilizarse en condiciones meteorológicas adversas.",
            "Sí, ya que las luces sólo deben utilizarse por autopistas, semiautopistas y rutas.",
            "No. Es obligatorio el uso de la luz baja las 24 horas del día y en todo tipo de vía."
        ],
        correctAnswer: 2,
        explanation: "Por ley, todos los motovehículos que circulan por la vía pública deben hacerlo con la luz baja encendida de forma obligatoria las 24 horas del día, con el fin de aumentar su visibilidad y prevenir siniestros.",
        iconType: "lights",
        image: "image191.jpg"
    },
    {
        id: 6,
        question: "¿Qué indica la seña manual que realiza el ciclista/motociclista en la imagen?",
        options: [
            "Giro a la izquierda.",
            "Adelantamiento por la izquierda.",
            "Detenerse o disminuir la velocidad."
        ],
        correctAnswer: 0,
        explanation: "El brazo izquierdo extendido horizontalmente de forma recta con la palma de la mano hacia abajo es la seña reglamentaria para indicar un giro hacia la izquierda.",
        iconType: "straps",
        image: "image93.jpg"
    },
    {
        id: 7,
        question: "¿Qué indica la seña manual que realiza el ciclista/motociclista en la imagen?",
        options: [
            "Adelantamiento por la derecha.",
            "Giro a la derecha.",
            "Detenerse o disminuir la velocidad."
        ],
        correctAnswer: 1,
        explanation: "El brazo izquierdo flexionado hacia arriba formando un ángulo recto (90 grados) con la palma al frente es la seña reglamentaria para anticipar y señalizar un giro a la derecha.",
        iconType: "straps",
        image: "image98.jpg"
    },
    {
        id: 8,
        question: "¿Qué indica la seña manual que realiza el ciclista/motociclista en la imagen?",
        options: [
            "Giro a la izquierda.",
            "Adelantamiento por la izquierda.",
            "Detenerse o disminuir la velocidad."
        ],
        correctAnswer: 2,
        explanation: "El brazo izquierdo extendido hacia abajo de forma diagonal con la palma de la mano dirigida hacia atrás indica la intención de detenerse o disminuir la velocidad.",
        iconType: "straps",
        image: "image256.jpg"
    },
    {
        id: 9,
        question: "El motovehículo que se muestra en la imagen circula correctamente, sin entorpecer la circulación.",
        options: [
            "Verdadero.",
            "Falso."
        ],
        correctAnswer: 1,
        explanation: "Es falso. Los motovehículos tienen estrictamente prohibida la circulación por carriles exclusivos habilitados para el transporte público (colectivos/Metrobús) o vías destinadas a ciclistas.",
        iconType: "crash",
        image: "image234.jpg"
    },
    {
        id: 10,
        question: "Un conductor principiante de motovehículo, ¿tiene obligación de llevar la siguiente documentación o distintivo?",
        options: [
            "No, ya que esa es una obligación que afecta únicamente a los conductores de automóviles.",
            "Sí, hasta cumplirse los 6 meses.",
            "Sí, hasta que se renueve la licencia de conducir."
        ],
        correctAnswer: 1,
        explanation: "Sí, todos los conductores novatos y principiantes deben portar de forma obligatoria el distintivo de 'Principiante' (cartel verde) en un lugar perfectamente visible de la parte trasera del vehículo durante los primeros 6 meses.",
        iconType: "expired",
        image: "image42.jpg"
    }
];
