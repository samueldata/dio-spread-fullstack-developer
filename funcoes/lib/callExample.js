// Exemplo 1 - 
const pessoa = {
    nome: 'João'
};

const animal = {
    nome: 'Rex'
};

function getSomething() {
    console.log(this.nome);
}

// getSomething.call(pessoa);
// João

// Example 2 - Call em callback

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

// soma.call(myObj, 1, 5);
// 12