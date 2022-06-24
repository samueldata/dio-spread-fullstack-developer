// Example 1 - Estrutura
const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set(myArray);

// console.log(mySet);

// Example 2 - Adicionar, consultar e deletar
const mySet2 = new Set();

mySet2.add(1);
mySet2.add(5);

// console.log(mySet2.has(1));
// true

// console.log(mySet2.has(3));
// false

// console.log(mySet2);

mySet2.delete(1);
// console.log(mySet2);