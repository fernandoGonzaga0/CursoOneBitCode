// Ex para exibir uma contagem.

// let indice = 0

// for (console.log("Inicializando a contagem..."); indice <= 10; indice++) {
//     console.log("Indice = " + indice)
// }

// A estrutura do for é flexível, o único parâmetro obrigatório é a condição do meio.
// No caso acima, poderíamos retirar o indice++ do último parâmetro e adicioná-lo na própria execução do bloco, dentro das chaves {}.

let nome = "Fernando Gonzaga"
let indice = 0

for (console.log("Soletrando meu nome"); indice < nome.length;) {
    console.log(nome[indice])
    indice++
}