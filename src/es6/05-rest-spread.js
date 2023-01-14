// Arrays destructuring:

let fruits = ['apple','banana'];
let [a,b] = fruits; //Desectructura el arreglo para poder usar cada variable de manera independiente
console.log(a,b);

// Object destructuring:

let user = {
    name: 'Claudio',
    age: 26,
};

let {name,age} = user; //Es necesario poner el nombre que recibieron las variables dentro del objeto para poder separarlo
console.log(name,age);

// Spread Operator:

let person = {name: 'Andrei', age: 26};
let country = 'Mx';

let data = {...person, country}  // Los ... representan la información contenida en el objeto, para el objeto, despues de los datos que ya contiene, agrega "country"
console.log(data);

//let data = {id:1, ...person, country};
//Agregamos un elemento "id" antes de la información contenida en el objeto (...) y despues, un elemento "country"

// Rest:

function sum(num, ...values){ //Un parámetro "num" que adoptará el valor dado cuando se llame la unción y otro parámetro [array] de valores indefinidos (hasta ahora), tomará todos los valores que se le agreguen despues de "num"
    console.log(values); //Imprime todos los valores que el usuario le asigne a "values"
    console.log(num + values[0]); //Suma el primer valor dado por el usuario + el primer valor de "values"
    return num + values[0];
}

sum(9,3,4,5,6,7);