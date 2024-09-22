let saldo = parseFloat(prompt("Menu Financeiro.\n\nQual o seu saldo?"))

while (isNaN(saldo) == true) {
    saldo = parseFloat(prompt("Insira um número válido para o saldo!"))
}

let opcao = ""
let adicionarSaldo = ""
let retirarSaldo = ""

do {
    opcao = parseFloat(prompt(`Seu saldo é de R$ ${saldo}, o que deseja fazer?\n1) Adicionar saldo\n2) Sacar saldo\n3) Encerrar programa`))

    switch(opcao) {

        case 1:
            adicionarSaldo = parseFloat(prompt("Quanto você deseja adicionar?"))
            while (isNaN(adicionarSaldo) == true) {
                adicionarSaldo = parseFloat(prompt("Insira um valor válido para adicionar!"))
            }
            alert(`Foram adicionados R$ ${adicionarSaldo} ao seu saldo!`)
            saldo += adicionarSaldo
        break
        case 2:
            retirarSaldo = parseFloat(prompt("Quanto você deseja sacar?"))
            while (isNaN(retirarSaldo) == true) {
                retirarSaldo = parseFloat(prompt("Insira um valor válido para o saque!"))
            }
            alert(`Foram retirados R$ ${retirarSaldo} do saldo!`)
            saldo -= retirarSaldo
        break
        default:
            alert("O valor inserido não é válido!")
    }
} while (opcao !== 3)

alert("O programa está sendo encerrado...")