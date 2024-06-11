// for (let i = 2; i <=20; i++) {
//     console.log(i);
// }

// 1 se lekar 100 tak ki tables ko banao
// for (let i = 1; i <= 100; i++) {
//     console.log("Table for", i + ":");
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " x " + j + " = " + (i * j));
//     }
//     console.log(" "); 
// }

for (let i = 1; i <= 100; i++) {
    document.write('<br>')
    for (let j = 1; j <= 10; j++) {
        document.write(i * j + '<br>')
    }
}