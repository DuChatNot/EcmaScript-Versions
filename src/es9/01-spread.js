const u = {username: 'DuChat', age: 26, country: 'Mx'};
const {username, ...values} = u; //Se separa username y el resto se envia a un objeto "values" del arreglo original u.

console.log(username); //Imprime username
console.log(values); //Imprime el resto del objeto