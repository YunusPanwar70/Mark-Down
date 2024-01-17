// function callAlp() {
//     console.log("hello");
// };

// callAlp();
// callAlp();
// callAlp();
// callAlp();
// callAlp();
// callAlp();

// function duble() {
//     console.log("today is thrusday");
// }

// duble();
// duble();
// duble();
// duble();
// duble();
// duble();

// function value() {
//     console.log("today 21 september");
// }

// value();
// value();
// value();
// value();
// value();


// function today() {
//     console.log("tommarow 22 sep");
// }

// today();
// today();
// today();
// today();


let a = "hello";


function passValue(message) {
    console.log(message);
}

passValue(a);
passValue('oye');
passValue(4);



function addition(num, num1, num2) {
    const sum = num + num1;
    console.log(sum - num2);
}

addition(10, 20, 50);

function addition1(num3, num4, num5) {
    const sum1 = num3 + num4;
    console.log(sum1 - num5);
}

addition1(20, 30, 40);

function alpPlus(alp1, alp2) {
    // templatestring
    const concate = `${alp1} ${alp2}`;
    console.log(concate)
    const plus = alp1 + " " + alp2;
    console.log(plus);
}

alpPlus("hello", "world")