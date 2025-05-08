// export -> exporta uma função/constante/variável para outros módulos JS

export function label(attributes) {
    const element = document.createElement('label')
    Object.assign(element, attributes) // Object.assign faz com que as propriedades de attributes sejam atribuídas à element. 
    return element
}

export function input (attributes) {
    const element  = document.createElement('input')
    Object.assign(element, attributes)
    return element
}

export function br() {
    const element = document.createElement('br')
    return element
}