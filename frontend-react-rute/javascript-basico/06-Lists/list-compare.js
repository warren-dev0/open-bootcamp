// Como podemos comparar listas
// .every()

const array = ['hola', 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

const result = array.every(valor => {
    if (typeof valor === 'number') {
        return true;
    }
    else {
        return false;
    }
})

console.log(result);

// Comparacion de listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); // false

const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false;
    const result = array_1.every((valor, id) => valor === array_2[id])
    return result;
}

console.log(compararArrays(ar1, ar2));

