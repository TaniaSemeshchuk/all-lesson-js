/*
alert('Таня'); //виводить повідомлення у вікні
*/
console.log('Повідомлення через консоль'); // виводить повідомлення у консолі

console.error('Error. You are invalid!'); // повідомлення про помилку у консолі

console.warn('Увага!'); // повідомлення про попередження у консоль

//alert('2+2=4');

//confirm('2+2=5?'); //виводить повідомлення у вікні з кнопками підтвердження (Так/Ні)

//prompt('2+2=...'); //виводить повідомлення у вікні з полем для введення тексту/відповіді

//ТИПИ ДАНИХ

// String рядок/текст
console.log('text');
console.log("text2");

// Number числа
console.log(5);
console.log('5');
console.log(1+2);
console.log(3-2);
console.log(2*5);
console.log(10/2);
console.log(20*(150-38)/70);

console.log('Семещук '+'Таня');
console.log('Семещук'+' '+'Таня');
console.log(5+5);
console.log('5'+'5');

//boolean логічний
console.log(true);
console.log(false);

// object обʼєкти
console.log({myName: 'Tania', age: 33})

var myFirstValue=2023;
console.log(myFirstValue);

var myName='Tania';
myName='Vasia';
console.log(myName);

// програма
var namePrint=prompt('Як тебе звати?');
//console.log(namePrint);
alert('Привіт, '+namePrint+'!')
