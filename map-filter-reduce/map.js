// Atividade Map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maca = {
    value: 2
}

const laranja = {
    value: 3
}

//Função com argumento this.

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}


console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

//Função sem argumento this.
function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

console.log(mapSemThis(nums)); // [2,  4,  6,  8, 10, 12, 14, 16, 18, 20]