function verificaPalindromo(string) {
    if (!string) throw console.log("String inválida");

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo1(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
}

function tryCatchExemplo2(string) {
    try {
        verificaPalindromo(string)
    }
    catch(e){
        console.log(e)
    }
}

tryCatchExemplo1('');
tryCatchExemplo2('');