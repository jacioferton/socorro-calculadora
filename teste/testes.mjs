//let assert = require("assert")
import pkg from '../funcoes.js'
const { adicao, subtracao, multiplicacao, divisao, fatorial, potencia, raiz, par, impar, primo } = pkg

console.assert(adicao(6,7) == 13, "6 + 7 é 13")
console.assert(adicao(4,0) == 4, "4 + 0 é 4")
console.assert(adicao(400,600) == 1000, "400 + 600 é 1000")
console.assert(adicao(0,0) == 0, "0 + 0 é 0")
console.assert(adicao(0,3) == 3, "0 + 3 é 3")

console.assert(subtracao(6,7) == -1, "6 - 7 é -1")
console.assert(subtracao(7,6) == 1, "7 - 6 é 1")
console.assert(subtracao(4,0) == 4, "4 - 0 é 4")
console.assert(subtracao(0,4) == -4, "0 - 4 é -4")
console.assert(subtracao(400,600) == -200, "400 - 600 é -200")
console.assert(subtracao(600,400) == 200, "600 - 400 é 200")
console.assert(subtracao(0,0) == 0, "0 - 0 é 0")
console.assert(subtracao(0,-3) == 3, "0 - 3 é 3") 
console.assert(subtracao(-3,0) == -3, "3 - 0 é -3")

console.assert(multiplicacao(6,7) == 42, "6 x 7 é 42")
console.assert(multiplicacao(4,0) == 0, "4 x 0 é 0")
console.assert(multiplicacao(400,600) == 240000, "400 x 600 é 240000")
console.assert(multiplicacao(0,0) == 0, "0 x 0 é 0")
console.assert(multiplicacao(1,-3), "1 x -3 é -3")

console.assert(divisao(2,10) == 0.2, "2 / 10 é 0.2")
console.assert(divisao(10,2) == 5, "10 / 2 é 5")
console.assert(divisao(4,0) == "ERRO!", "ERRO! não pode dividir nada por 0")
console.assert(divisao(0,4) == 0, "0 / 4 é 0")
console.assert(divisao(400,500) == 0.8, "400 / 500 é 0.8")
console.assert(divisao(500,400) == 1.25, "500 / 400 é 1.25")

console.assert(fatorial(-5) == "Não é possível calcular o fatorial de um número negativo", "ERRO! deve aparecer 'Não é possível calcular o fatorial de um número negativo'")
console.assert(fatorial(0) == 1, "!0 é 1")
console.assert(fatorial(5) == 120, "!5 é 120")

console.assert(potencia(5,3) == 125, "5^3 é 125")
console.assert(potencia(5,-3) == 0.008, "5^-3 é 0.008")
console.assert(potencia(-5,3) == -125, "-5^3 é -125")
console.assert(potencia(-5,-3) == -0.008, "-5^-3 é -0.008")
console.assert(potencia(5,2) == 25, "5^2 é 25")
console.assert(potencia(5,-2) == 0.04, "5⁻2 é 0.04")
console.assert(potencia(-5,2) == 25, "-5^2 é 25")
console.assert(potencia(-5,-2) == 0.04, "-5^-2 é 0.04")

console.assert(raiz(9) == 3, "A raiz de 9 é 3")
console.assert(raiz(3) == 1.7320508075688772, "A raiz de 3 é 1.7320508075688772")

console.assert(par(1) == "1 não é par", "1 não é par")
console.assert(par(4) == "4 é par", "4 é par")

console.assert(impar(1) == "1 é impar", "1 é impar")
console.assert(impar(4) == "4 não é impar", "4 não é impar")

console.assert(primo(12) == "12 não é primo", "12 não é primo")
console.assert(primo(9) == "9 não é primo", "9 não é primo")
console.assert(primo(5) == "5 é primo", "5 é primo")
console.assert(primo(2) == "2 é primo", "2 é primo")
console.assert(primo(0) == "0 é primo", "0 é primo")