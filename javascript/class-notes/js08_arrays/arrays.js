// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem

let isimler = ["ahmet", "mehmet", 4, true, 6.6, "Canan", "Yeni", "2.yeni"]
console.log(isimler)

console.log("UZUNLUK:", isimler.length) //? 6
console.log(typeof isimler)

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma
//? Dizilere erisirken indis(index) yani sira numarasi kullanilir.
//? indisler 0'dan baslar ve dizinin eleman sayisinin bir eksigine
//? kadar devam eder.
//? Syntax => diziAdi[indis]

console.log(isimler[0]) //? ahmet
console.log(isimler[5]) //? Canan

//* Dizinin son elemanini oku
const sonEleman = isimler[isimler.length - 1] //? en son
console.log(sonEleman)

//!  Diziye veri yazma
isimler[4] = "6"
console.log(isimler)

isimler[2]++
console.log(isimler)

//!Uncaught TypeError: Assignment to constant variable.
isimler = "acaba degisir mi?"
console.log(isimler)

//! NOT: Bir dizi const ile tanimlansa da icerisindeki elemanlar
//! degisitirilebilir. Cunku diziler non-primitive verilerdir.
//! const ile tanimlanan bir dizinin referansi (baslangic adresini)
//! stack alaninda tutulurken dizinin elemanlari Heap alaninda tutulur.
//! Bu yüzden dizinin referansi bilindikten sonra icerisindeki elemanlari
//! degistirmek mumukundur.
//! const, sadece dizinin stackte tututlan adresinin degistirilmesini engeller.

const diller = [
  "Java",
  "C++",
  ["ASM", "Binary"], //? nested array
  "Javascript",
  new Date().getFullYear(), //? JS statement'ı
]
console.log(diller)

diller[2][1] = "C"
console.log(diller)

// ! 2.Yöntem (Object Constructor)
const languages = new Array("C++", "java", "PHP")
console.log(languages)

languages[0] = "Python"
console.log(languages)

const numbers = new Array(3, 2, 1, 0)
console.log(numbers)

//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const numbers1 = new Array(10)
console.log(numbers1)

// ! 3.Yöntem (Array.of())
const numbers2 = Array.of(5)
console.log(numbers2)

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const meyveler = ["Çilek", "Muz", "Elma"]
console.log(meyveler)

meyveler[meyveler.length] = "Kiraz"
console.log(meyveler)

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const uzunluk = meyveler.push("Kavun")
console.log(meyveler, uzunluk)

//** pop() son elemani siler ve sildigi elemani dondurur.
const removed = meyveler.pop()
console.log(meyveler, removed)

//* shift dizinin 0. indeks elemanini siler ve silenen elemani dondurur.
const removedShift = meyveler.shift()
console.log(removedShift)
console.log(meyveler)

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const updatedLenght = meyveler.unshift("Kiwi")
console.log(updatedLenght)
console.log(meyveler)

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
meyveler.splice(1, 0, "Yaban mersini") //* dizinin 1 elemaninin devamina Yaban mersini ekle
console.log(meyveler)

meyveler.splice(3, 1, "Mandalina", "Greyfurt") //* dizinin 3. elemaninin yerine Mandaline ve Geyfurt ekle
console.log(meyveler)

meyveler.splice(3, 1) //? Dizinin 3. elamanini sil.
console.log(meyveler)

//? sort
//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
meyveler.sort()
console.log(meyveler)

const numbersUnsorted = [2, 3, 22, 33, 55, 1, 11, 111, 12]
numbersUnsorted.sort()
console.log(numbersUnsorted)

numbersUnsorted.sort((a, b) => a - b)
console.log(numbersUnsorted)

//* fill()
let veriler = [1, 3, 4, 5]
veriler.fill(0)
console.log(veriler)

veriler.fill(2, 1)
console.log(veriler)

veriler.fill(3, 1, 3)
console.log(veriler)

veriler.fill(1, -1)
console.log(veriler)

veriler = []
console.log(veriler)
