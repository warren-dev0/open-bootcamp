var variable;
let variableLet_;

const constantes = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constantes);
// constantes = "Adios";

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "Hola soy una variable";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}

console.log(variable);



let variableLet = "Hola soy una variable let";

for (var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable let";
}

console.log(variableLet);


console.log(typeof variableLet);
