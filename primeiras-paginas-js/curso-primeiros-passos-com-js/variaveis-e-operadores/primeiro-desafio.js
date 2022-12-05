/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis, sendo:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem; 

*/

let precoCombustivel = 5.79;
let kmPercorridosPorLitroDeCombustivel = 12;
let distanciaViagemEmKM = 1580;

let litrosDeCombustivelGastos = distanciaViagemEmKM / kmPercorridosPorLitroDeCombustivel;

let valorDaViagem = litrosDeCombustivelGastos * precoCombustivel;

console.log(valorDaViagem.toFixed(2));

