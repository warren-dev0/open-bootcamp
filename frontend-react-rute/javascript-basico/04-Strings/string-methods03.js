// ! Metodos de cadenas de texto parte 3

// ? https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles";

console.log(texto_largo.match(/los/g));

// Existe la palabra dentro del texto?
console.log(texto_largo.includes("mono"));

// Saber si un texto empieza con un caracter
console.log(texto_largo.startsWith("T"));

// Saber si un texto termina con un caracter
console.log(texto_largo.endsWith("s"));

