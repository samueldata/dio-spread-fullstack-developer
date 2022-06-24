
//Exemplo 1
function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

// numeroPositivo(2)
// numeroPositivo(-1)

// Exemplo 2 - compact
function numeroPositivo2(num) {
    console.log()
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }

    return true;
}
// console.log("o parâmetro num é positivo? resposta: " + numeroPositivo2(-5))

// Exemplo 3 - else if
function numeroPositivo3(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}

// console.log(numeroPositivo3(10.00000000001))