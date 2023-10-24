/*var a = ['dog','lion','hen'];
a[100] = 'horse';
var b = ['ali', 'veli', 'deli'];
b[100] = 'neki'
console.log(b);
console.log(b[2]);

let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]); //undifined













//console.log(myArray.length);
for (var i = 0;  i < 5; i++){
    console.log("i degeri:" +i);
}

while (i<11){
    console.log("k degeri:"+i);
    i+=2;
}

var sayilar=[2,12,35,436,-22,89]
console.log("Array elamnlari..")

sayilar.forEach(function(sayi){
    console.log("eleman:" + sayi);
});

var islem=5;

if (islem==1){
    console.log("sonuc 1");
}
else if (islem==2){
    console.log("sonuc 2");
}
else if (islem==5){
    console.log("sonuc 5");
}
else {
    console.log("gecersiz islem");
}

var baskent="oslo";

switch(baskent) {
    case "ankara":
        console.log("ulke: Turkiye");
    break;
    case "oslo":
        console.log("ulke: Norway");
        break;

    case "paris" :
        console.log("ulke: Fransa");
        break;
    default:
    console.log("ulke: Avrupa degil");
}

function toplam(a,b,c){
    return a+b+c;
}
var tolam=toplam(3,4,5);
console.log("toplamlari:" +tolam);

{let calisan={
    adi: "hasan",
    soyadi: "cilenger",
    yas:"29",
    tel:678929178,
    diller:["Turkce", "ingilizce", "norsk"],
    adres: {
        ulke:"norge",
        sehir:"oslo",
         sokak:"falan filan",
}
};

console.log(calisan.adi);
console.log(calisan.adres);
console.log(calisan.adres.sokak);}


var calisan={
    adi: "han",
    soyadi: "ciger",
    yas:"29",
    tel:678929178,
    diller:["Turkce",  "norsk"],
    adres: {
        ulke:"norge",
        sehir:"oslo",
         sokak:"falan filan",
}
}

 console.log(calisan.adi);

 /*let myArray = [1, 2, 3, 4, 5];
myArray[6]=6
console.log(myArray);// [1,,2,6,4,5] seklinde oldu
console.log(myArray[19]);
myArray.unshift(0)
console.log(myArray);
myArray.push(1,24)
console.log(myArray);
myArray.splice(1,2,6)
console.log(myArray);
myArray.reverse()
console.log(myArray);
delete myArray[0]
console.log(myArray);
let myArra = [1, 2, 3, 4, 5];
myArra[2]
console.log(myArra); // [1, 2, 6, 4, 5]*/

/*let str1="listen"
let str2='slient'
function areAnagrams () {
    if (str1.length !== str2.length) {
        console.log("bu bir anagram degildir!");
        return false
    } else {
        
    }
}*/
for (let i = 0; i < 5; i++) {
    console.log("Döngü adımı " + i);
  }
for (let k=0; k<4; k++) {
    console.log("k dongusu deneme:" +  2*k);
}

for (let j=0;  j<5; j++) {
console.log('j donusu:' + (j+j));
}

{let i = 0;

while (i < 5) {
  console.log("Döngü adımı " + i);
  i++;
}
}
let k =0;
while (k<5) {
    console.log("dongu k:" +k);
    k++;
}
let j = 0;
while (j < 3) {
    console.log("j dongusu:" + j+j );
    j++;
}
/*for (;;) {
  // sonsuz döngü
}
for (let i = 0; i < 10; i++) {

  // Eğer 2'ye bölünebiliyorsa bir sonraki adıma atlar.
  if (i % 2 == 0) continue;

  alert(i); // ekranda 1, 3, 5, 7, 9 değerleri gösterilir.
}
*/
let letters = ['A', 'B', 'C', ,'E'];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

let letter = ['A', 'B', 'C', ,'E'];
letters.forEach((letter) => {
  console.log(letter);
});

let myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 1, 6);
console.log(myArray); // [1, 2, 6, 4, 5]

const numbers = [0, 1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num / 2 === 2);
console.log(evenNumbers) 
const evennumbers=numbers.filter((num) => num % 2 ===0);
console.log(evennumbers);// [0, 2, 4]

const numbes = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator +
currentValue, 0);
console.log(sum) //15

{
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
numbers.forEach(num => console.log(num * 2));
}