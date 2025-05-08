// Operador que permite espalhar os elementos de um objeto iterável, como um array ou uma string
// Utiliza três pontos: ...iterableObject

//Exemplo de uso de spread
let srt = `Olá mundo!`
let arr = [2, 4, 1, 5, 2]
console.log(...arr) // separa as letras 
console.log(...srt) // separa os números

//Exemplo de por que utilizar o spread em alguns casos *caso abaixo n usa
const towns = ['São Paulo', 'Belo Horizonte', 'Piauí', 'Recife', 'Goiânia', 'Pato Branco']
const townsCopy = towns // gerando a constante assim, estaremos referenciando townsCopy em towns, qualquer alteração feita em townsCopy afetará o array original
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Rio Verde')
console.log({towns, townsCopy})

//Exemplo de utilização do spread
const frutas = ['Maça', 'Uva', 'Melancia', 'Banana', 'Limão', 'Morango']
const frutasComLegumes = [...frutas] // aqui clonamos os dados de frutas para a nova constante frutasComLegumes
frutasComLegumes.push('Cenoura', 'Pepino', 'Jiló')
console.log({frutas, frutasComLegumes})

//Exemplo de utilização do spread em objetos
const carros = ['Mercedes AMG', 'Fusca 2000', 'Honda City', 'Mustang']
const carrosObj = {...carros} // criando uma cópia em objeto
const carrosObjParaCriacao = {...carrosObj} // após a obtenção do objeto a partir do array, crio outra cópia para inserção de parâmetros novos
carrosObjParaCriacao.novoCarro = 'Aston Martin'
console.log({carros, carrosObj, carrosObjParaCriacao})


// adicionando um elemento ao final do array
const predios = ['1', '2', '3']
const newPredios = [...predios, 5]
console.log(newPredios)