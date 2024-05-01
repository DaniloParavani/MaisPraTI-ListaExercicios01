// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos.
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let numeroEleitores    = parseInt(prompt("Informe o número de eleitores do município: "));
let numeroVotosBrancos = parseInt(prompt("Informe o número de votos brancos: "));
let numeroVotosNulos   = parseInt(prompt("Informe o número de votos nulos: "));
let numeroVotosValidos = parseInt(prompt("Informe o número de votos válidos: "));

let percentualVotosBrancos = (numeroVotosBrancos / numeroEleitores) * 100;
let percentualVotosNulos   = (numeroVotosNulos / numeroEleitores) * 100;
let percentualVotosValidos = (numeroVotosValidos / numeroEleitores) * 100;

console.log("\n");
console.log(`${percentualVotosBrancos}% de votos brancos`)
console.log(`${percentualVotosNulos}% de votos nulos`)
console.log(`${percentualVotosValidos}% de votos válidos`)