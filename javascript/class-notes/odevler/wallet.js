
//selectors

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput= document.getElementById("gelir-input");
const ekleFormu=document.getElementById("ekle-formu");


//variables

let gelirler =0;
let harcamaListesi = [];



//hesap tablosu
const gelirinizTd= document.getElementById("geliriniz")
const giderinizTd= document.getElementById("gideriniz")
const kaland= document.getElementById("kalan")

//harcama formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")
 
//harcama tablosu
const harcamabody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

// Ekle formu

ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler =gelirler + Number(gelirInput.value)
    console.log(gelirler)
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.innerText =gelirler
    ekleFormu.reset()    

})

window.addEventListener("load", ()=>{
gelirler =Number(localStorage.getItem("gelirler")) || 0
gelirinizTd.innerText = gelirler
tarihInput.valueAsDate = new Date()
})

harcamaFormu.addEventListener("submit", (e) =>{
    e.preventDefault() //reloud u engeller

    const yeniHarcama ={
        id:new Date().getTime(),
        tarih:tarihInput.value,
        alan: harcamaAlaniInput.value,
        miktar:miktarInput.value
    }
    //console.log(yeniHarcama);
    harcamaFormu.reset()
    tarihInput.valueAsDate =new Date()
    harcamaListesi.push(yeniHarcama)
})