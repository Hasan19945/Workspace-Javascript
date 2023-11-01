console.log("***** SELECTORS *****")

document.title = "FS15 DOM Intro 🎯"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const header = document.getElementById("header")
console.log(header)

//? DOM bir obje modelidir
//? key = value
//? atribute isimleri => camelCase
// header.style.backgroundColor = "green"
// header.style.color = "white"
header.style =
  "background-color:green; color:white; font-size:20px; font-family:Tahoma"

const h2 = document.getElementById("add-new-item")
console.log(h2)

//* Text elemanin icerigini okuma
console.log(h2.textContent) //? ADD NEW ITEM
console.log(h2.innerText) //? ADD NEW ITEM
console.log(h2.innerHTML) //? ADD NEW ITEM

//* Text elemanin icerigini degistirme
h2.textContent = "ADD"
h2.innerText = "ADD ITEM"
h2.innerHTML = "<p>Deneme</p>"

h2.innerHTML = "<p style='color:red'>Deneme</p>"

//* Input elemanlarinin degeri value property'si ile degisir
document.getElementById("btn").value = "Submit"

const input = document.getElementById("input")
input.value = "JavaScript"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const lists = document.getElementsByTagName("li")

//! HTML Collection DOM'un sundugu bir veri yapısıdır.
//! Array-Like
console.log(lists) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

console.log("SIZE:", lists.length)

//? FOR donguleri itere edilebilir
for (let li of lists) {
  console.log(li.textContent)
}
//? HTML Collection yapısından Array cevrilebilir.
const listArray = [...lists] //? array e cevrildi.
listArray.forEach((li) => (li.style.color = "green"))

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
