// Métodos em JS são funções dentro de objetos.

let pessoa = {
    nome: `Fernando Gonzaga`,
    idade: 24,
    //nesse momento estou criando um método em JS, que será uma função dentro de um objeto
    dizerOla() {
        console.log(`Olá! Me chamo ${this.nome}`) // this nesse caso utiliza a propriedade 'nome' de dentro do objeto
    }
}
console.log(pessoa.nome)
pessoa.dizerOla()