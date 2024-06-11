let userInput = prompt('Enter your name, age, and skill (separated by spaces)');

// Split the input into an array
let inputArray = userInput.split(' ');

// Check if the length of the entire input is within the desired limit
console.error(inputArray.join('').length <= 9);