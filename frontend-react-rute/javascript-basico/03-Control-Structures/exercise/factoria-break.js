let n = 5;
let result = 1;

while (true) {
    if (n === 0) {
        break;
    }
    result *= n;
    n --;
}

console.log(result);