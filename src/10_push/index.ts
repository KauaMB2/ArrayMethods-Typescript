// O método push() adiciona um ou mais elementos no final do array

const array11: number[] = [10, 80, 230, 90, 20, 49, 230];
const array12: number[] = [...array11, 30, 40, 50];

array11.push(30, 40, 50);
console.log(array11); // [ 10, 80, 230, 90, 20, 49, 230, 30, 40, 50]

// Javascript ES16
console.log(array12); // [ 10, 80, 230, 90, 20, 49, 230, 30, 40, 50]