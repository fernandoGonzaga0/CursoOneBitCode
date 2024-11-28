// Todo código abaixo será impresso na section de id 'contacts-list'
// A estrutura se baseia em criar uma lista ul e ir adicionando os itens com li
function addContact() {
    // criando a sessão do contato que receberá o elemento com id 'contacts-list'
    const contactSection = document.getElementById('contacts-list') 
    
    // criando um elemento h3 e deixando ele com o texto 'Contato' 
    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    // criando uma ul que receberá nameLi, telefoneLi e enderecoLi
    const ul = document.createElement('ul')

    // CRIANDO nameLi PARA NOME
        
        // criando um elemento li e deixando ele com o texto 'Nome: '
        const nameLi = document.createElement('li')
        nameLi.innerText = 'Nome: '

        // criando um elemento input e deixando ele com tipo texto e nome fullname
        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'fullname'

        // nameLi recebe nameInput (a linha 'Nome: ' recebe o input de texto)
        nameLi.appendChild(nameInput)

        // a lista ul recebe esse nameLi que contem o input
        ul.appendChild(nameLi)

        ul.appendChild(document.createElement('br'))

    // CRIANDO telefoneLi PARA TELEFONE
        
        // criando um elemento li e deixando ele com o texto 'Telefone: '
        const phoneLi = document.createElement('li')
        phoneLi.innerText = 'Telefone: '

        // criando um elemento input e deixando ele com tipo texto e nome phone
        const phoneInput = document.createElement('input')
        phoneInput.type = 'text'
        phoneInput.name = 'phone'

        // phoneLi recebe phoneInput (a linha 'Telefone: ' recebe o input de texto)
        phoneLi.appendChild(phoneInput)
        
        // a lista ul recebe esse phoneLi que contem o input
        ul.appendChild(phoneLi)

        ul.appendChild(document.createElement('br'))

    // CRIANDO enderecoLi PARA ENDERECO

        // criando um elemento li e deixando ele com o texto 'Endereço: '
        const enderecoLi = document.createElement('li')
        enderecoLi.innerText = 'Endereço: '
        
        // criando um elemento input e deixando ele com tipo texto e nome endereco
        const enderecoInput = document.createElement('input')
        enderecoInput.type = 'text'
        enderecoInput.name = 'endereco'

        // enderecoLi recebe enderecoInput 
        enderecoLi.appendChild(enderecoInput)

        // a lista ul recebe esse enderecoLi
        ul.appendChild(enderecoLi)

        ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    // pegando o último elemento de lista e contato
    contactSection.removeChild(titles[titles.length-1])
    contactSection.removeChild(contacts[contacts.length-1])
}