function substituiPares(arr) {
    if (!arr) return -1; // verificação se arr é null
    if (!arr.length) return -1; // verificação se arr é um Array vazio

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(`Opa, o elemento de index = ${i} já é zero!`)
        } else if (arr[i] % 2 === 0) {
            console.log(`Substituindo ${arr[i]} por 0...`);
            arr[i] = 0;
        }
    }
    return arr;
}

let arr = [1, 3, 4, 6, 80, 0, 33, 23, 90, 0];
// console.log(substituiPares(null));
// console.log(substituiPares([]));
console.log(substituiPares(arr));