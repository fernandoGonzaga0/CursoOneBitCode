function escalarJogador() {
    // Obtendo o valor do input de posição
    const posicaoJogador = document.getElementById('posicaoJogador').value

    // Obtendo o valor do input de posição
    const nomeJogador = document.getElementById('nomeJogador').value

    // Obtendo o valor do input de posição
    const numeroJogador = document.getElementById('numeroJogador').value

    const confirmacao = confirm(`Escalar ${nomeJogador} como ${posicaoJogador} e número ${numeroJogador}?`)

    if (confirmacao) {
        const timeAtual = document.getElementById('timeAtual')
        const playerItem = document.createElement('li')
        // aqui criamos um ID para o playerItem que será criado para cada jogador, recebendo uma numeração de acordo com seu número de camisa
        playerItem.id = 'player - ' + numeroJogador
        playerItem.innerText = `Posição: ${posicaoJogador} | Nome: ${nomeJogador} | Número: ${numeroJogador}`
        timeAtual.appendChild(playerItem)
    }
    
    // Limpando os inputs
    document.getElementById('posicaoJogador').value = ''
    document.getElementById('nomeJogador').value = ''
    document.getElementById('numeroJogador').value = ''
}

function removerJogador() {
    const numeroParaRemocao = document.getElementById('removerJogador').value

    // Utilizando o ID de jogador (numeroParaRemocao) para remoção
    const jogadorParaRemover = document.getElementById('player - ' + numeroParaRemocao)

    const timeAtual = document.getElementById('timeAtual')

    timeAtual.removeChild(jogadorParaRemover)
    
}