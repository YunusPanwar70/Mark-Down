let x = [];
let y = x;
let z = [];

console.log(x == y); //true
console.log(x == z); //true
console.log(y == z); //true

console.log(x === y); 
console.log(x === z);
console.log(y === z);