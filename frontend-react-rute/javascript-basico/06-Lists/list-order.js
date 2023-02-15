// .sort() -> Modifica el array

const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a, b) => {
 if(a < b) {
    return -1;
 }else if(a > b) {
    return +1;
 }else {
    return 0;
 }
}); // Es obligatorio que retorne un valor numerico

console.log(array);

// Ordernar unicamente arrays numericos

const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumerico.sort((a, b) => a - b);

console.log(arrayNumerico);


//////////////////

// ! Interesante en arrays de objetos

const listaObjetos = [
    {nombre: 'Warren', edad: 20},
    {nombre: 'Pedro', edad: 30},
    {nombre: 'Juan', edad: 25},
    {nombre: 'Ramon', edad: 18},
    {nombre: 'Miguel', edad: 12},
    {nombre: 'Alfonso', edad: 60}
];

listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);
