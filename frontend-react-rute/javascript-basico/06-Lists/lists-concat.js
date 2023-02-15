// ! Como unir dos listas
// .concat()

let list1 = ['hola', 2, false, null];
let list2 = ['adios', 8, true, undefined];

console.log(list1.concat(list2));

let list3 = list1.concat(list2);

console.log(list3);


// Como unir dos listas con el factor de propagacion (Salio en ES6)


console.log(...list3);

let list4 = [...list1, ...list2];
console.log(list4);

// * ERROR!! Mal entendido del factor del concepto de propagacion

let list5 = [list1, list2];
console.log(list5);

