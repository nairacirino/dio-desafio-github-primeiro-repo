function imprimirNome(nome) {
    return nome;
}

function isMaiorDeIdade(idade, nome) {
    if(idade >= 18) {
        console.log(imprimirNome(nome) + ' é maior de idade.')
    } else {
        console.log(imprimirNome(nome) + ' não é maior de idade.')
    }
}
isMaiorDeIdade(18, 'Naira');


// REFATORANDO O EXERCÍCIO DE CALCULO DE VALOR DE PAGAMENTO
function calcularVaricacaoPreco(precoOriginal, percentualVariacao) {
    let variacao = precoOriginal * percentualVariacao / 100
    return variacao
}

function calcularValorPagamento(precoOriginal, formaPagamento) {
    if (formaPagamento === 1) {
        console.log(precoOriginal - calcularVaricacaoPreco(precoOriginal, 10));
    } else if (formaPagamento === 2) {
        console.log(precoOriginal - calcularVaricacaoPreco(precoOriginal, 15));
    } else if (formaPagamento === 3) {
        console.log(precoOriginal);
    } else if (formaPagamento === 4) {
        console.log(precoOriginal + calcularVaricacaoPreco(precoOriginal, 10));
    }
}

calcularValorPagamento(100, 3)