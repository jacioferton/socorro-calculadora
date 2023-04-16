import { adicao, subtracao, multiplicacao, divisao, fatorial, potencia, raiz, par, impar, primo } from '../calculadora.js';

//não estou consegindo usar o assert, então a função teste foi criada para deixar o código mais limpo
function testeSomar(x,y,resultado) {
    if (adicao(x,y) !== resultado) {
        console.log(`${x} + ${y} é ${resultado}, não ${adicao(x,y)}`)
    }
}
function testeSubtrair(x,y,resultado) {
    if (subtracao(x,y) !== resultado) {
        console.log(`${x} - ${y} é ${resultado}, não ${subtracao(x,y)}`)
    }
}
function testeMultiplicar(x,y,resultado) {
    if (multiplicacao(x,y) !== resultado) {
        console.log(`${x} x ${y} é ${resultado}, não ${multiplicacao(x,y)}`)
    }
}
function testeDividir(x,y,resultado) {
    if (divisao(x,y) !== resultado) {
        console.log(`${x} / ${y} é ${resultado}, não ${divisao(x,y)}`)
    }
}
function testeFatorial(x,resultado) {
    if (fatorial(x) !== resultado) {
        console.log(`!${x} é ${resultado}. ${fatorial(x)}`)
    }
}
function testePotencia(x,y,resultado) {
    if (potencia(x,y) !== resultado) {
        console.log(`${x}^${y} é ${resultado}, não ${potencia(x,y)}`)
    }
}
function testeRaiz(x,resultado) {
    if (raiz(x) !== resultado) {
        console.log(`√${x} é ${resultado}, não ${raiz(x)}`)
    }
}
function testePar(x,resultado) {
    if (par(x) !== resultado) {
        console.log(resultado)
    }
}
function testeImpar(x,resultado) {
    if (impar(x) !== resultado) {
        console.log(resultado)
    }
}
function testePrimo(x,resultado) {
    if (primo(x) !== resultado) {
        console.log(resultado)
    }
}

testeSomar(6,7,13)
testeSomar(4,0,4)
testeSomar(400,600,1000)
testeSomar(0,0,0)
testeSomar(0,-3,-3)

testeSubtrair(6,7,-1)
testeSubtrair(7,6,1)
testeSubtrair(4,0,4)
testeSubtrair(0,4,-4)
testeSubtrair(400,600,-200)
testeSubtrair(600,400,200)
testeSubtrair(0,0,0)
testeSubtrair(0,-3,3)
testeSubtrair(-3,0,-3)

testeMultiplicar(6,7,42)
testeMultiplicar(4,0,0)
testeMultiplicar(400,600,240000)
testeMultiplicar(0,0,0)
testeMultiplicar(1,-3,-3)

testeDividir(2,10,0.2)
testeDividir(10,2,5)
testeDividir(4,0,'"ERRO!"')
testeDividir(0,4,0)
testeDividir(400,500,0.8)
testeDividir(500,400,1.25)

testeFatorial(-5,'Não é possível calcular o fatorial de um número negativo')
testeFatorial(0,1)
testeFatorial(5,120)

testePotencia(5,3,125)
testePotencia(5,-3,0.008)
testePotencia(-5,3,-125)
testePotencia(-5,-3,-0.008)
testePotencia(5,2,25)
testePotencia(5,-2,0.04)
testePotencia(-5,2,25)
testePotencia(-5,-2,0.04)

testeRaiz(9,3)
testeRaiz(3, 1.7320508075688772)

testePar(1,`1 não é par`)
testePar(4,`4 é par`)
testePar(0.3,`0.3 não é par`)

testeImpar(1,`1 é impar`)
testeImpar(4,`4 não é impar`)
testeImpar(0.3,`0.3 é impar`)

testePrimo(12,`12 não é primo`)
testePrimo(9,`9 não é primo`)
testePrimo(5,`5 é primo`)
testePrimo(2,`2 é primo`)
testePrimo(0,`0 é primo`)