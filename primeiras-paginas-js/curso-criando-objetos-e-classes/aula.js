/* Objetos e Classes */

let identificador = {
    chave: 'valor'
}

// Objetos podem conter funções, que neste caso são chamadas métodos

let funcaoComMetodo = {
    chave: 'valor',

    metodo: function() {

    }

}

// Classes são como modelos de como um objeto deve ser formado, para que seja instanciado posteriormente. 

// Defininição da classe: estrutura que vai ser montada sempre que a classe for instanciada
class Pessoa {
    nome;
    idade;
}

//Instância da classe
let naira = new Pessoa();
naira.idade = 32;
naira.nome = 'Naira';

//É possível usar um construtor para alimentar os valores de uma classe no momento em que ela é instanciada
class Cidade {
    nome;
    titulo;

    constructor(nomeCidade, tituloCidade) {
        this.nome = nomeCidade;
        this.titulo = tituloCidade;
    }
}

let rioDeJaneiro = new Cidade('Rio de Janeiro', 'Cidade Maravilhosa')

console.log(rioDeJaneiro)


