// O método sort() ordena os elementos de um array em ordem crescente ou decrescente
const array17: number[] = [84, 90, 45, 23, 67, 78, 12, 34, 56, 89];
const array18: number[] = [...array17].sort((a, b) => a - b);
console.log(array18); // [12, 23, 34, 45, 56, 67, 78, 84, 89, 90]