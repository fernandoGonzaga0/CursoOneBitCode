let jogadoresFutebol = ["Messi", "CR7", "Ibra", "Ronaldo", "Vini"]
console.log(jogadoresFutebol)

let jogadoresBasquete = ["Jokic", "Curry", "LeBron", "Kobe"]
console.log(jogadoresBasquete)

let pilotosF1 = ["Hamilton", "Norris", "Max"]
console.log(pilotosF1)

// Concatenando arrays

let atletas = jogadoresFutebol.concat(jogadoresBasquete, pilotosF1)
console.log(atletas)

// Substituindo elementos em array

const atletasCampeoes = pilotosF1.splice(1, 1, "Schumacher")
console.log(atletasCampeoes)
console.log(pilotosF1)

// Iterando sobre os elementos de array

for (let i = 0; i < atletas.length; i++) {
    const posicaoDoAtleta = atletas[i]
    console.log(posicaoDoAtleta + " se encontra na posição " + i)
}