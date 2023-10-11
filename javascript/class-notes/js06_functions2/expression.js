// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/

//! ReferenceError: Cannot access 'topla' before initialization
//? bu yontemde hoisting olmadigi once fonksyinun tanimlanmasi sonrasinda
//? kullanilmasi gerekir.
// console.log(topla(2, 3))

//? function expression yontemi ile bir fokns. tanimlanmasi
const topla = function (a, b) {
  return a + b
}

console.log("Toplam:", topla(3, 7))

//* ORNEK2:
//***********************************************/

const tekVeyaCift = function (num) {
  const result = num % 2 ? "TEK" : "CIFT"
  return `${num} ${result} dir`
}

console.log(tekVeyaCift(5))
console.log(tekVeyaCift(6))

//* ORNEK3:
//***********************************************/

const bulEnBuyuk = function (s1, s2, s3) {
  return Math.max(s1, s2, s3)
}

console.log("EN BUYUK=", bulEnBuyuk(4, 2, 5))
