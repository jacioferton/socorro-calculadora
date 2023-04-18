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
    if (y == 0){
        return 'ERRO!'
    } else {
        return x/y
    }
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
