// // // function table(num) {
// // //     for (let i = 0; i <= 10; i++) {
// // //         console.log(i * num);

// // //     }
// // // }

// // // table(2);
// // // table(3);

// // // function even(num1) {
// // //     for (let i = 0; i <= 10 i++) {
// // //         if (i % 2 == 0) {

// // //         }

// // //     }
// // // }
// // // even();

// // function findIndex(arr, arr1) {
// //     // console.log(arr.findIndex(elme => elme === arr1));
// //     console.log(arr.indexOf(arr1))
// // };

// // // findIndex(["hi", "edabit", "fgh", "abc"], "fgh")

// // // findIndex(["Red", "blue", "Blue", "Green"], "blue")

// // // findIndex(["a", "g", "y", "d"], "d")

// // // findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")

// // function minMax(arr) {
// //     const minVal = Math.min(...arr);
// //     const maxVal = Math.max(...arr);
// //     console.log([minVal, maxVal]);
// // }

// // minMax([1, 2, 3, 4, 5])
// // minMax([2334454, 5])
// // minMax([1])

// function seriesResistance(arr) {
//     const sum = arr.reduce((acc, crr) => acc + crr)
//     if (sum >= 15) {
//         return sum + "ohms";
//     } else {
//         return sum + "ohm"
//     }
// }

// console.log(seriesResistance([1, 5, 6, 3]));
// console.log(seriesResistance([16, 3.5, 6]));
// console.log(seriesResistance([0.5, 0.5]));

// // ➞ "15 ohms"
// // ➞ "25.5 ohms"
// //  ➞ "1.0 ohm"

// function tuckIn(arr1, arr2) {
//     arr1.splice(1, 0, ...arr2);
//     return arr1;
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15, 150], [45, 75, 35]));
// console.log(tuckIn([
//     [1, 2],
//     [5, 6]
// ], [
//     [3, 4]
// ]));

// function filterArray(arr) {
//     return arr.filter(num => typeof num === 'number')
// }

// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// ➞ [1, 2]
// ➞ [1, 0, 15]
// ➞ [1, 2, 123]
// function getFilename(arr) {
//     const regExp = /[a-z\d_]+\.\w+$/gi;
//     return arr.match(regExp)
// }

// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// console.log(getFilename("ffprobe.exe"));

// // ➞ "edabit.txt"
// // ➞ "Beethoven_5.mp3"
// // ➞ "ffprobe.exe"

// function invertArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = -arr[i];
//   }

//   return arr;
// }

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
// }
// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
// console.log(sumFive([1, 2, 3, 4]));
// console.log(sumFive([10, 12, 28, 47, 55, 100]));

// ➞ 77
// ➞ 0
// // ➞ 252
// function evenOrOdd(arr) {
//     const sum = 0;
//     if (arr.length === 0) {
//         return "even";
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             return "even";
//         } else {
//             return "odd";
//         }

//     }
// }


// console.log(evenOrOdd([0]));
// console.log(evenOrOdd([1]));
// console.log(evenOrOdd([]));
// console.log(evenOrOdd([0, 1, 5]));


// ➞ "even"
// ➞ "odd"
// ➞ "even"
// ➞ "even"

function skipTooMuchSugarDrinks(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'fanta' || arr[i] !== 'cola') {
            newArr.push(arr[i])
        }

    }
    return newArr
}


console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));


// ➞ ["water"]
// ➞ []
// ➞ ["lemonade", "beer", "water"]


// function addIndexes(arr) {

//     let sum = [];
//     for (let i = 0; i < arr.length; i++) {
//         sum.push((arr[i] + i))
//     }
//     return sum;

// };

// console.log(addIndexes([0, 0, 0, 0, 0]));
// console.log(addIndexes([1, 2, 3, 4, 5]));
// console.log(addIndexes([5, 4, 3, 2, 1]));