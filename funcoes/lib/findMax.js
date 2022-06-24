function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }


    return max;
}

console.log(findMax(1, 2, 3, 4, 234, 5, -2342352, 35));