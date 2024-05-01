// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

const prompt = require('prompt-sync')();

console.log("\n4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,"
+ " calcular e escrever a média semestral e a seguinte mensagem: \n‘PARABÉNS! Você foi"
+ " aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).");
console.log("\n");

let nota1 = parseFloat(prompt("Informe a primeira nota: "));
let nota2 = parseFloat(prompt("Informe a segunda nota: "));

let mediaNotas = (nota1 + nota2) / 2;

console.log("\n");

if ( mediaNotas >= 6.0 ) 
    console.log (`Parabéns, sua média foi ${mediaNotas}, você foi aprovado!`);