// O método map() itera sobre todos os elementos de um array e cria um novo array de acordo com uma operação feita com os valores originais do array inicial.

const array9: number[] = [10, 80, 230, 90, 20, 49, 230];
const newArrayMap: number[] = array9.map((value: number, index: number, array: number[]) => {
    return value + 10;
});

console.log(newArrayMap);// [20, 90, 240, 100, 30, 59, 240]