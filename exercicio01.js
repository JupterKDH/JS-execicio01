alert('Hora do cálculo, escolha 2 números para fazer as operações')

let numberOne = Number(prompt('Escolha o primeiro número'))
let numberTwo = Number(prompt('Escolha o segundo número'))

// Operações

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mult)
alert('Divisão: ' + div.toFixed(2))
alert('Resto da divisão: ' + restDiv)

if(sum %2 == 0) {
  alert(`A soma dos números é par: ${sum}`)
} else {
  alert(`A soma dos números é impar: ${sum}`)
}

if(numberOne == numberTwo) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes')
}
