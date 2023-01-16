const p = new Promise((resolve,reject) => reject('Rechazo'));
const p2 = new Promise((resolve,reject) => resolve('Primer respuesta RESOLVE de las demás promesas'));
const p3 = new Promise((resolve,reject) => resolve('Resuelto (por segunda ocación)'));

Promise.any([p,p2,p3]) //Captura la primer respuesta de cualquier promesa que sea satisfactoria (Resolve)
    .then(res => console.log(res));