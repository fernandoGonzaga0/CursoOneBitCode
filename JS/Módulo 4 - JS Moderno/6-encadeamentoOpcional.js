// Encadeamento opcional = permite acessar propriedades interas sem lançar erros quando uma propriedade é null ou undefined
// Funciona com ?. => operador?.value (nesse caso, se o valor do operador for vazio)

const user = {
    name: `John Doe`,
    email: `doe@gmail.com`,
    friends: [{
        name: `Mary`,
        address: {
            street: `Some Street`,
            number: 89
        }
    }], 
    age: 42, 
    phone: {
        contryCode: `+55`,
        ddd: `22`,
        number: `992873378`
    }
}

console.log(user.friends[0].phone?.ddd) // add ?. antes para verificar se phone existe, se não existir (oq é o caso), a verificação para e é retornado undefined.

console.log(user?.brothers?.[5].name) // verificando quando o erro é na posição do elemento no array