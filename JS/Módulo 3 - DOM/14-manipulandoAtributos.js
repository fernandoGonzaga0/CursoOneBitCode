const input = document.getElementById('input')

// input que muda o valor do input

document.getElementById('value').addEventListener('click', function() {
    // se valor estiver vazio, preencha com algo. senão, preencha com outro algo.
    input.value = input.value === '' ? 'Olá, mundo!' : ''
    //input.value = 'Olá, mundo!'

    console.log(input.value) // mostra o valor do input no momento
    console.log(input.getAttribute('value')) // mostra o valor pré definido no HTML
})

// input que muda o tipo do input

document.getElementById('type').addEventListener('click', function() {
    // se o input for diferente de radio, mude para radio. caso contrário, mude para texto
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // pode ser utilizado o input.setAttribute, porém ele não permitiria a volta para texto
})

// input que muda o placeHolder

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disabled').addEventListener('click', function() {
    // selecionando o botão disabled e desabilitando o mesmo
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
    // pegando um dado do HTML setado em data-algumParametro
    const data = input.dataset.something
    console.log('O valor de data-something é: ' + data)
})