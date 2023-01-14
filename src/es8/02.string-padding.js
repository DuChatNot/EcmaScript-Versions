const s = 'XYZ';

console.log(s.padStart(5,'ABC'));
//.padStart edita el string, agrega el parametro que se le de, para esto recibe una posición inicial en donde comienza la inserción del string nuevo
// .padStart (posiciónInicial , stringParaAgregar) si tenemos un string de 3 letras y queremos agregar otro de 2 letras, se endrá que iniciar en la posición 5 para que ambos sting queden completos y concatenados.

console.log(s.padEnd(7,'ABC')); //.padEnd trabaja de la misma manera
