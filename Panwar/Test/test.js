// // array method
// function addition(arr) {
//   // return arr.map(x=>x+2)
//   // return arr.reduce((acc,crr)=>acc*crr)
//   // return arr.map(String)
//   // return arr.map(Number)
// }

// console.log(addition(["1", "2", 3, 4]));
// // arrow function ( =>);

// // const arr = [1232];
// // const arr2 = [2,'2'];
// // const reuslt = arr.concat(arr2)
// // console.log(reuslt);

// const a = (value) => value < 45;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(a));
// console.log(String(0) == Number.parseFloat(-0)); //true
// console.log(2 || 3 || 4);

const num = 10;
const strnum = String(num);
const boolnum = !num;
const strbool = Boolean(strnum);
const numval = strnum - boolnum;
console.log(numval);