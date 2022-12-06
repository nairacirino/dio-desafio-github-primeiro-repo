/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado. 
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar esse percurso
*/

class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calculaValorGastoViagem(custoCombustivel, kmViagem) {
        let valorDaViagem = kmViagem / this.kmPorLitro * custoCombustivel;
        return valorDaViagem.toFixed(2);
    }
}

let palio = new Carro('palio', 'cinza', 12);
console.log(palio.calculaValorGastoViagem(5.79, 1580))

/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura. 

As pessoas devem ter a capacidade de dizer o valor do seu IMC.

Instancie uma pessoa chamada Jośe que tenha 70kg de peso e 1,75m de altura e peça a José para dizer o valor de seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2)
    }

    classificacaoImc() {
        const IMC = this.imc();
        console.log(IMC)
        if (IMC < 18.5) {
            return "Magreza"
        } else if (IMC >= 18.5 && IMC < 25) {
            return "Normal"
        } else if (IMC >= 25 && IMC < 30) {
            return "Sobrepeso"
        } else if (IMC >= 30 && IMC < 40) {
            return "Obesidade"
        } else if (IMC > 40) {
            return "Obesidade grave"
        }
    }
}

let jose = new Pessoa('José', 70, 1.75)
console.log("O IMC de " + jose.nome + " é " + jose.imc() + ' - ' + jose.classificacaoImc())

let naira = new Pessoa('Naira', 79, 1.6)
console.log("O IMC de " + naira.nome + " é " + naira.imc() + ' - ' + naira.classificacaoImc())