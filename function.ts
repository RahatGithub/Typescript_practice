// A function for adding two numbers, obviously it will return a number
function findTotal(num1: number, num2: number): number{
    return num1 + num2;
}

// A function for adding two strings, obviously it will return a string
function fullName(firstName: string, lastName: string): string{
    return firstName + ' ' + lastName;
}

const total: number = findTotal(8, 7);
const userName: string = fullName('Fidel', 'Castro'); 

console.log(total);
console.log(userName);