// O objetivo desse exercício é criar eventos diretamente pelo JavaScript, ao invés de indicá-los dentro de elementos no HTML

// função register com ev (evento disparado sempre que o eventListener é utilizado) 
function register(ev) {
    
    // imprimindo o ev
    console.log(ev)

    // criando uma constante para abreviar futuras constantes com esse caminho
    const sectionElement = ev.currentTarget.parentNode

                   //sectionElement -> filhos do parentNode -> name do input -> valor do input
    const username = sectionElement.children.username.value 
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado!')
    } else {
        alert('Senhas não conferem!')
    }
}

// Criando constante que receberá o elemento de id register-button
const button = document.getElementById('register-button')
// adicionando o evento de ouvinte na constante
button.addEventListener('click', register ) //devo passar a função sem parênteses para pegar a função em si, não o resultado.

// Removendo o ouvinte

function removeListener() {
    button.removeEventListener('click', register)
    alert('Botão removido!')
}
