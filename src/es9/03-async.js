async function* f() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const o = f();
o.next().then(response => console.log(response.value));
o.next().then(response => console.log(response.value));
o.next().then(response => console.log(response.value));
console.log('Test123...');

async function fB(array) { //Esta función tarda en ser ejecutada debido al async
    for await (value of array){
        console.log(value);
    }
}

const n = fB(['Forky','Buzz','Rex']);
console.log('???');