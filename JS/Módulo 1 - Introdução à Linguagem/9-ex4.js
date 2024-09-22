alert("Esse programa calcula conversões de um valor em metros para outras medidas.")

let valor = parseFloat(prompt("Insira um valor em metros:"))

while (valor < 0 || Number.isInteger(valor) == false) {
    alert("Insira um número válido!")
    valor = parseFloat(prompt("Insira um valor em metros:"))
}

let unidade = parseFloat(prompt("Para qual unidade você deseja converter " + valor + " metro(s)? (Insira o número da opção)\n" +
                "1) Milímetro (mm)\n2) Centímetro (cm)\n3) Decímetro (dm)\n4) Decâmetro (dam)\n5) Hectômetro (hm)\n 6) Quilômetro (km)"))

while (unidade < 0 || Number.isInteger(unidade) == false) {
    alert("Insira um número válido!")
     unidade = parseFloat(prompt("Para qual unidade você deseja converter " + valor + " metros? (Insira o número da opção)\n" +
     "1) Milímetro (mm)\n2) Centímetro (cm)\n3) Decímetro (dm)\n4) Decâmetro (dam)\n5) Hectômetro (hm)\n 6) Quilômetro (km)"))
}

switch (unidade) {
    case 1:
        alert("Convertendo " + valor + " metro(s) para milímetro(s), temos: " + (valor*1000) + " milímetro(s).")
        break
    case 2:
        alert("Convertendo " + valor + " metro(s) para centímetro(s), temos: " + (valor*100) + " centímetro(s).")
        break
    case 3:
        alert("Convertendo " + valor + " metro(s) para decímetro(s), temos: " + (valor*10) + " decímetro(s).")
        break
    case 4:
        alert("Convertendo " + valor + " metro(s) para decâmetro(s), temos: " + (valor/10) + " decâmetro(s).")
        break
    case 4:
        alert("Convertendo " + valor + " metro(s) para hectômetro(s), temos: " + (valor/100) + " hectômetro(s).")
        break
    case 4:
        alert("Convertendo " + valor + " metro(s) para quilômetro(s), temos: " + (valor/1000) + " quilômetro(s).")
        break
    default:
        alert("Algo deu errado. Finalizando...")
}
