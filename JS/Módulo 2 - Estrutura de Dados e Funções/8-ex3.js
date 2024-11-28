/**
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações:
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.
 */

const imoveis = []

let menu = ""

do {
    menu = parseFloat(prompt(`Cadastro de imóveis.\nTotal de imóveis: ${imoveis.length}\n\nEscolha uma opção:\n1) Novo imóvel\n2) Listar imóveis\n3) Sair`))
    console.log(imoveis)

    switch (menu) {
        case 1:

            const imovel = {}

            imovel.proprietario = prompt("Qual o nome do proprietário?")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui no imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n\n" + `Proprietário: ${imovel.proprietario}\nQuartos: ${imovel.quartos}\nBanheiros: ${imovel.banheiros}\nGaragem: ${imovel.garagem}`
            )

            if (confirmacao) {
                imoveis.push(imovel)
            } else {
                alert("Voltando ao menu...")
            }
            break

        case 2:

            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    `Imóvel ${i+1}\nProprietário: ${imoveis[i].proprietario}\nQuartos: ${imoveis[i].quartos}\nGaragem: ${imoveis[i].garagem}`
                )
            }
        break

        case 3:
            alert("Encerrando...")
        break

        default:
            alert("Opção inválida!")
        break
    }
} while (menu!==3)
alert("Encerrando")