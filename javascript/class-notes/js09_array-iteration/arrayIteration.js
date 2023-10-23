//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.
const prices = [250, 150, 300, 500]

//? for-of
for (let price of prices) {
  console.log(price)
}
console.log("**************")

//?forEach
prices.forEach((p) => console.log(p * 1.1))

//? 2 parametreli forEach
prices.forEach((price, index) => console.log("DEGER:", price, "SIRA:", index))

//? prices'ın toplamını hesaplayiniz.
let sum = 0
prices.forEach((price) => (sum += price))
console.log("SUM:", sum)

//? 3 paramtreli foreach
//? callback func'da satir sayisi birden fazla oldugu icin suslu kullandik.
//? foreach metodu void function'dır yani bir sey dondurmez.
prices.forEach((p, i, arr) => {
  if (p < 270) {
    arr[i] = p * 1.1
  }
})
console.log(prices)

//? forEach return yapmaz
const triples = prices.forEach((p) => p * p * p)
console.log(triples) //? undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const upperCasedNames = names.map((n) => n.toLocaleUpperCase())
console.log(upperCasedNames)

//? Foreach ile zorlama çözüm
const upperNames = []
names.forEach((n) => upperNames.push(n.toLocaleUpperCase()))
console.log(upperNames)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz
const euro = 29.8
const dolar = 27.97

const tlPrices = [100, 150, 100, 50, 80]

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)))

console.log(dolarPrices)
console.log(euroPrices)

//* =======================================
//*             FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000]

const buyukOnbin = maaslar.filter((maas) => maas > 10000)
console.log(buyukOnbin, maaslar)

//? Maasi 8000 - 10000 arasinda olanlari ayri bir diziye saklayalim
const aradakiMaaslar = maaslar.filter((m) => m >= 8000 && m <= 10000)
console.log(aradakiMaaslar)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================
//? Maasi 9000'den az olanlara %50 zam yaparak bu degerleri
//? yeni diziye saklayalim.

//? declarative programming (zıttı imperative)
const dokuzBindenAz = maaslar.filter((m) => m < 9000).map((m) => m * 1.5)

console.log(dokuzBindenAz)
