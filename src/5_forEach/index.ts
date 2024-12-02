// O método forEach é um método que simplesmente percorre cada elemento do array, mas retorna sempre undefined
// Ideal para situações onde se é necessário semente percorrer o array e não há a necesidade de retornar um novo array

interface Product{
    name: string;
    price: number;
}
const array6: Product[] = [{name: "pineapple", price: 30}, {name: "orange", price: 25}];

array6.findIndex((value: Product, index: number, array: Product[])=>{
    console.log(value.name);
});