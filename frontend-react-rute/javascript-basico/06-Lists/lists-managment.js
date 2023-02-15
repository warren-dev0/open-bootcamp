//! Como trabajar con listas (arrays, arreglos, vectores)

let var1 = 45;

let array = [1, 'hola', false, { id: 5 }, null, undefined, var1];

console.log(array);

// Acceder a los valores de un array a traves de su posicion (inicia en 0)

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// Metodos para introducir nuevo valores
// .push() .unshift() = Mutan el valor de nuestro array

// ? Valores al final -> .push()

array.push('final', 100, false);

console.log(array);


// ? Valores al principio -> .unshift()

array.unshift('hola', 'inicio');

console.log(array);


// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() = Mutan el valor de nuestro array

// ? Valores al final -> .pop()

array.pop();

console.log(array);

// ? Valores al principio -> .shift()

array.shift();

console.log(array);


// * Metodo para eliminar modificar, eliminar, añadir valores a nuestro array

let array2 = [1, 2, 3, 4, 5, 6];

// Eliminar valores

array2.splice(2, 2);

console.log(array2);

// Añade valores

array2.splice(2, 0, 3, 'hola', 2, false);

console.log(array2);

// Modificar valores

array2.splice(3, 1, 'tres');

console.log(array2);