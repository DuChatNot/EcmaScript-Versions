const arr = ['a','b','c','d','e','f','g'];

//JavaScript guarda los arreglos de tal manera que el primer elemento lo coloca en la posición 0 y todos los demás en posisciones negativas en donde el último elemento estará en la posición -1

console.log(arr[arr.length - 1]); //Forma antigua de imprimir la última posición de un arreglo (suponindo que no se sabe que tan largo es)

console.log(arr.at(-1)); //Forma moderna para saber el ultimo elemento de un arreglo con uso de la propiedad .at