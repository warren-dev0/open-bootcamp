//! Sets o conjuntos (en castellano)

const array = [1, 2, 3, 4, 5, 5, 6, 7, 6, "hola"];

// Set - conjunto de valores unicos no ordenados
const mySet = new Set(array);

console.log(array);
console.log(mySet);


// .add() para añadir valores

mySet.add(9);

console.log(mySet);

// .delete() para eliminar valores

mySet.delete(6);

console.log(mySet);

// .clear - elimina todo

//.clear();

//console.log(mySet);

// .has() - saber si el Set contiene un valor

console.log(mySet.has(6));

// .size - propiedad no método

console.log(mySet.size);

mySet.forEach(value => {
    console.log(value);
});


const iterator = mySet.values();
console.log(iterator);

const arrayMySet = [...mySet];

console.log(arrayMySet);