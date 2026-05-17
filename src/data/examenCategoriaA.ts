export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    iconType: 'helmet' | 'lights' | 'mirrors' | 'straps' | 'brakes' | 'crash' | 'passenger' | 'blindspot' | 'expired' | 'rain';
}

export const examenCategoriaAQuestions: Question[] = [
    {
        id: 1,
        question: "El casco homologado que brinda mayor protección es del tipo:",
        options: [
            "Abierto.",
            "Integral.",
            "Abierto o Integral. Ambos brindan idéntica protección."
        ],
        correctAnswer: 1,
        explanation: "El casco integral (full-face) ofrece la mayor protección porque cubre la mandíbula y el rostro por completo, reduciendo significativamente el riesgo de lesiones graves en la cara y cráneo en caso de impacto.",
        iconType: "helmet"
    },
    {
        id: 2,
        question: "Los motovehículos, ¿cuándo están obligados a circular con la luz baja encendida?",
        options: [
            "Durante las 24 hs y en todo tipo de vía.",
            "Al circular por autopistas, semiautopistas o rutas, aunque sea de día.",
            "Sólo durante la noche o con días de poca visibilidad, por cualquier vía."
        ],
        correctAnswer: 0,
        explanation: "Por Ley en la Ciudad Autónoma de Buenos Aires, los motovehículos deben circular con la luz baja encendida las 24 horas del día, independientemente del tipo de vía, para maximizar su visibilidad frente a otros conductores.",
        iconType: "lights"
    },
    {
        id: 3,
        question: "Un motovehículo, ¿puede circular sin espejos retrovisores?",
        options: [
            "Sí, pero se debe observar hacia los costados antes de hacer alguna maniobra.",
            "Sólo si es de una cilindrada inferior a 150 CC.",
            "No, está prohibido."
        ],
        correctAnswer: 2,
        explanation: "Es obligatorio circular con ambos espejos retrovisores colocados y regulados correctamente. Conducir sin ellos está estrictamente prohibido y es pasible de multa y retención preventiva del vehículo.",
        iconType: "mirrors"
    },
    {
        id: 4,
        question: "Para que el uso del casco de un motovehículo cumpla su función protectora...",
        options: [
            "La correa de sujeción debe estar siempre abrochada.",
            "Debe quedar bastante holgado, ya que resulta más cómodo para el conductor.",
            "Debe encontrarse en buenas condiciones. El modo en que se encuentra sujetado no influye en la protección que brinda."
        ],
        correctAnswer: 0,
        explanation: "Si el casco no está abrochado con su hebilla de seguridad regulada, se saldrá despedida en una colisión o caída previa al impacto contra el suelo u otro vehículo, anulando totalmente su protección.",
        iconType: "straps"
    },
    {
        id: 5,
        question: "Al frenar correctamente un motovehículo…",
        options: [
            "La rueda trasera soporta el mayor esfuerzo de frenado, ya que es la directriz.",
            "La rueda delantera soporta el mayor esfuerzo de frenado.",
            "Las dos ruedas soportan el mismo esfuerzo de frenado."
        ],
        correctAnswer: 1,
        explanation: "Al aplicar los frenos, la transferencia de peso se desplaza hacia adelante. Por ello, la rueda delantera llega a soportar aproximadamente entre el 70% y el 80% de la fuerza total de frenado del motovehículo.",
        iconType: "brakes"
    },
    {
        id: 6,
        question: "Su casco de protección ha sufrido un golpe pero no se observa ningún deterioro, ¿este golpe pudo haber afectado su eficacia?",
        options: [
            "Sí, aunque no se observen daños en su exterior.",
            "No, porque sólo se ve afectado si se observan abolladuras en el exterior.",
            "Sólo si se aprecian grietas en el interior."
        ],
        correctAnswer: 0,
        explanation: "Los cascos de seguridad absorben impactos deformando o quebrando microestructuras de su EPS (poliestireno expandido) interno. Aunque no se note daño exterior en la calota, el material interior ya se comprimió y NO protegerá de la misma manera en un segundo golpe.",
        iconType: "crash"
    },
    {
        id: 7,
        question: "Mientras un motovehículo está detenido, es recomendable que el acompañante…",
        options: [
            "Mantenga los pies en los apoyapies.",
            "Coloque los pies en el suelo para contribuir al equilibrio del vehículo.",
            "Coloque un pie en el suelo y otro en el apoyapié."
        ],
        correctAnswer: 0,
        explanation: "El acompañante nunca debe apoyar los pies en el suelo durante una parada, ya que desestabiliza la moto y confunde el equilibrio del conductor. Debe conservar siempre los pies en sus estriberas o apoyapies.",
        iconType: "passenger"
    },
    {
        id: 8,
        question: "¿A qué se llama “Punto Ciego” al conducir?",
        options: [
            "Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
            "Sólo al área de visión que no es cubierta por los espejos retrovisores.",
            "Al punto imaginario ubicado en el horizonte de una ruta."
        ],
        correctAnswer: 0,
        explanation: "El punto ciego es el sector del entorno que queda fuera del campo visual del conductor, tanto por visión directa periférica como por el reflejo de los espejos, requiriendo a veces un leve giro del mentón.",
        iconType: "blindspot"
    },
    {
        id: 9,
        question: "¿Los cascos de protección para motovehículos tienen vencimiento?",
        options: [
            "No, tienen vigencia mientras se encuentren en buen estado.",
            "Sí, la fecha la especifica el fabricante.",
            "Sí, a los 10 años."
        ],
        correctAnswer: 1,
        explanation: "Los materiales de amortiguación y las resinas exteriores del casco se degradan naturalmente por exposición al sol (UV), sudor y agentes climáticos. Su vida útil recomendada ronda los 3 a 5 años y su fecha exacta de fabricación/vencimiento es especificada por cada fabricante.",
        iconType: "expired"
    },
    {
        id: 10,
        question: "Si al conducir un motovehículo por una calzada mojada porque llovió, en el caso de frenada, esta situación provocará...",
        options: [
            "Una disminución del tiempo de reacción.",
            "Un aumento de la distancia de reacción.",
            "Un aumento de la distancia de frenado."
        ],
        correctAnswer: 2,
        explanation: "El agua actúa como una película lubricante reduciendo drásticamente el coeficiente de fricción del neumático con el pavimento. Esto multiplica la distancia de frenado requerida para detener la moto con seguridad.",
        iconType: "rain"
    }
];
