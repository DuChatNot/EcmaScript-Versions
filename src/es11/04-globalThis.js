console.log(window); //Al intentar imprimir la propiedad window ocurre un error debido a que Js no tiene acceso, en el navegador si se puede ejecutar dicha propiedad.

console.log(global); //Node si tiene acceso a esta propiedad por lo que en este caso si funcionará

console.log(selft) //Esto es para webworker

console.log(globalThis); // Se puede utilizar en todos lados
