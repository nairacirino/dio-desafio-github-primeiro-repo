/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código                    |   Condição de Pagamento
1 À vista Débito          |   10% de desconto
2 À vista Dinheiro ou PIX |   15% de desconto
2 Em duas vezes           |   Preço normal de etiqueta, sem juros
3 Acima de duas vezes     |   Preço normal de etiqueta, mais juros 4 de 10%

*/

let valorEtiqueta = 100;
let formaPagamento = 4;
let desconto = 0;
let juros = 0;

let valorPagamento = 0;

if (formaPagamento === 1) {
    desconto = valorEtiqueta * 0.10;
    juros = 0;
} else if (formaPagamento === 2) {
    desconto = valorEtiqueta * 0.15;
    juros = 0;
} else if (formaPagamento === 3) {
    desconto = 0;
    juros = 0;
} else if (formaPagamento === 4) {
    desconto = 0;
    juros = valorEtiqueta * 0.10;
}

valorPagamento = valorEtiqueta - desconto + juros;

console.log('O valor a pagar é ' + valorPagamento)