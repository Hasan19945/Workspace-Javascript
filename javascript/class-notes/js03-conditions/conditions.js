// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

const sayi1 = 0
if (sayi1 < 0) {
  console.log("Sayi negatiftir")
} else if (sayi1 > 0) {
  console.log("Sayi pozitiftir")
} else {
  console.log("Sayi 0 a eşittir")
}

const grade = 20
let sonuc = ""

if (grade < 0 || grade > 100) {
  console.log("Hatali not girisi")
} else if (grade < 40) {
  sonuc = "FF"
} else if (grade < 55) {
  sonuc = "DD"
} else if (grade < 70) {
  sonuc = "CC"
} else if (grade < 85) {
  sonuc = "BB"
} else {
  sonuc = "AA"
}
//! Kısa hali
if (sonuc) {
  console.log("SONUC:", sonuc)
}

//? uzun hali
if (Boolean(sonuc) == true) {
  console.log("SONUC:", sonuc)
}

//? ODEV: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
const n1 = 6
const n2 = 7
const n3 = 7

//? 1. YONTEM
if (n1 >= n2 && n1 >= n3) {
  console.log("En büyük:", n1)
} else if (n2 >= n1 && n2 >= n3) {
  console.log("En büyük:", n2)
} else if (n3 >= n1 && n3 >= n2) {
  console.log("1-En büyük:", n3)
}
//? 2. YONTEM
//? nested if
if (n1 >= n2) {
  if (n1 >= n3) {
    console.log("2-En büyük:", n1)
  }
}
if (n2 >= n1) {
  if (n2 >= n3) {
    console.log("2-En büyük:", n2)
  }
}
if (n3 >= n1) {
  if (n3 >= n2) {
    console.log("2-En büyük:", n3)
  }
}
//**************** TERNARY *******************
//? if-else
const not = 60

const result = not >= 50 ? "GEÇTİ" : "KALDI"
console.log(result)

let gecenOgrenciSayisi = 0
let kalanOgrenciSayisi = 0

not >= 50 ? (gecenOgrenciSayisi = gecenOgrenciSayisi + 1) : kalanOgrenciSayisi++

console.log({ gecenOgrenciSayisi })
console.log({ kalanOgrenciSayisi })

//? Nested ternary (birden fazla kosul varsa - if-elseif-else)
const hız = 85
const mesaj = hız >= 120 ? "Hızlı" : hız >= 90 ? "Normal" : "Yavaş"
console.log(mesaj)

//? Tek kosullu ternary - if()
const hizmetYili = 2
let maas = 15000

hizmetYili >= 5 ? (maas *= 1.1) : ""
console.log(maas)

//**************** SHORT-CIRCUIT *******************
//? short-circut yonteminde aradaki operator && ise kosul doğru oldugunda var olan ifadeyi calistirir. Aksi takdirde bir sey calisitirmaz.
//! ampersand
hizmetYili >= 5 && (maas *= 1.1)

//? short-circut yonteminde aradaki operator || ise kosul yanlis oldugunda var olan ifadeyi calistirir. Aksi takdirde bir sey calisitirmaz.

//! pipe
hizmetYili >= 5 || (maas *= 1.1)
console.log(maas)

//**************** SWITCH-CASE *******************
const gun = 6

switch (gun) {
  case 1:
    console.log("Pazartesi")
    break
  case 2:
    console.log("Sali")
    break
  case 3:
    console.log("Carsamba")
    break
  case 4:
    console.log("Persembe")
    break
  case 5:
    console.log("Cuma")
    break
  default:
    console.log("Hafta sonu")
    break
}
