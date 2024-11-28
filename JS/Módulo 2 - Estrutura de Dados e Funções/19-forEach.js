// Exibindo as informações de cada elemento em um array

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento, 
        indice, 
        array
    })
}

const lista = ['Maça', 'Banana', 'Morango']

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}