// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require('prompt-sync')();

let nota3 = parseFloat(prompt("Informe a primeira nota: "));
let nota4 = parseFloat(prompt("Informe a segunda nota: "));

let mediaNotas2 = (nota3 + nota4) / 2;

console.log("\n");

if ( mediaNotas2 >= 6.0 ) {
    console.log (`Parabéns, sua média foi ${mediaNotas2}, você foi aprovado!`);
}
else {
    console.log (`Sua média foi ${mediaNotas2}. Você foi REPROVADO! Estude mais!`);
}