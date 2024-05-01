// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')();

let numeroInteiro = parseInt(prompt("Informe um número inteiro: "));

console.log("\n");

while ( numeroInteiro != null && numeroInteiro >= 0 ) {
    
    if ( numeroInteiro % 2 === 0 ) {
        console.log("O número é par");
    }
    else {
        console.log("O número é ímpar");
    }

    numeroInteiro = parseInt(prompt("Informe um número inteiro: "));
}