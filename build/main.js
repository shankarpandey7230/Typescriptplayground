"use strict";
// let awesomeName: string = 'shakeAndBake';
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();
// // awesome = 2;
// console.log(awesomeName);
// let amount: number = 12;
// amount = 12 - 1;
// // amount = 'pants';
// let isAwesome: boolean = true;
// isAwesome = false;
// // isAwesome = 'shakeAndBake';
// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// 1. String
let greeting = 'Hello TypeScript !';
greeting = greeting.toUpperCase();
// 2. Number
let age = 25;
age = age + 5;
// 3. Boolean
let isAdult = age >= 18;
isAdult = !isAdult;
let tax = 10;
tax = 10;
tax = '$10';
// fancy name - literal value type
let requestStatus = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random';
let notSure = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
// ## Practical Application Type Annotation
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
let foundBook;
for (let book of books) {
    if (book === '1984') {
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}
console.log(foundBook === null || foundBook === void 0 ? void 0 : foundBook.length);
// arrays
let prices = [100, 75, 42];
// be careful [] means literally empty array
// let randomvalues: [] = [1];
let emptyvalues = [];
// be careful with inferred array types
// let names = ['peter', 'susan'];
let names = ['peter', 'susan', 1];
let array = ['apple', true, 'orange'];
// Challenges
let temperatures = [20, 25, 30];
// temperatures.push('hot');
let colors = ['red', 'green', 'blue'];
// colors.push(true);
let mixedArray = [1, 'two', 3];
