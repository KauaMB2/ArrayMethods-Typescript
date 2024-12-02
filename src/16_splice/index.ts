// O método splice() é usado para remover elementos enquanto adiciona novos elementos em seu lugar.
// array.splice(start, deleteCount, item1, item2, item3, ...)
const array19: number[] = [1, 2, 3, 4, 5];
const removed: number[] = array19.splice(2, 1, 10, 20, 30);
console.log(array19); // [1, 2, 10, 20, 30, 4, 5]
console.log(removed); // [3]