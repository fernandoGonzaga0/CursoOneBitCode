// Reduce: transforma array em outro valor (outro array, objeto, número, etc.)
// Não altera o array original, o callback é adicionado na variável destino

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Somando todos os níveis dos personagens

const nivelTotal = personagens.reduce(function (valorAcumulado, personagemAtual) { 
    // a função de callback agora tem primeiro um valor acumulado e depois um valor que é percorrido pelos elementos (1, 2)
    return valorAcumulado + personagemAtual.nivel // o valor acumulado recebe um número e vai se atualizando com o callback personagem.nivel de cada elemento
}, 0) // esse zero é o valor atribuído ao valorAcumulado no início da aplicação da função.

// console.log(nivelTotal)

// Utilizando o array para criar um objeto que agrupa os elementos por RAÇA

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca] === "Orc") { // nessa linha, a cada passada de elemento ele valida se a propriedade raca é igual a orc, se for, adiciona ao objeto  
        valorAcumulado[personagem.raca].push(personagem) //se for true, o array é jogado para o objeto valorAcumulado
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {}) // racas = {} inicialmente

console.log(racas)