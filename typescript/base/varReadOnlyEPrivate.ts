// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [k in keyof Cachorro]~?: Cachorro[k];
// }

// class MeuCachorro implements Cachorro {
//     idade;
//     nome;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Apolo', 14);

// console.log(cao.idade);