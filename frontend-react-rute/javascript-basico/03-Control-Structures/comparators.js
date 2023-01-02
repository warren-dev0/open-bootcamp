// ! Comparaciones


// ! Igualdad
if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == solo compara el valor de la variable

if (a == b) {
    console.log("a es igual a b - Debil");
}

// === compara el valor y el tipo de la variable

if (a === b) {
    console.log("a es igual a b - Fuerte");
}

// ! Desigualdad

let c = 4;
let d = "4";

if (c != d) {
    console.log("a es diferente a b - Debil");
}

if (c !== d) {
    console.log("a es diferente a b - Fuerte");
}


// ! Mayores y Menores

let max = 10;
let min = "5";

if (max > min) {
    console.log("max es mayor que min");
}
if (max >= min) {
    console.log("max es mayor o igual que min");
}

if (max < min) {
    console.log("max es menor que min");
}
if (max <= min) {
    console.log("max es menor o igual que min");
}