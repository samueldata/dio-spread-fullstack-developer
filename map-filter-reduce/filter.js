// Atividade Filter
const numbers = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

function callback(item) {
    return item % 2 === 0;
}
function filtraPares(arr) {
    return numbers.filter(callback);
}
console.log(filtraPares(numbers));