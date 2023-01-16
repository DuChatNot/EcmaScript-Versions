//Validar si los datos son correctos

const reg = /\b(Apple)+\b/g; //Busca la palabra Apple

const f = 'Apple, Banana, Kiwi, Orange, Apple, etc etc etc'

for (match of f.matchAll(reg)){ //Busca en todo el string f la palabra declarada en reg (Apple)
    console.log(match); // IMprime las coincidencias
}