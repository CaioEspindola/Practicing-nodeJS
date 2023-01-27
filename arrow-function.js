const name = 'Caio'

function introduce(name) {
  return 'My name is ${name}'
}

// Arrow Function
const exArrow1 = name => 'My name is ${name}'
console.log(exArrow1('Caio'))

const soma = (num1, num2) => num1 + num2
console.log(soma(25, 25))

//Arrow function with more lines

const somaNumber = (num1, num2) => {
  if (num1 > 5 || num2 > 5) {
    return 'Somente numeros de 1 a 9'
  } else {
    return num1 + num2
  }
}

console.log(somaNumber(2, 2))
