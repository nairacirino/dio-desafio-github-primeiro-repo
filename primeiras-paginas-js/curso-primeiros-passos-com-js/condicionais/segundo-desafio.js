/* Faça um programa para calcular o valor de uma viagem. 

Você terá 5 variáveis, sendo:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - Tipo de combustível utilizado no carro;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem; 

*/

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoCombustível = 'gasolina';
let kmPercorridosPorLitroDeCombustivel = 10;
let distanciaViagemEmKM = 100;

let litrosDeCombustivelGastos = distanciaViagemEmKM / kmPercorridosPorLitroDeCombustivel;

if(tipoCombustível === 'etanol') {
    let valorDaViagem = litrosDeCombustivelGastos * precoEtanol;
    console.log(valorDaViagem.toFixed(2));
} else if (tipoCombustível === 'gasolina') {
    let valorDaViagem = litrosDeCombustivelGastos * precoGasolina;
    console.log(valorDaViagem.toFixed(2));
}

