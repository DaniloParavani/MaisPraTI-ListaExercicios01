// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require('prompt-sync')();

let primeiroNumero = parseInt(prompt("Informe o primeiro valor: "));
let segundoNumero  = parseInt(prompt("Informe o segundo valor: "));
let terceiroNumero = parseInt(prompt("Informe o terceiro valor: "));

let quartoNumero = primeiroNumero + segundoNumero + terceiroNumero;
primeiroNumero += 25;
segundoNumero *= 3;
terceiroNumero *= 0.12;

console.log("\n");
console.log(`Primeira operação: ${primeiroNumero}`)
console.log(`Segunda operação: ${segundoNumero}`)
console.log(`Terceira operação: ${terceiroNumero}`)
console.log(`Quarta operação: ${quartoNumero}`)