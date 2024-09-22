alert("Verificação de opção.")
let opcao = prompt("Escolha a opção:\n\n1) Primeira opção\n\n2) Segunda opção\n\n3) Terceira opção")

switch (opcao) {
    case 1:
        alert("Você escolheu a primeira opção!")
        break
    case 2:
        alert("Você escolheu a terceira opção!")
        break
    case 3:
        alert("Você escolheu a terceira opção!") 
        break   
    default:
        alert("Insira um valor válido!")
        opcao = prompt("Escolha a opção:\n\n1) Primeira opção\n\n2) Segunda opção\n\n3) Terceira opção")
}