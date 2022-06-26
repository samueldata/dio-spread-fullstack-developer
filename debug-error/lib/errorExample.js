// // Error - Sintaxe
// new Error(message, fileName, lineNumber)

// // // todos os parâmetros são opcionais

// // const MeuErro = new Error('Mensagem Inválida');

// throw MeuErro;

// Error - Exemplo
const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;  