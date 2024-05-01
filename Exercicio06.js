// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Informe o primeiro lado: "));
let lado2 = parseFloat(prompt("Informe o segundo lado: "));
let lado3 = parseFloat(prompt("Informe o terceiro lado: "));

console.log("\n");

if ( (lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2) ) {

    if ( (lado1 == lado2) && (lado2 == lado3) ) {
        console.log("Triângulo eqüilátero");
    }
    else if ( (lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3) ) {
        console.log("Triângulo escaleno");
    }
    else {
        console.log("Triângulo isósceles");
    }
}
else {
    console.log("Os valores fornecidos não formam um triângulo!")
}