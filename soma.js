var xValor = document.getElementById('x')
var yValor = document.getElementById('y')
var igual = document.getElementById('igual')

function soma(x,y) {
    alert(x+y)
}

function resultado() {
    soma(Number(xValor.value), Number(yValor.value))
}

igual.addEventListener('click', resultado)
