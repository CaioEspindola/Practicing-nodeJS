// Conversão Implícitas.
// Acontece nos "bastidores do JS", sendo fruto de alguma operação, como a de comparação.

const number = 5
const text = '5'

//console.log(number == text) //true
console.log(number === text) //false

//typeof //Tipo de dado que a variável está armazenando.

console.log(typeof number)
console.log(typeof text)

// == Compara apenas o valor.
// === Compara o valor e o tipo de dado.

// Conversão Explícitas

// Quando usamos algum recurso da linguagem para forçar uma coerção.
// Ex: Utilizar parseInt(“42”) na string, que resultará o number 42.

Number()
String()
