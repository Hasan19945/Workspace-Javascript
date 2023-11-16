//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// console.log("*** Senkron *** ")
// // alert("Alert") //? Blocking
// console.log("FS15")

// const gecikme = (sure) => {
//   const basla = new Date().getTime()
//   while (new Date().getTime() < basla + sure) {}
// }
// console.time("basla") //?timer'ı baslat
// gecikme(2000) //? 3000 ms 'lik bir bloklama
// console.timeEnd("basla") //? timer'ı bitir ve gecen sureyi goster

//* Asenkron (setTimeout()) - Belirli sure sonraya zaman kurar.
//* ------------------------------------------------
//? Asenkron kod (macrotask kuyrugu)
// const timeoutId = setTimeout(() => {
//   console.log("Sure doldu")
// }, 1000) //? en az 1000ms sonrasinda tetikleme olur.

// setTimeout(() => {
//   console.log("timeout2 doldu")
// }, 500) //? en az 500ms sonrasinda tetikleme olur.

// console.log("Timeout kuruldu") //? senkron

// console.log("Timeout bitti") //? senkron

// clearTimeout(timeoutId) //? timeout iptal eder.

//* Asenkron (setInterval, clearInterval) - Periyodik bir aralik belirler
//*------------------------------------------------
// let i = 0
// const zaman = setInterval(() => {
//   console.log(++i)
//   if (i >= 5) {
//     clearInterval(zaman)
//   }
// }, 1000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi") //? veri isteği (req)
  setTimeout(() => {
    console.log("Sarah: Hello") //? res geliyor
    setTimeout(() => {
      console.log("John: How Are you?") //? veri gonder
      setTimeout(() => {
        console.log("Sarah:Fine and you?") //?gondermeye baslaniyor
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
