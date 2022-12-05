/* 
    Faça um algoritmo que, dado as 3 notas tiradas por um aluno em um semestre de faculdade, calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

    Média = (nota 1 + nota 2 + nota3) / 3

    Classificação:
        - Média menor que 5: reprovação;
        - Média entre 5 e 7: recuperação;
        - Média maior que 7: passou de semestre;
*/

let nota1 = 9;
let nota2 = 7;
let nota3 = 7;

let media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log('Aluno reprovado com média ' + media.toFixed(2))
} else if (media >= 5 && media <= 7) {
    console.log('Aluno de recuperação com média ' + media.toFixed(2))
} else if (media > 7) {
    console.log('Aluno aprovado com média ' + media.toFixed(2))
}