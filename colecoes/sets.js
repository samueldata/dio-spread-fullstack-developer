(function () {
    const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
    const mySet = new Set(arr);
    return console.log([...mySet]); // spread -> Set(6) to Array 
})();