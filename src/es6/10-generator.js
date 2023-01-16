//Para crear un generador se utiliza la palabra reservada de funcion pero agregando un * al final: function* 

function* i(arr){
    for (val of arr){
        yield val; // regresa el valor y a la vez recuerda el valor anterior (yield pausa / reanuda una funcion generadora)
    }
}

const it = i([1,2,3,4,5,6,7]);
console.log(it.next().value); //next imprime el envia el valor, la siguiente vez que se usa envia el segundo valor y asi sucesivamente
console.log(it.next().value);
console.log(it.next().value);
//La extensión .value aisla el valor impreso, de no usarlo el valor se imprimiría de esta manera: { value: 1, done: false }
//Al utilizarlo el resultado es unicamente: 1


//Ejercicio playground (ignorar)
function* getId(arr) {
    for (val of arr) {
        yield val;
    }
}

const i = getId([1, 2, 3, 4, 5, 6]);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
