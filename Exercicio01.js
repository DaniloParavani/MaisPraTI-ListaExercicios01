// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let grausCelsius    = parseInt(prompt("Informe o valor em graus Celsius: "));
let grausFahrenheit = (grausCelsius * 1.8) + 32;

console.log("A temperatura em Fahrenheit é: " + grausFahrenheit);