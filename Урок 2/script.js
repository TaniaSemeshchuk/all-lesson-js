//Типи даних

//Числа Number
console.log(33);
console.log(2023);

//текст, рядки  string
console.log('Таня');
console.log('Мені 33 роки');

//вправа 1
console.log(99*123);
console.log('Дууже довгий рядок'.slice(0,5));
console.log(false && true);

//вправа 2
console.log(12345+56789); //додавання
console.log(22+33+44);
console.log(1000-500); //віднімання
console.log(123*456);   // множення
console.log(12345/246); // ділення

console.log(1234/57*3-31/4);

//вправа 5
// conts - константи, змінні які не зінюються на протязі всієї програми
// var, let - змінні, які можна змінювати на протязі програми

let secToMin=60;
let minToHour=60;
let secToHour = secToMin * minToHour;
let hourToDay=24;
let secToDay= secToHour * hourToDay; //сек у дні
let dayToYear=365;
let secToYear= secToDay * dayToYear; //сек у році
let myAge=33;
let myAgeToSec= myAge * secToYear;
console.log(myAgeToSec);

// вправа 6
let greeting='Привіт';
let myName='Таня';
console.log(greeting+' '+myName);

console.log('Супер дрвжилезний рядок,,, у java scritt'.length);

let java='Java';
let script='Script';
console.log(java.length);
console.log(script.length);
let javaScript=java+script;
console.log(javaScript.length);

// вправа 7
myName='Таня';
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);

//вправа 8
let myFullName='Семещук Тетяна Ігорівна';
myName=myFullName.slice(8,14);
console.log(myName);

myName='таня';
console.log(myName.toUpperCase());

myName='ТАНЯ';
console.log(myName.toLowerCase());

// вправа 9
let myString='меНе якОСь звАти';

// 1) зробити всі букви маленькими
let smallString = myString.toLowerCase();
console.log(smallString);

// 2) відрізати першу букву від рядка
let endString = smallString.slice(1);
console.log(endString);

// 3) візьмено 1 букву і зробимо її великою
let bigLetter = smallString[0];
console.log(bigLetter);
let firstBigLetter=bigLetter.toUpperCase()
console.log(firstBigLetter);

// 4) зʼєднати рядочки
console.log(firstBigLetter+endString);



//дз меНЕ зВаТи тАНЯ
let newString='меНЕ зВаТи тАНЯ';

let maliBukvy=newString.toLowerCase(); //всі маленькі
console.log(maliBukvy);

let pershaBukva=maliBukvy[0]; //відрізаємо першу букву
console.log(pershaBukva);
let bigPershaBukva=pershaBukva.toUpperCase()//перша буква велика
console.log(bigPershaBukva);

let kinString=maliBukvy.slice(1);//відрізати весь остальний рядок
console.log(kinString);

let string2=bigPershaBukva+kinString;
console.log(string2);

let s1=string2.slice(0, 11); // перша частина рядка s1
console.log(s1);

let sName=string2.slice(11);
console.log(sName);

let letter1=sName[0].toUpperCase();
console.log(letter1);

let eneName=sName.slice(1);
console.log(eneName);

let s2=letter1+eneName; // друга частина рядка s2
console.log(s2);

let trueString=s1+s2;
console.log(trueString);


