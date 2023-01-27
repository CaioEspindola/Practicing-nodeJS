// Parametro de função

function soma(numb1, numb2) {
  return numb1 + numb2
}

console.log(soma(2, 2))
console.log(soma(50, 50))
console.log(soma(-500, 450))

//parametos e argumentos

//Order of parameters

function NameAge(name, age) {
  return `My name is ${name}! I am ${age} years old.`
}

console.log(NameAge('Caio', 35))
console.log(NameAge(35, 'Caio'))

function multiplication(numb1, numb2) {
  return numb1 * numb2
}

console.log(multiplication(soma(5, 5), soma(5, 5)))
