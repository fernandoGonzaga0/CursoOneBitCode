// No exercício será vista 4 formas de exportar código pelo ESModules

// Primeira forma
import {inline} from "./11-inline.js"
inline()

// Segunda forma -> EXPORT DEFAULT DEVE SER ÚNICO NO ARQUIVO JS ORIGEM
import defaultInline from "./11-inline.js" // sem usar chaves, o import pega por padrão o export default. eu poderia usar qualquer nome, ex: import b from '11-inline.js'
defaultInline()

// Terceira forma -> Exportação non-inline
import {group, a, b, c} from "./11-non-inline.js"
group()
a()
b()
c()

// Quarta forma -> Exportação default non-inline
import defaultNonInline from "./11-non-inline.js"
defaultNonInline()