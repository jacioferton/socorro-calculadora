var xValor = document.getElementById('x')
var yValor = document.getElementById('y')
var igual = document.getElementById('igual')
const result = document.getElementById('resultado')

function adicao(x,y) {
    result.innerHTML = (x+y)
}
function subtracao(x,y) {
    result.innerHTML = (x-y)
}
function multiplicacao(x,y){
    result.innerHTML = (x*y)
}
function divisao(x,y){
    result.innerHTML = (x/y)
}
function fatorial(x){
    if (x < 0){
        result.innerHTML = ('Não é possível calcular o fatorial de um número negativo')
    } else if (x > 0){
        var fat = 1
        for (var i = 1; i <= x; i++){
            fat *= i
        }
        if (fat) {
            result.innerHTML = (fat)
        }
    } else {
        result.innerHTML = (1)
    }
}
function potencia(x,y){
    result.innerHTML = (x**y)
}
function raiz(x,y){
    result.innerHTML = (Math.sqrt(x,y))
}
function par(x){
    if ((x) % 2 === 0) {
        result.innerHTML = (`${x} é par`)
    } else {
        result.innerHTML = (`${x} não é par`)
    }
}
function impar(x){
    if ((x) % 2!== 0) {
        result.innerHTML = (`${x} é impar`)
    } else {
        result.innerHTML = (`${x} não é impar`)
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
    result.innerHTML = (`${x} é primo`)
  } else {
    result.innerHTML = (`${x} não é primo`)
  }
}


function resultado() {
    switch(document.getElementById('operacoes').value) {
        case 'adicao': adicao(Number(xValor.value), Number(yValor.value));
        break;

        case'subtracao': subtracao(Number(xValor.value), Number(yValor.value));
        break;

        case'multiplicacao': multiplicacao(Number(xValor.value), Number(yValor.value));
        break;

        case 'divisao': divisao(Number(xValor.value), Number(yValor.value));
        break;

        case 'fatorial': fatorial(Number(xValor.value));
        break;

        case 'potencia': potencia(Number(xValor.value), Number(yValor.value));
        break;

        case 'raiz': raiz(Number(xValor.value), Number(yValor.value));
        break;

        case 'par': par(Number(xValor.value));
        break;

        case 'impar': impar(Number(xValor.value));
        break;

        case 'primo': primo(Number(xValor.value));
        break;
    }
}

igual.addEventListener('click', resultado)


