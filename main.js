import { adicao, subtracao, multiplicacao, divisao, fatorial, potencia, raiz, par, impar, primo } from './funcoes.js'

var xValor = document.getElementById('x')
var yValor = document.getElementById('y')
var igual = document.getElementById('igual')
const result = document.getElementById('resultado')

function resultado() {
    if (xValor.value !== '' && yValor.value !== '') {
        switch(document.getElementById('operacoes').value) {
            case 'adicao': result.innerHTML = adicao(Number(xValor.value), Number(yValor.value));
            break;
            
            case'subtracao': result.innerHTML = subtracao(Number(xValor.value), Number(yValor.value));
            break;
        
            case'multiplicacao': result.innerHTML = multiplicacao(Number(xValor.value), Number(yValor.value));
            break;
        
            case 'divisao': result.innerHTML = divisao(Number(xValor.value), Number(yValor.value));
            break;
        
            case 'fatorial': result.innerHTML = fatorial(Number(xValor.value));
            break;

            case 'potencia': result.innerHTML = potencia(Number(xValor.value), Number(yValor.value));
            break;
        
            case 'raiz': result.innerHTML = raiz(Number(xValor.value), Number(yValor.value));
            break;

            case 'par': result.innerHTML = par(Number(xValor.value));
            break;

            case 'impar': result.innerHTML = impar(Number(xValor.value));
            break;
        
            case 'primo': result.innerHTML = primo(Number(xValor.value));
            break;
        }
    } else {
        alert('Por favor insira um valor para ser calculado')
    }
}

igual.addEventListener('click', resultado)