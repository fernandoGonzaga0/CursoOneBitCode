/*
Estrutura para criar um elemento do JS para HTML

1. Criar o elemento -> document.createElement()
2. Adicionar conteúdo ao elemento -> newElement.innerHTML = 'Olá mundo!'
3. Adicionar o elemento como um novo nó no DOM -> element.appendChild(newElement)
 */

function addInput() {
    // ul será o elemento com id 'inputs'
    const ul = document.getElementById('inputs')

    // criando uma li vazia
    const newLi = document.createElement('li')

    // criando uma nova li (é possível setar diversas configurações para o que é criado, ID, class, tipo, etc.)
    newLi.innerText = 'Novo input:'
    newLi.className = 'list-item'

    // criando um input de texto com nome
    const newInput = document.createElement('input')
    newInput.type = 'text' 
    newInput.name = 'input'

    // inserindo os elementos criados em nós no HTML - pai recebe filho e assim adiante
    newLi.appendChild(newInput) // a nova li receberá o novo input
    ul.appendChild(newLi) // a ul receberá a nova li que contém o novo input
}