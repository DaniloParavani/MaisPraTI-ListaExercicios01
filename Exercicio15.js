// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Informe um número: "));
let peso = parseFloat(prompt("Informe o peso desse número: "));

let aux = 0;
let totalPeso = 0;

while ( numero != 0 ) {
    
    aux += numero * peso;
    totalPeso += peso;

    numero = parseFloat(prompt("Informe um número: "));
    peso = parseFloat(prompt("Informe o peso desse número: "));
}

console.log("\n");
console.log(`A média ponderada desses números é ` +  (aux/totalPeso).toFixed(2) )
