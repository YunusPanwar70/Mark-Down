function numArgs(arr) {
    //    return arr.length
    // return arguments.length
    return Object.keys(arr)
}

console.log(numArgs());
console.log(numArgs("foo"));
console.log(numArgs("foo", "bar"));
console.log(numArgs(true, false));
console.log(numArgs({}));



// ➞ 0
// ➞ 1
// ➞ 2
// ➞ 2
// ➞ 1