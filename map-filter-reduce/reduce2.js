const lista = [
    {
        name: 'pneu js max',
        preco: 300,
        quantidade: 4
    },
    {
        name: 'óleo mineral 1L',
        preco: 20,
        quantidade: 4
    },
    {
        name: 'pastilhas de freio',
        preco: 300,
        quantidade: 2
    }
];

const saldo = 2000;

function calculaSaldo(saldo, lista) {
    console.log("Saldo inicial: R$ " + saldo + "\n\nVocê adquiriu os seguintes itens:")
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({prev});
        console.log({current});
        return prev - (current.preco * current.quantidade);
    }, saldo);
}

console.log("\n\nSaldo atual: R$ " + calculaSaldo(saldo, lista));