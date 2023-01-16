//Sintaxis antigua de try/catch:

try {
    h();
} catch (error) {
    console.log(error);
}

//Nueva sintaxis:

try {
    hB(); //Función no existente por lo que habrá un error al compilar el código
} catch {
    console.log('Esto será un error'); // Mensaje personalizado para cuando ocurra un error
}