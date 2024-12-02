/* O método filter recebe como argumento uma função de Callback que é executada para cada elemento do array.
retornando um novo array com os elementos que atenderam a condição definida(return true) e ignora os que não atenderam(return false).*/

const array3: number[] = [1, 2, 3, 4, 5, 8, 18, 23, 37, 45];

const newArray = array3.filter((value: number, index: number, array: number[]) => {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("==========");
    return value > 6;
});
console.log(newArray);// [8, 18, 23, 37, 45]