// Examplo 1
function multiplicadoPorDois(arr) {
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

// console.log(multiplicadoPorDois(meusNumeros));
//[4,66,912,712,80]

//objeto utilizado nos exemplos 2.1 e 2.2:
const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

//Exemplo 2.1 - For ... in: Loop entre propriedades enumeráveis de um objeto.
function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop);
    }
}


forInExemplo(meuObjeto)

//Exemplo 2.2
function forInExemplo2(obj) {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}

forInExemplo2(meuObjeto) // retorna os valores de cada 

// Exemplo 3.1 - For ... of: Loop entre estruturas iteráveis (arrrays, strings).

function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";

// logLetras(palavra)

// a
// b
// a
// c
// a
// x
// i

// Exemplo 3.2
function logNumeros(nums) {
    for (num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

// logNumeros(nums)

// 30
// 20
// 233
// 2

