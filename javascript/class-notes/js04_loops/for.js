// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

// for (let i = 1; i <= 10; i++) {
//   console.log(i) //? 12345678910
// }

//? Girilmeyn dongu (Dongu sarti bastan yanlis)
// for (let i = 1; i == 10; i++) {
//   console.log(i)
// }
//?123456789
// for (let i = 1; i != 10; i++) {
//   console.log(i)
// }

//? 0 5
// for (let i = 0; i != 10; i += 5) {
//   console.log(i)
// }

//? Sonsuz dongu
// for (let i = 0; i != 10; i*=2) {
//     console.log(i)
// }

//? 10 9876543210
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu for dongusu ile yaziniz..

const n = +prompt("Kac adet rasgele sayi uretmek istersiniz?")

for (let i = 1; i <= n; i++) {
  const randomSayi = Math.round(Math.random() * 100)
  console.log(`${i}. rasgele sayi : ${randomSayi}`)
}

// 2 aralikta verilen dogal sayilarin toplamini bulan kodu for dongusu ile yaziniz.

// const n1 = 5
// const n2 = 15

// let toplam = 0
// for (let j = n1; j <= n2; j++) {
//   toplam += j
// }
// console.log(toplam)

let n1 = 15
let n2 = 25
let toplam = 0

if (n1 >= n2) {
  console.log("Lütfen 1. sayiyi daha büyük giriniz")
} else {
  for (n1; n1 <= n2; n1++) {
    toplam += n1
  }

  console.log(toplam)
}
