console.log("Olá mundo")
console.log(2 + 2)
console.log(10 * 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - [3 / 4.5])
console.log(4 + 4 + 4 + [4 / 4])
console.log(127.75)
/*comentário varias linhas*/
// comentário de uma linha
/* VARIÁVEL
- espaço reservado na memoria para guardar um valor
- toda variável tem um NOME e um TIPO
- O NOME dve ser simples e significativo
- sem caracter especial, sem espaço
- diferencia maiúsculas de minúsculas
- Declaração de variáveis*/
let nome = 'Adriano'
let idade = 36
let nota1 = 7.5
let fumante = false
console.log(idade)
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)
/*TIPO*/
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof nota1)
console.log(typeof fumante)
let veiculos = ['carro', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)
let cliente = {
    nome: 'Adriano',
    idade: 36
}
console.log(cliente)
console.log(typeof cliente)
let salvar = function () {

}
console.log(typeof salvar)
/*OPERADORES RELACIONAIS*/
console.log(10 > 3)
console.log(5 < 3)
console.log(15 >= 10)
console.log(15 <= 10)
console.log(10 == 10)
console.log(10 != 3)
/*OPERADORES LÓGICOS*/
console.log(10 > 3 && 10 > 5) // AND
console.log(10 > 3 || 10 > 5) // OR
console.log(!10 > 3) // NOT inverte o resultado para false
/*alert("Ola mundo")*/ //caixa mensagem
/*document.write("<h3>Olá mundo</h3>") não usado mais*/


function Rosa() {
    // inserir um valor em um elemento da página
    document.getElementById('titulo').
        innerHTML = 'Aula 02 de JS'
    document.getElementById('texto').
        innerHTML = 'Vamos estudar interação com o DOM'

    document.body.style.backgroundColor = 'violet'
    document.body.style.color = 'white'

    document.getElementById('titulo').
        style.color = 'yellow'

    // pegar o valor de um elemento da página
    let titulo = document.getElementById('titulo').
        innerHTML

    console.log(titulo)
}

Rosa() // executa a função

function Laranja(){
    document.body.style.backgroundColor = 'orangered'
    document.body.style.color = 'lightblue'
}

Laranja() // executa a função









