var xValor = document.getElementById('x')
var yValor = document.getElementById('y')
var igual = document.getElementById('igual')
const result = document.getElementById('resultado')

export function adicao(x,y) {
    return x+y
}
export function subtracao(x,y) {
    return x-y
}
export function multiplicacao(x,y){
    return x*y
}
export function divisao(x,y){
    return x/y
}
export function fatorial(x){
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
export function potencia(x,y){
    return x**y
}
export function raiz(x){
    return Math.sqrt(x)
}
export function par(x){
    if ((x) % 2 === 0) {
        return `${x} é par`
    } else {
        return `${x} não é par`
    }
}
export function impar(x){
    if ((x) % 2!== 0) {
        return `${x} é impar`
    } else {
        return `${x} não é impar`
    }
}
export function primo(x){
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


function resultado() {
    switch(document.getElementById('operacoes').value) {
        case 'adicao': result.innerHTML = adicao(Number(xValor.value), Number(yValor.value));
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