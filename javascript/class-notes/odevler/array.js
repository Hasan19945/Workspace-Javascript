var a = ['dog','lion','hen'];
a[100] = 'horse';
var b = ['ali', 'veli', 'deli'];
b[100] = 'neki'
console.log(b);
console.log(b[2]);

let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]); //undifined

let myArray = [1, 2, 3, 4, 5];
myArray[2]=6
console.log(myArray);// [1,,2,6,4,5] seklinde oldu

console.log(myArray.length);
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