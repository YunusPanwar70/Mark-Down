// Pure Function



// Curring Function 

// function curryAdd(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z
//         };
//     };
// };

// const curriedAdd = curryAdd(5);
// const result = curriedAdd(3)(2);

// console.log(result);

// function curryConcatenateStrings(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return `${a} ${b} ${c} ${d}`

//             }
//         }

//     }
// }

// const curriedConcatenate = curryConcatenateStrings('Hello');
// const result = curriedConcatenate('world')('and')('beyond');

// console.log(result);