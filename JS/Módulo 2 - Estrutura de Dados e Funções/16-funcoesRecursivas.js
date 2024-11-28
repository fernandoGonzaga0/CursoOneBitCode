// Função recursiva chama ela mesma, criando uma pilha de chamada de funções que se repetem

function dividir(num) {
    console.log(num)
    if (num % 2 === 0) { // nesse momento é feita a validação se o n° é par, se for, a função é chamada novamente com o valor pela metade
        dividir(num / 2)
    } else {
        return console.log(num + `chegamo`)
    }
}
// O programa executa a primeira função, para e executa a segunda, para e executa a terceira..... até chegar em else, que nesse
// momento o programa começa a recursão e vai finalizando de volta cada função até chegar na primeira novamente (FILO)

// dividir(40)

// É preciso tomar cuidado com funções recursivas infinitas, sempre devo inserir um limite para essas execuções terem fim

function fatorial(num) {
    console.log(`Número: ${num}`)
    if (num === 0) { // caso base
        return 1
    } else if (num === 1) { // apenas outra condicional base
        return 1
    } else {
        console.log(`${num} * ${num-1}`) // exibindo o comportamento da 'ida' da recursão
        return num * fatorial(num-1)
    }
}

/**
A Volta para Casa
Agora, imagine que cada chamada da função é como uma caixa. Quando a função chega no caso base, ela começa a "desempilhar" essas caixas, retornando os valores e realizando as multiplicações:
fatorial(1) retorna 1: Essa caixa é a primeira a ser aberta.
fatorial(2): Recebe o 1 retornado por fatorial(1), então calcula 2 * 1 = 2 e retorna 2.
fatorial(3): Recebe o 2 retornado por fatorial(2), então calcula 3 * 2 = 6 e retorna 6.
... e assim por diante, até chegar em fatorial(5): Que recebe o 24 retornado por fatorial(4) e calcula 5 * 24 = 120.
 */

console.log(fatorial(5))

