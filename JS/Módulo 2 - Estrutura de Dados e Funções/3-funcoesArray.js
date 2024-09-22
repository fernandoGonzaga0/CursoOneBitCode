const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandolf"]
console.log(arr)

// Adicionar elementos no final de um array

let tamannhoAposAdd = arr.push("Fernando")
console.log(tamannhoAposAdd) //ao imprimir uma variável que realiza um push em array, será imprimido seu tamanho atual.
console.log(arr)

// Adicionar elementos no começo de um array
tamannhoAposAdd = arr.unshift("Lucas")
console.log(tamannhoAposAdd) // //ao imprimir uma variável que realiza um unshift em array, será imprimido o tamanho atual desse array.
console.log(arr)

// Removendo elementos no final de um array 
const ultimoelemento = arr.pop() 
console.log(ultimoelemento)
console.log(arr)

// Removendo elementos do início de um array
const primeiroElemento = arr.shift()
console.log(primeiroElemento)
console.log(arr)

// Pesquisando por um elemento com includes
const pesquisaElemento = arr.includes("Sam")
console.log(pesquisaElemento)

// Pesquisando pela posição de um elemento com indexOf
const pesquisaIndexOf = arr.indexOf("Sam")
console.log(pesquisaIndexOf)

// Cortando um array (cria uma cópia de uma parte do array)
const cortarArray = arr.slice(0, 3)
console.log(cortarArray)
console.log(arr)

// cortarArray.push("Teste de adição")
// console.log(arr)
// console.log(cortarArray)

// 