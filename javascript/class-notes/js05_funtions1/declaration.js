// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** FUNC DECLARATION **")

//* ORNEK1:
//*******************************/

//! Bir fonks deklare ettik
//? void fonksiyon(return'u olmayan fonksiyon,diğer ifade cagrildi yere bir deger dondurmeyen fonskyon)
//? parametresi olmayan fonksiyon
function topla() {
  let a = 5
  let b = 10
  let sonuc = a + b
  console.log(sonuc)
}

topla() //! invoke, calling
topla()

for (let i = 0; i < 3; i++) {
  topla()
}

//? parametreli fonks6iyon tanimlasi
// function carp(s1, s2) {
//   console.log(s1 * s2)
// }
// let s1 = +prompt("S1:")
// let s2 = +prompt("S2:")
// carp(s2, s1)

// carp(5, true)
//? Ornek: Parametreli
//? default parametre ile bos bırakılan parametre yerine bir deger atanmis olunur.
function yazdir(lang = "Hello", name = "noname") {
  console.log(`${lang} ${name}`)
}

yazdir("hello", "Ahmet")
yazdir("Hallo", "Canan")
yazdir("Canan")
yazdir()

//? veri donduren (return) fonksiyonlar.

function bol(a, b) {
  const res = a / b
  return res
}

let sonuc = bol(10, 2)
console.log("SONUC=", sonuc)

//? Ornek:
function toplama(n1, n2, n3) {
  return n1 + n2 + n3
}
console.log(`SONUC=${toplama(3, 5, 7)}`)

//? Ornek:Tek-Cift
//? Console'dan girilen bir sayinin tek veya cift oldgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar ile yaziniz.

function tekVeyaCift(num) {
  return num % 2 === 0 ? "CIFT" : "TEK"
}

const sayi = Number(prompt("Bir sayi giriniz:"))
console.log(`${sayi} ${tekVeyaCift(sayi)} dır`)

//? 1.Yöntemdeki fonksyonu konumu

yaz()

//? hoisted fonksiyon (Yukarı taşınıyor)
function yaz() {
  console.log("Merhaba")
}

yaz()
yaz()
