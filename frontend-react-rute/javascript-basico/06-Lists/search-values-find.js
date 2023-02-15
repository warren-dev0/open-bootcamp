// Iterar los valores de una lista
const array = ['hola', 2, 5, 90, false, undefined];


// forma antigua (poco eficiente)
for (let i = 0; i < array.length; i ++) {
    console.log(array[i]);
}


// Forma ES6 (mas eficiente) .forEach()

let suma = 0;
const arrayNum = [3, 4, 3, 34, 32, 3, 4];

arrayNum.forEach(valor => {
    suma += valor;
    console.log(valor);
})

console.log(suma);


// Busqueda de un valor dentro de una lista .find()
// ? Quiero encontrar el elemento 90

let variable = array.find(valor => {
    if(valor === 90) {
        return true;
    }
})

console.log(variable);

const listaObjetos = [
    {nombre: 'Warren', edad: 20},
    {nombre: 'Pedro', edad: 30},
    {nombre: 'Juan', edad: 25},
    {nombre: 'Ramon', edad: 18},
    {nombre: 'Miguel', edad: 12},
    {nombre: 'Alfonso', edad: 60}
];

// ! forma uno

const objeto1 = listaObjetos.find(o => {
    if (o.nombre === 'Miguel') {
        return true;
    }
});

console.log(objeto1);

// ! forma dos

const objeto2 = listaObjetos.find(o => {
    return o.nombre === 'Juan';
});

console.log(objeto2);

// ! forma tres

const objeto3 = listaObjetos.find(o => o.nombre === 'Miguel');

console.log(objeto3);

// ! forma cuatro

const {nombre} = listaObjetos.find(o => o.nombre === 'Pedro');

console.log(nombre);