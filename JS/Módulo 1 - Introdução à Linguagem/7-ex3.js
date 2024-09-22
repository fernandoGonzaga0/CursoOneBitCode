alert("Nesse teste de velocidade você irá inserir o nome e velocidade de dois veículos e, com base nisso, calcularemos qual veículo está mais rápido.")

let veiculo1_nome = prompt("Insira o nome do primeiro veículo:")
let veiculo1_velocidade = parseInt(prompt("Qual a velocidade do veículo " + veiculo1_nome + " em km/h?"))
let veiculo2_nome = prompt("Insira o nome do segundo veículo:")
let veiculo2_velocidade = parseInt(prompt("Qual a velocidade do veículo " + veiculo2_nome + " em km/h?"))

if (veiculo1_velocidade>veiculo2_velocidade) 
{
    alert("Seguindo as informações:\n\n" + "Veículo 1)\n    Nome: " + veiculo1_nome + "    Velocidade: " + veiculo1_velocidade + "km/h.\n\n" +
    "Veículo 2)\n    Nome: " + veiculo2_nome + "    Velocidade: " + veiculo2_velocidade + "km/h.\n\n" + "O veículo " + veiculo1_nome + " está mais rápido.")
} 

else if (veiculo1_velocidade<veiculo2_velocidade) 
{
    alert("Seguindo as informações:\n\n" + "Veículo 1)\n    Nome: " + veiculo1_nome + "    Velocidade: " + veiculo1_velocidade + "km/h.\n\n" +
    "Veículo 2)\n    Nome: " + veiculo2_nome + "    Velocidade: " + veiculo2_velocidade + "km/h.\n\n" + "O veículo " + veiculo2_nome + " está mais rápido.") 
}

else if ((isNaN(veiculo1_velocidade) || (isNaN(veiculo2_velocidade))))
{
    alert("Insira apenas números para as velocidades. Recarregue a página!")
}

else 
{
    alert("Seguindo as informações:\n\n" + "Veículo 1)\n    Nome: " + veiculo1_nome + "    Velocidade: " + veiculo1_velocidade + "km/h.\n\n" +
    "Veículo 2)\n    Nome: " + veiculo2_nome + "    Velocidade: " + veiculo2_velocidade + "km/h.\n\n" + "Os veículos possuem velocidades iguais.")
}