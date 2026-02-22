export const prioridadesQuestions = [
    {
        id: 1,
        question: "En una encrucijada sin semáforos, ¿quién tiene la prioridad de paso?",
        scenarioType: "pg1",
        options: [
            "El vehículo que circula por la derecha.",
            "El vehículo que circula por la izquierda.",
            "El vehículo más grande.",
            "El que llega primero a la esquina."
        ],
        correctAnswer: 0,
        explanation: "La prioridad de paso en encrucijadas sin señalización pertenece siempre al vehículo que cruza por la derecha."
    },
    {
        id: 2,
        question: "¿Cuál de estas situaciones anula la prioridad de paso de la derecha?",
        scenarioType: "ps1",
        options: [
            "Si el vehículo de la derecha es un auto particular.",
            "En una bocacalle de igual jerarquía.",
            "Ante la presencia de una señal de 'PARE' o 'CEDA EL PASO'.",
            "Si el vehículo de la izquierda va más rápido."
        ],
        correctAnswer: 2,
        explanation: "La señalización vertical (Pare/Ceda el Paso) tiene prioridad sobre la norma general de la derecha."
    },
    {
        id: 3,
        question: "Al ingresar a una rotonda, ¿quién tiene la prioridad?",
        scenarioType: "pr1",
        options: [
            "El que intenta ingresar a la rotonda.",
            "El vehículo que ya circula dentro de la rotonda.",
            "El que circula por la avenida principal.",
            "El vehículo de mayor porte."
        ],
        correctAnswer: 1,
        explanation: "Quien circula por la rotonda tiene prioridad de paso sobre el que intenta ingresar."
    },
    {
        id: 4,
        question: "Ante la presencia de un vehículo de emergencia (ambulancia, bomberos) con sirenas, ¿qué debe hacer?",
        scenarioType: "pe1",
        options: [
            "Acelerar para no estorbar.",
            "Mantener la marcha normal.",
            "Ceder el paso inmediatamente, desplazándose hacia un costado.",
            "Frenar bruscamente en el carril donde se encuentra."
        ],
        correctAnswer: 2,
        explanation: "Los vehículos de emergencia en servicio tienen prioridad absoluta."
    },
    {
        id: 5,
        question: "¿Tiene el peatón prioridad de paso en las esquinas?",
        scenarioType: "pp1",
        options: [
            "Solo si hay semáforo en verde para él.",
            "No, el vehículo siempre es más rápido.",
            "Sí, siempre tiene prioridad en la senda peatonal o su prolongación imaginaria.",
            "Solo en zonas escolares."
        ],
        correctAnswer: 2,
        explanation: "El peatón tiene prioridad de cruce en todas las esquinas, exista o no senda peatonal marcada."
    },
    {
        id: 6,
        question: "Al salir de un garage o vía secundaria hacia una avenida, ¿quién tiene prioridad?",
        scenarioType: "incorporacion",
        options: [
            "El vehículo que sale, porque ya puso la luz de giro.",
            "El vehículo que circula por la avenida principal.",
            "El que circule a mayor velocidad.",
            "Se aplica la regla de la derecha siempre."
        ],
        correctAnswer: 1,
        explanation: "Todo vehículo que se incorpore a una vía principal desde una vía secundaria, garage o estacionamiento debe ceder el paso."
    },
    {
        id: 7,
        question: "Si un vehículo gira a la derecha y se cruza con un ciclista que circula por la ciclovía en su mismo sentido, ¿quién pasa primero?",
        scenarioType: "ciclista",
        options: [
            "El automóvil porque es más grande.",
            "El que llegue primero a la intersección.",
            "El ciclista que circula por el carril exclusivo.",
            "El automóvil porque tiene prioridad de la derecha."
        ],
        correctAnswer: 2,
        explanation: "Los vehículos que giran deben ceder el paso a los ciclistas que circulan por carriles exclusivos o ciclovías."
    }
];
