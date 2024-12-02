// O método findIndex retorna o index do elemento que satisfaz a função de teste
// Se nenhum elemento satisfaz a condição, é retornado -1

interface Product{
    name: string;
    price: number;
}
const array5: Product[] = [{name: "apple", price: 20}, {name: "banana", price: 15}];

const indexFound: number = array5.findIndex((value: Product, index: number, array: Product[])=>{
    return value.price < 20;
});

console.log(indexFound);// 1