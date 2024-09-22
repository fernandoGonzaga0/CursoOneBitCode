// Primeiro personagem
//  Nome
let nameFirstChar = prompt("Qual o nome do primeiro personagem?")
//  Poder de ataque 
let powerFirstChar = parseFloat(prompt("Qual o poder de ataque do personagem " + nameFirstChar + "? (De 0 a 100)"))
while ((isNaN(powerFirstChar) == true) || (powerFirstChar < 0 || powerFirstChar > 100)){
    powerFirstChar = parseFloat(prompt("Insira um valor válido para o poder de ataque do personagem " + nameFirstChar + " (0 a 100):"))
}

// Segundo personagem
//  Nome
let nameSecondChar = prompt("Qual o nome do segundo personagem?")
//  Pontos de Vida
let lifeSecondChar = parseFloat(prompt("Qual a quantidade de pontos de vida do personagem " + nameSecondChar + "? (0 a 100)"))
while ((isNaN(lifeSecondChar) == true) || (lifeSecondChar < 0 || lifeSecondChar > 100)) {
    lifeSecondChar = parseFloat(prompt("Insira um valor válido para os pontos de vida do personagem " + nameSecondChar + " (0 a 100)"))
}
//  Poder de defesa
let defenseSecondChar = parseFloat(prompt("Insira o poder de defesa do personagem " + nameSecondChar + " (0 a 100):"))
while ((isNaN(defenseSecondChar) == true) || (defenseSecondChar < 0 || defenseSecondChar > 100)) {
    defenseSecondChar = parseFloat(prompt("Insira um valor válido para o poder de defesa do personagem " + nameSecondChar + " (0 a 100):"))
}
//  Escudo
let shieldSecondChar = prompt("O personagem " + nameSecondChar + " possui um escudo? (S/N)")
while (shieldSecondChar != "S" && shieldSecondChar != "N") {
    shieldSecondChar = prompt("Se o personagem possuir escudo, digite 'S'\n\nSe o personagem não possuir escudo, digite 'N'")
}

//Resultado da jogada
if (powerFirstChar > defenseSecondChar || shieldSecondChar == "N") {
    
    prompt("Resumo da jogada:\n" +
        nameFirstChar + " atacou com " + powerFirstChar + " pontos.\n" +
        nameSecondChar + " possui " + defenseSecondChar + " pontos de defesa, " + lifeSecondChar + " pontos de vida e não possui escudo.\n" +
        "O personagem " + nameSecondChar + " ficou com " + (lifeSecondChar + (defenseSecondChar - powerFirstChar)) + " pontos de vida.")

} else if (powerFirstChar > defenseSecondChar || shieldSecondChar == "N") {
    
    prompt("Resumo da jogada:\n" +
        nameFirstChar + " atacou com " + powerFirstChar + " pontos.\n" +
        nameSecondChar + " possui " + defenseSecondChar + " pontos de defesa, " + lifeSecondChar + " pontos de vida e possui escudo.\n" +
        "O personagem " + nameSecondChar + " ficou com " + (lifeSecondChar + ((defenseSecondChar - powerFirstChar)/2)) + " pontos de vida.")

} else {

    prompt("Resumo da jogada:\n" +
        nameFirstChar + " atacou com " + powerFirstChar + " pontos.\n" +
        nameSecondChar + " possui " + defenseSecondChar + " pontos de defesa.\n" +
        "Como o poder de ataque não é maior que o poder de defesa, o dano é zero."
    )

}