// Exemplo 1 - semelhante ao método Call
const pessoa = {
    nome: 'João'
};

const animal = {
    nome: 'Rex'
};

function getSomething() {
    console.log(this.nome);
}

// getSomething.apply(animal);
// Rex

// Example 2 - Apply em callback

const myObj = {
    num1: 2,
    num2: 4
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); // argumentos do apply devem ser passados dentro de um Array (grande diferença entre call e apply)
// 12