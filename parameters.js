// Parameters and Arguments.

//Ex: 1

//            Parameters
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(2, 2)) //Arguments
console.log(sum(50, 50))
console.log(sum(-500, 450))

//Ex: 2

//               Parameters
function NameAge(name, age) {
  return `My name is ${name}! I am ${age} years old.`
}

console.log(NameAge('Caio', 35)) //Arguments

//Ex: 3

//                      Parameters
function multiplication(num1, num2) {
  return num1 * num2
}

console.log(multiplication(sum(5, 5), sum(5, 5))) //Arguments
