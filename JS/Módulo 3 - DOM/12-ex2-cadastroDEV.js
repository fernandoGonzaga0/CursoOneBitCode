/* eslint-disable no-unused-vars */
// Criando funções que serão utilizadas frequentemente no código

// Função para criar Label

function createLabel(text, htmlFor) { // usando o texto e a forma da label como parâmetro
    const label = document.createElement('label') // criando a label
    label.htmlFor = htmlFor // parametrizando o for da label para ser o que é digitado na função
    label.innerText = text // parametrizando o texto da label para ser o que digitado na função
    return label
}

// Função para criar Inputs MESMA TRATATIVA DA FUNÇÃO ACIMA

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input') 
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

// Criando constantes que serão utilizadas de forma global

const addTechBtn = document.getElementById('addTechBtn') // pegando o botão addTechBtn
const form = document.getElementById('devForm') // pegando o formulário devForm
const developers = [] // criando o array de desenvolvedores 
let inputRows = 0 // criando uma variável para as linhas de inserção de dados

// Criando a funcionalidade para o botão addTechBtn

addTechBtn.addEventListener('click', function(ev) { // adicionando o parâmetro de ev
    const stackInputs = document.getElementById('stackInputs') // pegando a ul de inputs do HTML
    const newRow = document.createElement('li') // criando uma nova linha 
    const rowIndex = inputRows // igualando o index da nova linha com o número da linha em si
    inputRows++ // iterando na linha para ir avançando ou recuando a numeração de acordo com o que é solicitado
    newRow.id = 'inputRow-' + rowIndex // deixando o id da nova linha mostrando o seu respectivo índice
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome:', 'techName-' + rowIndex) // criando label na função createLabel(text, htmlFor)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName') // criando input na função createInput(id, value, name, type = 'text', placeholder = '')

    const expLabel = createLabel('Experiência: ')

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio') // criando input na função createInput(id, value, name, type = 'text', placeholder = '')
    const expLabel1 = createLabel('0-2 anos', this.id1) // criando label na função createLabel(text, htmlFor)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio') // criando input na função createInput(id, value, name, type = 'text', placeholder = '')
    const expLabel2 = createLabel('3-4 anos', this.id2) // criando label na função createLabel(text, htmlFor)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio') // criando input na função createInput(id, value, name, type = 'text', placeholder = '')
    const expLabel3 = createLabel('5+ anos', this.id2) // criando label na função createLabel(text, htmlFor)

    // criando o botão de remover uma linha
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })

    newRow.append( // criando a label e input na nova linha
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )

    // Adicionando a linha na lista de inputs
    stackInputs.appendChild(newRow)
})

// Colocando o comportamento no formulário

form.addEventListener('submit', function(ev) {
    ev.preventDefault() // evitando que a pagina seja recarregada, perdendo os dados inserindo

    const fullNameInput = document.getElementById('fullName') // pegando o input e seu valor do HTML
    const inputRows = document.querySelectorAll('.inputRow') // pegando a partir da classe adicionada na linha 40 e criando uma NODE LIST

    let technologies = [] // para armazenar as informações inseridas no formulário
    inputRows.forEach(function (row) { // o parâmetro será a própria linha
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value // #rowId input[name="techName"] -> pega o valor a partir do input da linha específica
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value // pegando o valor a partir do input radio da linha específica (com o id em questão)
        technologies.push({name: techName, exp: techExp}) // criando o objeto e inserindo no array
    })

    const newDev = { fullName: fullNameInput.value, technologies: technologies} // criando o novo dev como um objeto 
    developers.push(newDev) // adicionando newDev no array de developers

    // limpando os campos após a execução

    fullNameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})