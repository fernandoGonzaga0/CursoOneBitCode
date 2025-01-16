// Obtendo o formulário do HTML

const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    // Previnindo que o navegador apague os dados do console
    ev.preventDefault()
    // usando outro tipo de variação para selecionar elementos do HTML para JS
    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value // esse value pegará qualquer tipo de pão selecionado
    const main = document.querySelector('input[name="main"]').value 
    const observations = document.querySelector('textarea[name="observations"]').value
    // recebendo o checkbox
    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value + '\n'
    }) // pegando apenas os inputs que estiverem como checked

    console.log({
        name, 
        address,
        breadType,
        main,
        salad,
        observations
    })
})