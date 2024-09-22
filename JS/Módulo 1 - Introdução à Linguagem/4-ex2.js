// alert("Calculadora de 4 operações.")

// let primeiroValor = parseFloat(prompt("Insira o primeiro número:"))

// let segundoValor = parseFloat(prompt("Insira aqui o segundo número:"))

// const soma = segundoValor + segundoValor
// const subtracao = primeiroValor - segundoValor
// const multiplicacao = primeiroValor * segundoValor
// const divisao = primeiroValor / segundoValor

// alert("Os números digitados foram: " + primeiroValor + " e " + segundoValor + "\n\n"
//     + "Soma: " + primeiroValor + " + " + segundoValor + " = " + soma + "\n\n"
//     + "Subtração: " + primeiroValor + " - " + segundoValor + " = " + subtracao + "\n\n"
//     + "Multiplicação: " + primeiroValor + " * " + segundoValor + " = " + multiplicacao + "\n\n"
//     + "Divisão: " + primeiroValor + " / " + segundoValor + " = " + divisao
//     )

let firstNumber = parseFloat(prompt("Olá, essa é uma calculadora de dois números!\n\nInsira aqui o primeiro número:"))

let secondNumber = parseFloat(prompt("Insira aqui o segundo número:"))

alert(
    "Sendo os dois números '" + firstNumber + "' e '" + secondNumber + "', deixo abaixo as quatro operações básicas envolvendo eles:\n\n" +
    "Soma: " + firstNumber + " + " + secondNumber + " = " + (firstNumber+secondNumber) + "\n\n" +
    "Subtração: " + firstNumber + " - " + secondNumber + " = " + (firstNumber-secondNumber) + "\n\n" +
    "Multiplicação: " + firstNumber + " * " + secondNumber + " = " + (firstNumber*secondNumber) + "\n\n" +
    "Divisão: " + firstNumber + " / " + secondNumber + " = " + (firstNumber/secondNumber).toFixed(2) + "\n\n" 
)