//Declarando la clase:

class User{};

//Creando una instancia de clase:
const a = new User();

//Ejemplo/////////////////

class u {
    // método
    greetings(){
        return 'Hello';
    }
};

const b = new u();
console.log(b.greetings());

const c = new u();
console.log(c.greetings());

// constructor

class u {
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const d = new u();

// this Hace referencia al elemento padre que lo contiene

class u {
    constructor(name){
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }
};

const e = new u('Andrei');
console.log(e.greetings());

// Setters / Getters

class u {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(x){
        this.age = x;
    }
}

const f = new u('Andrei', 26);
console.log(f.uAge);
console.log(f.uAge = 12);

//No entendí ni madres... XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX