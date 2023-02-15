// .some()

const array = [3, 2, 4, 2, 5, 5, 2, -5, 3, 2];

const rest = array.some(valor => valor < 0);

console.log(rest);

const exist = array.some(valor => valor === 2);

console.log(exist);

const listaObjetos = [
    {nombre: 'Warren', edad: 20},
    {nombre: 'Pedro', edad: 30},
    {nombre: 'Juan', edad: 25},
    {nombre: 'Ramon', edad: 18},
    {nombre: 'Miguel', edad: 12},
    {nombre: 'Alfonso', edad: 60}
];

const existMiguel = listaObjetos.some(persona => persona.nombre === 'Alfonso');

console.log(existMiguel);

// Obtener una lista a partir de un objeto iterable
// Con el metodo .from que se encuentra en Array

const str = 'Hola soy Warren';
console.log(str[5]);
const ar_str = Array.from(str);

console.log(ar_str);



const set = new Set([2, 3, 'hola', 4]);
const ar_set = Array.from(set);

console.log(ar_set);


// Metodo .keys

const keys = array.keys();
const ar_keys = Array.from(keys);

console.log(ar_keys);