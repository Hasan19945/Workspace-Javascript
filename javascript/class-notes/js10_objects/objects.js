//* ============================================
//*                 (OBJECTS)
//* =============================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")

//? Array ile iliskili veriler
const cars = ["Audi", "BMW", "Anadol"]
const brands = ["Q8", 3.2, "Lux"]
const engines = [4000, 2000, 1600]
const speeds = [8, 7, 4]
console.log(cars);
console.log(cars[0], brands[0], engines[0], speeds[0])
console.log(cars[2], brands[2], engines[2], speeds[2]);

//! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const arac = {
  marka: "Audi",
  model: "Q8",
  motor: 4000,
  vites: 8,
  colors: ["pink", "black", "gray"],
  power: { fosil: "Benzin", green: "Elektrik" },
}

//? Objelere erisim de 2 yontem vardir.
//? (.) dot notasyonu
console.log("**********")
console.log(arac.marka)
console.log(arac.motor)
console.log(arac.Model) //? undefined
console.log(arac.colors[2]) //? Gray
console.log(arac.power.green) //? Elektrik

//? Square bracket yontemi
console.log(arac["model"])
console.log(arac["power"]["fosil"])

//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erisimlerinde kullanılabilir.
// const key = prompt(
//   "Aracin hangi bilgisini ogrenmek istersiniz, marka, model,motor,vites ?"
// )

// console.log(arac[key])

arac.model = "Q3"
arac["power"]["fosil"] = "Mazot"
console.log(arac)

//? Uncaught TypeError: Assignment to constant variable.
// arac = [4, 3, 2]

arac.sunroof = true
console.log(arac)

//* ==========================================
//*          Object Metotlari
//* ==========================================

const personel = {
  adi: "Ahmet",
  soyadi: "Can",
  dogum: 1990,
  maas: 15000,
  ehliyet: true,
  diller: ["English", "German"],
  yasHesapla: function () {
    console.log(this)
    return new Date().getFullYear() - this.dogum
  },
  //   ozet: () => {
  //     console.log(this)
  //     return `${this.adi} ${this.soyadi} ${this.yasHesapla()} yasindadir`
  //   },
  ozet: function () {
    console.log(this)
    return `${this.adi} ${this.soyadi} ${this.yasHesapla()} yasindadir`
  },
}
console.log(this)
console.log(personel.yasHesapla())
console.log(personel.ozet())
// console.log(new Date().getFullYear())

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

//? Nested objeler
//? Objeler normalde iterable degildir. Ancak for-in for-of gibi donguler ile ozel metotlar yardımıyla itere edilebilirler.
const people = {
  ahmet: {
    adi: "Ahmet",
    soyadi: "Can",
  },
  canan: {
    adi: "Canan",
    soyadi: "Can",
  },
}

console.log(people.ahmet.adi)
console.log(people.canan.soyadi)

//? JSON

const peopleJSON = [
  { adi: "Ahmet", soyadi: "Can" },
  { adi: "Canan", soyadi: "Can" },
]
console.log(peopleJSON[0])
console.log(peopleJSON[0].adi) //? Ahmet

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
]
console.log("*********")
//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((te) => console.log(te.job))

//* Ornek2: team dizisindeki name'leri bir diziye saklayalim.
const names = team.map((t) => t["name"])
console.log(names)
//
const jobs = team.map((te) =>te["job"])
console.log(jobs);
//* Ornek3: team dizisindeki kisilerin yas toplamini bulalim.
const totalAge = team.reduce((acc, p) => acc + p.age, 0)
console.log(totalAge)

//* Ornek4: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const concatinatedNames = team.map((p) => {
  return {
    fullName: `${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
    age: p.age + 5,
  }
})

const concatinatedNames1 = team.map((p) => ({
  fullName: `${p.name.toUpperCase()} ${p.surname.toUpperCase()}`,
  age: p.age + 5,
}))

console.log(concatinatedNames1)
