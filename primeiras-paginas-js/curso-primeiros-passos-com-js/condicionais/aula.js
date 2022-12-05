// CONDICIONAIS SIMPLES

// Operadores relacionais: > < <= >= == === =! 
// == -> compara somente valor
// === -> compara valor e tipo
// Variáveis do tipo boolean recebem sempre valor true ou false

// Condicional IF

// if ('condição') {
//     'Se for verdadeira, executa esse bloco'
// }

// IF/ELSE 

// if ('condição') {
//     'Se for verdadeira, executa esse bloco'
// } else {
//     'Se não for, executa esse'
// }

// IF/ELSE IF

// if ('primeira condição') {
//     'Se for verdadeira, executa esse bloco'
// } else if ('segunda condição') {
//     'Se a primeira for falsa e a segunda verdadeira, executa esse. Se a segunda também for falsa não executa nada. '
// }

// EXEMPLOS

let number = 3;
let isEvenNumber = (number % 2) === 0;

if (number <= 0) {
    console.log(number + ' não é um número valido para essa verificação.')
} else if (isEvenNumber) {
    console.log(number + ' é um número par.')
} else {
    console.log(number + ' é um número ímpar.')
}