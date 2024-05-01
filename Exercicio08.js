// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let valorUm = parseFloat(prompt("Informe o primeiro valor: "));
let valorDois = parseFloat(prompt("Informe o segundo valor: "));

console.log("\n");

if ( valorUm >= valorDois ) {
    console.log(`${valorDois}, ${valorUm}`)
}
else {
    console.log(`${valorUm}, ${valorDois}`)
}