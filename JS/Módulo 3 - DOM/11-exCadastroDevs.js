//                               CONSTANTES DO PROJETO

// Constante que será utilizada com frequência:
const pularLinha = document.createElement('br')

// Constante para salvar os dados quando o user clicar no botão Enviar
const tecnologias = []

//                               FUNÇÕES DO PROJETO

// Função do botão para adicionar uma tecnologia
function addTecnologia() {

// ordem: 11-funcoes.txt

    // obtendo a lista de tecnologias (no momento vazia)
    const listaDeTecnologias = document.getElementById('listaDeTecnologias')

        // criando um form que receberá o texto Nova Tecnologia e o formulário
        const form_novaTecnologia = document.createElement('form')

        // criando um elemento h3 e deixando ele com o texto 'Nova tecnologia'
        const h3_novaTecnologia = document.createElement('h2')
        h3_novaTecnologia.innerText = 'Nova tecnologia'


            // criando a label e input do NOME da nova tecnologia
            const label_nomeNovaTecnologia = document.createElement('label')
            label_nomeNovaTecnologia.innerText = 'Nome da Tecnologia: '
            // criando o input do nome da nova tecnologia
            const input_nomeNovaTecnlogia = document.createElement('input')
            input_nomeNovaTecnlogia.type = 'text'

                // adicionando a label e input de nome da nova tecnologia ao formulário
                label_nomeNovaTecnologia.appendChild(input_nomeNovaTecnlogia)
                form_novaTecnologia.appendChild(label_nomeNovaTecnologia)

            //pulando linha diretamente no formulário
            form_novaTecnologia.appendChild(pularLinha.cloneNode()) // cloneNode() é utilizado para adicionar várias instâncias do mesmo elemento
            form_novaTecnologia.appendChild(pularLinha.cloneNode()) // é necessário ainda assim evidenciar que será duas quebras de linha

            // criando a label do grupo de botões 'radio' com tempos de experiência
            const label_tempoExperiencia = document.createElement('label')
            label_tempoExperiencia.innerText = 'Tempo de experiência: '
            form_novaTecnologia.appendChild(label_tempoExperiencia)

            // pulando duas linhas novamente com cloneNode()
            form_novaTecnologia.appendChild(pularLinha.cloneNode())
            form_novaTecnologia.appendChild(pularLinha.cloneNode())

            // criando as seleções de tempos de experiência

                // 0 a 2 anos de experiência
                const label_0a2_experiencia = document.createElement('label')
                const input_0a2_experiencia = document.createElement('input')
                input_0a2_experiencia.type = 'radio'
                input_0a2_experiencia.name = 'input_experiencia'

                    // adicionando input 0 a 2 exp na label e posteriormente no formulário
                    label_0a2_experiencia.appendChild(input_0a2_experiencia)
                    // inserindo um texto depois de exibir o input
                    label_0a2_experiencia.appendChild(document.createTextNode('0 a 2 anos'))
                    form_novaTecnologia.appendChild(label_0a2_experiencia)

                // 3 a 4 anos de experiência
                const label_3a4_experiencia = document.createElement('label')
                const input_3a4_experiencia = document.createElement('input')
                input_3a4_experiencia.type = 'radio'
                input_3a4_experiencia.name = 'input_experiencia'

                    // adicionando input 3 a 4 exp na label e posteriormente no formulário
                    label_3a4_experiencia.appendChild(input_3a4_experiencia)
                    label_3a4_experiencia.appendChild(document.createTextNode('3 a 4 anos '))
                    form_novaTecnologia.appendChild(label_3a4_experiencia)

                // 5+ anos de experiência
                const label_5plus_experiencia = document.createElement('label')
                const input_5plus_experiencia = document.createElement('input')
                input_5plus_experiencia.type = 'radio'
                input_5plus_experiencia.name = 'input_experiencia'

                    // adicionando input 5+ exp na label e posteriormente no formulário
                    label_5plus_experiencia.appendChild(input_5plus_experiencia)
                    label_5plus_experiencia.appendChild(document.createTextNode('5+ anos '))
                    form_novaTecnologia.appendChild(label_5plus_experiencia)
            
    listaDeTecnologias.append(h3_novaTecnologia, form_novaTecnologia)
    
}

// obtendo o botão e adicionando a ele um evento click
const botaoNovaTecnologia = document.getElementById('botaoNovaTecnologia')
botaoNovaTecnologia.addEventListener('click', addTecnologia)

// Função do botão Remover Tecnologia
function removerTecnologia() {

    // obtendo inicialmente a lista de tecnologias
    const removerListaDeTecnologias = document.getElementById('listaDeTecnologias')

    // verificando se existem tecnologias para remoção
    if (removerListaDeTecnologias.lastChild) {
        // removendo o último filho (h3 e form)
        removerListaDeTecnologias.removeChild(removerListaDeTecnologias.lastChild)
        removerListaDeTecnologias.removeChild(removerListaDeTecnologias.lastChild)
} else {
    alert('Não há tecnologias para remover!')
}
}

// obtendo o botão Remover Tecnologia e adicionando a ele um evento click
const botaoRemoverTecnologia = document.getElementById('removerTecnologia')
botaoRemoverTecnologia.addEventListener('click', removerTecnologia)

// Função para armazenar os dados de tecnologia inseridos

function salvarDados() {
    // obtendo a lista de tecnologias
    const listaDeTecnologias = document.getElementById('listaDeTecnologias')
    // obtendo o formulário
    const formularios = listaDeTecnologias.querySelectorAll('form')
    // limpando o array para evitar duplicatas em envios subsequentes
    tecnologias.length = 0

    // iterando sobre o formulário
    formularios.forEach((form) => {
        const nomeTecnologia = form.querySelector('input[type="text"]').value 

        // encontrar o botão de rádio selecionado
        const experiencia = form.querySelector('input[name="input_experiencia"]:checked')
        const tempoExperencia = experiencia ? experiencia.nextSibling.textContent.trim() : null

        // adicionando os dados ao array
        tecnologias.push({
            nome: nomeTecnologia,
            experiencia: tempoExperencia,
        })

        console.log(tecnologias)
        alert('Dados salvos com sucesso!')
    })
}

// Addicionando a funcionalidade no botão Enviar para salvar os dados selecionados em um array
const botaoEnviar = document.querySelector('button[type="submit"]')
botaoEnviar.addEventListener('click', (ev) => {
    ev.preventDefault()
    salvarDados()
})