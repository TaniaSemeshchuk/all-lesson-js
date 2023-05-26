//вправа 14
let classGroup=[
    'Аня',
    'Ігор',
    'Саша',
    'Таня'
];

console.log(classGroup.indexOf('Петро'));
console.log(classGroup.indexOf('Таня'));

//вправа 15
console.log(classGroup[2]);
console.log(classGroup[3]);

//вправа 16
let myName=[
    'Семещук',
    'Таня'
];
console.log(myName.join());
console.log(myName);

//вправа 17
console.log(myName.join(' '));

//вправа 18
let myNumber=6;
let randomNumber=Math.random()*10;
console.log(randomNumber);

if (myNumber==randomNumber){
    console.log('Ти виграв!');
}
else {
    console.log('Ти програв!');
}

//вправа 19
myNumber=2;
randomNumber=Math.floor(Math.random()*10);
console.log(randomNumber);
if (myNumber==randomNumber){
    console.log('Ти виграв!');
}
else {
    console.log('Ти програв!');
}

//вправа 20
let phrases=[
    'Звучить непогано',
    'Так, це треба зробити',
    'Це погана ідея',
    'Може не сьогодні',
    'Компʼютер каже ні'
];

let myFate=phrases[Math.floor(Math.random()*5)];
console.log(myFate);

//вправа 21
let menu=[
    'Чотири сири',
    'Папероні',
    'Маргарита',
    'Мʼясна'
];

let lastEl=menu.length-1;
console.log(menu[lastEl]);

//вправа 22
menu.push('Вегетаріанська');
console.log(menu);

menu.push('Морська');
console.log(menu);

//вправа 23
menu.pop('Морська');
console.log(menu);

//вправа 24
let firstElMenu=menu.shift('Чотири сири');
console.log(menu);
console.log(firstElMenu);

//вправа 25
menu.unshift('козацька');
console.log(menu);