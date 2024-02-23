// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******")

let i = 1
while (i < 10) {
  console.log(i)
  i++
}

console.log("Dongu bitti")

let k =2
while (k<7) {
  console.log(k)
  k++
}

console.log("bu da benim olsun")
//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//? karar yapıları ile bir islem tekrar tekrar yaptirilamaz.
//? Eger tekrarlanacak olan bir sey var ise bunun icin dongusel elemanlar kullanilir.
// let not = prompt("Lütfen notunuzu giriniz:")
// if (not < 0 || not > 100) {
//   alert("Not 0'dan kucuk veya 100'den buyuk olamaz.")
// }

let not1 = prompt("Lütfen notunuzu giriniz:")
while (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan kucuk veya 100'den buyuk olamaz.")
  not1 = prompt("Yeniden notunuzu giriniz:")
}
console.log("Giridiginiz Not:", not1)

//? For çözümü
// let not2 = prompt("Lütfen notunuzu giriniz:")
// for (; not2 < 0 || not2 > 100; ) {
//   console.log("Not 0'dan kucuk veya 100'den buyuk olamaz.")
//   not2 = prompt("Yeniden notunuzu giriniz:")
// }
// console.log("Giridiginiz Not:", not2)
//? WHILE

let j = 1

do {
  console.log(j)
  j++
} while (j < 5)


console.log("Dongu bitti")
