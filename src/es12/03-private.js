class u {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #speak(){ //El # hace privada a la clase, por lo que solo puede ser accedida por la misma clase
        return 'Hello';
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(x){
        this.age = x;
    }
}

const f = new u('Andrei', 26);
console.log(f.uAge);
console.log(f.uAge = 12);