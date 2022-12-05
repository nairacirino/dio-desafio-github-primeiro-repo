/* Exercício:
Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e altura.
Exiba o valor do IMC e a classificação obtida. Se houver algum grau de obesidade, exiba também a mensagem: Cuidado! Você está acima do peso recomendado pela OMS.
Se o grau de obesidade for 3, adicione também a seguinte mensagem: É importante procurar um médico para avaliar sua saúde. */

let peso = 76;
let altura = 1.60;
let IMC = peso / Math.pow(altura, 2);
let classificacao;
let grauObesidade;

if (IMC < 18.5) {
    classificacao = "Magreza";
    grauObesidade = 0;
} else {
    if (IMC >= 18.5 && IMC < 25) {
        classificacao = "Normal";
        grauObesidade = 0;
    } else {
        if (IMC >= 25 && IMC < 30) {
            classificacao = "Sobrepeso";
            grauObesidade = 1;
        } else {
            if (IMC >= 30 && IMC < 40) {
                classificacao = "Obesidade";
                grauObesidade = 2;
            } else {
                if (IMC > 40) {
                    classificacao = "Obesidade grave";
                    grauObesidade = 3;
                }
            }
        }
    }
}

console.log("O resultado do IMC é "+ IMC.toFixed(2) + " - " + classificacao + ".");

if (grauObesidade > 0) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}

if (grauObesidade >= 3) {
    console.log("É importante procurar um médico para avaliar sua saúde.")
}