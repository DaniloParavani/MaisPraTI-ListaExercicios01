// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let quantidadeMacas = parseInt(prompt("Informe a quantidade de maças compradas: "));
let valorTotal;

console.log("\n");

if ( quantidadeMacas >= 12 ) {
    valorTotal = quantidadeMacas * 0.25;
}
else {
    valorTotal = quantidadeMacas * 0.30;
}

console.log(`O valor total da compra é de R$ ${valorTotal.toFixed(2)}`)