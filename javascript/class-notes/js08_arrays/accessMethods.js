//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"]

//* includes()
//*-----------------------------------------------------------
console.log(numbers.includes("4")) //?true
console.log(numbers.includes(4)) //?false
console.log(numbers.includes("Four".toLowerCase())) //?true
console.log(numbers)

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

console.log(numbers.indexOf("bes")) //?4
console.log(numbers.lastIndexOf("bes", 7)) //?11
console.log(numbers.lastIndexOf("dort")) //? -1

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.
const joinedNumbers = numbers.join(",")
console.log(joinedNumbers, typeof joinedNumbers)

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(numbers.toString())

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------
let cars = ["BMW", "Mercedes", "Fiat", "Togg"]

const slicedCars = cars.slice(1) //?  ['Mercedes', 'Fiat', 'Togg']
console.log(slicedCars, cars)

console.log(cars.slice(0, 2)) //?['BMW', 'Mercedes']

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"]
const zaman = new Date().toDateString()
console.log(zaman)

const concated = message.concat("hello", zaman, "Merhaba")

console.log(concated)
console.log(concated.reverse().join(" "))
