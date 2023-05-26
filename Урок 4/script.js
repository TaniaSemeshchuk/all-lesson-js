//Умовний оператор if... else
let myAge=30;
if (myAge>=33){
    console.log('Ух ти вже дорослий!');
}

//вправа 10
let myName='Тетяна';
if (myName.length >= 6){
    console.log('Довге імʼя');
}
if (myName.length < 6){
    console.log('Коротке імʼя');
}

/*myName=prompt('Як тебе звати?');

if (myName.length >= 6){
    alert('Довге імʼя');
}
if (myName.length < 6){
    alert('Коротке імʼя');
}*/

//вправа 11
/*myAge=prompt('Скільки тобі років?');
let adult=confirm('Чи є з тобою дорослий?');

if(myAge >= 12){
    alert('Можеш іти на фільм');
}

if((myAge < 12)&&(adult==true)){
    alert('Можеш іти на фільм');
}

if((myAge < 12)&&(adult==false)){
    alert('Вибач, на фільм тобі не можна');
}*/

myAge=10;
if (myAge>=18){
    console.log('Ура! Ти повнолітній!');
}
else{
    console.log('Ти ще не повнолітній!');
}

//вправа 12
/*myAge=prompt('Скільки тобі років?');
let adult=confirm('Чи є з тобою дорослий?');

if ((myAge >= 12) || ((myAge < 12)&&(adult==true))){
    alert('Можеш іти на фільм');
}
else{
    alert('Вибач, на фільм тобі не можна');
}*/

//вправа 13
/*let password='123456';
let myPassword=prompt('Введіть пароль');

if (myPassword==password){
    alert('Правильний пароль');
}

else{
    alert('Неправильний пароль');
}*/

let password='123456';
let login='Tania';

let myLogin=prompt('Логін');
let myPassword=prompt('Пароль');

if (myLogin==login && myPassword==password){
    alert('логін і пароль правильний');
}

else if(myLogin==login && myPassword!==password){
    alert('Пароль неправильний');
}

else if(myLogin!==login && myPassword==password){
    alert('Логін неправильний');
}

else{
    alert('Логін і пароль неправильні');
}