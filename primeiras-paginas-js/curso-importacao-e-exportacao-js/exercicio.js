/*
    Uma sala contém 5 alunos e para cada um foi sorteado um número de 1 a 100.
    Faça um programa que receba os 5 números sorteados e mostre o maior dentre eles.

    Entradas:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const numerosSorteados = require('./dados');

let maior = 0;

for (i = 0; i < numerosSorteados.length; i++) {
    if(numerosSorteados[i] > maior) {
        maior = numerosSorteados[i];
    }
}

console.log(maior)
