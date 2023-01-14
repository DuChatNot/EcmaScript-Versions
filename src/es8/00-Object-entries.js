const o = {
    mx: 'México',
    co: 'Colombia',
    cl: 'Chile',
    pe: 'Perú'
};

console.log(Object.entries(o));
//Object.entries transfroma el objeto en un arreglo con la estructura inicial, es decir:
//Para un objeto: {marca: 'Corsair', mm: 120} se transforma a ['marca', 'Corsair', 'mm', 120] en donde 'marca','Corsair' es un elemento y 'mm',120 es otro.

const a = Object.entries(o)
console.log(a[1]); 
