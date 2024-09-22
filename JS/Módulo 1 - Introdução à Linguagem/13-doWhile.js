let velocidade = 0

do {
    console.log("A velocidade do veículo é " + velocidade + " km/h.")
    velocidade -= 20
} while (velocidade > 0)

console.log("Após execução, a velocidade é de: " + velocidade + " km/h.")

// A condição sempre foi falsa, mesmo assim o código foi executado. 
// Essa é uma característica do DO WHILE