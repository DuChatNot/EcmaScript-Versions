//Transforma un arrays de arrays a un objeto (object.entries inverso)

const arr = [['name', 'Andrei'],['age',26]]; //Transforma cada array (Se encuentran de la forma [propiedad,valor]) en un objeto
console.log(arr);
console.log(Object.fromEntries(arr));