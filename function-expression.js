//Declara uma variavel com uma função de valor.

const soma = function (numb1, numb2) {
  return numb1 + numb2
}

console.log(soma(5, 5))

//É possivel chamarmos a função declarada antes dela existir
console.log(apresentar())

function apresentar() {
  return 'Hello!'
}
