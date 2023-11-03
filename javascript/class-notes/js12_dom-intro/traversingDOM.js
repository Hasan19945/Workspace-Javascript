console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

const htmlLi = document.querySelector("ul li:nth-child(1)")

console.log(htmlLi.parentNode.parentNode.parentNode) //? main
console.log(htmlLi.parentElement.parentElement.parentElement) //?main

//? closest() metodu root yonundeki uygun olan parent'i secer
console.log(htmlLi.closest("section")) //? en yakın section parent'ı bulur

console.log(htmlLi.closest("main").querySelector("#add-new-item")) //? en yakın main'i bul icersindeki adnew-item idli elementi sec

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild
console.log(htmlLi.firstElementChild) //? Null
console.log(htmlLi.firstChild) //? HTML
console.log(htmlLi.lastChild) //? HTML

const itemList = document.querySelector(".item-list")
console.log(itemList.firstElementChild) //?h3
console.log(itemList.lastElementChild) //? ul

console.log(itemList.lastElementChild.firstElementChild) //? HTML li
console.log(itemList.lastElementChild.lastElementChild) //? Django li

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling

console.log(htmlLi.nextElementSibling.innerText)
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText)
console.log(
  htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText
)
