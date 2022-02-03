const greet = (person: string, place:string): void => {
    console.log('Hello ' + person + '. Welcome to ' + place);
}

const double = (x: number): number => {
    return x * 2;
}

greet('Junayed', 'Prince Town');

const doubledNumber: number = double(15);
console.log('Double: ', doubledNumber);