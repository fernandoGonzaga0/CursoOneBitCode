const vagas = []

function listarVagas() {
    // nessa variável de texto, adequamos a função para exibir o nome das vagas que estarão dentro do array 'vagas'. 
    // será exibido também o índice 
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // Ex -> ['1 - Auxiliar de TI, 8 candidatos']
     textoFinal += indice + ' - '
     textoFinal += vaga.nome 
     textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'   
     return textoFinal
    }, '')
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt('Informe um nome para a vaga:')
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:')
    const confirmacao = confirm('Deseja criar uma nova vaga com essas informações?\n' +
        `Nome: ${nome}\nDescrição: ${descricao}\nData limite: ${dataLimite}`
    )
    if (confirmacao) {
        // Se a confirmação foi aceita, é criada a novaVaga
        const novaVaga = {nome: nome, descricao: descricao, dataLimite: dataLimite, candidatos: []}
        //novaVaga é adicionada ao array vagas
        vagas.push(novaVaga)
        alert('Vaga criada!')
    } else {
        alert('Retornando ao menu...')
    }
}

function exibirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir:')
    //a constante vaga será igual ao elemento com mesmo número INDICE dentro do array VAGAS
    const vaga = vagas[indice]
    // candidatosEmTexto acessa dentro do objeto vaga, em cada elemento, sua propriedade 'candidatos', dentro de candidatos é retirada a informação do candidato (nome)
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + `\n- ${candidato}`
    }, '')
    alert(
        "Nome da vaga: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function cadastrarCandidato() {
    const candidato = prompt('Insira o nome do candidato:')
    const indice = prompt("Informe o índice da vaga para qual o candidato quer se inscrever:")
    const vaga = vagas[indice]
    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada!")
    } else {
        alert("Retornando ao menu...")
    }
}

function excluirVaga() {
    const indice = prompt("Insira o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]
    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao) {
        // Com splice, eu indico o indice e excluo 1 elemento a partir dele (poderiam ser outros números)
        vagas.splice(indice, 1)
        alert("Vaga excluída!")
    } else {
        alert("Retornando ao menu...")
    }
}

function exibirMenu() {
    const opcao = prompt(`GLASSDOOR\n\nEscolha uma das opções disponíveis:\n
    1 - Listar vagas disponíveis\n
    2 - Criar uma vaga\n
    3 - Exibir detalhes da vaga\n
    4 - Cadastrar candidato\n
    5 - Excluir vaga\n
    6 - Sair`)

    return opcao
}

function executar() {

    let opcao = ''

    do {
        opcao = exibirMenu()

        switch(opcao) {
            case '1': 
                listarVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                cadastrarCandidato()
                break
            case '5': 
                excluirVaga()
                break
            case '6': 
                alert("Encerrando GlassDoor:")
                break
            default: 
                alert("Algo inesperado aconteceu.")
        }       
    } while (opcao!==6)

}

executar()