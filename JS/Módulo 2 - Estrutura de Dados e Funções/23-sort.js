// Método sort = ordenação
// Obs: o array original é modificado com essa utilização

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Ordenando o array por nível

const personagensOrdenados = personagens.slice().sort(function (a, b) { //slice retira uma cópia do array original e deposita na constante, evitando então a edição do array original
    return a.nivel - b.nivel // nesse caso, sort compara a e b, se a for menor ele joga o valor à frente e compara com o próximo
    //realizando então a ordenação.
})

console.log(personagens)
console.log(personagensOrdenados)

Date()