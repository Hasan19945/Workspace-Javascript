// arrays iterations questions (forEach, map, filter, reduce)
​
​
// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 
​
let numbers1 = [1, 2, 3, 45, 65];
let sum=0;
numbers1.forEach((v,i,a)=>{
    sum +=v
     
});
console.log(sum/numbers1.length);
numbers1.reduce()

​
​
​
​
​
// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.
​
let numbers3 = [1, 2, 3, 4, 5];
​
​
​
// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.
​
let numbers4 = [1, 2, 3, 4, 5];
​
​
// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
​
let numbers5 = [1, 2, 3, 4, 5];
​
​
// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]
​
let words = ["JavaScript", "Python", "Java", "C++"];
​
​
// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.
​
let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];
​
​
​
// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
​
let numbers7 = [1, 2, 3, 4, 5];




function asalSayilariFiltrele(dizi) {
    function asalMi(sayi) {
        if (sayi <= 1) return false;
        for (let i = 2; i < sayi; i++) {
            if (sayi % i === 0) return false;
        }
        return true;
    }
  
    return dizi.filter(sayi => asalMi(sayi));
  }