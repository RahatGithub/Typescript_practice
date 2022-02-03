"use strict";
// A function for adding two numbers, obviously it will return a number
function findTotal(num1, num2) {
    return num1 + num2;
}
// A function for adding two strings, obviously it will return a string
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const total = findTotal(8, 7);
const userName = fullName('Fidel', 'Castro');
console.log(total);
console.log(userName);
