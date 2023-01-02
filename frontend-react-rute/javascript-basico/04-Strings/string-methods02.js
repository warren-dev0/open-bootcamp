// ! Metodo de cadenas de texto parte 2

let input = "CrisTiano";
let db = "cristiano";

// toUpperCase() y toLowerCase()

console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar cadenas

let str_1 = "Hola soy la primera cadena.";
let str_2 = "Hola soy la segunda cadena.";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final

let str3 = "    Hola soy un string con espacios al final.     ";
console.log(str3);

// trim()
console.log(str3.trim());

// Solo los del inicio
console.log(str3.trimStart());

// Solo los del final
console.log(str3.trimEnd());


// Obtener el caracter que hay en cierta posicion

let str_4 = "Hola soy el string numero 4"; // ["H", "o", "l", "a" ...]

console.log(str_4.charAt(5));

console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Warren y me gustan las peliculas de Marvel y DC y soy Warren";
console.log(str_5.indexOf("Warren"));
console.log(str_5.lastIndexOf("Warren"));