/*
Ao criar uma função diretamente no código, independende de onde ela esteja, posso chamá-la a qualquer momento.

oiMundo()
... 100 linhas de código
function oiMundo() {
  return 'Função oi Mundo!'
}

Mesmo que eu chame a função bem antes dela existir, se a sintaxe for igual a que descrevi acima, pelo JS ela será lida sem
problemas. Utilizar ela como anônima, inserindo a mesma em uma varivável, não terá o mesmo resultado.
*/

// EX 1) Função declarada utilizada como anônima em constante

function somar(a, b) {
  return a + b
}
const operacao = somar //se fosse = somar(), operacao seria o resultado da função somar
console.log(operacao(4, 5)) // no caso, somar virou uma função anônima dentro da constante operacao

// EX 2) Chamar uma função anônima SEM NOME dentro de alguma variável/constante

const subtrair = function (a, b) {
  return a - b
}
console.log(subtrair(4, 8))

// EX 3) Usar a mesma constante com funções diferentes

// primeira manutenção da constante
function adicao(a, b) {
  return a + b + ' na primeira função.'
}
let constanteDeFuncoes = adicao
console.log(constanteDeFuncoes(1, 5))

// segunda manutenção da constante
constanteDeFuncoes = function (a, b) {
  return a - b + ' na segunda função.'
}
console.log(constanteDeFuncoes(1, 5))