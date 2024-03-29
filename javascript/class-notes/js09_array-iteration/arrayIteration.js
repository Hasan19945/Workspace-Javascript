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
prices.forEach((p) => console.log(p * 2))


console.log("**********");
//? yeni ornek
const harcliklar= [200, 210, 150, 250,300]
for (let harclikgunluk of harcliklar) {
  console.log(harclikgunluk);
}
for (let gunluk of harcliklar ) {
  console.log(gunluk);
}

harcliklar.forEach((harcliklar) =>console.log(harcliklar*2)); //harcliklar.forEach((h) =>console.log(h*2)); ile ayni

//harclikgunluk.forEach((h)=>console.log(h*2)); harclikgunluk tanimlanmadigi icin cikti vermez


console.log("*********");
//? 2 parametreli forEach
prices.forEach((price, index) => console.log("DEGER:", price, "SIRA:", index))
harcliklar.forEach((ha,index)=> console.log("Ydeger:", ha, "Ysiar:", index+100))

//? tekrar 
const ayliklar = [20, 25, 23, 28, 30]
//? 3 paramtreli foreach
//? callback func'da satir sayisi birden fazla oldugu icin suslu kullandik.
//? foreach metodu void function'dır yani bir sey dondurmez.
prices.forEach((p, k, ara) => {
  if (p < 270) {
    ara[k] = p * 1.1
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
const lowerCaseNameler = names.map((h) => h.toLocaleLowerCase())
console.log(lowerCaseNameler);

//? Foreach ile zorlama çözüm
const upperNames = []
names.forEach((n) => upperNames.push(n.toLocaleUpperCase()))
console.log(upperNames)

const UPP =[]
names.forEach((n) => UPP.push("Hasan", "Ali", "Mehmet"))
console.log(UPP)
//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz
const euro = 29.8
const dolar = 27.97

const tlPrices = [100, 150, 100, 50, 80]

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)))
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(1)))

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

//? Maasi 6000 - 18000 arasinda olanlari bir diziye saklayalim
const altiIleOnsekizbin = maaslar.filter((k) => k >= 6000 && k <= 18000)
console.log(altiIleOnsekizbin);

//* =======================================
//*          CHAINING (PIPELINE)

//? Maasi 9000'den az olanlara %50 zam yaparak bu degerleri
//? yeni diziye saklayalim.

//? declarative programming (zıttı imperative)
const dokuzBindenAz = maaslar.filter((m) => m < 9000).map((m) => m * 1.5)

console.log(dokuzBindenAz)

//* =======================================
//*             REDUCE METHOD
//* =======================================

const salaries = [10000, 15000, 9000, 20000]

const sumOfSalaries = salaries.reduce((sum, sal) => sum + sal, 0)
console.log("TOTAL:", sumOfSalaries)

const sumOfSalaries1 = salaries.reduce((sum, sal, i) => {
  console.log(`${i} - ${sum + sal}`)
  return sum + sal
}, 0)
console.log("TOTAL:", sumOfSalaries1)

const numbers = [3, 2, 5, 4]
const multiply = numbers.reduce((acc, val) => acc * val, 1)
console.log(multiply)

//? filter, map, reduce
const zamliMaasToplami = salaries
  .filter((s) => s >= 9000 && s < 15000)
  .map((s) => s * 1.5)
  .reduce((sum, salary) => sum + salary)

console.log("Zamlı Maas Toplami:", zamliMaasToplami)

//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 98, 89, 25]
const check = ages.every((age) => age >= 18)

check ? console.log("All ages are over 18") : console.log("Some are under 18")

const kontrol = ages.every((age) => age <= 25)
kontrol ? console.log("Everybody can join to this club") : console.log("Some of them can not");;

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1 */
