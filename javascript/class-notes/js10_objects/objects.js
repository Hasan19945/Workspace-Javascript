//* ============================================
//*                 (OBJECTS)
//* =============================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")

const arac ={
marka: "auidi",
model: "1998",
motor: "4000",
vites:"8",
renkler:["pink","sari", "mavi"],
power:{fosil:"benzin", Green:"elektrik"},
}

console.log(arac.marka);
console.log(arac.model);
console.log(arac["marka"]);
console.log(arac.renkler);
console.log(arac.Green);
console.log(arac.power.Green);

arac.model="2004"
console.log(arac);
arac["power"]["fosil"]="mazot"
console.log(arac);
arac.sunroof=true
console.log(arac);