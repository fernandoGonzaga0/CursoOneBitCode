// funcao calculate para calcular o resultado da operação matemática

// Dependências: resultInput.

export default function calculate() {
    const resultInput = document.querySelector('#result') // tive que criar a constante de forma local, ela é originalmente do index.js
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    // criando uma variável result
    const result = eval(input.value) // eval serve para avaliar o código e tentar fazer o cálculo matemático
    resultInput.value = result
    resultInput.classList.remove('error')
}