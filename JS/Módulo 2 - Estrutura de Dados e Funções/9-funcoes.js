let menu = ""
let nome = ""
let anoNascimento = 0

function ola(nome) {
    return alert(`Olá, ${nome}`)
}

function idade(anoNascimento) {
    return alert(`Se você nasceu em ${anoNascimento}, hoje sua idade é ${2024-anoNascimento}.`)
}

do {
    menu = parseFloat(prompt(`Olá! Selecione uma função:\n1)Função OLÁ\n2)Função IDADE\n3)Sair`))
    
    switch(menu) {
        case 1: 
            nome = prompt("Qual o seu nome?")
            ola(nome)
            break

        case 2:
            anoNascimento = parseFloat(prompt(`Olá, qual o seu ano de nascimento?`))
                while (anoNascimento < 1900 || anoNascimento >= 2024 || isNaN(anoNascimento) == true) {
                    anoNascimento = parseFloat(prompt("Ano inválido, insira um ano válido!"))
                }
            idade(anoNascimento)
                break

        case 3:
            alert("Encerrando o programa...")
            break
        
        default:
            alert("Algo deu errado...")
    }
} while (menu!==3)