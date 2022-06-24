
const pessoa = [
    {
        nome: "João",
        idade: 18
    },
    {
        nome: "Maria",
        idade: 40
    },
    {
        nome: "José",
        idade: 81
    },
    {
        nome: "Ana",
        idade: 15
    },
    {
        nome: "Roberto",
        idade: 60
    }
];


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

// Utilizando call()
console.log(calculaIdade.call(pessoa[0], 30))

// Utilizando apply()
console.log(calculaIdade.apply(pessoa[3], [10]))