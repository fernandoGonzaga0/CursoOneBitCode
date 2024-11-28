// Método Filter: filtra campos de elementos dentro de um array.

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Ideia sem o Filter
let orcs = []

for (i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    }
}
// console.log(orcs)

// Ideia com Filter

orcs = personagens.filter(function(parametroDeBuscaORC) { // o parametro da função validará cada propriedade 
//em cada elemento buscando o retorno TRUE, caso aconteça, o elemento é adicionado ao array orcs.
    return parametroDeBuscaORC.raca === "Orc"
})
console.log(orcs)

let humano = []
humano = personagens.filter(function(buscaHumano) {
    return buscaHumano.raca === "Humano"
})
console.log(humano)