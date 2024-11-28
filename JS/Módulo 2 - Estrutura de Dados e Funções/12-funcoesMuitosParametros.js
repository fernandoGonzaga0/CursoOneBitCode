function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    console.log(`Olá, ${nome}, seus dados são:\n
        Telefone: ${telefone}\nEndereço: ${endereco}\nAniversário: ${aniversario}\nEmail: ${email}\nSenha: ${senha}`
    )
}

// Ao invés de chamar a função acima por muitosParametros('Fernando', 649929873378.....), fazemos o seguinte:

function objetoComoParametroDaFuncao (usuario) {
    usuario.nome
    usuario.telefone
    usuario.endereco 
    usuario.aniversario
    usuario.email
    usuario.senha
    console.log(usuario)
}

const user1 = {
    nome: 'Fernando Gonzaga',
    telefone: 64992873378,
    endereco: 'Rua Tulipas, Q 12',
    aniversario: '21/07/2024',
    email: 'fernandooliv2107@gmail.com',
    senha: 221144
}

const user2 = {
    nome: 'Lucas',
    telefone: 6492455423,
    endereco: 'Centro',
    aniversario: '23/07/2024',
    email: 'lucas@gmail.com',
    senha: 221144
}

objetoComoParametroDaFuncao(user1)
objetoComoParametroDaFuncao(user2)