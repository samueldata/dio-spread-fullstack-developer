// console.log('TypeScript')

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao!');
    }
});

$('body').novaFuncao();

// //exportando  
// export const numero = 2;

// interface Pessoa {
//     nome: string;
//     idade: number;
//     nacionalidade: string;
// }

// interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

// }

// const brasileiro: Brasileiro = {
//     nome: "",
//     idade: 0
// }