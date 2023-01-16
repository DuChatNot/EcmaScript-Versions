//Respuestas de múltiples promesas

const p = new Promise((resolve,reject) => reject('Rechazo'));
const p2 = new Promise((resolve,reject) => resolve('Cumplido'));
const p3 = new Promise((resolve,reject)=>resolve('Resuelto (por segunda ocación)'));

Promise.allSettled([p,p2,p3]) //Crea un array en donde se recibiran todas las respuestas de las promesas (Esta es una 4ta promesa por lo que su respuesta debera entrar en un .then)
    .then(response => console.log(response)); //Cuando reciba todas las respuestas de las promesas, ejecuta el console.log que las muestra

//Existe una propiedad Promise.all en la cual su respuesta será resolve solamenete si todas las promesas arrojan un resolve, en caso de que una falle, ésta tambien lo hará
