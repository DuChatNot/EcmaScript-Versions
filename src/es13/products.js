import fetch from 'node-fetch';

//Top level await permite utilizar el await sin estar dentro de una función async además de solo ser permitido en la parte superior de un documento

const r = await fetch('https://api.escuelajs.co/api/v1/products'); //Await hace que el sistema espere a que llegue el api para seguir corriendo el código
const p = await r.json(); //Espera a que llegue la variable r para luego hacer la transformación a objeto .json

export {p};
