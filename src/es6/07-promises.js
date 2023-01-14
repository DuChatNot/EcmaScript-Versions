// Promesas : algo que sucederá o no...
const f = () => {
    return new Promise ((resolve, reject) => { //Esto es una función anónima, significa que carece de nombre, por lo tanto, no puede ser utilizada despues, solo es usada para que realice alguna terea DENTRO de otra función, se representa con (()) o (()=>{...})
        //Resolve y reject son las palabras comunmente mas utilizadas para promesas, no es necesario llamarlas así.
        if (true) {
            resolve('Successsssssssssss!'); //Se asigna valor a resolve
        } else {
            reject('Fail...'); //Se asigna valor a reject
        }
    }) 
}

f()
    .then(response => console.log(response)) //Cuando la promesa arroja un resolve, .then lo atrapa y lo renombra (response en este caso) [NO debe llevar ; al final si es que se quiere concatenar con .catch]
    .catch(err => console.log(err)); //Adopta y regresa el valor rechazado (reject) de la promesa, lo reenombra. (err en este caso)

