/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//* ORNEK: paramteresiz, donussuz
//***********************************************/
// yaz()  //! error
const yaz = () => console.log("Hello JS")
yaz()

//* ORNEK: paramterli, ve donus degerli
//***********************************************/
const kareAl = (num) => num * num
console.log("Kare:", kareAl(4))

//* ORNEK: birden fazla ifade(expression) icerirse
//***********************************************/
//? arrow fonksiyonlarda eger fonksiyon birden fazla islem icerirse
//? o zaman süslü parantez kullanilmasi gerekmektedir.
//? Süslü parantez kullanildiginda arrow fonksiyonlarinin otomatik
//? returning ozelligi kaybolour. Bu sebeple eger donus isteniyorsa
//? return kullanilmalidir.
const hesapla = (x, y) => {
  const toplam = x + y
  const carpim = x * y
  const sonuc = carpim / toplam
  return sonuc
}
console.log("SONUC=", hesapla(4, 2))

//* ORNEK: Doğum tarihini parametre olarak alan ve ana
//* programa yaşı hesaplayıp döndüren fonksiyonu yazınız.
//******************************************************/
// console.log(new Date().getFullYear())
const yasHesapla = (dob) => new Date().getFullYear() - dob

console.log("YAS:", yasHesapla(1990))

//* ORNEK: Silindir Hacmi
//******************************************/
//? pi*r*r*h
const silindirHacim = (r, h) => Math.PI * r * r * h

// const silindirHacim = (r, h) => {
//   return Math.PI * r * r * h
// }
console.log(`Hacim= ${silindirHacim(2, 3)}`)

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//* (Hesap Makinası)
//**************************************************/

const topla = (a, b) => a + b
const cikar = (a, b) => a - b
const carp = (a, b) => a * b
const bol = (a, b) => a / b

const hesapMakinasi = (num1, num2, op) => {
  let result = 0
  switch (op) {
    case "+":
      result = topla(num1, num2)
      break
    case "-":
      result = cikar(num1, num2)
      break
    case "*":
      result = carp(num1, num2)
      break
    case "/":
      result = bol(num1, num2)
      break
    default:
      alert("Yanlis operator girişi")
      break
  }

  return result
}

const num1 = +prompt("1.Sayi:")
const op = prompt("Islemi giriniz: +,-,*,/:")
const num2 = +prompt("2.Sayi:")

// console.log(hesapMakinasi(num1, num2, op))
console.log(`${num1}${op}${num2}=${hesapMakinasi(num1, num2, op)}`)
