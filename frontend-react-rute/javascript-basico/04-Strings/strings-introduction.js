// ! Los Strings

// Comillas simples y dobles

let str_dbl = "Hola soy un texto con comillas dobles";
console.log(str_dbl);

let str_sng = 'Hola soy un string con comillas simples';
console.log(str_sng);


// Comillas dentro de comillas

let str_dobles = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
console.log(str_dobles);

let str_dobles2 = "El otro dia me dijo literalmente 've a sacar la basura'";
console.log(str_dobles2);

let str_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
console.log(str_simples);

let str_simples2 = 'El otro dia me dijo literalmente \'ve a sacar la basura\'';
console.log(str_simples2);


// Comillas invertidas (backticks)

let str_backtick = `Hola esto es un string con backticks`;

let nombre = "Warren";
let saludo = `Hola ${nombre}, bienvenido`;
console.log(saludo);

// Plantillas HTML

let plantilla =
    `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`
console.log(plantilla);

