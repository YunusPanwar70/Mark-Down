// function reverse(arr) {
//     // return arr.reverse();

//     let a = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         a.push(arr[i])
//     }
//     return a
// };

// console.log(reverse([1, 2, 3, 4]));
// console.log(reverse([9, 9, 2, 3, 4]));
// console.log(reverse([]));




// //  ➞[4, 3, 2, 1]
// //  ➞[4, 3, 2, 9, 9]
// //  ➞[]



// function incrementItems(arr) {
//     // return arr.map(num => num + 1)
//     let a = [];

//     for (let i = 0; i < arr.length; i++) {
//         a.push(arr[i] + 1)

//     }
//     return a
// }

// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8]));
// console.log(incrementItems([-1, -2, -3, -4]));


// ➞ [1, 2, 3, 4]
// ➞ [3, 5, 7, 9]
// ➞ [0, -1, -2, -3]

// function getLastItem(arr) {
//     // return arr.pop();
//     // return arr.at(-1)
//     // return arr[2];

//     for (let i = arr.length - 1; i < arr.length; i++) {
//         return arr[i];
//     };
// };

// console.log(getLastItem([1, 2, 3, 4]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// ➞ 3
// ➞ "duck"
// ➞ true

// function arrayToString(arr) {
//     // return  arr.join("")

//     let a = '';

//     for (let i = 0; i < arr.length; i++) {
//         a += arr[i] 
//     }
//     return a
// };

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));


// ➞ "123456"
// ➞ "abcdef"
// ➞ "123asdAAAA"

function concat(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
};

console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// ➞ [1, 3, 5, 2, 6, 8]
// ➞ [7, 8, 10, 9, 1, 1, 2]
// ➞ [4, 5, 1, 3, 3, 3, 3, 3]