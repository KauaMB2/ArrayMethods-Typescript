// O método find retorna o primeiro elemento encontrado no array que passa no teste implementado pela função callback fornecida.

interface User{
    name: string;
    age: number;
}
const array4: User[] = [{name: "Kauã", age: 20}, {name: "João", age: 30}];

const approvedUser: User = array4.find((value: User, index: number, array: User[])=>{
    return value.age >= 18;
});

console.log(approvedUser.name);// Kauã