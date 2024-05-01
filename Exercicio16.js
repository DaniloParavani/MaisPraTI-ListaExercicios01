// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

const prompt = require('prompt-sync')();

let i = 1;
let numero = 101;

while ( i <= 50 ) {
    let numeroPrimo = true;

    for (let j = 2; j < numero; j++ ) {
        if ( numero % j === 0 ) {
            numeroPrimo = false;
            break;
        }
    }

    if (numeroPrimo) {
        i++;
        console.log(numero)
    }

    numero++;
}
