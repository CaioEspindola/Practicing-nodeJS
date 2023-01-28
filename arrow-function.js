// Arrow Function:

// With one line. Don't need return.
const exArrow = name => `My name is ${name}`
console.log(exArrow('Caio'))

const sum = (num1, num2) => num1 + num2
console.log(sum(25, 25))

// With more lines. Need return.
const sumNumber = (num1, num2) => {
  if (num1 > 5 || num2 > 5) {
    return 'Somente numeros de 1 a 9'
  } else {
    return num1 + num2
  }
}
console.log(sumNumber(2, 2))
