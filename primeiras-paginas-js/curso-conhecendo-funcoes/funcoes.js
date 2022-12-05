/* Exercício: REFATORAR O DESAFIO DO IMC

Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e altura.
Exiba o valor do IMC e a classificação obtida. Se houver algum grau de obesidade, exiba também a mensagem: Cuidado! Você está acima do peso recomendado pela OMS.
Se o grau de obesidade for 3, adicione também a seguinte mensagem: É importante procurar um médico para avaliar sua saúde. */

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return {
            classificacao: "O resultado do IMC é " + IMC.toFixed(2) + " - Magreza",
            grauObesidade: 0
        }
    } else {
        if (IMC >= 18.5 && IMC < 25) {
            return {
                classificacao: "O resultado do IMC é " + IMC.toFixed(2) + " - Normal",
                grauObesidade: 0
            }
        } else {
            if (IMC >= 25 && IMC < 30) {
                return {
                    classificacao: "O resultado do IMC é " + IMC.toFixed(2) + " - Sobrepeso",
                    grauObesidade: 1
                }
            } else {
                if (IMC >= 30 && IMC < 40) {
                    return {
                        classificacao: "O resultado do IMC é " + IMC.toFixed(2) + " - Obesidade",
                        grauObesidade: 2
                    }
                } else {
                    if (IMC > 40) {
                        return {
                            classificacao: "O resultado do IMC é " + IMC.toFixed(2) + " - Obesidade grave",
                            grauObesidade: 3
                        }
                    }
                }
            }
        }
    }
}

function main() {
    let peso = 79;
    let altura = 1.60;
    let IMC = calcularIMC(peso, altura);
    let classificacao = classificarIMC(IMC);

    console.log(classificacao.classificacao);

    if (classificacao.grauObesidade > 0) {
        console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
    } else if (classificacao.grauObesidade >= 3) {
        console.log("É importante procurar um médico para avaliar sua saúde.")
    }
}

main();