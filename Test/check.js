const numString = "42";
const a = Number(numString)
console.log(a);


function min() {
    let min = Number.MAX_SAFE_INTEGER;
    const arr = [323, 123, 243, 46365, 32];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
