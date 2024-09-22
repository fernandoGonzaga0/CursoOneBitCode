const opcao1 = "Você escolheu a opção 1!"
const opcao2 = "Você escolheu a opção 2!"
const opcao3 = "Você escolheu a opção 3!"
const opcao4 = "Você escolheu a opção 4!"

let pergunta = ""

do {
    pergunta = parseFloat(prompt("Escolha uma das opções:\n1°\n2°\n3°\n4°\n5° - Encerrar"))

    switch(pergunta) {
        case 1:
            alert(opcao1)
        break
        case 2:
            alert(opcao2)
        break
        case 3:
            alert(opcao3) 
        break   
        case 4:
            alert(opcao4)
        break
        default:
            alert("Valor inválido!")
        }
        
} while (pergunta !== 5)

alert("Você encerrou o programa...")