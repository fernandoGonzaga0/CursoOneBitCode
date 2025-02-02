function useLightTheme() { // nessa função estamos alterando manualmente as cores de color e backgroundColor
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#f0f8ff'
}

function useDarkTheme() { // nessa função estamos alterando manualmente as cores de color e backgroundColor
    document.body.style.color = '#f0f8ff'
    document.body.style.backgroundColor = '#000000'
}

function switchTheme() { 
    // O método toggle alterna a presença da classe: adiciona se não existir, remove se já estiver presente.
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)

// OBS: posso alterar entre os botões Tema Claro e Tema Escuro, porém se eu usar o botão de alterar, a mudança é irreversível
// enquanto a página não é recarregada, já que é feita uma mudança no código em si.