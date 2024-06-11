// const arr = [1, 2, 3, 4, 5];
// position = 3 return 4

// const arr = [1, 2, 3, 4, 5];
// position = 3 return [1, 2, 3, 5]

// const arr = [1, 2, 3, 4, 5, 10, 5, 11];
// element = 5 return 4

// const arr = [1, 2, 3, 4, 5, 10, 5, 11];
// element = 5 return [1, 2, 3, 10, 11]


// console value from 5 to 20

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * num);
    }
}

printTable(3);
printTable(4);
printTable(5);

for (let i = 2; i <= 5; i++) {
    printTable(i);
}