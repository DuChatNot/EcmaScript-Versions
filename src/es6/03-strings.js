//Froma clásica de sumar strings:

let h = 'Hello';
let w = 'World';
let a = h + ' ' + w + '!';
//console.log(a);

// Template literals (Es6):
let b = `${h} ${w}!`; //Nueva forma para sumar strings 
console.log(b);
//## Tip: Ctrl + Alt + } --> Backticks (comillas francesas)

// Forma clásica: Multi-Line strings:
let l = 'string \n' + 'un string en otra línea'; // El \n representa un salto de línea
//## Tip: Alt + 92 --> Slash invertido \

// Forma Nueva (Es6): Multi-Line strings:
let l2 = `Esto es un string pero al usar backticks
es posible usar "enter" para dar un salto de línea, "/n" ha quedado obsoleto`;

console.log(l);
console.log(l2);
