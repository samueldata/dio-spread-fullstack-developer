// Exemplo 1
const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function () { //função dentro de objeto se chama método
        return this.firstName + " " + this.lastName;
    },
    getId: function () {
        return this.id;
    }
};

console.log(pessoa.fullName());
// André Soares
console.log(pessoa.getId());
// 1