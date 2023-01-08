// ! Operador .valueOf() - Obtener valores numericos a partir de literales

let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// ! NaN (Not a Number) - Infinity

let n = Number("Adios");
console.log(n);
console.log(isNaN(n));

let num = 19;
let div = 0;

console.log(num / div);

// ! Convertir los string a valores numericos con Number, parseInt y parseFloat

let numero = '5.89';
let num2 = 17.2;

console.log(numero + num2); // Error de concept

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 3;
console.log(parseFloat(num3));

// ! Numero hexadecimales (base 16)

let numHex = '0x3a5b7';

console.log(parseInt(numHex, 16));

// ! Obtener los valores maximo y minimo en JavaScript

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
console.log(2 ** 1023);