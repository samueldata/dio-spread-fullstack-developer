const alunos = [
{
    nome: "João",
    nota: 10
},
{
    nome: "Maria",
    nota: 4
},
{ 
    nome: "José", 
    nota: 8 
},
{ 
    nome: "Ana", 
    nota: 4.5 
},
{ 
    nome: "Roberto", 
    nota: 6 
}
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i]; 

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return console.log(aprovados)
}
alunosAprovados(alunos, 5);