/**
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
 */

let menu = ``
let resultado = 0, base = 0, altura = 0, lado = 0, baseMaior = 0, baseMenor = 0, raio = 0
const pi = 3.14

function areaTriangulo(base, altura) {
    alert(`Área do Triangulo!`)
    base = parseFloat(prompt(`Insira o valor da base:`))
    while (isNaN(base) == true || base <= 0) {
        base = parseFloat(prompt(`Insira um valor válido para a base!`))
    }
    altura = parseFloat(prompt(`Insira o valor da altura:`))
    while (isNaN(altura) == true || altura <= 0) {
        altura = parseFloat(prompt(`Insira um valor válido para a altura!`))
    }
    return alert(`Para a base igual a ${base} e altura igual a ${altura}, sua respectiva área é igual a ${(base*altura)/2}.`)
}

function areaRetangulo(base, altura) {
    alert(`Área do Retângulo!`)
    base = parseFloat(prompt(`Insira o valor da base:`))
    while (isNaN(base) == true || base <= 0) {
        base = parseFloat(prompt(`Insira um valor válido para a base!`))
    }
    altura = parseFloat(prompt(`Insira o valor da altura:`))
    while (isNaN(altura) == true || altura <= 0) {
        altura = parseFloat(prompt(`Insira um valor válido para a altura!`))
    }
    return alert(`Para a base igual a ${base} e altura igual a ${altura}, sua respectiva área é igual a ${(base*altura)}.`)
}

function areaQuadrado(lado) {
    alert(`Área do Quadrado!`)
    lado = parseFloat(prompt(`Insira o valor do lado:`))
    while (isNaN(lado) == true || lado <= 0) {
        lado = parseFloat(prompt(`Insira um valor válido para a lado!`))
    }
    return alert(`Para um quadrado de lado ${lado}, sua área é igual a ${lado*lado}.`)
}

function areaTrapezio(lado) {
    alert(`Área do Trapezio!`)
    baseMaior = parseFloat(prompt(`Insira o valor da base maior:`))
    while (isNaN(baseMaior) == true || baseMaior <= 0) {
        baseMaior = parseFloat(prompt(`Insira um valor válido para a base maior!`))
    }
    baseMenor = parseFloat(prompt(`Insira o valor da base menor:`))
    while (isNaN(baseMenor) == true || baseMenor <= 0) {
        baseMenor = parseFloat(prompt(`Insira um valor válido para a base menor!`))
    }
    altura = parseFloat(prompt(`Insira o valor da altura:`))
    while (isNaN(altura) == true || altura <= 0) {
        altura = parseFloat(prompt(`Insira um valor válido para a altura!`))
    }
    return alert(`Para um trapézio de base maior ${baseMaior}, base menor ${baseMenor} e altura ${altura}, sua área é de ${(baseMaior+baseMenor)/altura}.`)
}

function areaCirculo(lado) {
    alert(`Área do Círculo!`)
    raio = parseFloat(prompt(`Insira o valor do raio:`))
    while (isNaN(raio) == true || raio <= 0) {
        raio = parseFloat(prompt(`Insira um valor válido para a raio!`))
    }
    return alert(`Para um círculo de raio ${raio}, sua área é igual a ${(pi*(raio*raio))/2}.`)
}

do {

    menu = parseFloat(prompt(`Olá! O que deseja calcular?\n1) Área do triângulo\n2) Área do retângulo\n3) Área do quadrado\n4) Área do trapézio\n5) Área do círculo\n6) Sair`))

    switch (menu) {
        case 1:
            areaTriangulo()
            break
        case 2:
            areaRetangulo()
            break
        case 3:
            areaQuadrado()
            break
        case 4:
            areaTrapezio()
            break
        case 5:
            areaCirculo()
            break
        case 6:
            alert(`Encerrando...`)
            break
        default:
            alert(`Algo deu errado!`)
            break
    }
} while (menu!==6)