// função antiga
function normalSum(a, b) {
    return a + b
}
console.log(`Soma normal: ${normalSum(3, 5)}`)

// arrow Function
const soma_ECMA_atualizado = (a, b) => a + b 
console.log(`Soma arrow function: ${soma_ECMA_atualizado(9, 5)}`)

// arrow Functions em high order function com arrays
const towns = ['São Paulo', 'Belo Horizonte', 'Piauí', 'Recife', 'Goiânia', 'Pato Branco']
    //criando um filter para selecionar todas as cidades que começam com a letra P
    const starting_with_P = towns.filter(town => town[0] === 'P') // a função é aplicada diretamente em uma única linha, criando o parâmetro town e aplicando o filtro desejado nele
    console.log(starting_with_P)