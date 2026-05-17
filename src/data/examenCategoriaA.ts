export interface Question {
    id: number;
    category: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    iconType: 'helmet' | 'lights' | 'mirrors' | 'straps' | 'brakes' | 'crash' | 'passenger' | 'blindspot' | 'expired' | 'rain';
    image?: string;
}

export const examenCategoriaAQuestions: Question[] = [
    {
        "id": 1,
        "category": "Introducción",
        "question": "Según la Organización Mundial de la Salud, la siguiente problemática es categorizada como “pandemia” ya que constituye la décima causa de muerte en todo el mundo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image228.jpg"
    },
    {
        "id": 2,
        "category": "Introducción",
        "question": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?",
        "options": [
            "Niños menores de 15 años.",
            "Jóvenes y adultos de 15 a 34 años.",
            "Adultos mayores de 35 años."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Jóvenes y adultos de 15 a 34 años.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 3,
        "category": "Introducción",
        "question": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Opción B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image163.jpg"
    },
    {
        "id": 4,
        "category": "Introducción",
        "question": "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
        "options": [
            "Vehicular y Ambiental.",
            "Humano y Vehicular.",
            "Humano, Vehicular y Ambiental."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Humano, Vehicular y Ambiental.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 5,
        "category": "Introducción",
        "question": "¿A qué factor se deben la mayoría de los siniestros viales?",
        "options": [
            "Al humano.",
            "Al vehicular.",
            "Al ambiental."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Al humano.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 6,
        "category": "Introducción",
        "question": "A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
        "options": [
            "Al estado del pavimento y al clima, en especial.",
            "A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
            "Ninguna de las anteriores."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 7,
        "category": "Introducción",
        "question": "El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 8,
        "category": "Introducción",
        "question": "Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 9,
        "category": "Introducción",
        "question": "¿A qué se denomina incidente de tránsito o incidente vial?",
        "options": [
            "Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
            "Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
            "Hecho, evitable o no, que involucra daños a terceros."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 10,
        "category": "Introducción",
        "question": "¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?",
        "options": [
            "Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito.",
            "Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.",
            "Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 11,
        "category": "Introducción",
        "question": "“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
        "options": [
            "No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.",
            "No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.",
            "Sí, porque se está obligado a no causar peligro ni entorpecer la circulación."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, porque se está obligado a no causar peligro ni entorpecer la circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 12,
        "category": "Introducción",
        "question": "“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
        "options": [
            "Sí, independientemente del tipo de movilidad elegido.",
            "No, los peatones son usuarios de la vía pública y no están obligados.",
            "Sí pero sólo si estamos conduciendo un vehículo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, independientemente del tipo de movilidad elegido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 13,
        "category": "Introducción",
        "question": "Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
        "options": [
            "Daños materiales, costos sanitarios y administrativos.",
            "Daños materiales y costos sanitarios.",
            "Sólo daños materiales."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Daños materiales, costos sanitarios y administrativos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 14,
        "category": "Introducción",
        "question": "Todo usuario de la vía pública debe, como premisa básica…",
        "options": [
            "Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.",
            "Acreditar experiencia de manejo en vehículos por más de un año.",
            "Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 15,
        "category": "Introducción",
        "question": "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 16,
        "category": "Introducción",
        "question": "¿Qué Ley rige al momento de circular por la Ciudad de Buenos Aires?",
        "options": [
            "La Ley Nacional N° 24.449.",
            "La Ley de la Ciudad N° 2.148.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 17,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿A qué se denomina Movilidad Sustentable?",
        "options": [
            "Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular.",
            "Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.",
            "Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 18,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
        "options": [
            "Velocidad y confort.",
            "Fluidez y seguridad.",
            "Comodidad y Agilidad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Fluidez y seguridad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 19,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Indique cuál es la premisa correcta:",
        "options": [
            "Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.",
            "Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.",
            "A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 20,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
        "options": [
            "Opción A.",
            "Opción B.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Opción B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image184.jpg"
    },
    {
        "id": 21,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
        "options": [
            "Opción A.",
            "Opción B.",
            "Es indistinto."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image217.jpg"
    },
    {
        "id": 22,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Indique cuál es la premisa correcta:",
        "options": [
            "A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
            "A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
            "A menor cantidad de vehículos, menor probabilidad de siniestralidad."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: A menor cantidad de vehículos, menor probabilidad de siniestralidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 23,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
        "options": [
            "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
            "Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
            "Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 24,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image164.jpg"
    },
    {
        "id": 25,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Es aconsejable circular en bicicleta de esta manera?",
        "options": [
            "Sí, porque está conduciendo correctamente.",
            "No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.",
            "Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image32.jpg"
    },
    {
        "id": 26,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
        "options": [
            "La opción A, ya que al tener ropa clara es más visible.",
            "Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
            "Ambas opciones presentan el mismo riesgo por igual."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: La opción A, ya que al tener ropa clara es más visible.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image114.jpg"
    },
    {
        "id": 27,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Se puede circular en bicicleta por esta vía?",
        "options": [
            "Sí, siempre que se mantenga en el carril derecho.",
            "No, está prohibido.",
            "Sí, mientras se respete la velocidad mínima de la arteria."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, está prohibido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image172.jpg"
    },
    {
        "id": 28,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué se debe evitar al circular en bicicleta?",
        "options": [
            "Usar auriculares y dispositivos electrónicos, que afecten la concentración.",
            "Usar ropa oscura y suelta.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 29,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Está permitido llevar carga en una bicicleta?",
        "options": [
            "Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.",
            "No, está prohibido ya que puede desestabilizar la bicicleta.",
            "Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 30,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "El ciclista, ¿tiene permitido llevar un pasajero?",
        "options": [
            "Sí, únicamente si no compromete la visibilidad.",
            "Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.",
            "Ambas respuestas, A y B, son incorrectas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger"
    },
    {
        "id": 31,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Está permitido estacionar una bicicleta en este lugar?",
        "options": [
            "No, los estacionamientos son exclusivos para usuarios de autos y motos.",
            "Sólo en algunos estacionamientos está permitido.",
            "Sí, los estacionamientos están obligados a destinar un espacio para bicicletas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, los estacionamientos están obligados a destinar un espacio para bicicletas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image174.jpg"
    },
    {
        "id": 32,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Un menor de 12 años puede circular en bicicleta por…",
        "options": [
            "La calle, acompañado de un adulto mayor de 18 años.",
            "Por la vereda, a la menor velocidad posible.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 33,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?",
        "options": [
            "La velocidad máxima permitida en la vía donde se encuentra la ciclovía.",
            "25 km/h.",
            "30 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 25 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 34,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?",
        "options": [
            "Al menos, un metro y medio.",
            "Al menos, medio metro.",
            "Lo suficiente para no tocarlo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Al menos, un metro y medio.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image242.jpg"
    },
    {
        "id": 35,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Por dónde deben circular los ciclistas en esta calle?",
        "options": [
            "No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.",
            "Cerca del borde derecho de la calzada.",
            "Cerca del borde izquierdo  de la calzada."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Cerca del borde derecho de la calzada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image179.jpg"
    },
    {
        "id": 36,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?",
        "options": [
            "Cerca del borde derecho de la calzada.",
            "Cerca del borde izquierdo de la calzada.",
            "No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cerca del borde derecho de la calzada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 37,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?",
        "options": [
            "Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.",
            "En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 38,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica esta seña?",
        "options": [
            "Giro a la izquierda.",
            "Adelantamiento por la izquierda.",
            "Detenerse."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Giro a la izquierda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image93.jpg"
    },
    {
        "id": 39,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica esta seña?",
        "options": [
            "Adelantamiento por la derecha.",
            "Giro a la derecha.",
            "Detenerse."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Giro a la derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image98.jpg"
    },
    {
        "id": 40,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica esta seña?",
        "options": [
            "Giro a la izquierda.",
            "Adelantamiento por la izquierda.",
            "Detenerse."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Detenerse.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image256.jpg"
    },
    {
        "id": 41,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Es correcto el desplazamiento del motociclista que circula con el casco puesto y las luces encendidas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image70.jpg"
    },
    {
        "id": 42,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?",
        "options": [
            "Hacia la derecha.",
            "Hacia la izquierda.",
            "Hacia ambos lados."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Hacia ambos lados.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image251.jpg"
    },
    {
        "id": 43,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?",
        "options": [
            "No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.",
            "Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.",
            "No, sólo pueden circular por vías donde no haya ciclovías."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image142.jpg"
    },
    {
        "id": 44,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Puede un motovehículo circular por el carril señalizado en esta imagen?",
        "options": [
            "No, ya que es de uso exclusivo de bicicletas.",
            "Sí, ya que es un vehículo de 2 ruedas.",
            "Sí, siempre y cuando no circulen bicicletas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, ya que es de uso exclusivo de bicicletas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image89.jpg"
    },
    {
        "id": 45,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "En esta situación, ¿es correcto que el vehículo avance?",
        "options": [
            "Sí, porque por allí no circulan peatones y no hay peligro.",
            "No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
            "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, porque aún hay peatones cruzando de un lado al otro de la arteria.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image101.jpg"
    },
    {
        "id": 46,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
        "options": [
            "Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
            "Avanzar porque la luz verde del semáforo  me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image265.jpg"
    },
    {
        "id": 47,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
        "options": [
            "Esquivar a la peatona y tocarle bocina para que no se distraiga.",
            "Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image30.jpg"
    },
    {
        "id": 48,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
        "options": [
            "No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
            "Sí, siempre."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, siempre.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image56.jpg"
    },
    {
        "id": 49,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?",
        "options": [
            "Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
            "Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
            "Ambas respuestas, la A y la B, son incorrectas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image216.jpg"
    },
    {
        "id": 50,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?",
        "options": [
            "Priorizar la circulación del peatón, indefectiblemente.",
            "Realizar una guiñada para advertir su preferencia de avance.",
            "Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Priorizar la circulación del peatón, indefectiblemente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image118.jpg"
    },
    {
        "id": 51,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "En esta intersección, ¿quién tiene prioridad de paso?",
        "options": [
            "El peatón.",
            "El conductor.",
            "Es indistinto."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El peatón.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image97.jpg"
    },
    {
        "id": 52,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
        "options": [
            "Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
            "En coincidencia con las paradas de transporte.",
            "Por la esquina, por la prolongación longitudinal de la vereda sobre la calle."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Por la esquina, por la prolongación longitudinal de la vereda sobre la calle.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 53,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
        "options": [
            "Que no comience a cruzar la calzada.",
            "Si inició el cruce, que lo finalice con mucha precaución.",
            "Ambas respuestas, la A y la B son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image215.jpg"
    },
    {
        "id": 54,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué vehículos pueden circular por el carril señalizado en la imagen?",
        "options": [
            "Todos los transportes de pasajeros.",
            "Sólo colectivos entre las 07 h y las 21 h.",
            "Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image249.jpg"
    },
    {
        "id": 55,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuáles de los motovehículos que se muestran en la imagen circulan en infracción?",
        "options": [
            "Los motovehículos A y C.",
            "Los motovehículos A y B .",
            "Los motovehículos A, B y C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Los motovehículos A, B y C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image177.jpg"
    },
    {
        "id": 56,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Además de colectivos, ¿quiénes pueden circular por este carril?",
        "options": [
            "Taxis con pasajeros.",
            "Motos.",
            "Ambas respuestas, la A y la B, son incorrectas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son incorrectas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image278.jpg"
    },
    {
        "id": 57,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "El motovehículo que se muestra en la imagen circula correctamente, sin entorpecer la circulación.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image234.jpg"
    },
    {
        "id": 58,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?",
        "options": [
            "Sí, ya que constituye una falta de tránsito que amerita esa sanción.",
            "Sólo si perjudica la circulación de los colectivos.",
            "Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, ya que constituye una falta de tránsito que amerita esa sanción.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image48.jpg"
    },
    {
        "id": 59,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
        "options": [
            "Cruce de Metrobús.",
            "Cruce exclusivo de vehículos de emergencia.",
            "Cruce de bicicletas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cruce de Metrobús.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image236.jpg"
    },
    {
        "id": 60,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
        "options": [
            "Carril exclusivo de colectivo de pasajeros.",
            "Cruce exclusivo de vehículos de emergencia.",
            "Ceda el paso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Carril exclusivo de colectivo de pasajeros.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image253.jpg"
    },
    {
        "id": 61,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?",
        "options": [
            "No, porque está prohibido circular de manera permanente o transitoria por dicho carril.",
            "Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
            "Sí, porque sólo se permite su utilización para realizar alguna maniobra."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, porque está prohibido circular de manera permanente o transitoria por dicho carril.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 62,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué son los carriles exclusivos?",
        "options": [
            "Vías con un único sentido de circulación.",
            "Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
            "Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 63,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?",
        "options": [
            "Sí, siempre que señalice la maniobra con anticipación.",
            "No, ya que para realizarlo debería invadir los carriles exclusivos.",
            "Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image255.jpg"
    },
    {
        "id": 64,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué significa la demarcación horizontal que se visualiza en la imagen?",
        "options": [
            "Cruce peligroso por tener poca iluminación.",
            "Senda peatonal próxima a centros de salud.",
            "Senda peatonal próxima a zona escolar."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Senda peatonal próxima a zona escolar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image152.jpg"
    },
    {
        "id": 65,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
        "options": [
            "Estacionamiento para micros escolares.",
            "Carril de detención para el ascenso y descenso de escolares.",
            "Zona de ascenso y descenso de pasajeros de transporte público."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Carril de detención para el ascenso y descenso de escolares.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image150.jpg"
    },
    {
        "id": 66,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "La siguiente imagen corresponde a:",
        "options": [
            "Calle Prioridad Peatón.",
            "Calle con Intervención Peatonal.",
            "Calle con Bicisenda."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Calle Prioridad Peatón.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image110.jpg"
    },
    {
        "id": 67,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "Las intervenciones horizontales señaladas, sirven para…",
        "options": [
            "Incrementar la seguridad de los peatones.",
            "Promover la movilidad vehicular.",
            "Colaborar con la rapidez en la movilidad."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Incrementar la seguridad de los peatones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image235.jpg"
    },
    {
        "id": 68,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?",
        "options": [
            "Intervención Peatonal.",
            "Intervención Vehicular.",
            "Intervención de la Calzada."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Intervención Peatonal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image91.jpg"
    },
    {
        "id": 69,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
        "options": [
            "Ampliar la zona permitida de estacionamiento para motos.",
            "Reducir la velocidad y radio de giro de los vehículos.",
            "Ampliar la zona permitida de estacionamiento para vehículos de emergencia."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Reducir la velocidad y radio de giro de los vehículos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image66.jpg"
    },
    {
        "id": 70,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "La señal que está presente en la imagen corresponde a las informativas que orientan al peatón.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image19.jpg"
    },
    {
        "id": 71,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "En la imagen se muestra un cruce exclusivo para ciclistas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image10.jpg"
    },
    {
        "id": 72,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica el siguiente cruce verde en las intersecciones?",
        "options": [
            "Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.",
            "Advierte a los conductores sobre la existencia de un establecimiento escolar cercano.",
            "Advierte a los conductores sobre un cruce peligroso por tener poca iluminación."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image57.jpg"
    },
    {
        "id": 73,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué indica esta demarcación horizontal verde?",
        "options": [
            "Que en esa intersección hay una ciclovía o bicisenda.",
            "Que se aproxima a un cruce ferroviario.",
            "Que es un cruce exclusivo de peatones."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que en esa intersección hay una ciclovía o bicisenda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image200.jpg"
    },
    {
        "id": 74,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuál de las siguientes imágenes muestra una bicisenda?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Opción B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image238.jpg"
    },
    {
        "id": 75,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuál de las siguientes imágenes muestra una ciclovía?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image182.jpg"
    },
    {
        "id": 76,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Cuál es la principal diferencia entre bicisendas y ciclovías?",
        "options": [
            "La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial.",
            "La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda.",
            "La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 77,
        "category": "Capítulo 1: Aspectos Generales y Legales",
        "question": "¿Qué es una ciclovía?",
        "options": [
            "Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
            "Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
            "Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 78,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 79,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 80,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
        "options": [
            "24 horas.",
            "48 horas.",
            "72 horas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 72 horas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 81,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 82,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
        "options": [
            "Detenerse inmediatamente y permanecer en el lugar del hecho.",
            "Conducir hasta la comisaría más cercana.",
            "Llamar al 911 y continuar el viaje."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Detenerse inmediatamente y permanecer en el lugar del hecho.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 83,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de siniestro, el orden de actuación recomendado es…",
        "options": [
            "Alertar - Socorrer - Proteger.",
            "Proteger - Alertar - Socorrer.",
            "Socorrer - Proteger - Alertar."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Proteger - Alertar - Socorrer.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 84,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?",
        "options": [
            "911 y 109.",
            "103 y 107.",
            "107 y 911."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 107 y 911.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 85,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:",
        "options": [
            "Lugar del hecho, características del incidente, cantidad y estado de las víctimas.",
            "Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas.",
            "Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Lugar del hecho, características del incidente, cantidad y estado de las víctimas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 86,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
        "options": [
            "Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación.",
            "Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 87,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Si ud. se encuentra involucrado en un siniestro de tránsito en el cual un motociclista resultó herido, pero ud. no es el conductor del vehículo implicado, ¿cómo debería actuar en esta situación?",
        "options": [
            "Brindar colaboración, solicitar auxilio llamando al 107 para que reciba atención médica y contribuir al esclarecimiento de los hechos.",
            "Brindar colaboración, aunque al no ser el conductor no estoy obligado a hacerlo.",
            "Antes de llevar a cabo cualquier valoración del estado general de la víctima, retirar el casco para que no se asfixie."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Brindar colaboración, solicitar auxilio llamando al 107 para que reciba atención médica y contribuir al esclarecimiento de los hechos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 88,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
        "options": [
            "El que firmó la autorización para obtener la licencia.",
            "El que lo acompaña.",
            "El que le autorizó el uso del vehículo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El que firmó la autorización para obtener la licencia.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 89,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
        "options": [
            "La intención de la conducta dañosa.",
            "La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.",
            "Los antecedentes de la persona que provoca el daño."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 90,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?",
        "options": [
            "No, porque la responsabilidad penal es intransferible.",
            "Sí. Además, del dueño también puede transferirse a la Compañía de Seguros.",
            "Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, porque la responsabilidad penal es intransferible.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 91,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
        "options": [
            "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
            "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
            "Que ha actuado no conforme a las exigencias de la Ley."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Que ha actuado no conforme a las exigencias de la Ley.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 92,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta  cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción",
        "options": [
            "En ese mismo momento y ante la Autoridad de Control si ésta lo requiere.",
            "Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.",
            "Ambas respuestas, la A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 93,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
        "options": [
            "30 días corridos desde su vencimiento.",
            "Hasta las 00 horas del día de cumpleaños.",
            "No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 94,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
        "options": [
            "No, porque es un documento personal.",
            "Sólo en los casos que la normativa vigente así lo indique.",
            "Sólo en casos de incidentes que involucren a terceros."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sólo en los casos que la normativa vigente así lo indique.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 95,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
        "options": [
            "30 días corridos desde su vencimiento.",
            "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva.",
            "No debe superar el año desde su vencimiento."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No debe superar el año desde su vencimiento.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 96,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuánto dura en su totalidad la condición de principiante?",
        "options": [
            "2 años, sólo en el caso de los menores de 21 años de edad.",
            "6 meses, sólo para quien la tramita por primera vez.",
            "2 años, independientemente a la edad."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 2 años, independientemente a la edad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 97,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En un motovehículo, ¿dónde debe transportar la siguiente documentación?",
        "options": [
            "Debe exhibirla en el parabrisas de la moto.",
            "Debe exhibirla en el tanque.",
            "Debe llevarla consigo mientras conduce, como el resto de la documentación obligatoria."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Debe llevarla consigo mientras conduce, como el resto de la documentación obligatoria.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image42.jpg"
    },
    {
        "id": 98,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Un conductor principiante de motovehículo, ¿tiene obligación de llevar la siguiente documentación?",
        "options": [
            "No, ya que esa es una obligación que afecta únicamente a los conductores de automóviles.",
            "Sí, hasta cumplirse los 6 meses.",
            "Sí, hasta que se renueve la licencia de conducir."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, hasta cumplirse los 6 meses.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "examen___categor_a_a_docx_image213.jpg"
    },
    {
        "id": 99,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Con esta documentación, ¿quién está autorizado a conducir el motovehículo?",
        "options": [
            "Nadie, porque está vencida y debe renovarse.",
            "Sólo el titular.",
            "El titular y sus familiares directos, por tener el mismo apellido."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sólo el titular.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image44.jpg"
    },
    {
        "id": 100,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
        "options": [
            "Sólo una.",
            "La cantidad que solicite el titular del vehículo.",
            "Hasta cinco."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La cantidad que solicite el titular del vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 101,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
        "options": [
            "Siempre y cuando se encuentre vigente.",
            "Sólo si es un familiar directo o tiene una relación laboral.",
            "En ningún caso."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: En ningún caso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 102,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE cuando se conduce por vías interurbanas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 103,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
        "options": [
            "Eventuales daños causados a terceros transportados únicamente.",
            "Eventuales daños causados a terceros transportados o no.",
            "Daños causados a los vehículos únicamente."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Eventuales daños causados a terceros transportados o no.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 104,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "NO está prohibido circular con la placa de dominio del motovehículo de esta forma.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image68.jpg"
    },
    {
        "id": 105,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Para la circulación de motovehículos, la placa de dominio trasera…",
        "options": [
            "Puede sustituirse por la inscripción de la matrícula pintada en los guardabarros traseros.",
            "No es obligatoria.",
            "Debe estar colocada centrada respecto al eje longitudinal medio del motovehículo."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Debe estar colocada centrada respecto al eje longitudinal medio del motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 106,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuántas placas de dominio deben llevar los motovehículos?",
        "options": [
            "Una, colocada en la parte trasera, centrada en el eje longitudinal medio del motovehículo.",
            "Dos, una en la parte delantera y otra en la parte trasera.",
            "Una, colocada del lado izquierdo del motovehículo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Una, colocada en la parte trasera, centrada en el eje longitudinal medio del motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 107,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Se encuentra permitido circular con esta impresión de placa de dominio?",
        "options": [
            "Sí, ya que cumple la función de identificar al motovehículo.",
            "No, ya que la válida es la entregada por la autoridad competente de nivel nacional (DNRPA) y debe estar colocada en el lugar y de forma reglamentaria.",
            "Sí, ya que es una placa provisoria."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, ya que la válida es la entregada por la autoridad competente de nivel nacional (DNRPA) y debe estar colocada en el lugar y de forma reglamentaria.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image259.jpg"
    },
    {
        "id": 108,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
        "options": [
            "Se la puede solicitar en cualquier establecimiento comercial que la realice.",
            "Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 109,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "La ubicación y posición de la placa de dominio del motovehículo, ¿puede sufrir algún tipo de modificación?",
        "options": [
            "Sólo puede, eventualmente, ampliarse para mejorar su visibilidad.",
            "No, debe estar colocada en el lugar y de forma reglamentaria.",
            "Sólo está prohibido modificar su posición pero no el lugar donde se exhibe."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sólo está prohibido modificar su posición pero no el lugar donde se exhibe.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 110,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
        "options": [
            "Reducir la contaminación y mejorar la calidad del medio ambiente.",
            "Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 111,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Opción B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image33.jpg"
    },
    {
        "id": 112,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?",
        "options": [
            "No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día.",
            "Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación.",
            "Si se realiza dentro de los 60 días hábiles de efectuada la verificación."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Si se realiza dentro de los 60 días hábiles de efectuada la verificación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 113,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cada cuánto tiempo deben realizar la VTV los motovehículos?",
        "options": [
            "Cada 6 meses.",
            "Los motovehículos están exceptuados de esta obligación.",
            "La revisión es anual."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La revisión es anual.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 114,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿Cuándo debe realizar la primer VTV un motovehículo?",
        "options": [
            "A los 5 años.",
            "A los 2 años.",
            "Al año."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Al año.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 115,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?",
        "options": [
            "10 puntos.",
            "20 puntos.",
            "5 puntos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 20 puntos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 116,
        "category": "Capítulo 2: Normas de Conducción y Prioridades",
        "question": "¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?",
        "options": [
            "En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.",
            "La obligación de los conductores a realizar un curso vial anual.",
            "Ambas respuestas, la A y la B, son incorrectas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 117,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
        "options": [
            "Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
            "Sólo las drogas ilegales.",
            "Todo tipo de drogas (las legales e ilegales)."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 118,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La persona que conduce bajo los efectos de estupefacientes…",
        "options": [
            "Se pone en grave riesgo a sí mismo y a todos los que lo rodean.",
            "Sólo pone en riesgo su propia vida.",
            "Al estar desinhibido, asume menos riesgos."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Se pone en grave riesgo a sí mismo y a todos los que lo rodean.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 119,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
        "options": [
            "Todos los medicamentos, de venta libre, que no necesitan receta.",
            "Todos los medicamentos con efectos sedantes.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Todos los medicamentos con efectos sedantes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 120,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
        "options": [
            "Siempre.",
            "Nunca.",
            "Depende del tipo de medicamento."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Depende del tipo de medicamento.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 121,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad de conducir.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 122,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
        "options": [
            "Sí.",
            "No, solamente afecta a la capacidad motora.",
            "Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 123,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
        "options": [
            "Comienza a disminuir de forma inmediata.",
            "Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
            "Se mantiene en el mismo valor durante 1 hora y luego comienza a descender."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 124,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Beber cerveza, ¿puede influir en la conducción de un motovehículo?",
        "options": [
            "No, porque es una bebida con bajo contenido de alcohol y no afecta al equilibrio.",
            "Sí, porque contiene alcohol y reduce la capacidad de reacción, aumentando el tiempo necesario para responder ante un estímulo.",
            "La cerveza, al tener poca graduación alcohólica, no afecta la conducción si se está habituado a tomarla."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, porque contiene alcohol y reduce la capacidad de reacción, aumentando el tiempo necesario para responder ante un estímulo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 125,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
        "options": [
            "Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo.",
            "Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 126,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
        "options": [
            "Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
            "No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones.",
            "Sí, puede afectar la coordinación, la atención y el tiempo de reacción."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, puede afectar la coordinación, la atención y el tiempo de reacción.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 127,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Es peligroso conducir con resaca?",
        "options": [
            "Sí, es peligroso porque tiene efectos en el organismo.",
            "No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta.",
            "No, ya que los efectos de la resaca no intervienen en la conducción."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, es peligroso porque tiene efectos en el organismo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 128,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si un conductor de motovehículo obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?",
        "options": [
            "Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.",
            "Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica.",
            "Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image123.jpg"
    },
    {
        "id": 129,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
        "options": [
            "Sólo si se ha participado de un siniestro vial.",
            "No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
            "Sí, la misma se toma como una presunción de alcoholemia positiva."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, la misma se toma como una presunción de alcoholemia positiva.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image156.jpg"
    },
    {
        "id": 130,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
        "options": [
            "Sí, ya que se presume el estado de alcoholemia positiva.",
            "Sí, deberá ordenar la remoción del vehículo.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 131,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si la conductora que se señaliza en la imagen es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
        "options": [
            "0,0 gramos de alcohol por litro de sangre.",
            "0,2 gramos de alcohol por litro de sangre.",
            "0,5 gramos de alcohol por litro de sangre."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 0,0 gramos de alcohol por litro de sangre.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image5.jpg"
    },
    {
        "id": 132,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es el límite de alcohol en sangre permitido para la persona que está señalada en la foto con un círculo rojo?",
        "options": [
            "No tiene un límite máximo de alcohol por Ley.",
            "0,2 gramos de alcohol por litro de sangre.",
            "0,5 gramos de alcohol por litro de sangre."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 0,5 gramos de alcohol por litro de sangre.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image223.jpg"
    },
    {
        "id": 133,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si la conductora que se señaliza en la imagen no es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
        "options": [
            "0,0 gramos de alcohol por litro de sangre.",
            "0,2 gramos de alcohol por litro de sangre.",
            "0,5 gramos de alcohol por litro de sangre."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 0,2 gramos de alcohol por litro de sangre.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image73.jpg"
    },
    {
        "id": 134,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
        "options": [
            "Aproximadamente 8 horas.",
            "Al menos 4 horas.",
            "Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Aproximadamente 8 horas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 135,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?",
        "options": [
            "Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
            "No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
            "No, el descanso no tiene nada que ver con el consumo de alcohol."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, ya que ambas condiciones aumentan el tiempo de reacción.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 136,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El cansancio puede verse inducido por ingerir:",
        "options": [
            "Bebidas alcohólicas.",
            "Comidas abundantes.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 137,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
        "options": [
            "La sensación de euforia.",
            "La visión borrosa y el aumento del número y duración de parpadeos.",
            "No realizar movimientos en el asiento, ni cambios de postura."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La visión borrosa y el aumento del número y duración de parpadeos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 138,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
        "options": [
            "Sí, por la falta de experiencia en la conducción.",
            "No, porque todos somos iguales ante la Ley.",
            "Únicamente cuando se trata de una persona que padece de fatiga crónica."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, por la falta de experiencia en la conducción.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 139,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Por qué es peligroso conducir cansado?",
        "options": [
            "Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
            "Porque se circula más rápido.",
            "Porque el viaje dura más."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 140,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?",
        "options": [
            "Reduce la capacidad de reacción y el estado de alerta.",
            "Predispone a tomar malas decisiones, poniendo en riesgo la vida.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 141,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
        "options": [
            "Escuche música a alto volúmen.",
            "Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
            "Mantenga bien ventilado el interior del vehículo."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Mantenga bien ventilado el interior del vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 142,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?",
        "options": [
            "Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia.",
            "Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
            "No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger"
    },
    {
        "id": 143,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Bajo los efectos del estrés, la conducción se vuelve:",
        "options": [
            "Más temeraria.",
            "Menos segura.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 144,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 145,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro hasta que acciona el freno?",
        "options": [
            "Aproximadamente 1 segundo.",
            "Entre 2 y 3 segundos.",
            "Es inmediato, no transcurre tiempo entre estas acciones."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Aproximadamente 1 segundo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 146,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
        "options": [
            "No, ya que no hay otros vehículos junto a él.",
            "Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.",
            "No, ya que el vehículo no está en movimiento."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image15.jpg"
    },
    {
        "id": 147,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La siguiente acción del conductor, ¿es considerada un factor de riesgo?",
        "options": [
            "No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica.",
            "Sí, sólo cuando circula a altas velocidades.",
            "Sí, porque interfiere en su atención al contexto."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, porque interfiere en su atención al contexto.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image72.jpg"
    },
    {
        "id": 148,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La siguiente acción del conductor es riesgosa porque:",
        "options": [
            "Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
            "El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image17.jpg"
    },
    {
        "id": 149,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?",
        "options": [
            "Colocar balizas y detenerse en un lugar donde esté permitido.",
            "Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
            "Al tratarse de una llamada de urgencia, no importa donde se realice."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Colocar balizas y detenerse en un lugar donde esté permitido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 150,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La presente conducta, ¿es riesgosa al momento de conducir?",
        "options": [
            "Sí, porque es considerado un factor de distracción.",
            "Únicamente si se circula a altas velocidades.",
            "Al contrario, ayuda a mantener la atención en la conducción."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, porque es considerado un factor de distracción.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image113.jpg"
    },
    {
        "id": 151,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La acción que se presenta en la imagen es considerada riesgosa para la conducción de un",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image220.jpg"
    },
    {
        "id": 152,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):",
        "options": [
            "Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente",
            "Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.",
            "Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 153,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?",
        "options": [
            "La opción A.",
            "La opción B.",
            "La opción C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La opción C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image160.jpg"
    },
    {
        "id": 154,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como conductor, ¿qué debe realizar frente a la siguiente situación?",
        "options": [
            "Avanzar porque la luz verde del semáforo lo habilita.",
            "Detenerse y esperar a la indicación del agente de tránsito para avanzar.",
            "Avanzar sólo si no pasan vehículos en la intersección."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Detenerse y esperar a la indicación del agente de tránsito para avanzar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image240.jpg"
    },
    {
        "id": 155,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
        "options": [
            "Que circule con precaución.",
            "Que detenga el vehículo.",
            "Que continúe avanzando."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que detenga el vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image124.jpg"
    },
    {
        "id": 156,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la presencia de personal policial.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 157,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?",
        "options": [
            "Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.",
            "Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación.",
            "No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image162.jpg"
    },
    {
        "id": 158,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
        "options": [
            "Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
            "Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación.",
            "Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image120.jpg"
    },
    {
        "id": 159,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
        "options": [
            "Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
            "Nada, no son señales de circulación y es ilegal su colocación.",
            "La prohibición de sobrepasar la línea imaginaria que las une."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La prohibición de sobrepasar la línea imaginaria que las une.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image230.jpg"
    },
    {
        "id": 160,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento en la vía, o en zonas próximas a las mismas:",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 161,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La señalización transitoria se encuentra como prioridad normativa sobre los semáforos, si es que modifica el régimen normal de uso de la vía.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 162,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
        "options": [
            "Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla.",
            "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
            "Efectuar el cruce con máxima precaución."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Efectuar el cruce con máxima precaución.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image231.jpg"
    },
    {
        "id": 163,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
        "options": [
            "Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
            "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
            "Extremar precauciones al cruzar sin la necesidad de detenerme."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image99.jpg"
    },
    {
        "id": 164,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
        "options": [
            "Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde.",
            "No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
            "Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image262.jpg"
    },
    {
        "id": 165,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?",
        "options": [
            "No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal.",
            "Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 166,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Una indicación puede estar expresada con una señal vertical o con una demarcación horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 167,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué indica esta demarcación amarilla en la calzada?",
        "options": [
            "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
            "Que se debe circular lentamente por su sector central.",
            "Que no se debe circular sobre ella."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Que no se debe circular sobre ella.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image260.jpg"
    },
    {
        "id": 168,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
        "options": [
            "Son las rotondas.",
            "Son los espacios reservados para estacionamiento exclusivo de motovehículos.",
            "Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 169,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué significa esta demarcación amarilla en la calzada?",
        "options": [
            "Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
            "Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
            "Significa que sólo pueden circular vehículos particulares."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain",
        "image": "image136.jpg"
    },
    {
        "id": 170,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
        "options": [
            "Que se pueden traspasar.",
            "Que está prohibido traspasarlas.",
            "Que es una zona de máximo peligro."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que se pueden traspasar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image112.jpg"
    },
    {
        "id": 171,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué significa la demarcación horizontal señalada?",
        "options": [
            "Carril exclusivo para motos.",
            "Zona de estacionamiento para motos.",
            "Zona de detención segura de motos."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Zona de detención segura de motos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image94.jpg"
    },
    {
        "id": 172,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Para qué sirve la demarcación horizontal señalada?",
        "options": [
            "Mejorar la visibilidad de los motovehículos e indicar la presencia de una zona de detención exclusiva de los mismos.",
            "Permitir la circulación exclusiva de los motovehículos por un carril.",
            "Señalizar que por allí está prohibida la circulación de  motovehículos."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Mejorar la visibilidad de los motovehículos e indicar la presencia de una zona de detención exclusiva de los mismos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image264.jpg"
    },
    {
        "id": 173,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
        "options": [
            "Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
            "Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia.",
            "Que está prohibido estacionar o detenerse paralelo al cordón."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Que está prohibido estacionar o detenerse paralelo al cordón.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image75.jpg"
    },
    {
        "id": 174,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?",
        "options": [
            "Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.",
            "Lugar reservado para ascenso y descenso de pasajeros.",
            "Zona exclusiva para carga y descarga de mercaderías."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image201.jpg"
    },
    {
        "id": 175,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
        "options": [
            "Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.",
            "Que es un lugar reservado para el estacionamiento  exclusivo de vehículos destinados al transporte de pasajeros.",
            "Que está prohibido estacionar o detenerse al costado de la vereda."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image203.jpg"
    },
    {
        "id": 176,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la importancia del color de las señales viales?",
        "options": [
            "El color es para llamar la atención al conductor de categoría particular.",
            "El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
            "El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 177,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuáles son las señales preventivas?",
        "options": [
            "Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
            "Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
            "Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 178,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué indican las señales reglamentarias?",
        "options": [
            "Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
            "Identifican, orientan y hacen referencia a servicios, lugares, etc.",
            "Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 179,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estas señales comunica “Prevención”?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La señal B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image166.jpg"
    },
    {
        "id": 180,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿De qué color es la cartelería de Permitido Estacionar?",
        "options": [
            "Azul.",
            "Blanco.",
            "Rojo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Azul.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 181,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estas señales es Reglamentaria?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La señal B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image147.jpg"
    },
    {
        "id": 182,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estas señales es una señal reglamentaria?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La señal C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image87.jpg"
    },
    {
        "id": 183,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estas señales es Informativa?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: La señal A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image60.jpg"
    },
    {
        "id": 184,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Indique qué tipo de señal es la que a continuación se muestra:",
        "options": [
            "Preventiva.",
            "Reglamentaria.",
            "Informativa."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Informativa.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image41.jpg"
    },
    {
        "id": 185,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de las siguientes imágenes , por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?",
        "options": [
            "Figura A.",
            "Figura B.",
            "Figura C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Figura C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image246.jpg"
    },
    {
        "id": 186,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?",
        "options": [
            "Figura A.",
            "Figura B.",
            "Figura C."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Figura B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image39.jpg"
    },
    {
        "id": 187,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
        "options": [
            "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
            "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
            "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image65.jpg"
    },
    {
        "id": 188,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se aproxima un vehículo en emergencia.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image189.jpg"
    },
    {
        "id": 189,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
        "options": [
            "Ambos hacia su derecha.",
            "El único que debería apartarse es el auto 2 hacia su derecha.",
            "El auto 1 hacia su izquierda y el 2 hacia su derecha."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El auto 1 hacia su izquierda y el 2 hacia su derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image12.jpg"
    },
    {
        "id": 190,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
        "options": [
            "El único que debería apartarse es el auto 2 hacia su derecha.",
            "Todos hacia su derecha.",
            "El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image49.jpg"
    },
    {
        "id": 191,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
        "options": [
            "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
            "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
            "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image25.jpg"
    },
    {
        "id": 192,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?",
        "options": [
            "Cederle el paso, ya que está indicando que se encuentra en emergencia.",
            "Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico.",
            "Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cederle el paso, ya que está indicando que se encuentra en emergencia.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image84.jpg"
    },
    {
        "id": 193,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?",
        "options": [
            "El automóvil, porque circula por la mano derecha.",
            "El ciclista, porque el automóvil pierde la prioridad al querer girar.",
            "El ciclista, porque al circular por la ciclovía siempre tiene prioridad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El ciclista, porque el automóvil pierde la prioridad al querer girar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image61.jpg"
    },
    {
        "id": 194,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
        "options": [
            "El vehículo A, ya que está circulando por la derecha",
            "Los vehículos B, ya que son varios los que circulan por esa calle.",
            "El vehículo A, ya que está saliendo del paso a nivel ferroviario."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El vehículo A, ya que está saliendo del paso a nivel ferroviario.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image224.jpg"
    },
    {
        "id": 195,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
        "options": [
            "El vehículo A.",
            "El vehículo B."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image134.jpg"
    },
    {
        "id": 196,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
        "options": [
            "Los vehículos que circulan por la calle A.",
            "Los vehículos que circulan por la calle B."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Los vehículos que circulan por la calle A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image137.jpg"
    },
    {
        "id": 197,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
        "options": [
            "El vehículo A.",
            "El vehículo B."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image204.jpg"
    },
    {
        "id": 198,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
        "options": [
            "El vehículo A porque circula por una avenida.",
            "El vehículo B porque circula por la derecha.",
            "Es indistinto ya que es una esquina sin semáforo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El vehículo A porque circula por una avenida.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image153.jpg"
    },
    {
        "id": 199,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?",
        "options": [
            "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
            "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
            "Avanzar."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Reducir la velocidad y detener el vehículo antes de la senda peatonal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image128.jpg"
    },
    {
        "id": 200,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
        "options": [
            "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
            "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
            "Avanzar."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Reducir la velocidad y detener el vehículo antes de la senda peatonal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image109.jpg"
    },
    {
        "id": 201,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Estas señales son las únicas que indican que se pierde la prioridad de paso en una bocacalle sin semáforo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image210.jpg"
    },
    {
        "id": 202,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "De acuerdo a la Ley N° 2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?",
        "options": [
            "1° Pasaje - 2° Calle - 3° Avenida.",
            "1° Avenida - 2° Calle - 3° Pasaje.",
            "Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 1° Avenida - 2° Calle - 3° Pasaje.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 203,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?",
        "options": [
            "Los vehículos de transporte de pasajero.",
            "El vehículo de menor tamaño.",
            "El vehículo que se presenta por el lado derecho."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El vehículo que se presenta por el lado derecho.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 204,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
        "options": [
            "Al automóvil.",
            "Al colectivo.",
            "Es indistinto."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Al colectivo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image222.jpg"
    },
    {
        "id": 205,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
        "options": [
            "Al vehículo A, ya que circula por la derecha.",
            "Al vehículo B, ya que circula por una avenida.",
            "Es indistinto."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Al vehículo B, ya que circula por una avenida.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image175.jpg"
    },
    {
        "id": 206,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Quién tiene prioridad de paso en una rotonda?",
        "options": [
            "El vehículo que circule por la derecha.",
            "El vehículo que pretende acceder a la rotonda.",
            "El vehículo que se encuentra dentro de la calzada circular."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El vehículo que se encuentra dentro de la calzada circular.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 207,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
        "options": [
            "El vehículo A.",
            "El vehículo B.",
            "Es indistinto."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain",
        "image": "image225.jpg"
    },
    {
        "id": 208,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?",
        "options": [
            "El vehículo que desciende.",
            "El vehículo que asciende.",
            "No hay prioridad, cualquiera de ellos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo que asciende.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 209,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
        "options": [
            "El vehículo A.",
            "El vehículo B."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image269.jpg"
    },
    {
        "id": 210,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?",
        "options": [
            "Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
            "Cuando el tránsito se encuentra interrumpido por cualquier razón.",
            "Nunca, independientemente de cómo se encuentre el tránsito vehicular."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Cuando el tránsito se encuentra interrumpido por cualquier razón.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 211,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?",
        "options": [
            "No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
            "Sí, porque se encuentra a la derecha.",
            "Sí, porque señalizó su maniobra."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image58.jpg"
    },
    {
        "id": 212,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En la siguiente situación, el motovehículo…",
        "options": [
            "Puede adelantarse, pero utilizando la luz intermitente de giro izquierda.",
            "Puede adelantarse, pero tocando la bocina.",
            "No puede realizar el sobrepaso."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No puede realizar el sobrepaso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image232.jpg"
    },
    {
        "id": 213,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
        "options": [
            "Sí, salvo que se acerque un vehículo en el sentido contrario.",
            "No, ya que está prohibido por la demarcación horizontal.",
            "Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, ya que está prohibido por la demarcación horizontal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image95.jpg"
    },
    {
        "id": 214,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
        "options": [
            "Los vehículos A y B.",
            "Los vehículos A y C.",
            "Los vehículos B y C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Los vehículos B y C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image59.jpg"
    },
    {
        "id": 215,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?",
        "options": [
            "El vehículo A.",
            "El vehículo B."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El vehículo B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image47.jpg"
    },
    {
        "id": 216,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?",
        "options": [
            "El vehículo que circula por el carril que se pretende ocupar.",
            "El vehículo que realiza el cambio de carril.",
            "El vehículo del carril más lento."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El vehículo que circula por el carril que se pretende ocupar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image139.jpg"
    },
    {
        "id": 217,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Es obligatorio al finalizar un adelantamiento...",
        "options": [
            "Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
            "Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.",
            "Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 218,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál de estos carriles es el llamado &quot;&quot;carril de sobrepaso&quot;&quot;?",
        "options": [
            "Cualquiera de ellos.",
            "Sólo el carril señalado como A.",
            "Sólo el carril señalado como F."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sólo el carril señalado como A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image180.jpg"
    },
    {
        "id": 219,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para sobrepasar a otro vehículo que transita más lento.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 220,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él una situación de peligro, ¿qué debe hacer el conductor del vehículo B?",
        "options": [
            "Aumentar la velocidad para que realice la maniobra detrás suyo.",
            "Reducir la velocidad para facilitarle el retorno al carril.",
            "Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Reducir la velocidad para facilitarle el retorno al carril.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image34.jpg"
    },
    {
        "id": 221,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En este tramo de la vía no se puede realizar un sobrepaso",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image96.jpg"
    },
    {
        "id": 222,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
        "options": [
            "Circular por la banquina.",
            "Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 223,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Está permitido sobrepasar a otro vehículo en este lugar?",
        "options": [
            "Sí, salvo que haya una señal que indique lo contrario.",
            "No, está prohibido por normativa.",
            "Sólo en el caso de que no perjudique la circulación de otros vehículos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, está prohibido por normativa.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image45.jpg"
    },
    {
        "id": 224,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?",
        "options": [
            "El que lo intente primero.",
            "El último de la fila.",
            "El que circula más próximo al vehículo que se desea sobrepasar."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El que circula más próximo al vehículo que se desea sobrepasar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 225,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley N°2148, ¿qué significa el término sobrepaso?",
        "options": [
            "Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril.",
            "Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.",
            "Exceder el límite de velocidad máxima."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 226,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué peligro debe preverse al sobrepasar un colectivo detenido?",
        "options": [
            "Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.",
            "Que los pasajeros bajen por la parte izquierda del colectivo detenido.",
            "Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 227,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
        "options": [
            "El vehículo A.",
            "El vehículo B.",
            "El vehículo C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El vehículo C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image8.jpg"
    },
    {
        "id": 228,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?",
        "options": [
            "Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.",
            "Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores.",
            "Tocarle bocina para indicarle que debe seguir."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 229,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Se puede traspasar la siguiente señal horizontal?",
        "options": [
            "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.",
            "Sólo cuando la vía tiene dos carriles por sentido de circulación.",
            "No, porque indica prohibición de sobrepaso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image282.jpg"
    },
    {
        "id": 230,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
        "options": [
            "Donde la delimitación de carriles es de trazo continuo.",
            "En curvas, encrucijadas, pasos a nivel o puentes.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 231,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
        "options": [
            "Sí, cuando no haya señal que lo prohíba.",
            "No, ya que está prohibido por normativa.",
            "Sí, si hay suficiente visibilidad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, ya que está prohibido por normativa.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 232,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?",
        "options": [
            "Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
            "Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 233,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
        "options": [
            "Sí, salvo que haya una señal que indique lo contrario.",
            "No, está prohibido por normativa.",
            "Sólo si no se perjudica la circulación de otros vehículos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, está prohibido por normativa.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image100.jpg"
    },
    {
        "id": 234,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
        "options": [
            "Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.",
            "Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.",
            "No debe traspasarse ninguna de ellas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image116.jpg"
    },
    {
        "id": 235,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué indica esta demarcación amarilla en la calzada?",
        "options": [
            "Indica que se puede traspasar.",
            "Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
            "Que es una zona que se puede circular sobre ella."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image208.jpg"
    },
    {
        "id": 236,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El carril de sobrepaso en una autopista sirve para...",
        "options": [
            "Circular por él cuando a la derecha existe otro carril disponible.",
            "Circular por él siempre que se conduzca a la mayor velocidad permitida.",
            "Realizar maniobras de sobrepaso."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Realizar maniobras de sobrepaso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 237,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina &quot;carril de aceleración&quot;?",
        "options": [
            "Es el carril de incorporación a una autopista.",
            "Es el carril derecho de una autopista.",
            "Es el carril izquierdo de una autopista."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Es el carril de incorporación a una autopista.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 238,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El motovehículo señalado con el círculo rojo, ¿circula correctamente?",
        "options": [
            "Sí, porque circula paralelo con otros vehículos y no en zig zag.",
            "Sí, porque tiene la luz encendida.",
            "No, porque está prohibido circular por esa zona."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No, porque está prohibido circular por esa zona.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image274.jpg"
    },
    {
        "id": 239,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo cuando el flujo vehicular esté absolutamente congestionado.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image11.jpg"
    },
    {
        "id": 240,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene semáforo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image171.jpg"
    },
    {
        "id": 241,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo a la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?",
        "options": [
            "Si hay un semáforo de giro que me habilite (en verde).",
            "Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 242,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En un cruce sin semáforos, un vehículo que se encuentra circulando por una avenida doble mano, tiene permitido girar a su izquierda para tomar una calle de único sentido.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 243,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "De acuerdo a la Ley N° 2148, ¿está permitido realizar el siguiente giro?",
        "options": [
            "No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita.",
            "Sí, ya que es una intersección no semaforizada.",
            "No, ya que es una vía de doble sentido de circulación."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, ya que es una intersección no semaforizada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image69.jpg"
    },
    {
        "id": 244,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "De acuerdo a la Ley N° 2148, ¿está permitido realizar este giro?",
        "options": [
            "No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.",
            "Sí, ya que el semáforo está en verde.",
            "No, ya que es una vía de doble sentido de circulación."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image183.jpg"
    },
    {
        "id": 245,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:",
        "options": [
            "Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro.",
            "Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
            "Ambas respuestas, A y B, son incorrectas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son incorrectas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image207.jpg"
    },
    {
        "id": 246,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?",
        "options": [
            "60 km/h.",
            "40 km/h.",
            "70 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 40 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image170.jpg"
    },
    {
        "id": 247,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
        "options": [
            "30 km/h.",
            "40 km/h.",
            "20 km/h."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 20 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "examen___categor_a_a_docx_image254.jpg"
    },
    {
        "id": 248,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida para un motovehículo en esta avenida?",
        "options": [
            "40 km/h.",
            "70 km/h.",
            "60 km/h."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 60 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image233.jpg"
    },
    {
        "id": 249,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida para un motovehículo en este tramo de la avenida?",
        "options": [
            "60 km/h.",
            "50 km/h.",
            "40 km/h."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 40 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image130.jpg"
    },
    {
        "id": 250,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida para motovehículos en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?",
        "options": [
            "60 km/h.",
            "70 km/h.",
            "50 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 70 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image192.jpg"
    },
    {
        "id": 251,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Costanera Rafael Obligado?",
        "options": [
            "60 km/h.",
            "70 km/h.",
            "40 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 60 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image14.jpg"
    },
    {
        "id": 252,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley 2148, los límites de velocidad para un motovehículo que circula por esta arteria son de 30 km/h (mínima) y 60 km/h (máxima).",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image248.jpg"
    },
    {
        "id": 253,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según las normas generales, ¿cuál es la velocidad máxima permitida para motovehículos en esta zona de la ruta?",
        "options": [
            "110 km/h.",
            "130 km/h.",
            "80 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 110 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image31.jpg"
    },
    {
        "id": 254,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?",
        "options": [
            "60 km/h.",
            "80 km/h.",
            "90 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 60 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 255,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla en el momento del sobrepaso.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 256,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
        "options": [
            "40 km/h.",
            "20 km/h.",
            "30 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 20 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image273.jpg"
    },
    {
        "id": 257,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
        "options": [
            "20 km/h.",
            "40 km/h.",
            "30 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 20 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image53.jpg"
    },
    {
        "id": 258,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
        "options": [
            "Poco antes de abandonar la misma.",
            "Cuando se haya entrado en el carril de desaceleración.",
            "Cuando se ingresa a la nueva vía de circulación."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Cuando se haya entrado en el carril de desaceleración.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 259,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según Ley N° 2148, ¿cuál es la velocidad máxima permitida para motovehículos en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?",
        "options": [
            "60 km/h.",
            "80 km/h.",
            "100 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 80 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 260,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida para un motovehículo en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?",
        "options": [
            "60 km/h.",
            "110 km/h.",
            "100 km/h."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 100 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 261,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para motovehículos en semiautopistas?",
        "options": [
            "130 km/h.",
            "120 km/h.",
            "110 km/h."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 120 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 262,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?",
        "options": [
            "40 km/h.",
            "50 km/h.",
            "60 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 40 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 263,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué se conoce como velocidad precautoria?",
        "options": [
            "A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.",
            "La circulación a la velocidad mínima establecida para una vía.",
            "La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 264,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?",
        "options": [
            "20 kilómetros por hora.",
            "40 kilómetros por hora.",
            "30 kilómetros por hora."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 30 kilómetros por hora.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image195.jpg"
    },
    {
        "id": 265,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley N° 2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?",
        "options": [
            "Es de 20 km/h para todas las arterias.",
            "No más de 30 km/h en calles y de 45 km/h en avenidas.",
            "Es igual a la mínima establecida para el tipo de arteria correspondiente."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Es igual a la mínima establecida para el tipo de arteria correspondiente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 266,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley N° 2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?",
        "options": [
            "20 kilómetros por hora.",
            "40 kilómetros por hora.",
            "30 kilómetros por hora."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 20 kilómetros por hora.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 267,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?",
        "options": [
            "20 kilómetros por hora.",
            "40 kilómetros por hora.",
            "30 kilómetros por hora."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 40 kilómetros por hora.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image275.jpg"
    },
    {
        "id": 268,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina “distancia de seguridad”?",
        "options": [
            "A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.",
            "A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro.",
            "A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 269,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina “tiempo de reacción”?",
        "options": [
            "Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
            "Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
            "Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 270,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina &quot;distancia de reacción&quot;?",
        "options": [
            "A la distancia que recorre un vehículo hasta su detención.",
            "A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar.",
            "A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 271,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley 2148, al circular con un motovehículo detrás de este camión, ¿cuál es la distancia mínima de seguridad que debe mantener respecto de él? La distancia que resulte de una separación de por lo menos…",
        "options": [
            "Un segundo.",
            "Dos segundos.",
            "Cinco segundos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Dos segundos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image1.jpg"
    },
    {
        "id": 272,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 273,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué relación existe entre la velocidad y el campo visual del conductor?",
        "options": [
            "A mayor velocidad, menor campo visual.",
            "A menor velocidad, menor campo visual.",
            "A mayor velocidad, mayor campo visual."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A mayor velocidad, menor campo visual.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 274,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Los excesos de velocidad...",
        "options": [
            "En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos.",
            "Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
            "Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 275,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de minimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de combustible en un vehículo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 276,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Circular a mayor velocidad de la precautoria implica que aumenten las posibilidades de que un siniestro vial sea más grave.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 277,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?",
        "options": [
            "Aumentar la velocidad gradualmente antes de ingresar en la curva.",
            "Desacelerar antes de ingresar a la curva.",
            "Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Desacelerar antes de ingresar a la curva.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image212.jpg"
    },
    {
        "id": 278,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si ve esta señal mientras conduce, usted debe…",
        "options": [
            "Reducir la velocidad del vehículo",
            "Incrementar la velocidad del vehículo",
            "Dar vuelta a la izquierda y después a la derecha"
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Reducir la velocidad del vehículo. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image90.jpg"
    },
    {
        "id": 279,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
        "options": [
            "Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
            "Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
            "Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image188.jpg"
    },
    {
        "id": 280,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?",
        "options": [
            "30 km/h.",
            "40 km/h.",
            "60 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 30 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image161.jpg"
    },
    {
        "id": 281,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?",
        "options": [
            "No, ya que el límite de la señal de tránsito rige independientemente del día y horario.",
            "Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, ya que el límite de la señal de tránsito rige independientemente del día y horario.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 282,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El motovehículo de la imagen, ¿se encuentra  correctamente estacionado?",
        "options": [
            "Sí, porque la vereda tiene más de tres metros y no obstruye el paso peatonal.",
            "No. Sólo puede estacionarse sobre la vereda si existe una señalización que lo autorice.",
            "Sí, sólo los motovehículos pueden estacionarse sobre cualquier vereda."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No. Sólo puede estacionarse sobre la vereda si existe una señalización que lo autorice.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image22.jpg"
    },
    {
        "id": 283,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley N° 2148, ¿está permitido estacionar un motovehículo del modo que se visualiza en la imagen?",
        "options": [
            "No, salvo que exista señalización que lo permita.",
            "Sí, de 07 a 21 horas durante días no hábiles.",
            "Sí, de 21 a 07 horas durante los días hábiles."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, salvo que exista señalización que lo permita.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image165.jpg"
    },
    {
        "id": 284,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si su motovehículo no funciona, ud. puede estacionarlo durante unos días hasta que sea reparado, tal como se muestra en la imagen.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image52.jpg"
    },
    {
        "id": 285,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?",
        "options": [
            "La línea peatonal.",
            "La línea imaginaria de prolongación de ochava.",
            "La línea de edificación transversal."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La línea imaginaria de prolongación de ochava.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 286,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?",
        "options": [
            "Todo el frente del edificio.",
            "10 metros de cada lado de la entrada.",
            "5 metros de cada lado de la entrada."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 10 metros de cada lado de la entrada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image127.jpg"
    },
    {
        "id": 287,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Para poder estacionar en esta zona, se deben dejar libre al menos de 5 metros para cada lado de la entrada.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image132.jpg"
    },
    {
        "id": 288,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En estas zonas, está permitido estacionar a partir de los 20 metros para cada lado.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image279.jpg"
    },
    {
        "id": 289,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos...",
        "options": [
            "Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
            "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
            "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image218.jpg"
    },
    {
        "id": 290,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos…",
        "options": [
            "Junto a la acera izquierda los días hábiles durante las 24 horas.",
            "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
            "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image43.jpg"
    },
    {
        "id": 291,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...",
        "options": [
            "Junto a la acera derecha los días hábiles durante las 24 horas.",
            "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
            "Junto a la acera izquierda todos los días durante las 24 horas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Junto a la acera izquierda todos los días durante las 24 horas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image250.jpg"
    },
    {
        "id": 292,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En el siguiente espacio, se encuentra permitido detenerse pero no estacionar.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image185.jpg"
    },
    {
        "id": 293,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?",
        "options": [
            "Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.",
            "Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón.",
            "Dentro de la intersección."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image140.jpg"
    },
    {
        "id": 294,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Según la Ley Nº 24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
        "options": [
            "5 metros respecto de los rieles.",
            "2 metros respecto de los rieles.",
            "No existe una distancia mínima."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 5 metros respecto de los rieles.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image268.jpg"
    },
    {
        "id": 295,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Se está habilitado a detener un vehículo en este lugar?",
        "options": [
            "Sí, siempre y cuando no entorpezca la circulación.",
            "No, está prohibido estacionar y detenerse por normativa.",
            "Si, a menos que haya una señal que lo prohíba expresamente."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, está prohibido estacionar y detenerse por normativa.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image209.jpg"
    },
    {
        "id": 296,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?",
        "options": [
            "Que el vehículo circula lentamente.",
            "Que el vehículo próximamente ingresará a un garage o se detendrá.",
            "Que el vehículo realizará un giro en la próxima intersección."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que el vehículo próximamente ingresará a un garage o se detendrá.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image9.jpg"
    },
    {
        "id": 297,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué indica el uso de este tipo de luces?",
        "options": [
            "Cuando se utilizan por separado sirven para preanunciar maniobras.",
            "Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image28.jpg"
    },
    {
        "id": 298,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra, utilizando las luces correctas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image157.jpg"
    },
    {
        "id": 299,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si el vehículo de la imagen se dispone a ingresar a un garaje ubicado a su derecha, está anticipando su maniobra utilizando las luces correctas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image20.jpg"
    },
    {
        "id": 300,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
        "options": [
            "Con la luz de giro hacia el lado donde se irá a ingresar.",
            "Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
            "Con las luces intermitentes (balizas)."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Con las luces intermitentes (balizas).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 301,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...",
        "options": [
            "20 metros antes de realizar la maniobra.",
            "10 metros antes de realizar la maniobra.",
            "30 metros antes de realizar la maniobra."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 30 metros antes de realizar la maniobra.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 302,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Para realizar correctamente un giro en una intersección se debe indicar...",
        "options": [
            "Tocando bocina.",
            "Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
            "Utilizando ambos giros, metros antes de llegar a la intersección."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 303,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Son válidas este tipo de señas?",
        "options": [
            "Como acompañamiento al uso de balizas y/o en caso de emergencia.",
            "Nunca.",
            "Sólo cuando se utilicen en calles."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Como acompañamiento al uso de balizas y/o en caso de emergencia.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image252.jpg"
    },
    {
        "id": 304,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Los motovehículos, ¿cuándo están obligados a circular con la luz baja encendida?",
        "options": [
            "Durante las 24 hs y en todo tipo de vía.",
            "Al circular por autopistas, semiautopistas o rutas, aunque sea de día.",
            "Sólo durante la noche o con días de poca visibilidad, por cualquier vía."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Durante las 24 hs y en todo tipo de vía.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 305,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Circular con la luz alta encendida está prohibido en zonas urbanas.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 306,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En cuanto al uso reglamentario de luces, ¿este motovehículo circula correctamente?",
        "options": [
            "Sí, ya que las luces sólo deben utilizarse en condiciones meteorológicas adversas.",
            "Sí, ya que las luces sólo deben utilizarse por autopistas, semiautopistas y rutas.",
            "No. Es obligatorio el uso de la luz baja las 24 horas del día y en todo tipo de vía."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No. Es obligatorio el uso de la luz baja las 24 horas del día y en todo tipo de vía.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image191.jpg"
    },
    {
        "id": 307,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?",
        "options": [
            "Que está circulando en mí mismo sentido.",
            "Que está circulando en el sentido contrario al mío.",
            "No indican sentido de circulación sino que está descompuesto."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que está circulando en mí mismo sentido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image104.jpg"
    },
    {
        "id": 308,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Para qué sirven estas luces intermitentes?",
        "options": [
            "Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad.",
            "Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "examen___categor_a_a_docx_image103.jpg"
    },
    {
        "id": 309,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando se circula de día y con suficiente luz natural por la Av. Cantilo, ¿qué luces debe llevar encendidas en su motovehículo?",
        "options": [
            "Solamente la luz de posición.",
            "La luz baja.",
            "Ninguna, dado que las condiciones de visibilidad son suficientes."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La luz baja.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 310,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Un motovehículo, ¿puede estar provisto de luz rompeniebla delantero?",
        "options": [
            "Sí, aunque no es obligatorio.",
            "No, en ningún caso.",
            "No, sólo puede disponer de la luz antiniebla trasera."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, aunque no es obligatorio.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 311,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "El sistema de luces que posee un vehículo, además de iluminar, brinda información que permite la comunicación entre vehículos y también peatones.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 312,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina “aquaplaning”?",
        "options": [
            "Cuando la cantidad de agua caída en una lluvia es abundante.",
            "A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.",
            "Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 313,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
        "options": [
            "Debería circular a la mitad de la velocidad máxima establecida por Ley.",
            "Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.",
            "Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image115.jpg"
    },
    {
        "id": 314,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
        "options": [
            "Aquaplaning.",
            "Off tracking."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Aquaplaning.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image78.jpg"
    },
    {
        "id": 315,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando hay agua en el camino, debe reducir su velocidad para evitar…",
        "options": [
            "Desgastar las llantas.",
            "Sobrecalentar las llantas.",
            "El aquaplaning."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El aquaplaning.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 316,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
        "options": [
            "No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
            "Sí, porque al mojarse pueden no funcionar eficazmente.",
            "No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, porque al mojarse pueden no funcionar eficazmente.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 317,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Con esta condición climática, el motovehículo se adhiere mejor a la calzada si...",
        "options": [
            "Se aumenta la presión de aire del neumático.",
            "El neumático conserva el dibujo en toda la superficie.",
            "Se baja la presión de aire del neumático."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: El neumático conserva el dibujo en toda la superficie.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain",
        "image": "image119.jpg"
    },
    {
        "id": 318,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si se encuentra conduciendo un motovehículo con la calzada mojada porque llovió, en el caso de frenada, esta situación provocará...",
        "options": [
            "Una disminución del tiempo de reacción.",
            "Un aumento de la distancia de reacción.",
            "Un aumento de la distancia de frenado."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Un aumento de la distancia de frenado.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain"
    },
    {
        "id": 319,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al conducir un motovehículo por una calzada mojada con charcos y los frenos se mojan, perdiendo su eficacia. ¿Qué resultaría conveniente hacer para secarlos?",
        "options": [
            "Acelerar progresivamente.",
            "Frenar con fuerza.",
            "Frenar suavemente y de forma repetida, mientras se mantiene la aceleración."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Frenar suavemente y de forma repetida, mientras se mantiene la aceleración.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 320,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al conducir por un largo lapso de tiempo y en esta condición climática…",
        "options": [
            "Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
            "Es necesario descansar con más frecuencia, para evitar la fatiga.",
            "No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Es necesario descansar con más frecuencia, para evitar la fatiga.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 321,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
        "options": [
            "No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
            "Sí, con lluvia la adherencia es menor.",
            "No. La distancia de seguridad debe ser siempre la misma."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, con lluvia la adherencia es menor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "examen___categor_a_a_docx_image26.jpg"
    },
    {
        "id": 322,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Conducir de noche aumenta el riesgo de sufrir un incidente.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 323,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2 segundos en la distancia de seguridad?",
        "options": [
            "A 4 segundos.",
            "A 3 segundos.",
            "A 5 segundos."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A 4 segundos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image272.jpg"
    },
    {
        "id": 324,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
        "options": [
            "Igual que cuando la calzada se encuentra seca.",
            "Menor que cuando la calzada se encuentra seca.",
            "Mayor que cuando la calzada se encuentra seca."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Mayor que cuando la calzada se encuentra seca.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image18.jpg"
    },
    {
        "id": 325,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?",
        "options": [
            "Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
            "No, porque este efecto se produce sólo por el uso de la luz alta.",
            "No, porque este efecto se produce en rutas con poca iluminación."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image181.jpg"
    },
    {
        "id": 326,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Cuál es el límite de velocidad máxima en esta situación?",
        "options": [
            "60 km/h.",
            "80 km/h.",
            "40 km/h."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: 60 km/h.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image257.jpg"
    },
    {
        "id": 327,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a estas condiciones climáticas si el conductor reduce la velocidad de circulación de su motovehículo, ¿disminuiría la posibilidad de participar de un siniestro?",
        "options": [
            "Sólo en la medida en que el conductor circule con las balizas encendidas.",
            "Siempre, ya que el exceso de velocidad es en sí mismo un factor esencial en la producción de incidentes de tránsito.",
            "Lo más recomendable es detenerse sobre el margen derecho de la calzada y esperar que pase el banco de niebla."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Siempre, ya que el exceso de velocidad es en sí mismo un factor esencial en la producción de incidentes de tránsito.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image131.jpg"
    },
    {
        "id": 328,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
        "options": [
            "Las luces altas, durante todo el recorrido mientras continúe la niebla.",
            "Las luces bajas y las rompeniebla (en el caso de tenerlas).",
            "Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Las luces bajas y las rompeniebla (en el caso de tenerlas).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "examen___categor_a_a_docx_image214.jpg"
    },
    {
        "id": 329,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?",
        "options": [
            "Sí, cuando el banco de niebla es muy denso.",
            "Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
            "No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image126.jpg"
    },
    {
        "id": 330,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "La niebla, como factor de riesgo, produce modificaciones en…",
        "options": [
            "El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.",
            "El campo visual del conductor y la capacidad lumínica del vehículo.",
            "Sólo afecta la capacidad lumínica del vehículo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain"
    },
    {
        "id": 331,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si circula con un motovehículo en una calzada en estas condiciones, ¿qué técnica de conducción debe emplear?",
        "options": [
            "Utilizar una velocidad reducida, evitando aceleraciones y frenadas bruscas.",
            "Dar aceleraciones y frenadas frecuentes para evitar quedar atascado.",
            "Circular a medio embrague, manteniendo permanentemente frenada la rueda delantera."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Utilizar una velocidad reducida, evitando aceleraciones y frenadas bruscas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "rain",
        "image": "image102.jpg"
    },
    {
        "id": 332,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión con una diferencia de velocidad no demasiado elevada.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 333,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Bajo estas condiciones climáticas ¿qué debe hacer para circular con seguridad con un ciclomotor?",
        "options": [
            "Circular más cerca de los vehículos que van delante, para reducir la resistencia del viento.",
            "Zigzaguear con el ciclomotor para corregir las desviaciones.",
            "Sujetar firmemente el manubrio del ciclomotor y reducir la velocidad."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sujetar firmemente el manubrio del ciclomotor y reducir la velocidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image169.jpg"
    },
    {
        "id": 334,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Frente a esta situación, ¿qué precaución especial se debería adoptar al conducir un motovehículo?",
        "options": [
            "Utilizar el alumbrado delantero de niebla.",
            "Disminuir la velocidad y aumentar la distancia de seguridad cuando circule detrás de un vehículo.",
            "Disminuir la distancia de seguridad cuando circule detrás de un vehículo."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Disminuir la velocidad y aumentar la distancia de seguridad cuando circule detrás de un vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image108.jpg"
    },
    {
        "id": 335,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si ud. circula por la ruta y observa esta situación, debe…",
        "options": [
            "Aumentar la velocidad para sobrepasar al animal rápidamente.",
            "Usar la bocina para ahuyentar al animal y mantener su velocidad.",
            "Reducir la velocidad y si es necesario detenerse."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Reducir la velocidad y si es necesario detenerse.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image37.jpg"
    },
    {
        "id": 336,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
        "options": [
            "Que el vehículo tiene un desperfecto.",
            "Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que se encuentra en emergencia, transportando a una persona en grave estado de salud.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps"
    },
    {
        "id": 337,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
        "options": [
            "Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos.",
            "Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.",
            "Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 338,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Qué vehículo puede realizar el acarreo de otro en esta vía?",
        "options": [
            "Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente.",
            "Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo.",
            "Sólo los vehículos destinados a ese fin."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sólo los vehículos destinados a ese fin.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image92.jpg"
    },
    {
        "id": 339,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "En este tipo de vía, ¿está permitido remolcar con su motovehículo a otro que se encuentra descompuesto?",
        "options": [
            "Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado.",
            "Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
            "No, sólo pueden hacerlo los vehículos autorizados a tal fin."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No, sólo pueden hacerlo los vehículos autorizados a tal fin.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image86.jpg"
    },
    {
        "id": 340,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Es correcta esta manera de acarrear a un motovehículo?",
        "options": [
            "Sí, pero se deberá mantener una distancia de 1,50 metros entre ambos motovehículos.",
            "No, los motovehículos deben ser acarreados sólo por un vehículo autorizado a tal fin.",
            "Sólo si el motovehículo remolcado es de menor cilindrada."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, los motovehículos deben ser acarreados sólo por un vehículo autorizado a tal fin.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image187.jpg"
    },
    {
        "id": 341,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina conducción preventiva?",
        "options": [
            "A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos.",
            "A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.",
            "A realizar cursos viales cada seis meses."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 342,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar de conocer la normativa y la concientización gubernamental.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 343,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿A qué se denomina conducción eficiente?",
        "options": [
            "A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.",
            "A una conducción que logre llegar a destino en el menor tiempo posible.",
            "A una conducción que mantenga durante todo el trayecto la misma velocidad."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 344,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?",
        "options": [
            "La resistencia aerodinámica.",
            "La velocidad.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 345,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "De acuerdo a la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?",
        "options": [
            "Ubicarse cerca del surtidor.",
            "Dejar el motor y las luces encendidas.",
            "Sólo dejar el motor encendido."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Dejar el motor y las luces encendidas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image280.jpg"
    },
    {
        "id": 346,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Para qué sirve esta varilla metálica?",
        "options": [
            "Para comprobar la temperatura del aceite.",
            "Para comprobar el nivel del aceite.",
            "Para comprobar la presión del aceite y del líquido de frenos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Para comprobar el nivel del aceite.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image276.jpg"
    },
    {
        "id": 347,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "Es importante realizar un correcto mantenimiento vehicular porque...",
        "options": [
            "Evita desperfectos del motor y ayuda a reducir el consumo de combustible.",
            "Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 348,
        "category": "Capítulo 3: Condiciones Adversas e Incidentes",
        "question": "¿Con qué se lubrica un motor?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Opción C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image205.jpg"
    },
    {
        "id": 349,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cuál de las siguientes imágenes muestra el sector correcto por dónde debe circular un motovehículo?",
        "options": [
            "Opción A",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Opción C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image7.jpg"
    },
    {
        "id": 350,
        "category": "Anexo I: Motovehículos",
        "question": "Para que un motovehículo circule correctamente, ¿qué sector del carril debe utilizar?",
        "options": [
            "El más cercano a las líneas horizontales que ordenan la circulación de carriles.",
            "Por el centro del carril.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Por el centro del carril.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 351,
        "category": "Anexo I: Motovehículos",
        "question": "Esta manera de circular se puede realizar sólo si se hace a baja velocidad y se recorren distancias cortas",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image85.jpg"
    },
    {
        "id": 352,
        "category": "Anexo I: Motovehículos",
        "question": "Si se encuentra conduciendo un motovehículo a excesiva velocidad en este tramo de la ruta, ¿cómo es recomendable que actúe para controlar el mismo?",
        "options": [
            "Frenando bruscamente y, al mismo tiempo, inclinándome lo más posible.",
            "Enderezando rápidamente el motovehículo y acelerando.",
            "Desacelerando e inclinándome lo más posible hacia el interior de la curva."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Desacelerando e inclinándome lo más posible hacia el interior de la curva.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image105.jpg"
    },
    {
        "id": 353,
        "category": "Anexo I: Motovehículos",
        "question": "Conduciendo un motovehículo, ante una frenada de emergencia, nunca se debe frenar única y bruscamente con el freno delantero.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 354,
        "category": "Anexo I: Motovehículos",
        "question": "En líneas generales, para que se accione esta luz, será preciso…",
        "options": [
            "Accionar siempre y al mismo tiempo el freno delantero y el trasero.",
            "Accionar cualquiera de los dos frenos, ya sea de forma simultánea o por separado.",
            "Únicamente accionar el freno trasero."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Accionar cualquiera de los dos frenos, ya sea de forma simultánea o por separado.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image117.jpg"
    },
    {
        "id": 355,
        "category": "Anexo I: Motovehículos",
        "question": "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que se produzcan puntos ciegos cuando observe por los mismos.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 356,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cómo se pueden reducir los puntos ciegos al conducir un motovehículo?",
        "options": [
            "Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea  necesario.",
            "Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión.",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, A y B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "blindspot"
    },
    {
        "id": 357,
        "category": "Anexo I: Motovehículos",
        "question": "¿A qué se llama “Punto Ciego”?",
        "options": [
            "Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
            "Sólo al área de visión que no es cubierta por los espejos retrovisores.",
            "Al punto imaginario ubicado en el horizonte de una ruta."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "blindspot"
    },
    {
        "id": 358,
        "category": "Anexo I: Motovehículos",
        "question": "Un motovehículo, ¿puede circular sin espejos?",
        "options": [
            "Sí, pero se debe observar hacia los costados antes de hacer alguna maniobra.",
            "Sólo si es de una cilindrada inferior a 150 CC.",
            "No, está prohibido."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No, está prohibido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 359,
        "category": "Anexo I: Motovehículos",
        "question": "Un ciclomotor, con respecto a los espejos retrovisores…",
        "options": [
            "No está obligado a llevar ninguno.",
            "Sólo está obligado a llevar el del lado izquierdo.",
            "Debe llevar ambos espejos retrovisores."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Debe llevar ambos espejos retrovisores.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 360,
        "category": "Anexo I: Motovehículos",
        "question": "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?",
        "options": [
            "Antes de iniciar la marcha.",
            "Durante la conducción, para poder hacer una prueba real.",
            "Con el vehículo inmovilizado y el conductor fuera del mismo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Antes de iniciar la marcha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 361,
        "category": "Anexo I: Motovehículos",
        "question": "Al conducir un motovehículo, ¿es obligatorio utilizar un chaleco reflectivo?",
        "options": [
            "Sí, es obligatorio el uso del chaleco reflectivo con el número de dominio impreso en la parte delantera y trasera.",
            "Sí, para utilizarlo en caso de lluvia.",
            "No es obligatorio, aunque es recomendable llevar ropa reflectiva para ser vistos por el resto de los conductores."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No es obligatorio, aunque es recomendable llevar ropa reflectiva para ser vistos por el resto de los conductores.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 362,
        "category": "Anexo I: Motovehículos",
        "question": "¿El conductor de un motovehículo está obligado a utilizar el siguiente elemento de seguridad?",
        "options": [
            "Sí, es obligatorio cuando el motovehículo no tiene parabrisas y el casco utilizado no tiene visor.",
            "Su uso no es obligatorio, sólo está recomendado en cualquier circunstancia para proteger los ojos.",
            "Su uso es obligatorio siempre, en cualquier circunstancia."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, es obligatorio cuando el motovehículo no tiene parabrisas y el casco utilizado no tiene visor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image2.jpg"
    },
    {
        "id": 363,
        "category": "Anexo I: Motovehículos",
        "question": "De acuerdo a la Ley 2148, ¿es correcta la manera de circular del acompañante respecto a la protección ocular?",
        "options": [
            "Sí, porque sólo el conductor está obligado a usar protección ocular.",
            "No, porque el acompañante siempre está obligado a usar protección para sus ojos.",
            "No, porque el acompañante debe usar protección ocular cuando el motovehículo no cuenta con parabrisas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, porque sólo el conductor está obligado a usar protección ocular.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image243.jpg"
    },
    {
        "id": 364,
        "category": "Anexo I: Motovehículos",
        "question": "Cuando un motovehículo no tiene parabrisas, el conductor está obligado a usar protección para los ojos (visor en el casco o anteojos de seguridad). ¿Esta obligación rige también para el acompañante?",
        "options": [
            "No, no está obligado aunque es recomendable.",
            "Sí, cuando hay mucho viento.",
            "Sí, cuando circula por caminos de tierra."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: No, no está obligado aunque es recomendable.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 365,
        "category": "Anexo I: Motovehículos",
        "question": "No es aconsejable que los conductores de motovehículos lleven siempre colocados guantes de moto en sus manos.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 366,
        "category": "Anexo I: Motovehículos",
        "question": "Este motociclista tiene los 3 principales elementos de seguridad recomendados para un conductor de motovehículo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image198.jpg"
    },
    {
        "id": 367,
        "category": "Anexo I: Motovehículos",
        "question": "¿Es aconsejable que los conductores de motovehículos usen guantes de protección?",
        "options": [
            "No, porque perjudica la adherencia al manillar.",
            "Sí, ya que ayudan a proteger sus manos y muñecas frente a una colisión o caída.",
            "Sólo en viajes largos, ya sea en vía urbana o rural."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, ya que ayudan a proteger sus manos y muñecas frente a una colisión o caída.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 368,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cuál es la vestimenta recomendada para conducir un motovehículo?",
        "options": [
            "Debería ser holgada para conducir más cómodo y tener colores que no encandilen al resto de los conductores.",
            "Debería ser de tela resistente, de colores claros y/o con bandas reflectantes.",
            "No existe recomendación sobre el tema ya que no influye en su seguridad."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Debería ser de tela resistente, de colores claros y/o con bandas reflectantes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 369,
        "category": "Anexo I: Motovehículos",
        "question": "En función a la seguridad vial, ¿tiene importancia la ropa que utilicen los conductores y acompañantes de motovehículos?",
        "options": [
            "No, es indistinto siempre que lleven los cascos homologados y bien colocados.",
            "Sí, porque colabora con su visibilidad, resguarda el cuerpo de las inclemencias del tiempo y puede brindar protección en caso de caídas.",
            "Sólo el chaleco reflectante es importante."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, porque colabora con su visibilidad, resguarda el cuerpo de las inclemencias del tiempo y puede brindar protección en caso de caídas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 370,
        "category": "Anexo I: Motovehículos",
        "question": "Al conducir un motovehículo, utilizar ropa de protección...",
        "options": [
            "Resulta eficaz porque, en caso de siniestro, evita o reduce la gravedad de ciertas lesiones.",
            "No es recomendable en zona urbana porque quita libertad de movimientos al conductor.",
            "Sólo debe utilizarse en trayectos largos por ruta."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Resulta eficaz porque, en caso de siniestro, evita o reduce la gravedad de ciertas lesiones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 371,
        "category": "Anexo I: Motovehículos",
        "question": "La vestimenta con protecciones para conducir motovehículos debe ser...",
        "options": [
            "De colores claros o con bandas reflectantes para que se pueda distinguir al conductor a suficiente distancia.",
            "De colores oscuros, para así no distraer a los conductores.",
            "De cualquier color siempre que sea de material sintético."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: De colores claros o con bandas reflectantes para que se pueda distinguir al conductor a suficiente distancia.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 372,
        "category": "Anexo I: Motovehículos",
        "question": "Para tener seguridad y control sobre los mandos de un motovehículo conviene que el conductor utilice botas que…",
        "options": [
            "Tengan tacón, queden ajustadas y sean altas.",
            "Sean bajas, preferentemente acordonadas y con puntera reforzada de acero.",
            "Queden sujetas, sin tacón ni cordones."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Queden sujetas, sin tacón ni cordones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 373,
        "category": "Anexo I: Motovehículos",
        "question": "¿Qué se entiende por casco homologado?",
        "options": [
            "Se refiere a la certificación que debe cumplir un casco, confirmando que es apto y seguro para usarlo.",
            "Indica la marca del fabricante.",
            "Se refiere a la procedencia y fecha de vencimiento del mismo."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Se refiere a la certificación que debe cumplir un casco, confirmando que es apto y seguro para usarlo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 374,
        "category": "Anexo I: Motovehículos",
        "question": "¿A qué tipo de seguridad pertenece el siguiente elemento?",
        "options": [
            "A la seguridad pasiva.",
            "A la seguridad activa.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: A la seguridad pasiva.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image199.jpg"
    },
    {
        "id": 375,
        "category": "Anexo I: Motovehículos",
        "question": "Un requisito obligatorio que debe cumplir el casco para motociclista es que…",
        "options": [
            "Debe estar homologado o certificado para su uso específico.",
            "Debe ser de uso exclusivo de motovehículos.",
            "Debe poseer visor."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Debe estar homologado o certificado para su uso específico.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 376,
        "category": "Anexo I: Motovehículos",
        "question": "¿Está permitido circular en un motovehículo con este tipo de casco?",
        "options": [
            "Sí, sólo en distancias cortas y siempre que esté correctamente ajustado.",
            "Sí, sólo ante una emergencia y siempre que esté correctamente ajustado.",
            "Nunca, ya que éste no es un casco homologado."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Nunca, ya que éste no es un casco homologado.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image219.jpg"
    },
    {
        "id": 377,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cuál de los siguientes cascos brinda mayor protección?",
        "options": [
            "El casco A.",
            "El casco B.",
            "Los dos brindan idéntica protección."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: El casco A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image125.jpg"
    },
    {
        "id": 378,
        "category": "Anexo I: Motovehículos",
        "question": "El casco homologado que brinda mayor protección es del tipo:",
        "options": [
            "Abierto.",
            "Integral.",
            "Abierto o Integral. Ambos brindan idéntica protección."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Integral.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 379,
        "category": "Anexo I: Motovehículos",
        "question": "En la siguiente imagen ¿el casco A brinda mayor protección que el B?",
        "options": [
            "Sí, porque es el que usan los corredores profesionales de automovilismo.",
            "Sí, porque con éste está protegida la mandíbula.",
            "No, no hay pruebas de que sea más seguro."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, porque con éste está protegida la mandíbula.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "examen___categor_a_a_docx_image202.jpg"
    },
    {
        "id": 380,
        "category": "Anexo I: Motovehículos",
        "question": "Una de las principales causas de mortalidad en siniestros de tránsito donde los motovehículos están involucrados, es…",
        "options": [
            "El peso del vehículo.",
            "La no utilización correcta del casco.",
            "La fricción con el asfalto."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La no utilización correcta del casco.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 381,
        "category": "Anexo I: Motovehículos",
        "question": "En caso de siniestro con un motovehículo, la importancia del uso correcto del casco es…",
        "options": [
            "Mayor para el acompañante que para el conductor, porque sus lesiones serán de mayor gravedad.",
            "Mayor para el conductor que para el acompañante, porque caerá primero.",
            "Igual para el conductor y el acompañante, porque la posibilidad de lesiones es idéntica en ambos."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Igual para el conductor y el acompañante, porque la posibilidad de lesiones es idéntica en ambos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 382,
        "category": "Anexo I: Motovehículos",
        "question": "Circulando en un motovehículo, ¿cuándo debe usar este elemento de protección?",
        "options": [
            "Sólo en días de lluvia u horarios nocturnos.",
            "Sólo en distancias largas.",
            "Ambas respuestas, la A y la B, son incorrectas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son incorrectas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet",
        "image": "image281.jpg"
    },
    {
        "id": 383,
        "category": "Anexo I: Motovehículos",
        "question": "En un motovehículo, cuando se usa correctamente el casco se tiene un...",
        "options": [
            "44% menos de probabilidades de lesiones graves.",
            "62% menos de probabilidades de lesiones graves.",
            "85% menos de probabilidades de lesiones graves."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: 85% menos de probabilidades de lesiones graves.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 384,
        "category": "Anexo I: Motovehículos",
        "question": "Ante la caída de un motociclista que circula a 25 km/h sin casco, ¿pueden producirse lesiones de gravedad, como fractura de cráneo y daños cerebrales?",
        "options": [
            "No, ya que a esa velocidad sufrir un impacto en la cabeza o en otra parte del cuerpo, no tendría consecuencias.",
            "Sí, podrían producirse ya que al no tener casco no está protegido ante un impacto.",
            "Sólo puede existir riesgo de fractura de cráneo, pero nunca lesiones cerebrales."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, podrían producirse ya que al no tener casco no está protegido ante un impacto.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 385,
        "category": "Anexo I: Motovehículos",
        "question": "Usar el visor del casco rayado, ¿ puede afectar negativamente la conducción de un motovehículo?",
        "options": [
            "Sí, ya que produce fatiga visual.",
            "Sí, de noche produce reflejos que distorsionan la visión.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Ambas respuestas, la A y la B, son correctas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 386,
        "category": "Anexo I: Motovehículos",
        "question": "Su casco de protección ha sufrido un golpe pero no se observa ningún deterioro, ¿este golpe pudo haber afectado su eficacia?",
        "options": [
            "Sí, aunque no se observen daños en su exterior.",
            "No, porque sólo se ve afectado si se observan abolladuras en el exterior.",
            "Sólo si se aprecian grietas en el interior."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, aunque no se observen daños en su exterior.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 387,
        "category": "Anexo I: Motovehículos",
        "question": "El conductor del motovehículo que se muestra en la imagen NO está en infracción.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image6.jpg"
    },
    {
        "id": 388,
        "category": "Anexo I: Motovehículos",
        "question": "El uso adecuado del casco implica que la correa de sujeción debe llevarse abrochada según las circunstancias del tránsito.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 389,
        "category": "Anexo I: Motovehículos",
        "question": "Al utilizar el casco en un motovehículo es fundamental…",
        "options": [
            "Que la correa de sujeción esté correctamente abrochada.",
            "Que exteriormente no presente abolladuras, aunque haya sufrido alguna caída anterior.",
            "Que quede holgado porque así brinda mayor comodidad para conducir."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que la correa de sujeción esté correctamente abrochada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 390,
        "category": "Anexo I: Motovehículos",
        "question": "Para que el uso del casco de un motovehículo cumpla su función protectora...",
        "options": [
            "La correa de sujeción debe estar siempre abrochada.",
            "Debe quedar bastante holgado, ya que resulta más cómodo para el conductor.",
            "Debe encontrarse en buenas condiciones. El modo en que se encuentra sujetado no influye en la protección que brinda."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: La correa de sujeción debe estar siempre abrochada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 391,
        "category": "Anexo I: Motovehículos",
        "question": "¿Es igual de seguro si el casco para conducir un motovehículo está abrochado con la correa apretada al mentón o floja?",
        "options": [
            "Sí, no tiene importancia mientras que esté abrochado.",
            "No. El casco debe estar abrochado pero es mejor si queda holgado ya que resulta más cómodo para el conductor.",
            "No. El casco debe estar abrochado de modo que un dedo pueda pasar entre la correa y el mentón."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No. El casco debe estar abrochado de modo que un dedo pueda pasar entre la correa y el mentón.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 392,
        "category": "Anexo I: Motovehículos",
        "question": "Un casco de protección para motovehículos que participó en un siniestro vial, no pierde su eficacia si es que no se observan abolladuras o daños en su exterior.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 393,
        "category": "Anexo I: Motovehículos",
        "question": "¿Los cascos de protección para motovehículos tienen vencimiento?",
        "options": [
            "No, tienen vigencia mientras se encuentren en buen estado.",
            "Sí, la fecha la especifica el fabricante.",
            "Sí, a los 10 años."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, la fecha la especifica el fabricante.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 394,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cómo puede saber cuál es la medida del casco de protección que corresponde al usuario de un motovehículo?",
        "options": [
            "Midiendo la circunferencia de la cabeza a la altura de la frente y por sobre las orejas.",
            "El que sea más cómodo para el conductor.",
            "Midiendo la distancia desde el mentón hasta la zona superior de la cabeza."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Midiendo la circunferencia de la cabeza a la altura de la frente y por sobre las orejas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 395,
        "category": "Anexo I: Motovehículos",
        "question": "No todos los cascos de protección de motovehículos que están homologados, permiten identificar visiblemente el talle del mismo.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 396,
        "category": "Anexo I: Motovehículos",
        "question": "La manera segura de utilizar el casco protector de un motociclista, es que éste quede...",
        "options": [
            "Holgado.",
            "Justo.",
            "Muy apretado."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Justo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 397,
        "category": "Anexo I: Motovehículos",
        "question": "Al cruzar con un motovehículo por un paso a nivel, existirá menos riesgo de caída si se atraviesa de forma que las ruedas y la vía queden como la imagen:",
        "options": [
            "Opción A.",
            "Opción B.",
            "Opción C."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image81.jpg"
    },
    {
        "id": 398,
        "category": "Anexo I: Motovehículos",
        "question": "Frente a la siguiente situación, existirá menos riesgo de caída si se atraviesa con el motovehículo de forma que las ruedas y la vía formen un ángulo…",
        "options": [
            "Lo más cerrado posible.",
            "Lo más recto posible.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Lo más recto posible.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image190.jpg"
    },
    {
        "id": 399,
        "category": "Anexo I: Motovehículos",
        "question": "En caso de un siniestro vial, el conductor de un motovehículo que utiliza todas las medidas de seguridad presenta en relación al conductor de un automóvil…",
        "options": [
            "Igual riesgo de resultar herido.",
            "Menor riesgo de resultar herido.",
            "Mayor riesgo de resultar herido."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Mayor riesgo de resultar herido.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 400,
        "category": "Anexo I: Motovehículos",
        "question": "La imagen que se visualiza representa…",
        "options": [
            "El riesgo que implica la conducción de un motovehículo porque circula a más velocidad que los automóviles.",
            "Que el motovehículo se encuentra ubicado en un punto ciego del espejo retrovisor.",
            "Que el motovehículo no se encuentra ubicado en un punto ciego del espejo retrovisor."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Que el motovehículo no se encuentra ubicado en un punto ciego del espejo retrovisor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image64.jpg"
    },
    {
        "id": 401,
        "category": "Anexo I: Motovehículos",
        "question": "Al acelerar un motovehículo, ¿hacia dónde se desplaza la masa?",
        "options": [
            "Se distribuirá de forma pareja sobre cada rueda.",
            "Hacia la rueda trasera.",
            "Hacia la rueda delantera pudiendo provocar, incluso, pérdida de adherencia de la rueda trasera a la calzada."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Hacia la rueda trasera.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 402,
        "category": "Anexo I: Motovehículos",
        "question": "Al frenar correctamente un motovehículo…",
        "options": [
            "La rueda trasera soporta el mayor esfuerzo de frenado, ya que es la directriz.",
            "La rueda delantera soporta el mayor esfuerzo de frenado.",
            "Las dos ruedas soportan el mismo esfuerzo de frenado."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La rueda delantera soporta el mayor esfuerzo de frenado.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 403,
        "category": "Anexo I: Motovehículos",
        "question": "La posición de conducción en un motovehículo debe ser…",
        "options": [
            "Lo más distante posible al centro de gravedad.",
            "En la parte más próxima al centro de gravedad.",
            "Lo más avanzada posible."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: En la parte más próxima al centro de gravedad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 404,
        "category": "Anexo I: Motovehículos",
        "question": "La posición corporal de este acompañante no es recomendable.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger",
        "image": "image63.jpg"
    },
    {
        "id": 405,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cúal de las siguientes opciones muestra la posición correcta del pasajero de un motovehículo?",
        "options": [
            "Opción A",
            "Opción B",
            "Ambas respuestas, A y B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Opción B. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger",
        "image": "image27.jpg"
    },
    {
        "id": 406,
        "category": "Anexo I: Motovehículos",
        "question": "Mientras un motovehículo está detenido, es recomendable que el acompañante…",
        "options": [
            "Mantenga los pies en los apoyapies.",
            "Coloque los pies en el suelo para contribuir al equilibrio del vehículo.",
            "Coloque un pie en el suelo y otro en el apoyapié."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Mantenga los pies en los apoyapies.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger"
    },
    {
        "id": 407,
        "category": "Anexo I: Motovehículos",
        "question": "En general, los mandos accionados con la mano señalada son:",
        "options": [
            "El acelerador y la maneta del freno delantero.",
            "La maneta de embrague, la bocina y las luces de giro.",
            "La maneta de embrague y se acciona el acelerador."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La maneta de embrague, la bocina y las luces de giro.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image74.jpg"
    },
    {
        "id": 408,
        "category": "Anexo I: Motovehículos",
        "question": "Generalmente, ¿qué elemento de la motocicleta se acciona con el pie señalado?",
        "options": [
            "El embrague.",
            "El cambio de marchas.",
            "El pedal de freno de la rueda trasera."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El pedal de freno de la rueda trasera.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image46.jpg"
    },
    {
        "id": 409,
        "category": "Anexo I: Motovehículos",
        "question": "Si su motovehículo dispone de mandos independientes para frenar cada rueda, uno en el manillar y otro en el pedal, ¿que rueda frena el mando situado en el manillar?",
        "options": [
            "La trasera.",
            "La delantera.",
            "Ambas respuestas, la A y la B, son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La delantera.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 410,
        "category": "Anexo I: Motovehículos",
        "question": "En relación al peso, ¿qué debe tener en cuenta en la siguiente situación?",
        "options": [
            "Que la distancia de frenado será menor.",
            "Que la distancia de frenado será mayor.",
            "Nada, ya que el peso de un acompañante no interviene en la conducción."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que la distancia de frenado será mayor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image135.jpg"
    },
    {
        "id": 411,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cúal es la función principal del siguiente elemento?",
        "options": [
            "Regular el paso de nafta del depósito a la cuba del carburador.",
            "Regular el paso del líquido refrigerante del carburador a los cilindros.",
            "Controlar el correcto engrase y mantenimiento de los elementos del sistema de transmisión."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Regular el paso de nafta del depósito a la cuba del carburador.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image151.jpg"
    },
    {
        "id": 412,
        "category": "Anexo I: Motovehículos",
        "question": "En general, el cambio de velocidades de una motocicleta, ¿con qué pie se acciona?",
        "options": [
            "Pie Izquierdo.",
            "Pie Derecho.",
            "No se acciona con el pie."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Pie Izquierdo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 413,
        "category": "Anexo I: Motovehículos",
        "question": "La postura corporal del conductor de un motovehículo, en condiciones de conducción urbana, debe ser…",
        "options": [
            "Un poco forzada, porque permite mejor maniobrabilidad.",
            "Relajada, sin encorvar el cuerpo más de lo necesario.",
            "Encorvando el cuerpo, lo más aerodinámica posible."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Relajada, sin encorvar el cuerpo más de lo necesario.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 414,
        "category": "Anexo I: Motovehículos",
        "question": "La posición corporal para conducir un motovehículo recomendada es…",
        "options": [
            "Erguida y forzada.",
            "Centrada y relajada.",
            "Lo más avanzada posible."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Centrada y relajada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 415,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
        "options": [
            "Fríos.",
            "Calientes.",
            "Es indistinto, al ser de caucho se mantienen aislados de la temperatura."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Fríos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 416,
        "category": "Anexo I: Motovehículos",
        "question": "¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…",
        "options": [
            "1,6 mm.",
            "1,0 mm.",
            "0,5 mm."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 1,0 mm.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image196.jpg"
    },
    {
        "id": 417,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cuál es la rueda motriz del siguiente vehículo?",
        "options": [
            "Opción A.",
            "Opción B.",
            "Ambas respuestas, la A y la B son correctas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image237.jpg"
    },
    {
        "id": 418,
        "category": "Anexo I: Motovehículos",
        "question": "En relación al peso transportado en este vehículo, ¿qué debe realizar el conductor antes de circular?",
        "options": [
            "Adecuar la presión según indicación del fabricante del motovehículo.",
            "Duplicar la presión en las cubiertas, para tener mayor adherencia.",
            "Reducir la presión en las cubiertas, para tener mayor adherencia."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Adecuar la presión según indicación del fabricante del motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image167.jpg"
    },
    {
        "id": 419,
        "category": "Anexo I: Motovehículos",
        "question": "El siguiente elemento de seguridad, ¿debe ser sustituido?",
        "options": [
            "Sí, por otro en buen estado.",
            "No, ya que la única prohibición es circular con neumáticos que presenten cortes o deformaciones.",
            "No, porque así el vehículo se desliza mejor y consume menos combustible."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí, por otro en buen estado.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image168.jpg"
    },
    {
        "id": 420,
        "category": "Anexo I: Motovehículos",
        "question": "Cuando la cubierta de un motovehículo tiene más presión que la adecuada…",
        "options": [
            "El motovehículo podrá doblar mejor.",
            "El motovehículo podrá frena mejor.",
            "El motovehículo tiene menor adherencia a la calzada."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: El motovehículo tiene menor adherencia a la calzada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 421,
        "category": "Anexo I: Motovehículos",
        "question": "¿Qué neumático sufre mayor desgaste en este vehículo?",
        "options": [
            "La opción A.",
            "La opción B.",
            "Ambas respuestas, la A y la B son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La opción B.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image211.jpg"
    },
    {
        "id": 422,
        "category": "Anexo I: Motovehículos",
        "question": "Al realizar con un motovehículo un giro muy cerrado, a una velocidad de 30 km/h, ¿qué puede suceder si en dicho giro aprieta fuertemente el freno delantero?",
        "options": [
            "Nada, debido a que a esa velocidad el efecto giroscópico estabilizará el motovehículo.",
            "Que la rueda delantera quede bloqueada y produzca una caída.",
            "Que la rueda trasera quede bloqueada por la fuerza cinética y se produzca una caída."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que la rueda delantera quede bloqueada y produzca una caída.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 423,
        "category": "Anexo I: Motovehículos",
        "question": "Generalmente, el freno delantero de una moto se acciona con…",
        "options": [
            "Opción A.",
            "Opción B.",
            "Ambas respuestas, la A y la B son correctas."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Opción A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image270.jpg"
    },
    {
        "id": 424,
        "category": "Anexo I: Motovehículos",
        "question": "Si frena un motovehículo en línea recta y mantiene apretadas sus rodillas contra el depósito de combustible, conseguirá que…",
        "options": [
            "El motovehículo, gracias a la fuerza centrífuga, no salga de la calzada.",
            "Su cuerpo se mantenga más estable y no se deslice hacia adelante.",
            "El freno trasero sea más eficaz que el delantero."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Su cuerpo se mantenga más estable y no se deslice hacia adelante.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 425,
        "category": "Anexo I: Motovehículos",
        "question": "Si se tiene una distancia corta para detenerse, ¿cómo debería frenar un motovehículo para que sea seguro?",
        "options": [
            "Usando sólo el freno trasero.",
            "Usando correctamente ambos frenos.",
            "Accionando fuertemente el freno delantero."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Usando correctamente ambos frenos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "brakes"
    },
    {
        "id": 426,
        "category": "Anexo I: Motovehículos",
        "question": "Según la Ley 2148, ¿los motovehículos deben estar provistos de un dispositivo que asegure un frenado eficaz, rápido o progresivo en TODAS las ruedas?",
        "options": [
            "Sí. Aplica a todos los modelos independientemente al número de ruedas que tenga.",
            "Sí, salvo los triciclos y cuatriciclos a quienes la Ley los exceptúa de que sea en todas sus ruedas.",
            "Sí, salvo los ciclomotores que tienen dicha obligación en la rueda trasera."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Sí. Aplica a todos los modelos independientemente al número de ruedas que tenga.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 427,
        "category": "Anexo I: Motovehículos",
        "question": "Es obligatorio que los motovehículos tengan…",
        "options": [
            "Un dispositivo que asegure el frenado en todas las ruedas.",
            "Un único freno, en la parte trasera.",
            "Un único freno, en la parte delantera."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Un dispositivo que asegure el frenado en todas las ruedas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 428,
        "category": "Anexo I: Motovehículos",
        "question": "En un motovehículo, la distancia del asiento al piso…",
        "options": [
            "Incide en la estabilidad y el equilibrio.",
            "No tiene relevancia.",
            "Es fundamental para el frenado."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Incide en la estabilidad y el equilibrio.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash"
    },
    {
        "id": 429,
        "category": "Anexo I: Motovehículos",
        "question": "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?",
        "options": [
            "No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción.",
            "Sí, puede afectar al correcto control del vehículo.",
            "No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Sí, puede afectar al correcto control del vehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights"
    },
    {
        "id": 430,
        "category": "Anexo I: Motovehículos",
        "question": "Si tiene que conducir un motovehículo por una zona resbaladiza, ¿qué precauciones debe tomar?",
        "options": [
            "Frenar en la zona para controlar la trayectoria.",
            "Acelerar para pasar por la zona en el menor tiempo posible.",
            "Disminuir la velocidad antes de llegar y mantener la moto vertical al pasar sobre ella."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Disminuir la velocidad antes de llegar y mantener la moto vertical al pasar sobre ella.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 431,
        "category": "Anexo I: Motovehículos",
        "question": "Si al conducir un motovehículo, usted sufre una caída que no le produce lesión alguna, ¿qué comportamiento debería adoptar si desea proseguir el viaje?",
        "options": [
            "Reanudar inmediatamente la marcha para no entorpecer la circulación.",
            "Esperar por lo menos una hora antes de reanudar la marcha.",
            "Antes de continuar circulando, realizar las comprobaciones necesarias para valorar el estado en el que se encuentra el motovehículo."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Antes de continuar circulando, realizar las comprobaciones necesarias para valorar el estado en el que se encuentra el motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 432,
        "category": "Anexo I: Motovehículos",
        "question": "Frente a la siguiente situación, ¿qué posición debe adoptar el acompañante de un motovehículo?",
        "options": [
            "La misma que adopte el conductor pero anticipándose a él.",
            "La contraria a la que adopte el conductor, para así contrarrestar la fuerza centrífuga.",
            "La misma posición e inclinación que adopte el conductor."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La misma posición e inclinación que adopte el conductor.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger",
        "image": "image4.jpg"
    },
    {
        "id": 433,
        "category": "Anexo I: Motovehículos",
        "question": "Si un motovehículo dispone de 2 baúles laterales para llevar carga, ¿cómo es recomendable utilizarlas?",
        "options": [
            "Cargarlas, de modo que ambas maletas queden aproximadamente con el mismo peso, para colaborar con la estabilidad.",
            "Cargar más la maleta del lado derecho, para contrarrestar el peso al realizar un sobrepaso.",
            "Cargar con más peso el baúl del lado izquierdo, para favorecer la reincorporación en caso de realizar un sobrepaso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cargarlas, de modo que ambas maletas queden aproximadamente con el mismo peso, para colaborar con la estabilidad.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 434,
        "category": "Anexo I: Motovehículos",
        "question": "Este motociclista y sus acompañantes están circulando de manera segura y correcta.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger",
        "image": "image121.jpg"
    },
    {
        "id": 435,
        "category": "Anexo I: Motovehículos",
        "question": "La manera de circular de esta niña de 5 años es incorrecta.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image83.jpg"
    },
    {
        "id": 436,
        "category": "Anexo I: Motovehículos",
        "question": "Según la Ley 2148, el niño de 10 años de edad que se observa detrás del conductor, se encuentra circulando de manera segura y correcta.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired",
        "image": "image145.jpg"
    },
    {
        "id": 437,
        "category": "Anexo I: Motovehículos",
        "question": "El niño que se observa delante del conductor, se encuentra circulando de manera segura y correcta.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image67.jpg"
    },
    {
        "id": 438,
        "category": "Anexo I: Motovehículos",
        "question": "Según la Ley 2148, ¿es correcta la manera de circular del acompañante?",
        "options": [
            "Sí, pero sólo cuando el conductor sea el padre, la madre o tutor encargado.",
            "Sí, siempre y cuando utilice un casco adecuado a su talla y no se interponga en el campo visual del conductor.",
            "No, porque los acompañantes deben ser mayores de 16 años y circular en el asiento trasero."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No, porque los acompañantes deben ser mayores de 16 años y circular en el asiento trasero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger",
        "image": "image55.jpg"
    },
    {
        "id": 439,
        "category": "Anexo I: Motovehículos",
        "question": "Este niño, menor de 12 años, circula de manera segura y correcta ya que está utilizando un sistema de retención infantil (SRI).",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Falso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors",
        "image": "image277.jpg"
    },
    {
        "id": 440,
        "category": "Anexo I: Motovehículos",
        "question": "En un motovehículo pueden circular hasta dos personas, sólo si cuenta con doble asiento, reposapiés y agarradera.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 441,
        "category": "Anexo I: Motovehículos",
        "question": "Para circular en C.A.B.A., ¿el conductor de un motovehículo está obligado a llevar el número de la patente impreso en el chaleco reflectivo?",
        "options": [
            "Sí, en la parte delantera y trasera.",
            "No. El uso del chaleco es obligatorio pero no la impresión de la patente.",
            "No. Sólo es obligatorio para el acompañante."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: No. Sólo es obligatorio para el acompañante.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 442,
        "category": "Anexo I: Motovehículos",
        "question": "En relación al chaleco reflectante y de acuerdo al Código de Tránsito y Transporte de CABA, ¿es correcta la manera de circular observada en la siguiente imagen?",
        "options": [
            "Sí, su uso es obligatorio sólo en caso de escasa visibilidad.",
            "Sí, su uso es obligatorio sólo si se circula en la zona del Microcentro porteño.",
            "Sí, su uso es obligatorio para el acompañante."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, su uso es obligatorio para el acompañante.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 443,
        "category": "Anexo I: Motovehículos",
        "question": "Según el Código de Tránsito y Transporte de CABA, los conductores de motovehículos son responsables…",
        "options": [
            "De que su eventual acompañante no posea antecedentes penales.",
            "De que su eventual acompañante utilice el casco protector homologado o certificado, el chaleco reflectante con el número de dominio impreso y que no tenga un dosaje de alcohol superior a 0,5 g/l de sangre.",
            "Ambas respuestas (A y B) son correctas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: De que su eventual acompañante utilice el casco protector homologado o certificado, el chaleco reflectante con el número de dominio impreso y que no tenga un dosaje de alcohol superior a 0,5 g/l de sangre.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "mirrors"
    },
    {
        "id": 444,
        "category": "Anexo I: Motovehículos",
        "question": "El conductor de un motovehículo, ¿es responsable de que el acompañante que traslada tenga debidamente colocado el casco protector?",
        "options": [
            "No, porque cada persona adulta es responsable de sus propios actos.",
            "Sólo si es menor de edad.",
            "Sí, porque es responsable de lo que respecta a ese vehículo y sus usuarios."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Sí, porque es responsable de lo que respecta a ese vehículo y sus usuarios.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "helmet"
    },
    {
        "id": 445,
        "category": "Anexo I: Motovehículos",
        "question": "En relación a los elementos de seguridad obligatorios de un motociclista, ¿qué deben hacer los agentes de control de tránsito frente a esta situación?",
        "options": [
            "Deben labrar un acta de infracción al motociclista.",
            "Deben labrar un acta de infracción al motociclista y retener el motovehículo.",
            "Deben labrar un acta de infracción al motociclista, retener la licencia de conducir y remitir el motovehículo."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Deben labrar un acta de infracción al motociclista, retener la licencia de conducir y remitir el motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "crash",
        "image": "image76.jpg"
    },
    {
        "id": 446,
        "category": "Anexo I: Motovehículos",
        "question": "Según la Ley 2148, el acompañante de un motovehículo…",
        "options": [
            "Debe circular con el casco con la numeración del dominio, correctamente colocado.",
            "Debe circular con el casco correctamente colocado y un chaleco reflectante; ambos deberán tener el número de dominio del motovehículo.",
            "Debe circular con el casco correctamente colocado y un chaleco reflectante con el número de dominio del motovehículo."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Debe circular con el casco correctamente colocado y un chaleco reflectante con el número de dominio del motovehículo.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "passenger"
    },
    {
        "id": 447,
        "category": "Anexo I: Motovehículos",
        "question": "La edad mínima para obtener una licencia de conducir motovehículos, excepto ciclomotores, es de 17 años.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 448,
        "category": "Anexo I: Motovehículos",
        "question": "¿Cuál es la edad mínima que se requiere para obtener la licencia de conducir ciclomotores?",
        "options": [
            "18 años.",
            "16 años.",
            "21 años."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: 16 años.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "expired"
    },
    {
        "id": 449,
        "category": "Anexo I: Motovehículos",
        "question": "Según la Ley Nº 2148, ¿está permitido el faro delantero de este motovehículo?",
        "options": [
            "No, ya que debería tener dos faros.",
            "No, ya que debería ser blanco.",
            "Sí, ya que la Ley sólo indica la obligación del uso de un faro pero no especifica su color."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: No, ya que debería ser blanco.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "lights",
        "image": "image79.jpg"
    },
    {
        "id": 450,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Senda peatonal.",
            "Personas trabajando.",
            "Cruce peatonal de máximo peligro."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Personas trabajando.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image141.jpg"
    },
    {
        "id": 451,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Prohibido estacionar por la existencia de un aeropuerto cercano.",
            "Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.",
            "Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image82.jpg"
    },
    {
        "id": 452,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Proximidad de bosques.",
            "Zonas de palmeras.",
            "Vientos fuertes laterales."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Vientos fuertes laterales.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image62.jpg"
    },
    {
        "id": 453,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Cruce de jinetes.",
            "Prohibición de circular con animales.",
            "Camino peligroso por presencia de animales sueltos."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cruce de jinetes.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image71.jpg"
    },
    {
        "id": 454,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Camino resbaladizo.",
            "Camino sinuoso.",
            "Camino cuesta arriba."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Camino sinuoso.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image29.jpg"
    },
    {
        "id": 455,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Aproximación a un puente levadizo, rotatorio o flotante.",
            "Presencia de un puente de menor ancho que el resto de la vía.",
            "Proximidad de un paso a nivel."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Aproximación a un puente levadizo, rotatorio o flotante.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image36.jpg"
    },
    {
        "id": 456,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Inicio de doble mano.",
            "Estrechamiento (en una sola mano).",
            "Encrucijada (bifurcación)."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Encrucijada (bifurcación).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image88.jpg"
    },
    {
        "id": 457,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Inicio de doble mano.",
            "Encrucijada (bifurcación).",
            "Estrechamiento (en una sola mano)."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Encrucijada (bifurcación).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image271.jpg"
    },
    {
        "id": 458,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Túnel.",
            "Puente angosto.",
            "Altura mínima."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Túnel.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image111.jpg"
    },
    {
        "id": 459,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Encrucijada.",
            "Cruce de caminos.",
            "Incorporación de tránsito lateral."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Incorporación de tránsito lateral.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image263.jpg"
    },
    {
        "id": 460,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Inicio de doble circulación.",
            "Calzada dividida.",
            "Camino sinuoso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Inicio de doble circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image106.jpg"
    },
    {
        "id": 461,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Rotonda.",
            "Peligro extremo de rotonda.",
            "Preferencia de avance."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Rotonda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image138.jpg"
    },
    {
        "id": 462,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal preventiva?",
        "options": [
            "Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.",
            "Indica que circulamos por una zona selvática.",
            "Indica que por la vía en la que se circula, la calzada presenta irregularidades."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image173.jpg"
    },
    {
        "id": 463,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Niños jugando.",
            "Zona escolar.",
            "Calle peatonal."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Zona escolar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image35.jpg"
    },
    {
        "id": 464,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Estrechamiento (en las dos manos).",
            "Calzada dividida.",
            "Inicio doble mano."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Calzada dividida.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image51.jpg"
    },
    {
        "id": 465,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Estrechamiento (en una mano).",
            "Calzada dividida.",
            "Estrechamiento (en las dos manos)."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Estrechamiento (en las dos manos).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image158.jpg"
    },
    {
        "id": 466,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal vertical que a continuación se presenta:",
        "options": [
            "Cruce de peatones (Peligro máximo).",
            "Peatones a la izquierda.",
            "Prohibición de circular. Zona exclusiva peatonal."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cruce de peatones (Peligro máximo).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image194.jpg"
    },
    {
        "id": 467,
        "category": "Anexo V: Señales Viales",
        "question": "¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: La señal A.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image38.jpg"
    },
    {
        "id": 468,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Cruce ferroviario.",
            "Estación ferroviaria.",
            "Circulación exclusiva (ferrocarril)."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cruce ferroviario.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image186.jpg"
    },
    {
        "id": 469,
        "category": "Anexo V: Señales Viales",
        "question": "Al visualizar esta señal de prevención, usted sabe que:",
        "options": [
            "Se advierte la aproximación de una curva con pendiente ascendente.",
            "Se aproxima una curva cerrada.",
            "Se aproxima un camino sinuoso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Se aproxima una curva cerrada.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image245.jpg"
    },
    {
        "id": 470,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Cruce Ferroviario (Más de dos vías).",
            "Estación Ferroviaria.",
            "Atención a Ferrocarril."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Cruce Ferroviario (Más de dos vías).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image258.jpg"
    },
    {
        "id": 471,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Paneles de prevención.",
            "Prohibición de circular.",
            "Reducción de velocidad."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Paneles de prevención.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image261.jpg"
    },
    {
        "id": 472,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Panel de Prevención (Objeto Rígido).",
            "Calzada Reducida.",
            "Contramano."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Panel de Prevención (Objeto Rígido).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image23.jpg"
    },
    {
        "id": 473,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Cruce Ferroviario (por la derecha).",
            "Prohibición de Girar.",
            "Panel de Prevención (Curva)."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Panel de Prevención (Curva).. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image178.jpg"
    },
    {
        "id": 474,
        "category": "Anexo V: Señales Viales",
        "question": "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image227.jpg"
    },
    {
        "id": 475,
        "category": "Anexo V: Señales Viales",
        "question": "Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?",
        "options": [
            "Se tiene la prioridad de avance.",
            "Se pierde la prioridad de avance.",
            "Esta señal no es indicativa de prioridad de avance."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Se pierde la prioridad de avance.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image129.jpg"
    },
    {
        "id": 476,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué significa esta señal?",
        "options": [
            "Indica la prohibición de estacionamiento en el frente de entidades bancarias.",
            "Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.",
            "Indica la prohibición de circulación de vehículos sin permiso de ingreso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image146.jpg"
    },
    {
        "id": 477,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Que existe la opción de doblar hacia la derecha.",
            "Que hay un giro obligatorio hacia la derecha.",
            "Que se aproxima una curva peligrosa con inclinación hacia la derecha."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que hay un giro obligatorio hacia la derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image77.jpg"
    },
    {
        "id": 478,
        "category": "Anexo V: Señales Viales",
        "question": "La señal representada precede a una intersección con la OBLIGACIÓN de girar a la derecha.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "examen___categor_a_a_docx_image24.jpg"
    },
    {
        "id": 479,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "No avanzar.",
            "Comienzo de doble mano.",
            "Comienzo de sentido único."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Comienzo de sentido único.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image197.jpg"
    },
    {
        "id": 480,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Sobrepasos por la derecha.",
            "Circulación exclusiva (camión).",
            "Tránsito pesado a la derecha."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Tránsito pesado a la derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image21.jpg"
    },
    {
        "id": 481,
        "category": "Anexo V: Señales Viales",
        "question": "Esta señal vertical reglamentaria indica…",
        "options": [
            "Que es un carril preferencial para ciclistas.",
            "Que es un carril de uso exclusivo para ciclistas.",
            "Que los ciclistas no pueden circular por este carril."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Que es un carril de uso exclusivo para ciclistas.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image244.jpg"
    },
    {
        "id": 482,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal reglamentaria?",
        "options": [
            "Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal.",
            "Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.",
            "Que comienza una ciclovía."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image267.jpg"
    },
    {
        "id": 483,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal reglamentaria?",
        "options": [
            "Que el vehículo no puede continuar su marcha sin detenerse.",
            "Presencia de reductor de velocidad.",
            "Comienzo de sentido opuesto de circulación."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Que el vehículo no puede continuar su marcha sin detenerse.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image266.jpg"
    },
    {
        "id": 484,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal reglamentaria?",
        "options": [
            "Inicio de calle de convivencia.",
            "Los peatones no deben circular por esa zona.",
            "Los peatones deben circular obligatoriamente por la derecha."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Los peatones deben circular obligatoriamente por la derecha.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image226.jpg"
    },
    {
        "id": 485,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal reglamentaria?",
        "options": [
            "Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores.",
            "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.",
            "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image40.png"
    },
    {
        "id": 486,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Prohibición de Girar a la Derecha.",
            "Prohibición de Cambiar de Carril.",
            "Prohibición de Adelantar."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Prohibición de Cambiar de Carril.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image144.jpg"
    },
    {
        "id": 487,
        "category": "Anexo V: Señales Viales",
        "question": "La señal que se muestra indica un camino sin salida:",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image206.jpg"
    },
    {
        "id": 488,
        "category": "Anexo V: Señales Viales",
        "question": "40- Indique qué representa la siguiente señal:",
        "options": [
            "Dirección obligatoria en ambos sentidos.",
            "Dirección permitida en ambos sentidos.",
            "Giros permitidos."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Dirección permitida en ambos sentidos.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image155.jpg"
    },
    {
        "id": 489,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Desvío por cambio de sentido de circulación.",
            "Calzada dividida.",
            "Cruce Peligroso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Desvío por cambio de sentido de circulación.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image247.jpg"
    },
    {
        "id": 490,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Comienzo de autopista.",
            "Comienzo de ruta.",
            "Comienzo de semiautopista."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Comienzo de autopista.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image143.jpg"
    },
    {
        "id": 491,
        "category": "Anexo V: Señales Viales",
        "question": "Determine qué indica la señal que a continuación se presenta:",
        "options": [
            "Fin de semiautopista.",
            "Fin de ruta.",
            "Fin de autopista."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Fin de autopista.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image193.jpg"
    },
    {
        "id": 492,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Permitido girar hacia la izquierda.",
            "Dirección obligatoria hacia la izquierda.",
            "Dirección permitida hacia la izquierda."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Dirección permitida hacia la izquierda.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image159.jpg"
    },
    {
        "id": 493,
        "category": "Anexo V: Señales Viales",
        "question": "Esta señal advierte que en el lugar ocurrió un siniestro vial que produjo una víctima fatal.",
        "options": [
            "Verdadero.",
            "Falso."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Verdadero.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image16.jpg"
    },
    {
        "id": 494,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal vertical de información?",
        "options": [
            "Una encrucijada peligrosa.",
            "La existencia de un puesto sanitario o de socorro.",
            "La existencia de un templo religioso."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: La existencia de un puesto sanitario o de socorro.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image50.jpg"
    },
    {
        "id": 495,
        "category": "Anexo V: Señales Viales",
        "question": "¿A qué punto de referencia hace alusión la señal que a continuación se presenta?",
        "options": [
            "Servicio mecánico.",
            "Gomería.",
            "Estación de servicio."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Gomería.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image107.jpg"
    },
    {
        "id": 496,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Existencia de un teatro, en las inmediaciones.",
            "Prohibición de estacionar en la puerta de un teatro.",
            "Prohibición de detenerse en la puerta de un teatro."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Existencia de un teatro, en las inmediaciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image3.jpg"
    },
    {
        "id": 497,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué significa esta señal?",
        "options": [
            "Prohibición de estacionar en la entrada de terminal de ómnibus.",
            "Existencia de terminal de ómnibus, en las inmediaciones.",
            "Prohibición de detenerse en la entrada de terminal de ómnibus."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Existencia de terminal de ómnibus, en las inmediaciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image80.jpg"
    },
    {
        "id": 498,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Prohibición de detenerse en las inmediaciones a la plaza.",
            "Prohibición de estacionar en las inmediaciones a la plaza.",
            "Existencia de una plaza, en las inmediaciones."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: Existencia de una plaza, en las inmediaciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image133.jpg"
    },
    {
        "id": 499,
        "category": "Anexo V: Señales Viales",
        "question": "¿Qué indica esta señal?",
        "options": [
            "Se encuentra permitido detenerse en esa vía.",
            "Existencia de un estacionamiento vehicular, en las inmediaciones.",
            "Se encuentra permitido estacionar en esa vía."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Existencia de un estacionamiento vehicular, en las inmediaciones.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image229.jpg"
    },
    {
        "id": 500,
        "category": "Anexo V: Señales Viales",
        "question": "¿Cuál de la tres señales indica que la ruta es provincial?",
        "options": [
            "La señal A.",
            "La señal B.",
            "La señal C."
        ],
        "correctAnswer": 2,
        "explanation": "Correcto. Recuerda: La señal C.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image54.jpg"
    },
    {
        "id": 501,
        "category": "Anexo V: Señales Viales",
        "question": "Indique qué significa esta señal:",
        "options": [
            "Ruta Nacional N°5.",
            "Ruta Provincial N°5.",
            "Ruta Panamericana N°5."
        ],
        "correctAnswer": 1,
        "explanation": "Correcto. Recuerda: Ruta Provincial N°5.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image241.jpg"
    },
    {
        "id": 502,
        "category": "Anexo V: Señales Viales",
        "question": "Indique qué significa esta señal:",
        "options": [
            "Ruta Nacional N°3.",
            "Ruta Provincial N°3.",
            "Ruta Panamericana N°3."
        ],
        "correctAnswer": 0,
        "explanation": "Correcto. Recuerda: Ruta Nacional N°3.. Es de suma importancia cumplir estrictamente esta pauta técnica e incorporar buenos hábitos de conducción defensiva para prevenir incidentes de tránsito.",
        "iconType": "straps",
        "image": "image176.jpg"
    }
];
