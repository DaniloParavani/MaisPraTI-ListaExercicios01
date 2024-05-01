// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let numeroInteiro = parseInt(prompt("Informe um número inteiro: "));
let i = 1;
console.log("\n");

while ( i <=10 ) {
    console.log(numeroInteiro);
    i++
}