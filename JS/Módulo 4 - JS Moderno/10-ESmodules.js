import { label, input, br } from "./10-functions.js"

console.log(label({for: 'fullname', textContent: 'Nome Completo'}))
console.log(input({id: 'fullname', name: 'fullname', placeHolder: 'Digite seu nome completo...'}))
console.log(br())