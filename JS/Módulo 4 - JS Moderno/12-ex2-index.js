// importando arquivos externos

import calculate from "./12-ex2-functions.js"
import copyToClipboard from "./12-ex2-copyToClipboard.js"
import themeSwicher from "./12-ex2-themeSwicher.js"

// obtendo os elementos principais do HTML


const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// criando a funcionalidade que faz com que apenas os caracteres da calculadora possam ser inseridos no input

// criando array de teclas permitidas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// selecionando todos os botões da classe e adicionando um evento ao mesmo tempo para todos

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function() {
        // constante value será igual ao valor de cada data-value informado no HTML para seu respectivo botão
        // dataset é utilizado para obter os atributos data (não é necessário digitar o data-...)
        const value = charKeyBtn.dataset.value
        // acrescentando no value do input o value criado acima, com o atributo informado em data-value
        input.value += value
    })
})

// criando a funcionalidade do botão Clear

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    // focus serve para toda vez que o botão C for pressionado, o cursor fica atomaticamente de volta no input, evitando
    // que seja necessário clicar no input para inserir novos valores
    input.focus()
})

// criando um evento no input quando uma tecla é digitada nele
input.addEventListener('keydown', function (ev) {
    //previnindo comportamento padrão -> para evitar que a tecla seja digitada antes da tratativa da função abaixo
    ev.preventDefault()

    // condicional -> se allowedKey inclui a tecla de fato adicionada ao evento, faça...
    if (allowedKeys.includes(ev.key)) {
        // inclui no valor do input a tecla digitada
        input.value += ev.key
        return
    }
    // condicional -> se a tecla digitada for idêntica ao caractere padrão Backspace, faça...
    if (ev.key === 'Backspace') {
        // inserindo no input o valor como -> o próprio valor do input retirando os valores entre 0 e -1 (apenas o último)
        input.value = input.value.slice(0, -1)
    }
    // condicional -> se a tecla digitada for idêntica ao caractere padrão Enter, faça...
    if (ev.key === 'Enter') {
        // chama a função calculate() *ainda não foi criada
        calculate()
    }
})

// criando um evento para o botão ' = ' | adicionando o evento de chamar a função calculate quando clicar no botão
document.getElementById('equal').addEventListener('click', calculate) // essa chamada não requer os parênteses

// botão para trocar tema

document.getElementById('themeSwitcher').addEventListener('click', themeSwicher )

// botão de copiar 

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard) // recortei a função e direcionei ela ao copyToClipboard.js