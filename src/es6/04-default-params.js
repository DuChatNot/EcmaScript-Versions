//Forma clásica:
function newUser(name, age, country){
    var name = name || 'Claudio'; //Valor por default en caso de no tener referencia de age, name o country
    var age = age || 26; //Valor por default
    var country = country || 'Mx'; //Valor por default
    console.log(name,age,country);    
}

newUser(); //Imprime valores default
newUser('Andrei', 23, 'CA');

//Nueva Froma (Es6):

function newAdmin(name = 'Claudio', age = 26, country = 'EU'){ // <-- Valores default entre comillas ''
    console.log(name,age,country);
}

newAdmin(); //Imprime valores default
newAdmin('Mia', 6, 'Mx');