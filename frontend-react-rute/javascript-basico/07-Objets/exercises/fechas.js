let today = new Date();

console.log(today);

let burn = new Date(2002, 6, 30);

console.log(burn);

let late = (today.getTime() > burn.getTime());

console.log(late);

let dayBurn = burn.getDate();
console.log(dayBurn);

let monthBurn = burn.getMonth() + 1;
console.log(monthBurn);

let yearBurn = burn.getFullYear();
console.log(yearBurn);



