// é utilizado para fornecer um valor padrão quando a expressão à esquerda é null ou undefined. Ele funciona de maneira semelhante ao operador lógico OR (||), mas com a diferença de que apenas considera null e undefined como valores inválidos, enquanto || considera valores falsy como 0, "" (string vazia) e false.

let nome = 'teste' 
let nomePadrao = 'Fernando'

let resultado = nome ?? nomePadrao // se nome for null/undefined resultado será Fernando
console.log(resultado)