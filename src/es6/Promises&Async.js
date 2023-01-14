/*const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman',
    year: 2017
},{
    id:3,
    title: 'Avenger',
    year:2019
}];

const getdata = () => {
    return datos;
} */

console.log(getdata()); 
//En este caso es posible imprimir los valores debido a que las variables estan almacenadas dentro del mismo equipo,
//Si dichas variables vinieran de un servidor remoto existiría un retraso de timepo en lo que la información llega aquí (asincronismo)
//Para simular este retraso se usa la función setTimeOut(() => {}, 999) -- Esta palabra clave recibe una función y un tiempo (en milisegundos) como parámetros
//Utilizando setTimeOut queda de ésta manera:

const getdatos = () => {
    setTimeout(() =>{
        return datos;
    }, 1500);
}

console.log(getdatos()); 
//El resultado de esto es un UNDEFINED debido a que se ejecuta el código y despues de 1500 milisegundos llega la información deseada.
//Para resolver esto se utilizan las promesas, estas permiten dejar una parte del código pendiente, esperando una respuesta
//Utilizando una promesa, quedaria de esta manera:

const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
},{
    id: 2,
    title: 'Spiderman',
    year: 2017
},{
    id:3,
    title: 'Avenger',
    year:2019
}];

const getDatos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve(datos); //En lugar de RETURN se utiliza RESOLVE (en caso de que se resuelva, devuelve los datos)
        }, 1500);
    });
}
//No es posible utilizar un console.log para acceder a los datos de una promesa, es necesario utilizar catch y then:
getDatos()
    .then((datos) => console.log(datos)); //función callback para ir hacia atras y obtener los datos cuando la promesa se cumpla
     //Si esta función devolvierea otra promesa, se podría concatenar otro then para cuando se resuelva esa segunda promesa
    // .catch se utilizaria para hacer algo cuando la promesa mande un error (rechazo)   




//Async & Await:

async function f (){ //async provoca que la función sea asincrona
    const datAsync = await getDatos(); //await se utiliza en lugar de hacer callback, espera a que termine el timepo de asincronismo y luego ejecuta la acción
    console.log(datAsync);
}

f();

//La función anterior puede ser englobada en un bloque try / catch:
async function fB (){
    try{ //Intenta hacer esto y si no funciona...
        const datAsync = await getDatos();
        console.log(datAsync);
    } catch (error){ // ... haz esto
        console.log(error);
    }
}
fB();