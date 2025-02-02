// obtendo o botão session e inserindo um evendo ouvinte

document.getElementById('sessionBtn').addEventListener('click', function() {
    const input = document.getElementById('session') 
    window.sessionStorage.setItem('info', input.value) // setando um item qualquer 'info' e dizendo que seu valor será input.value
    input.value = '' // zerando o input após gravar
})

// ler os dados de session

document.getElementById('readSession').addEventListener('click', function() {
    const info = sessionStorage.getItem('info') // criando uma constante info que receberá o conteúdo de 'info', setada no session storage
    alert('A informação salva é: ' + info)
})

// obtendo o botão localBtn 

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    window.localStorage.setItem('text', input.value) // mesma configuração do botão acima
    input.value = ''
})

// criando botão de ler os dados de local

document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text')
    alert('O texto salvo no Local Storage é: ' + t)
})

// obtendo botão cookie

document.getElementById('cookieBtn').addEventListener('click', function() {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'infoCookie=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025, 2, 1) + ';'
    const path = 'path=/';
    document.cookie = cookie + expiration + path
    input = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'infoCookie2=' + input.value + ';'
    const expiration = 'expires=' + new Date(2025, 5, 7) + ';'
    const path = 'path=/';
    document.cookie = cookie + expiration + path
    input = ''
    console.log(document.cookie)
})