var lastName = 'C';
var lastName = "D"; //reasigna valor
console.log(lastName); //imprime valor = D

let fruit = 'apple';
fruit = 'kiwi'; //reasigna valor
console.log(fruit);

const animal = 'dog';
animal = 'cat'; //Const no puede reasignar valores
console.log(animal);

const fruits = () => { //Forma alterna de declarar una función
    if (true){
        var fruit1 = 'apple'; //Global (scope global)
        let fruit2 = 'kiwi'; //No se pueden acceder de manera global (scope local)
        const fruit3 = 'Banana'; //No se pueden acceder de manera global (scope local)
    }

    console.log(fruit1); //Se puede acceder a fruit1 debido a que se declaro de manera "var"
    console.log(fruit2); //No se puede acceder a fruit2 debido a que se declaro de manera "let"
    console.log(fruit3); //No se puede acceder a fruit3 debido a que se declaro de manera "const"
}

fruits();

