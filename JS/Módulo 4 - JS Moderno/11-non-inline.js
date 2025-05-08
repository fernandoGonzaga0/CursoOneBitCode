function group() {
    console.log('Export nomeado não-inline (agrupado)')
}

function a () {}
function b () {}
function c () {}

function defaultNonInline() {
    console.log('Export default não-inline.')
}

//o que diferencia a exportação não inline é usar o export com chaves, referenciando as funções nas chaves como ex abaixo

export { group, a, b, c }

export default defaultNonInline