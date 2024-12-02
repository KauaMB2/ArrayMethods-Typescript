// O método includes verifica se algum valor está presente em no array a partir de uma posição inicial dada.
// array.includes(value, start)
const array7: number[] = [10, 80, 230, 90, 20, 49];
console.log(array7.includes(230, 0));// true
console.log(array7.includes(99999999, 0));// false