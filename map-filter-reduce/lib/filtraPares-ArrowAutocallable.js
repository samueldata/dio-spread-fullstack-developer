const numbers = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

(function () {
    return numbers.filter((pares) => pares % 2 === 0);
})();
// [ 0, 2, 4, 6, 8 ]