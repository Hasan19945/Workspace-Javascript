function sayHi(userName) {
    console.log(`Hello! ${userName}`);
}
sayHi('Mark');
sayHi(); // what will be the output?
sayHi('Hasan')

function sayHi2(userName, company, place) {
    console.log(`Hello! ${userName} of ${company} icinde ${place}`);
    company = 'Apple';
    console.log(`Hello! ${userName} of ${company} in ${place}`);  
}
let userName= 'Mark';
let company = 'Clarusway';
let sted = 'Kristiansand';
sayHi2(userName, company, sted);
console.log(company);
sayHi2('Matthew');

function parksis(navn, bedrift) {
    console.log(`Heisan! Navnet mitt er ${navn}, gjør praksis ${bedrift} i ${sted}`);
}

let navn= 'Hasan';
let bedrift='Game On';

parksis(navn,bedrift,sted)// yazmazsan function'dan cikti alamazsin
