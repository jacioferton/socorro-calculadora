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
module.exports = { adicao, subtracao, multiplicacao, divisao, fatorial, potencia, raiz, par, impar, primo }