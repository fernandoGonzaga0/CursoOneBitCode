let baralho = []
let menu = ""
let pilha = ""

do {    
    for (i = 0; i < baralho.length; i++) {
        pilha += (i+1) + '° - ' + baralho[i] + "\n"
    }

    menu = parseFloat(prompt(`${pilha}Baralho:\n\nO que deseja fazer?\n1) Inserir uma carta\n2) Retirar uma carta\n3) Encerrar programa`))

    while (![1, 2, 3].includes(menu)) {
        menu = parseFloat(prompt(`INSIRA UM VALOR VÁLIDO!\n\nBaralho:\n\nO que deseja fazer?\n1) Inserir uma carta\n2) Retirar uma carta\n3) Encerrar programa`))
    }

    switch(menu) {
        case 1: 
            const adicionaCarta = prompt("Insira o nome da carta:")
            baralho.unshift(adicionaCarta)
            alert(`Carta '${adicionaCarta}' inserida!`)
            break
        case 2:
            const cartaRemovida = baralho.shift()
            alert(`Carta '${cartaRemovida}' removida do baralho!`)
            break
        default:
            alert("Algo inesperado aconteceu...")
            break
    }

} while(menu !== 3)

alert("Encerrando o programa...")