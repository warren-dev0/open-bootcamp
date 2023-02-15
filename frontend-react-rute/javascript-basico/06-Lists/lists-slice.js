// ! Obtener una lista a partir de otra
// .slice();

let array = ['hola', 1, 2, 3, true, null, 'adios'];

// El metodo slice no modifica el valor del array original

console.log(array.slice(3, 5));

let array2 = array.slice(2, 5);

console.log(array2);

let array3 = array.slice(2, -2);

console.log(array3);