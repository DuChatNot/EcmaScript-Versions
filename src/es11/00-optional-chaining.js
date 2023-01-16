const u = {
    DuChat:{
        country: 'Mx'
    },
    Andrei:{
        country:'EU'
    },
    Claudio:{
        country:'CA'
    }
}

// console.log(u.DuChat.country); //Accede a las propiedades del elemento DuChat
// console.log(u.DuChat.abc123); //La propiedad abc123 no existe por lo que queda indefinida, para esto se usa:

console.log(u?.abc123?.country); //Al usar ? en elementos no existentes la consola te regresa un indefinido en lugar de un error (Es decir, se pregunta si existen dichos elementos)
//Esto con el fin de evitar que un error destruya la aplicación