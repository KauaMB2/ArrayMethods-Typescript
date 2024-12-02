// O método indexOf() retorna o primeiro índice em que um valor pode ser encontrado no array a partir de uma posição inicial
// Retorna -1 se não encontrou nenhum elemento.
// array.indexOf(value, start);
const array8: number[] = [10, 80, 230, 90, 20, 49, 230];

console.log(array8.indexOf(230, 0));// 2
console.log(array8.indexOf(230, 3));// 6
console.log(array8.indexOf(99999, 0));// -1