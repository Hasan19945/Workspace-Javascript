//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise")

const req = new Promise((resolve, reject) => {
  const veri = { name: "Ahmet", surname: "Can" } //? mock data (gelen veri)

  const basarili = Math.floor(Math.random() * 3) //? 0 1 2 .... 9
  console.log(basarili)
  if (basarili) {
    resolve(veri)
  } else {
    reject("Network hatasi olustu")
  }
})

req
  .then((res) => {
    //? basarili durumlari islemek icin then() metotlari kullanilr.
    console.log(res)
    return res
  })
  .then((x) => console.log(x.name)) //? zincirleme olarak kullanmak mümkündür.
  .catch((err) => document.write(err)) //? hatayı handle etmek için catch kullanılr.
  .finally(() => console.log("Her türlü calisir.")) //? baglaniyi sonlandirma
