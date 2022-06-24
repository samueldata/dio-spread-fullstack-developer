// Exemplo 2
const pessoa = {
    firstName: "Diego",
    lastName: "Vieira",
    getFullName: function () { //função dentro de objeto se chama método
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

pessoa.getFullName();
// Diego Vieira