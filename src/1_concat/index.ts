// O método concat concatena dois arrays
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];

const concat1: number[] = array1.concat(array2);
console.log(concat1);

const concat2: number[] = [...array1, ...array2]; // Spread operator - JavaScript ES6 (ECMAScript 2015)
console.log(concat2);