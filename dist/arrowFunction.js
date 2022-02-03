"use strict";
const greet = (person, place) => {
    console.log('Hello ' + person + '. Welcome to ' + place);
};
const double = (x) => {
    return x * 2;
};
greet('Junayed', 'Prince Town');
const doubledNumber = double(15);
console.log('Double: ', doubledNumber);
