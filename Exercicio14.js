// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Informe um número: "));
let valorTotal = 0;
let i = 0;

while ( numero != 0 ) {
    
    valorTotal += numero;
    numero = parseFloat(prompt("Informe um número: "));

    i++
}

console.log("\n");
console.log(`A média aritmética desses números é ` +  (valorTotal/i).toFixed(2) )
