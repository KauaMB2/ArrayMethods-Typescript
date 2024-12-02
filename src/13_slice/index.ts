// O método slice() é usado para criar uma cópia de uma parte de um array.
const array15: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const primeiroElementoRemovido = array15.slice(0 , 5);
console.log(primeiroElementoRemovido); // [10, 20, 30, 40, 50]
console.log(array15); // [10, 20, 30, 40, 50, 40, 50, 60, 70, 80]