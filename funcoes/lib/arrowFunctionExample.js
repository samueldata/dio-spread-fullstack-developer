// Modo comum
const helloWorld = function () {
    return console.log("Hello World");
}

// Modo Arrow Function
const helloWorld2 = () => console.log("Hello World 2");

helloWorld();
helloWorld2();
// Hello World
// Hello World 2

// Outros exemplos de aplicação Arrow Function
const soma = (a, b) => console.log(a + b);

soma(4, 6);
// 10


const umParametro = a => console.log(a); //dispensa uso de parenteses (comparado ao exemplo anterior)
umParametro('sou uma função de apenas um parâmetro retornando seu próprio valor');