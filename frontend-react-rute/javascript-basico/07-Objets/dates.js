// Trabajando con fechas

let fecha = new Date();

console.log(fecha);

// Los meses inician en 0 (Enero es 0, Diciembre es 11)

let fech2 = new Date(1987, 10, 10)

console.log(fech2);

let fech3 = new Date(0);
console.log(fech3);

let fecha4 = new Date('October 13 1979');

console.log(fecha4);

console.log(fecha > fech2);

console.log(fecha4.getDate());

console.log(fecha4.getMonth() + 1);

console.log(fecha4.getFullYear());

// .toLocaleDateString

console.log(fecha4.toLocaleDateString('en-US'));
