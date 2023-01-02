// ! Metodos mas utilizados con cadenas de caracteres

// Como obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de cadenas de caracteres

// slice()
let slice_str = str.slice(0, 5)
console.log(slice_str);

// substring()
let substring_str = str.substring(0, 5);
console.log(substring_str);

// substr()
let substr_str = str.substr(2, 10);
console.log(substr_str);


// Reemplazar parte del contenido de una cadena

let cadena = "Hola mi nombre es Warren";
console.log(cadena);

// Al utilizar el string, solo se reemplaza la primera coincidencia
console.log(cadena.replace("Warren", "Antonio"));

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles";

// Al utilizar el string, solo se reemplaza la primera coincidencia
console.log(texto_largo.replace("los", "cinco"));

// Al utilizar /g (global), se reemplazan todas las coincidencias
console.log(texto_largo.replace(/los/g, "cinco"));
