let fila = []
let menu = ""

do {

    let pacientes = ""
    for(let i = 0; i < fila.length; i++) {
        pacientes += (i+1) + "° - " + fila[i] + "\n"
    }

    menu = parseFloat(prompt(`Fila:\n${pacientes}\nO que será feito?\n1) Novo Paciente\n2) Consultar Paciente\n3) Sair
        `))

    switch(menu) {

        case 1:
            const novosPacientes = prompt("Qual o nome do próximo paciente?")
            fila.push(novosPacientes)
            break
        
        case 2:
            //pacienteConsultado pegará o primeiro elemento do array, deixando o array fila com -1 elementos.
            const pacienteConsultado = fila.shift()
            if (pacienteConsultado == undefined) {
                alert("Não há pacientes na fila!")
            } else {
                alert(`Paciente ${pacienteConsultado} consultado!`)
            }
            break
        case 3:
            alert("Encerrando o programa...")
            break
        default:
            alert("Algo deu errado...")
    }

} while (menu !== 3)