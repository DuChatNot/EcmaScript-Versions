//Se devuelve una matriz de cualquier sub-matriz 

// flat
const arr = [1,1,2,2,3,3,[4,4,5,5,6,[7,8,9]]] //un arreglo con un arreglo interno que tiene a su vez otro arreglo interno
console.log(arr.flat(3)); //El elemento (3) simboliza la profundidad a la que llegará

// flatmap

const arr2 = [1,2,3,4,5];
console.log(arr2.flatMap(v => [v, v *2])); //Crea un arreglo de la forma [valor, valor*2 , segundovalor, segundovalor*2 ... ] y asi sucesivamente
// La v representa el valor de los arreglos (puede usarse cualquier letra para esto)
