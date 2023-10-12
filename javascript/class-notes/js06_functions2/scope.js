// ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

//? Global degiskenler
// let num1 = 11
let num2 = 22

const funk1 = () => {
  let num1 = 44 //? Function-scoped degiskendir
  num1++
  return num1
}
//? foknsiyondan gelen deger num1 adindaki global degiskene atarildi.
let num1 = funk1()
console.log(num1) //? global num1

//! Uncaught SyntaxError: Identifier 'num1' has already been declared
// const num1 = 55

{
  let x = 5
  x++
  let y = x + 15
  num1++
  console.log(y) //? blocked-scope degisken
}
// console.log(y) //! Global scope: Uncaught ReferenceError: y is not defined at
console.log(num1)

//? VAR
num3 = 99
var num3 //? hoisted (en yukarıya tasinmis gibi olur)
console.log(num3)

var result = "Hallo"

if (num3 === 100) {
  let result = "Hi" //? local(blocked scope) result
  console.log(result) //? Hi
} else {
  var result = "Salut" //? Global result
  console.log(result) //? Salut
}

console.log(result) //? global result
