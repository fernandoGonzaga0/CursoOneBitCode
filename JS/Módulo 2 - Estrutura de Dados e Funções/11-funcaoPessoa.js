function criarUsuario(nome, email, senha, tipoUser) {

    const usuario = {
        nome: nome, //no JS, poderia escrever apenas 'nome,' 
        email: email, 
        senha: senha, 
        tipoUser: tipoUser
    }

    console.log(usuario)
}

criarUsuario('Fernando Gonzaga', 'fernandooliv2107@gmail.com', 112253, 'ADM')

// É possível adicionar um valor padrão para qualquer parâmetro na função, porém é preciso tomar cuidado com a posição dessas informações.
//Ex:
function cirarTime(nome, estado = "Estado não definido", email, fone) {
//estado não definido só aparecerá quando o objeto estado não for informado

    const time = {
        nome: nome,
        estado: estado,
        email: email,
        fone: fone
    }
    console.log(time)
}

cirarTime('Corinthians', 'corinthians@email.com', 2199988833388) 
// No caso acima, deixar esse campo ESTADO vazio pensando que será feita a inserção
// do campo automaticamente é um erro (observe a impressão do time), o ideal é jogar todos os parâmetros
// com valores padrões para o final da função

