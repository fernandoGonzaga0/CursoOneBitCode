// Um array bidimensional é um array que possui outro(s) dentro dele

// 1° Exemplo

const arr = [
    "1° nível",
    ["2° nível"],
    [
        ["3° nível - Primeiro item"],
        ["3° nível - Segundo item"]
    ],
    [
        [
            ["4° nível - Primeiro item"],
            ["4° nível - Segundo item"]
        ]
    ]
]

// Para percorrer entre os itens de um array bidimensional, basta ir concatenando os índices de sua cadeia de posições com [].

console.log(arr[2][1])
console.log(arr[3][0][1])
console.table(arr)

// 2° Exemplo

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

// Realizando manipulações de array com arrays bidimensionais

matriz[0].push("l1, c5")
console.table(matriz)

// 3° - Exemplo

// Iterando em um array | Length está pegando o tamanho do array, que é 3. Os índices são 0, 1 e 2 e vamos trabalhar com isso para exibir todas as linhas.

// Nessa linha estamos iterando i enquanto ele for menor que o tamanho de matriz para chegar em cada linha do array
for (let i = 0; i < matriz.length; i++) {
    //nessa linha estamos iterando j para chegar em cada item de cada linha do array, afim de exibir a posição da linha (linha mesmo) e índice dos itens dessa linha (que tratamos como coluna)
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição (" + i + " , " + j + ") Valor: " + elemento)
    }
}