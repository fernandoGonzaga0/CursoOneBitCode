// OBJETOS

const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

// forma tradicional
const namePerson = person.name
console.log(namePerson)

// forma nova
const { job, parents } = person // o javascript entende que o person será desestruturado e será obtido o valor de job e parents
console.log(`Dados de Luke\nTrabalho: ${job}\nPais: ${parents}`)

// ARRAYS

const frutas = ['Limão', 'Maça', 'Pêra', 'Abacaxi'] 

// nova forma
const [frutaVerde, frutaVermelha] = frutas // nesse caso teremos que criar o nome das variáveis que captarão os dados do array por ordem 
console.log(frutaVerde, frutaVermelha)

// FUNÇÕES

function createUser({name, job, parents}) {
    const id = Math.floor(Math.random() * 9999) 
    return {
        id, 
        name,
        job,
        parents
    }
    return
}

const Luke = createUser(person)
console.log(Luke)