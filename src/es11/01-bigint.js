//Manejo de numeros muy grandes:

const a = 654322879330447268749021n; //La n indica que se usara la manipulación de grandes números
const b = BigInt(654322879330447268749021); // La sintaxis BigInt() concede el manejo de grandes números a la variable b (en lugar de usar n de nuevo)
console.log(a);
console.log(b);