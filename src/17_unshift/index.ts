//  O método unshift() adiciona um ou mais elementos no início do array e retorna o tamanho do array.

const array21: number[] = [3, 4, 5];
const arraySize: number = array21.unshift(1, 2);
console.log(arraySize); // 5
console.log(array21); // [1, 2, 3, 4, 5]