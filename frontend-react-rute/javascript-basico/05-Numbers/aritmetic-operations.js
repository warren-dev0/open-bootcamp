// ! Principales operaciones arigmeticas

let a = 3.5;
let b = 4.8;

// Suma
console.log(a + b);

// Resta
console.log(a - b);

// Multiplicacion
console.log(a * b);

// Division
console.log(a / b);


// ! Presentacion de numeros en cadenas de textos

let a_s = a.toString();


// ! Redondear numero decimales

let c = 3.3;
let d = c * 3;

console.log(d);

// .toFixed() - Limita los numeros decimales a la cantidad que le pasemos

console.log(d.toFixed(2));

// .toPrecision() - Limita el numero de cifras significativas
console.log(d.toPrecision(3));