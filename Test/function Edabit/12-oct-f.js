// function strevere(str) {
//     let sum = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         sum += str[i];
//     };
//     return sum
// };

// console.log(strevere("fayyazurrehyman"));

// function invertArray(arr) {
//     let sum = [];

//     for (let i = 0; i < arr.length; i++) {
//         sum.push(-arr[i]);

//     }
//     return sum
// };


// console.log(invertArray([1, 2, 3, 4, 5]));
// console.log(invertArray([1, -2, 3, -4, 5]));
// console.log(invertArray([]));


// ➞ [-1, -2, -3, -4, -5]
// ➞ [-1, 2, -3, 4, -5]
// ➞ []

// function sumFive(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum += arr[i]
//         }
//     }
//     return sum
// };

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));


// ➞ 77
// ➞ 0
// ➞ 252


// function findEvenOdd() {
//     const result = [];
//     for (let i = 0; i < 10; i += 2) {
//       result.push(i);
//     }
//     return result;
//   }
//   console.log(findEvenOdd());

// function Persentage(arr) {
//     let value = 2;
//     let store = 0;
//     for (let i = 0; i < arr.length; i++) {
//         store += arr[i]
//     }
//     return store / value * 100
// }
// console.log(Persentage([10, 20, 30, 40]));

// function Persentage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum * 100
// }

// console.log(Persentage([10, 20, 30, 40]));