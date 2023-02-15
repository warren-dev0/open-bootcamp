// ! Metodos mas avanzados
// .map() .filter() .reduce()

const array = ['San Sebastian', 'Madrid', 'Barcelona', 'Alicante', 'Bilbao'];

array.forEach ( valor => {
    console.log(valor);
});


// Esta funcion de callback permite que se le pasen 1 o 2 parametros
const newArray = array.map(value => {
    return value;
});

console.log(newArray);

const newArray2 = array.map((value, id) => `${id + 1} - ${value}`);

console.log(newArray2);


// Lista de objetos

const listaObjetos = [
    {nombre: 'Warren', edad: 20},
    {nombre: 'Pedro', edad: 30},
    {nombre: 'Juan', edad: 25},
    {nombre: 'Ramon', edad: 18},
    {nombre: 'Miguel', edad: 12},
    {nombre: 'Alfonso', edad: 60}
];

const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad >= 30) {
        return true;
    }else {
        return false;
    }
});

console.log(personasMayores);

const personas2Mayores = listaObjetos.filter(obj => obj.edad > 30);

console.log(personas2Mayores);


const nuevaLista = listaObjetos.filter(obj => obj.nombre !== 'Warren');

console.log(nuevaLista);


// .reduce()

const valores = [2, 34, 54, 53];

const suma = valores.reduce((acumulado, actual, indice, array) => {
    console.log(acumulado);
    console.log(actual);
    console.log(indice);
    console.log(array);

    return acumulado + actual;
});

console.log(suma); // 143
