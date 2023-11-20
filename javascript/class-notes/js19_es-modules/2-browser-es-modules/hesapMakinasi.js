//*************************************/
//* hesapMakinası.JS
//*************************************/

//? named export
export const isim = "-- Hesap Makinasi--"

export const PI = 3.1415
export const asalSayilar = [2, 3, 5, 7, 11, 13, 17, 23]

const topla = (a, b) => a + b
const cikar = (a, b) => a - b
const carp = (a, b) => a * b
const bol = (a, b) => a / b

//? named export (Çoklu)
export { topla, cikar, carp, bol }

const mesaj = () => {
  console.log("Module Bitti")
}
export default mesaj //? default export yöntemi
//? modül başına sadece bir tane export default yapılabilir.


