const input = require("prompt-sync")()


let resposta = 0
let al = 0
let ga = 0
let di = 0

while (resposta !== 4){
    resposta = Number(input("Digite o código: "))
    if (resposta === 1) {
        al++
    } else if (resposta === 2) {
        ga++
    } else if (resposta === 3) {
        di++
    } else {
        null
    }
}

console.log("MUITO OBRIGADO")
console.log(`Alcool: ${al}`)
console.log(`Gasolina: ${ga}`)
console.log(`Diesel: ${di}`)