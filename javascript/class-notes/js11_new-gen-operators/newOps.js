console.log("** NEW OPERATORS **")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

// const insan = {
//   kimlikNo: "1234567890",
//   adi: "Ahmet",
//   soyadi: "Can",
//   meslek: "Mimar",
//   maas: 30000,
// }

// console.log(insan.maas) //? . notasyonun
// console.log(insan["meslek"]) //? square bracket

// const mimarAdi = insan.adi
// console.log(mimarAdi)

// //?Destructure
// let { adi, soyadi, kimlikNo, maas } = insan

// console.log(kimlikNo)
// kimlikNo = "ABACD"
// console.log(kimlikNo, maas, adi, soyadi)

// insan.meslek = "Muhendis"
// console.log(insan)

//? NESTED

const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
}

console.log("MAAS:", insanlar.kisi1.maas)

//? Destr.
//? 1. yontem
const { kisi1, kisi2 } = insanlar //? Leve1 dest.
console.log(kisi1)


const { kimlikNo: kisi1Kimlik, adi: kisi1Adi, soyadi: kisi1Soyadi } = kisi1 //?Level2
const { kimlikNo: kisi2Kimlik, adi: kisi2Adi, soyadi: kisi2Soyadi } = kisi2
console.log(kisi2Kimlik)

//?2. yontem
const {
  kisi1: { soyadi, adi },
} = insanlar //? nested destr.

console.log(soyadi)

console.log(adi);
//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
]
console.log("************")

//? Klasik yontem ile
team.forEach((p) => {
  console.log("NAME:", p.name)
  console.log("SURNAME:", p.surname)
  console.log("JOB:", p["job"])
  console.log("AGE:", p["age"])
})

//? Destr
console.log("**** DEST ****")
team.forEach((person) => {
  const { name, surname, age, job } = person
  console.log("NAME:", name)
  console.log("SURNAME:", surname)
  console.log("JOB:", job)
  console.log("AGE:", age)
  console.log("------------")
})

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----
// function kisiOkuDeclaration () {
// }
//? bir fonks. nun donus degerinin obje olması ve dstr. parcalanmasi
const kisiOku = function () {
  return {
    no: "1234567890",
    isim: "Ahmt",
    soyisim: "Can",
    is: "Kasap",
    dilSayisi: 2,
  }
}

 console.log("KİSİ:", kisiOku())

//* function'un dondurdugu obje dogrudan dest. yapilabilir
let { no, isim, soyisim, dilSayisi } = kisiOku()

dilSayisi++
console.log(no, isim, dilSayisi)

//? Parameter olarak objenin ve destr. kullanimi
const data = {
  id: "1",
  brand: "Apple",
  product: "Iphone15",
  stock: 100,
}

const productPrint = (data) => {
  console.log(`${data.brand}-${data["product"]} Pro: ${data.stock} ung'dan daha mi iyi?  `)
}

const Soru = (data) => {
  console.log(`${data.brand}-${data["product"]} Pro: ${data.stock}  Samsung'dan daha mi iyi? `)
}
console.log(Soru);
const productPrintDestr = (data) => {
  const { brand, product, stock } = data
  console.log(`${brand}-${product}: ${stock}`)
}

productPrint(data)
productPrintDestr(data)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

//* ==============================================
//*  REST (...)
const karaaraclari =[" ATV","Araba", "kamyonet", "tir", "kamyon"]
const [p1, p2, ...gerkalanla] =karaaraclari
console.log(gerkalanla);
console.log(karaaraclari);
//* =============================================
//? rest object
const veri ={
  id: "1",
  brand: "Apple",
  product:"Iphones15",
  stock:1000
}
const {id, ...productkalanlar} =veri
console.log(productkalanlar);

const havaaraclari =["ucak ", "IHA", "SIHA", "helikopter"]
const araclar =[...karaaraclari ,"isimsiz arac", ...havaaraclari]
console.log(araclar);

const slogan ="Bu bir slogandir"
console.log(slogan);
const sloganLar= [...slogan]
console.log(sloganLar);
console.log(slogan);
console.log("*******");
//* ==============================================
//*  SPREAD (...)
const sayilar = [1,3,4,2,18,32,24];
console.log(Math.max(sayilar));//Nan
console.log(Math.max(...sayilar)); //32
console.log(Math.max[sayilar]);//undefind

const ciftler= [2,4,6]
const tekler=[1,3,5]
const yeniciftler = ciftler
console.log(yeniciftler,ciftler);
yeniciftler.push(8)
console.log(yeniciftler, ciftler);// ikisine de ekleme yaptigi icin ayni ciktiyi verdi

const yeniArr= [...tekler]// bu sayese eklemeleri ayri ayri yapabilirsin, yukaridakinden farkli olarak
console.log(yeniArr, tekler);
yeniArr.push(7)
console.log(yeniArr,tekler);

//* Object copying==================

const firstobj= {a:1,b:2,c:2}
const secondobj={a:2,d:3, c:4}

const copyfirstobj= {...firstobj}
console.log(copyfirstobj);
copyfirstobj.a=44
console.log(copyfirstobj);

//? nesting olmadigi icin deep copy gibi davrannir
 console.log(copyfirstobj,firstobj);
 const combinObj={...secondobj,...firstobj}
 console.log(combinObj);
 //? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}

console.log("MAAS:", sahislar.sahis1.salary)

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let s in sahislar) {
  // console.log(s)
  // console.log(sahislar[s]) //? square bracket notasyon
  console.log(sahislar[s].salary) //? square bracket notasyon
}

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(sahislar))
console.log(Object.values(sahislar))
console.log(Object.entries(sahislar))

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

console.log("****************")
for (let key of Object.keys(sahislar)) {
  console.log(key)
}


for (let val of Object.values(sahislar)) {
console.log(val);
}


//1. Basic Object Destructuring: Temel Nesne Yıkımı
const person = {
  name: 'John',
  age: 25,
  city: 'New York'
};
// Extracting properties using object destructuring
const { name, age, city, yer } = person;
console.log(name); // Output: John
console.log(age); // Output: 25
console.log(city);
console.log(yer); // Output: New York

const car = {
  brand: 'Toyota',
  model: 'Camry'
};
// Renaming variables using object destructuring
const { brand: carBrand, model: carModel } = car;
console.log(carBrand); // Output: Toyota
console.log(carModel); // Output: Camry
//3. Default Values: Varsayılan Değerler
{
  const person = {
  name: 'John',
  age: 25
};
// Providing default values using object destructuring
const { name, age, city = 'New York' } = person;
console.log(name); // Output: John
console.log(age); // Output: 25
console.log(city); // Output: New York
}
//. Nested Object Destructuring: İç İçe Nesne Yıkımı
{
  const student = {
  name: 'Alice',
  age: 20,
  address: {
  city: 'London',
  country: 'UK'
}
};
// Extracting nested properties using object destructuring
const { name, address: { city, country } } = student;
console.log(name); // Output: Alice
console.log(city); // Output: London
console.log(country); // Output: UK

}

