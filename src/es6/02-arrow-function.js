function square(num){ //Forma clásica de declarar funciones
    return num * num;
}
square(12);

const square = (num) => { //Forma alterna, misma función (agregada en es6)
    return num * num;
}
square(9);

const square = num => num * num; //Otra alternativa a declarar una función (se pueden evitar las {} si la función es simple)
//... esta vez al tener un solo parámetro se puede evitar el uso de () y además esta sintaxis ya tiene implicito un 'return'. (agregada en es6)
square(8);