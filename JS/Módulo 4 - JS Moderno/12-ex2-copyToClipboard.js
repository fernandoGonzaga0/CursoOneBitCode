// função copyToClipboard

// Dependências: resultInput.

export default function copyToClipboard (ev) {
    // criando a alteração visual ao clicar no botão copiar
    const button = ev.currentTarget
    const resultInput = document.querySelector('#result')
    // se o texto do botão (que é o evento do botão )
    if (button.innerText === 'Copy') {
        button.innerText = 'Copied'
        button.classList.add('success')
        window.navigator.clipboard.writeText(resultInput.value)
    }
    else {
    }
}