//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***")

const notlar = [20, 55, 100, 89, 32]
let toplam = 0
for (let i = 0;
   i < notlar.length;
   
i++) {
  toplam += notlar[i]
  // console.log(toplam)
}
console.log("TOPLAM:", toplam)

//?-------------- ÖRNEK -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

// const ellidenKucukler = []
// const ellidenBuyukler = []

// for (let i = 0; i < notlar.length; i++) {
//   notlar[i] < 50
//     ? ellidenKucukler.push(notlar[i])
//     : ellidenBuyukler.push(notlar[i])
// }

// console.log(ellidenBuyukler)
// console.log(ellidenKucukler)
// console.log(notlar)

//?-------------- ÖRNEK (FOR-IN) -------------------
//? notlar dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayri diziye kaydediniz.

// const ellidenKucukler = []
// const ellidenBuyukler = []

// for (let i in notlar) {
//   if (notlar[i] < 50) {
//     ellidenKucukler.push(notlar[i])
//   } else {
//     ellidenBuyukler.push(notlar[i])
//   }
// }

// console.log(ellidenBuyukler)
// console.log(ellidenKucukler)
// console.log(notlar)

//?-------------- ÖRNEK (FOR-OF) -------------------

const ellidenKucukler = []
const ellidenBuyukler = []

for (let not of notlar) {
  not < 50 ? ellidenKucukler.push(not) : ellidenBuyukler.push(not)
}

console.log(ellidenBuyukler)
console.log(ellidenKucukler)
console.log(notlar)

//*-------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const ogrenciBul = (ad) => {
  let sayac = 0
  for (let ogrenci of ogrenciler) {
    ogrenci === ad && sayac++ //? short-circuit
  }

  return sayac === 0
    ? `${ad} bulunamamistir.`
    : `${ad}, ${sayac} adet bulunmustur.`
}
console.log(ogrenciBul("ahmet"))
console.log(ogrenciBul("mehmet"))
console.log(ogrenciBul("canan"))
