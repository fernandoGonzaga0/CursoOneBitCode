// Uma HOF é uma função que recebe outra função como parâmetro.

function somar(x, y) {
    console.log('Relizando uma soma.')
    return x + y
}

function subtrair(x, y) {
    console.log('Realizando uma subtração.')
    return x - y
}

function multiplicacao(x, y) {
    console.log('Realizando uma multiplicação.')
    return x * y
}

function calcular (a, b, operacao) {
    console.log('Realizando uma operação.')
    // operacao se torna uma função nesse momento e calcular vira uma HOF
    const resultado = operacao(a, b) 
    return resultado
}

console.log(calcular(2, 2, somar))
console.log(calcular(2, 2, subtrair))
console.log(calcular(2, 2, multiplicacao))