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

  