//Create an array and passing the number, question, answer and options
let questions = [
    {
        numb: 1, //Index 0
        question: "Seleccione la respuesta correcta sobre las protecciones en un sistema fotovoltaico. Seleccione una:",
        answer: "Las protecciones ante sobretensiones pueden ser externas o internas",
        options: [
            "Las protecciones ante sobretensiones pueden ser externas o internas",
            "Las protecciones ante sobrecorrientes son los varistores y la conexión equipotencial",
            "El interruptor principal debe soportar una tensión un 50% superior a la del punto de máxima potencia de la instalación",
            "Ninguna de las anteriores"
            ]
    },
    {
        numb: 2,//Index 1
        question: "Seleccione la respuesta incorrecta sobre la clasificación de los inversores conectados a red. Seleccione una:",
        answer: "El inversor de módulo es una solución barata que permite eliminar el cableado de continua",
        options: [
            "Existirá un inversor central en todo el sistema fotovoltaico",
            "El inversor de módulo es una solución barata que permite eliminar el cableado de continua",
            "El inversor multi-string permite la conexión de diferentes tecnologías de módulos u orientaciones",
            "Ninguna de las anteriores"
            ]
    },
    {
        numb: 3, //Index 2
        question: "Seleccione la respuesta correcta sobre el factor de dimensionado. Seleccione una:",
        answer: "Mientras más pequeño es este factor, mayor tamaño tendrá el generador fotovoltaico para un mismo inversor",
        options: [
            "Mientras más grande es este factor, mayor tamaño tendrá el generador fotovoltaico para un mismo inversor",
            "Mientras más pequeño es este factor, mayor tamaño tendrá el generador fotovoltaico para un mismo inversor",
            "Es independiente de la latitud del lugar",
            "Ninguna de las anteriores"
        ]
    },
    {
        numb: 4, //Index 3
        question: "Indique la respuesta correcta sobre los tipos de sistemas fotovoltaicos. Seleccione una:",
        answer: "Los sistemas fotovoltaicos autónomos se dimensionan en función del consumo de la vivienda en la que se van a instalar",
        options: [
            "Los sistemas fotovoltaicos autónomos se dimensionan en función del consumo de la vivienda en la que se van a instalar",
            "En los sistemas fotovoltaicos híbridos, las curvas de generación y consumo tienen que ajustarse lo máximo posible",
            "Los sistemas de bombeo utilizan un generador primario y un generador secundarior",
            "Ninguna de las anteriores"
        ]
    },
    {
        numb: 5, //Index 4
        question: "Seleccione la respuesta incorrecta sobre la caracterización del inversor del sistema conectado a la red. Seleccione una:",
        answer: "La potencia nominal de entrada es la potencia máxima que podrá generar el inversor",
        options: [
            "El inversor posee uno o varios seguidores del punto de máxima potencia",
            "Si se supera la tensión máxima permitida a la entrada del inversor, éste puede ser dañado",
            "La potencia nominal de entrada es la potencia máxima que podrá generar el inversor",
            "Ninguna de las anteriores"
        ]
    },
];