// ? ========================================
// ?             RECURSION
// ? ========================================

//* Kendi kendi cagiran fonksiyona recursive fonksiyon denilir.
//* Ozellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

console.log("*** RECURSION ***")

//? Faktoriyel (Donguler)
//? 5.4.3.2

const faktoriyel = (n) => {
  let result = 1
  for (let i = n; i > 1; i--) {
    result = result * i
  }
  return result
}

console.log(faktoriyel(5))

//? Rekursif
//? 5! = 5 . 4! => n! = n.(n-1)!

const faktoRekursif = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * faktoRekursif(n - 1)
  }
}

console.log(faktoRekursif(5))
