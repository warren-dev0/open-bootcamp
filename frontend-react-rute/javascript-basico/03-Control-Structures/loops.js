// ! Bucles o en ingles Loop

// for

for (let i = 0; i < 10; i++) {
    // este es el bucle
    console.log("soy el numero " + i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12];

for (let z = 0; z < lista.length; z++) {
    console.log(lista[z]);
}


// Estructura for ... of

for (let valor of lista) {
    console.log(valor);
}


// Estructura foreach

lista.forEach(valor => {
    console.log(valor);
})



// Estructura for ... in

let persona = {
    nombre: "Warren",
    apellido: "Acosta",
    edad: 20,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}