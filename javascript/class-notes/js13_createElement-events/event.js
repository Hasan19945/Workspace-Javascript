//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

//? Selector variables
const header = document.querySelector("header")
const addButton = document.getElementById("btn")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")

//? 3. yontemle event tanimlandi
//* mouse header 'ın üzerine geldiginde ilgili function cagrilir.
header.onmouseover = function () {
  header.style.backgroundColor = "red"
  header.style.color = "white"
}
//* mouse header 'ın üzerinden ayrildiginda ilgili function cagrilir.
header.onmouseout = function () {
  header.style.backgroundColor = "transparent"
  header.style.color = "black"
}

const yazdir = () => {
  document.write("Hello from Turkey")
}

//? onload event'ı html ve css kodlarininin render edilmesinin hemen akabinde calisir.
// window.onload = yazdir()

//? window yüklendiginde input'a focuslan
window.addEventListener("load", () => {
  input.focus()
})

//? 4.Yontem (addeventlistener metodu) ile event tanimlandi
//* add butonuna tiklanildgin event funksiyonu cagrilir
addButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    alert("Lütfen bir bilgi giriniz")
  } else {
    const li = document.createElement("li")
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    ul.appendChild(li)
    input.value = ""
    input.focus()
  }
})

//? input elementi üzerinde iken klavyeden bir tusa basilip-birakildiginda (keyup) tetiklenir.
input.addEventListener("keyup", (event) => {
  //   console.log(event)
  //   console.log(event.target)
  //   console.log(event.target.value)
  //   console.log(event.keyCode)
  //   console.log(event.code)

  //?  basilan tus enter ise
  if (event.code === "Enter") {
    //? add butonun click fonkisyonu cagiriyoruz
    addButton.click()
  }

  if (event.code === "Backspace") {
    //TODO : Liste elemetnini en son elemani silinecek
  }
})
