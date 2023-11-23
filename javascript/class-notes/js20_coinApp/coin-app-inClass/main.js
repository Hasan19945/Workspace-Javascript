//? Projenin style dosyasini ana js (main.js) kodumuza import ettik.
import "./scss/style.scss"
import { apiRequest } from "./src/apiRequest.js"
import setMessage from "./src/setMessage"

//? Selector
const form = document.querySelector("header form")

//? Form için submit event'nin tanimlanmasi
form.addEventListener("submit", (e) => {
  e.preventDefault() //? tüm submit davranıslarini engelle
  getCoinData() //? API'ye istek at.
  e.target.reset() //? formu silme davranısi calistir
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if (!input.trim()) {
    // alert("Input can not be blank ")
    setMessage(`Input can not be blank 😉`)
  } else {
    apiRequest(input)
  }
}
