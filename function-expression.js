//Function Expression:

//Declare one variable with a function in its value.
const sum = function (num1, num2) {
  return num1 + num2
}
console.log(sum(5, 5))

//Its possible call a function declareted befor she exist.
console.log(introduce())

function introduce() {
  return 'Hello!'
}
