// O método reduce passa por cada elmento do array e aplica alguma operação que relacionará todos os elementos, armazenando o resultado em "accumulator"

const array13: number[] = [10, 6, 4];

const totalValue: number = array13.reduce((accumulator: number, value: number, index: number, array: number[])=>{
    return accumulator + value;
});

console.log(totalValue);