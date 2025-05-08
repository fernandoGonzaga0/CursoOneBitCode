// função de trocar de tema

// Dependências: main, root.

export default function themeSwicher () {

    const main = document.querySelector('main')
    const root = document.querySelector(':root')


    // na linha 3 adicionamos o main -> dentro dele está contido no HTML (linha 15 no HTML) o data-theme = 'dark'
    // se o tema atual for... -> altere para outro
    if (main.dataset.theme === 'dark') {
        // na linha 4 desse documento pegamos o elemento :root do CSS
        // setando a propriedade como -> (elemento, novo valor)
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style
        // verde um pouco mais escuro
        root.style.setProperty('--primary-color','#2471dd')
        // mudando o tema para light para, caso esteja no light, ser trocado para os novos parâmetros abaixo
        main.dataset.theme = 'light'
    }
    else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color','#285999')
        main.dataset.theme = 'dark'
    }
}