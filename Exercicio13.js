// 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
// calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:

const prompt = require('prompt-sync')();

let numeroInteiro = parseInt(prompt("Informe um número inteiro: "));

console.log("\n");

for ( let i=1; i <= 5; i++ ) {
    console.log(`${i} x ${numeroInteiro} = ` + (i * numeroInteiro))
}
