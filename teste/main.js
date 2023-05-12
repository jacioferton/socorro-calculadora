var xValor = document.getElementById('x')
var yValor = document.getElementById('y')
var igual = document.getElementById('igual')
var adicaoN = document.getElementById('adicaoN')
var subtracaoN = document.getElementById('subtracaoN')
var multiplicacaoN = document.getElementById('multiplicacaoN')
var divisaoN = document.getElementById('divisaoN')
var fatorialN = document.getElementById('fatorialN')
var potenciaN = document.getElementById('potenciaN')
var raizN = document.getElementById('raizN')
var parN = document.getElementById('parN')
var imparN = document.getElementById('imparN')
var primoN = document.getElementById('primoN')
var result = document.getElementById('resultado')

function alertaDoisValores() {
    if (xValor.value === '' || yValor.value === '') {
        alert('Por favor insira um valor para ser calculado')
        return true
    }
}
function alertaUmValor() {
    if (xValor.value == 0) {
        alert('Por favor insira um valor para ser calculado')
        return true
    }
}
function adicaoBtn() {
    if (alertaDoisValores()) {} else {
        result.innerHTML = adicao(Number(xValor.value), Number(yValor.value));
    }
}
function subtracaoBtn() {
    if (alertaDoisValores()) {} else {
        result.innerHTML = subtracao(Number(xValor.value), Number(yValor.value));
    }
}
function multiplicacaoBtn() {
    if (alertaDoisValores()) {} else {
        result.innerHTML = multiplicacao(Number(xValor.value), Number(yValor.value));
    }
}
function divisaoBtn() {
    if (alertaDoisValores()) {} else {
        result.innerHTML = divisao(Number(xValor.value), Number(yValor.value));
    }
}
function fatorialBtn() {
    if (alertaUmValor()) {} else {
        result.innerHTML = fatorial(Number(xValor.value));
    }
}
function potenciaBtn() {
    if (alertaDoisValores()) {} else {
        result.innerHTML = potencia(Number(xValor.value), Number(yValor.value));
    }
}
function raizBtn() {
    if (alertaUmValor()) {} else {
        result.innerHTML = raiz(Number(xValor.value));
    }
}
function parBtn() {
    if (alertaUmValor()) {} else {
        result.innerHTML = par(Number(xValor.value));
    }
}
function imparBtn() {
    if (alertaUmValor()) {} else {
        result.innerHTML = impar(Number(xValor.value));
    }
}
function primoBtn() {
    if (alertaUmValor()) {} else {
        result.innerHTML = primo(Number(xValor.value));
    }
}

function adicao(x,y) {
    return x+y
}
function subtracao(x,y) {
    return x-y
}
function multiplicacao(x,y){
    return x*y
}
function divisao(x,y){
    if (y == 0){
        return 'ERRO!'
    } else {
        return x/y
    }
}
function fatorial(x){
    if (x < 0){
        return 'Não é possível calcular o fatorial de um número negativo'
    } else if (x > 0){
        var fat = 1
        for (var i = 1; i <= x; i++){
            fat *= i
        }
        if (fat) {
            return fat
        }
    } else {
        return 1
    }
}
function potencia(x,y){
    return x**y
}
function raiz(x){
    return Math.sqrt(x)
}
function par(x){
    if ((x) % 2 === 0) {
        return `${x} é par`
    } else {
        return `${x} não é par`
    }
}
function impar(x){
    if ((x) % 2!== 0) {
        return `${x} é impar`
    } else {
        return `${x} não é impar`
    }
}
function primo(x){
    let pri = true;
  for(let i = 2; i < x; i++) {
    if(x % i === 0) {
      pri = false;
      break;
    }
  }
  
  if(pri) {
    return `${x} é primo`
  } else {
    return `${x} não é primo`
  }
}

adicaoN.addEventListener('click', adicaoBtn);
subtracaoN.addEventListener('click', subtracaoBtn);
multiplicacaoN.addEventListener('click',multiplicacaoBtn);
divisaoN.addEventListener('click', divisaoBtn);
fatorialN.addEventListener('click', fatorialBtn);
potenciaN.addEventListener('click',potenciaBtn);
raizN.addEventListener('click', raizBtn);
parN.addEventListener('click', parBtn);
imparN.addEventListener('click',imparBtn);
primoN.addEventListener('click',primoBtn);