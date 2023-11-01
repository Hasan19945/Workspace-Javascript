// aritmatik Operators

/*let x= 5**2;
console.log(x);
let y = 10;
y+=8;
console.log(y);//18
y*=3;
console.log(y);//18.3=54

// Increment /Decrement Operators

let a =10;
console.log(+a);//degisiklik yok
console.log(++a);//+1 demek
console.log(--y);//-1 demek

//  And &&
//  Or ||
//  Logical NOT (!) tersi demek

//left to right Assosciativity;

console.log(3**2);//9
console.log(2**3);//8
console.log(3**2**3);//6571 once sagdakini isleme aliyor
console.log(3**8);//6571
console.log(9**3);//729

//left to right Assosciativity;
console.log(4-2-1);


const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
  };
  // traditional way
  const id = note.id;
  const title = note.title;
  const date = note.date;
console.log(id, title, date);

const { length } = 'A string';
console.log(length); // 8



{const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
    },
  };
  const { id, title, date, author: { firstName, lastName, email } } = note;
  console.log(`${firstName} ${lastName}`, id, title, date, email);}

  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [...numbers]; // spread operator
  console.log(newNumbers);
  
  // copy array using spread operator
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, 11, ...arr2, 7, 8, 9];// 3 nokta olursa elemanlarini ayni sekilde ekler
  console.log(arr3); // expected output: [1, 2, 3, 11, 4, 5, 6, 7, 8, 9]
  console.log("******");

  const person = {
    name: 'John',
    age: 30,
  };
  
  const newPerson = {
    ...person, // spread operator
    city: 'New York',
  };
  
  // newPerson will be { name: 'John', age: 30, city: 'New York' }
  console.log(newPerson);

  const yeniperson = {
    ...newPerson,
    sokak:'marthas',
    cadde:'bilmem ne'

  }
  console.log(yeniperson);

  console.log('******');
  const ben ={
    adi:'hasan',
    soyadi:'cilingir',
    yas:29,
    gozler:'kalbin aynasidir'
}
console.log(ben);
const kisilik=[ 'beni',' adim', 'hasan', 'keyfim','gicir' ]
console.log(kisilik);
console.log(...kisilik);
console.log('******');

function sum(...toplam) {
    return toplam.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15
  // only calculate number values
  function sum2(...toplam) {
    return toplam
      .filter(function (e) {
        return typeof e === 'number';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      }, 0);
  }
  console.log(sum2(1, 2, 3, 4, 5, 'aa')); // 15*/

/*const eleman= ("sekiz yedi, alti 5 '4' ")
console.log(eleman);
const nesneler =[ "bir", 2, "3", 'dost, dortbucuk,4, 4.5, hala dort', 5]
console.log(nesneler);
console.log(length.nesneler);


const person = {
  name: 'John',
  age: 25,
  city: 'New York'
};
console.log(person.name); // Output: John
console.log(person['age']); // Output: 25
console.log(person);
delete person.age;
console.log(person);
console.log(person['age']); // undefind

//Checking if a Property Exists:  Bir Özelliğin Var Olup Olmadığının Kontrol Edilmesi
const car = {
  brand: 'Toyota',
  model: 'Camry'
};
console.log('model' in car); // Output: true
console.log('color' in car); // Output: false

//Deleting Object Properties:  Nesne Özelliklerini Silme
const laptop = {
  brand: 'HP',
  RAM: 8,
  storage: '256GB'
};
delete laptop.RAM;
console.log(laptop); // Output: { brand: 'HP', storage: '256GB' }


//Adding Object Properties: Nesne Özelliklerinin Eklenmesi
const user = {
  name: 'Alice',
  age: 30
};
user.email = 'alice@example.com';
console.log(user); // Output: { name: 'Alice', age: 30, email: 'alice@example.com' 

//Creating Object Properties: Nesne Özelliklerini Oluşturma:
const smartphone = {};
Object.defineProperties(smartphone, {
  brand: {
    value: 'Samsung',
    writable: true,
    enumerable: true,
    configurable: true
  },
  model: {
    value: 'Galaxy S20',
    writable: true,
    enumerable: true,
    configurable: true
  }
});
smartphone.brand = 'Apple';
smartphone.model = 'iPhone 12';
console.log(smartphone); // Output: { brand: 'Apple', model: 'iPhone 12' } 

*/

//? 1)
`console.log(“55” < 56 && 67 === “67" || 253 % 11 && !false)`
//? 2)
console.log((15 * 2) / 3 + 8 === 18 || (10 % 3) ** 2 >= 4 && !(5 > 7))
//? 3)
const day = “Thursday”
switch (day) {
    case “Monday”: case “Tuesday”: case “Wednesday”: case “Thursday”: case “Friday”: case “Saturday”: case “Sunday”: default:
    console. log(“It’s a weekday.“); break; console. log(“It’s a weekend day.“); break; console. log(“It’s a invalid day.“);
    }
//? 4)
const x = 5;
const y = 10; if ((x + y) % x && y < 15) {
    console. log( “Both conditions are true”); }
    else {
    console.log(“At least one condition is false”); }
//? 6)
let number = 1; let sum = 0; while (number <= 10) {
    sum += number; number++;
    console.log( “Total: ” + sum);
//? 7)
let result = 0;
for (let i = 1; i <= 5; i++) {
    result *= i;
}
console.log(“Result: ” + result);
//? 8)
function message(username) {
    console.log(‘Hello ${username}’);
let sayHello = message;
sayHello(“Fs Cohort 15”);
//? 11)
console.log(‘hello’.replace(‘l’, ‘r’))
//? 12)
let myVar = “clarusway”
myVar[0] = “C”
//? 13)
let str = “Once a day”;
let index = str.indexOf(“a”);
let index2 = str.lastIndexOf(“a”);
console.log(str.indexOf(“a”, index + 1) === index2);
// (index+1): shows the starting point of finding
//? 14)
let myName = “Anthony Harold”;
myName = myName.slice(8)
myName.toLowerCase() //?not active because not assigned!
console.log (myName) //Harold (not harold!!!)
//? 17)
const myArr2 = [“1” , 2, “Hello”, “World!“];
const newArr = myArr2.reverse();
console.log(myArr2);
//? 18)
const myArr = [1, 2, 5, 6, 7, 3, 41];
const newArr = myArr;
    myArr.sort();
    const numArr = newArr.forEach ((item, index)=> item);
    newArr.forEach ((item, index)=> console.log(item));
    console.log(numArr);  //undefined
    //? **** forEach do not return anything!!! ****
//? 20)
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101
        const oddArr = ?
//? 23)
const pen = {}; pen. ink = “blue”; if(pen[“ink”]) { }else {
    console.log|‘Color is ${pen[” ink”]}‘) console. log( “Color is undefined!“)
    }
//? 24)
const products = [
{“model” : “HP Pavilion”, “processor”: “Intel Core i7",“storage”: “512GB SSD”, “price”: 999},
{“model”: “Dell XPS”, “processor”: “Intel Core 15”,“ram”: “8GB”, “price”: 899},
{“Model”:“MacBook Air”, “processor”: “Apple M1",“ram”: “8GB”, “storage”: “256GB SSD”, “price”: 1099},
{“model”: “Asus ROG Strix”, “storage”: “512GB SSD”, “price”: 1499},
//? 25)
    let object = { “myName’ : ‘Anthony’, ‘myAge’ : 30 }; let objectTwo = { ‘myAge’ : 675 };
    let newobject = {...object, ...objectTwo };
    console. Log(newobject);