export interface EmergentologiaQuestion {
    id: number;
    scenario: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export const emergentologiaQuestions: EmergentologiaQuestion[] = [
    {
        id: 1,
        scenario: "¿Cuál es el propósito principal del Sistema de Autoprotección según la normativa de Defensa Civil?",
        options: [
            "Gestionar el cobro de multas por infracciones de seguridad.",
            "Sustituir la respuesta de los bomberos profesionales en incendios.",
            "Regular únicamente las actividades recreativas en espacios públicos.",
            "Informar sobre la normativa y su aplicación ante situaciones de riesgo."
        ],
        correctAnswer: 3,
        explanation: "El objetivo del Sistema de Autoprotección es establecer y difundir medidas preventivas y protocolos ante emergencias."
    },
    {
        id: 2,
        scenario: "¿A qué público están dirigidas las capacitaciones virtuales de Defensa Civil?",
        options: [
            "Solamente a profesionales de la salud matriculados.",
            "Tanto a entidades públicas como privadas.",
            "Únicamente a instituciones educativas de nivel primario.",
            "Exclusivamente a personal del Gobierno de la Ciudad."
        ],
        correctAnswer: 1,
        explanation: "Las capacitaciones de Defensa Civil buscan preparar a la mayor cantidad de ciudadanos e instituciones, tanto del sector público como privado."
    },
    {
        id: 4,
        scenario: "¿Cuál es el objetivo específico del 'Simulador de incendios'?",
        options: [
            "Formar exclusivamente a bomberos de carrera en técnicas avanzadas.",
            "Enseñar cómo actuar ante un principio de incendio.",
            "Demostrar la potencia de los camiones hidrantes modernos.",
            "Evaluar la resistencia de materiales de construcción al calor extremo."
        ],
        correctAnswer: 1,
        explanation: "El simulador permite enseñar de forma práctica a los ciudadanos cómo controlar un principio de incendio."
    },
    {
        id: 5,
        scenario: "¿Qué función cumple el programa de 'Formación de primeros respondedores barriales'?",
        options: [
            "Entregar suministros médicos permanentes a cada hogar.",
            "Reclutar personal para la vigilancia policial nocturna.",
            "Capacitar a vecinos de barrios vulnerables para dar una primera respuesta.",
            "Organizar eventos deportivos comunitarios en las plazas."
        ],
        correctAnswer: 2,
        explanation: "El objetivo es que vecinos de áreas vulnerables estén capacitados para ser los primeros en responder ante emergencias locales."
    },
    {
        id: 6,
        scenario: "En el marco de la gestión del riesgo, ¿cuáles son los tres pilares mencionados en el portal?",
        options: [
            "Denuncia, juicio y sanción.",
            "Compra, venta y distribución de equipos.",
            "Prevención, mitigación y preparación.",
            "Rescate, reconstrucción y olvido."
        ],
        correctAnswer: 2,
        explanation: "La gestión del riesgo se basa fundamentalmente en la prevención de desastres, la mitigación de sus efectos y la preparación para la respuesta."
    },
    {
        id: 7,
        scenario: "Según la agenda de capacitaciones, ¿qué se enseña en el curso de RCP?",
        options: [
            "Técnicas avanzadas de cirugía cardiovascular.",
            "El uso profesional de desfibriladores internos.",
            "Cómo recetar medicamentos para la presión arterial.",
            "Las maniobras básicas para salvar una vida."
        ],
        correctAnswer: 3,
        explanation: "El curso de Reanimación Cardiopulmonar (RCP) enseña compresiones torácicas y maniobras esenciales de soporte vital básico."
    },
    {
        id: 8,
        scenario: "¿Cuál es el enfoque del 'Curso de prevención de incidentes'?",
        options: [
            "Técnicas de defensa personal ante robos.",
            "Cómo manejar vehículos de alta velocidad en la ciudad.",
            "Instalación de software de seguridad informática.",
            "Informar y evitar accidentes en el hogar."
        ],
        correctAnswer: 3,
        explanation: "Se busca prevenir accidentes comunes enseñando a reconocer y mitigar riesgos en entornos cotidianos y hogareños."
    },
    {
        id: 10,
        scenario: "En el contexto de Defensa Civil, ¿qué se entiende por 'mitigación' dentro de la gestión del riesgo?",
        options: [
            "Acciones destinadas a reducir el impacto o daño de un posible evento.",
            "La compra de nuevos uniformes para el personal de oficina.",
            "La reconstrucción total de una ciudad después de un terremoto.",
            "El acto de ignorar el riesgo para no generar pánico."
        ],
        correctAnswer: 0,
        explanation: "La mitigación implica todas aquellas medidas y acciones orientadas a disminuir o minimizar los efectos adversos de una emergencia o desastre."
    }
];
