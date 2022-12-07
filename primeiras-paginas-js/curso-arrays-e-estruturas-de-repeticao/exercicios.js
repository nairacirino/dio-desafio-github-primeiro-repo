// Crie um programa que, dado um número, imprima sua tabuada

let numero = 1;

for (i = 0; i <= 1; i++) {
    let multiplo = numero * i;
    console.log(`${numero} x ${i} = ${multiplo}`)
}

// Crie um programa que percorra uma lista de números e retorne cada número par encontrado

let listaDeNumeros = [1, 2, 4, 5, 6, 8, 7, 19];

for (i = 0; i < listaDeNumeros.length; i++) {
    if ((listaDeNumeros[i] % 2) === 0) {
        console.log(`${listaDeNumeros[i]} é um número par`)
    }
}
