// // // // function newWord(str) {
// // // //     let sum = "";
// // // //     for (let i = 1; i < str.length; i++) {
// // // //         sum += str[i]
// // // //     }
// // // //     return sum;
// // // // }

// // // // console.log(newWord("apple"));
// // // // console.log(newWord("cherry"));
// // // // console.log(newWord("plum"));


// // // // // ➞ "pple"
// // // // // ➞ "herry"
// // // // // ➞ "lum"

// // // function hasSpaces(str) {
// // //     for (let i = 0; i < str.length; i++) {
// // //         if (str[i] === " ") {
// // //             return true
// // //         }
// // //     }
// // //     return false
// // // }

// // // console.log(hasSpaces("hello"));
// // // console.log(hasSpaces("hello, world"));
// // // console.log(hasSpaces(" "));
// // // console.log(hasSpaces(""));
// // // console.log(hasSpaces(",./!@#"));

// // // // ➞ false
// // // // ➞ true
// // // // ➞ true
// // // // ➞ false
// // // // ➞ false

// // function isLastCharacterN(str) {
// //     for (let i = 0; i < str.length; i++) {
// //         let sum = str[i];
// //         if (sum[sum.length - 1] === "n") {
// //             return true
// //         }
// //     }
// //     return false
// // }

// // console.log(isLastCharacterN("Aiden"));
// // console.log(isLastCharacterN("Piet"));
// // console.log(isLastCharacterN("Bert"));
// // console.log(isLastCharacterN("Dean"));


// // // ➞ true
// // // ➞ false
// // // ➞ false
// // // ➞ true

// // function frontThree(str) {
// //     let result = "";
// //     for (let i = 0; i < 3; i++) {
// //         // console.log(str[i]);
// //         for (let j = 0; j < 3; j++) {
// //             result += str[j];
// //             console.log(result);
// //         }
// //     }
// //     return result;
// // }


// // console.log(frontThree("Python"));
// // console.log(frontThree("Cucumber"));
// // console.log(frontThree("bioshock"));


// // ➞ "PytPytPyt"
// // ➞ "CucCucCuc"
// // ➞ "biobiobio"

// function arrsortornot(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {}
//         if (arr[i] === arr[j]) {
//             return true
//         }
//     }
//     return false
// }

// console.log(arrsortornot([1, 10, 3, 4, 5, 7, 8]));


// function isSort(arr) {
//     let flag = true;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return (flag = false);
//       }
//     }
//     return flag;
//   }







// function arrayToString(arr) {
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result;
// };

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// ➞ "123456"
// ➞ "abcdef"
// ➞ "123asdAAAA"

// function concat(arr1, arr2) {
//     // let a = [];
//     for (let index = 0; index < arr2.length; index++) {
//         arr1.push(arr2[index]);
//     }
//     return arr1
// };

// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


// ➞ [1, 3, 5, 2, 6, 8]
// ➞ [7, 8, 10, 9, 1, 1, 2]
// ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function findIndex(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2) {
            return i
        }
    }
    return -1
};

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));