// Método MAP = a partir de um array existente, criamos um array baseado nele (o array original não é modificado).
// A criação parte da aplicação de uma função em cada elemento do array.

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// ideia sem o MAP
let nomes = []
for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
}
//console.log(nomes)

//ideia com o MAP
nomes = personagens.map(function (personagem) {
    return personagem.nome // nesse momento o JS passeia por cada elemento aplicando essa função e inserindo no array 'nomes'
})
console.log(nomes)