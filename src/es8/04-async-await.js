const f = () => {
    return new Promise((resolve,reject) => {
        if (true){
            setTimeout(()=>resolve('Async'),2000)
        } else {
            reject (new Error('Error!'));
        }
    });
}

const fB = async () => { 
    const a = await f(); //La palabra await espera a que una promesa sea resuelta y solo puede ser utilizada dentro de una funcion async
    console.log(a);
    console.log('Test123'); //Se imprime cuando se resuelve la promesa
};

console.log('Before');
fB();
console.log('After');
