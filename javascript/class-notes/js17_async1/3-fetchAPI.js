//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")
let veri = "merhaba"
fetch("https://api.github.com/users")
  .then((res) => {
    // console.log(res)
    if (!res.ok) {
      //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
      throw new Error(`Hata: ${res.status}`) //? bir hata firlatiyoruz
    }
    return res.json()
  })
  .then((data) => {
    // veri = data
    // console.log(veri)
    show(data)
  })
  .catch((err) => document.write(err))

console.log(veri)

const show = (users) => {
  const userSection = document.getElementById("users")

  users.forEach((user) => {
    userSection.innerHTML += `
        <h1>${user.login}</h1>
        <img src="${user.avatar_url}" width="200px" alt="" />
        <p><a href="${user.html_url}" target="_blank">URL</a></p> 
    `
  })
}
