/*
    Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. 
    Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. 
    O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo 
    se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, 
    o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda
*/

let palavra = prompt("Verificador de palíndromo.\n\nInsira aqui uma palavra:")
let palavraAoContrario = ""

/*
    Lembre-se que tamanho é diferente de posição. Ex:
    Imagine uma fila de pessoas. Cada pessoa representa uma letra em uma palavra. 
    O tamanho da fila é o número total de pessoas, e a posição de cada pessoa é o lugar dela na fila.

    BANANA -> TAMANHO: 6 
    BANANA -> POSIÇÕES: [0, 1, 2, 3, 4, 5] | [B, A, N, A, N, A]
*/

for (let i = (palavra.length -1); i >= 0; i--) {
    palavraAoContrario += palavra[i]
}

if (palavra === palavraAoContrario) {
    alert(`Palavra inserida: ${palavra}\nPalavra ao contrário: ${palavraAoContrario}\n\nA palavra é um palíndromo!`)
} else {
    alert(`Palavra inserida: ${palavra}\nPalavra ao contrário: ${palavraAoContrario}\n\nA palavra NÃO é um palíndromo!`)
}