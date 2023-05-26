//Масиви Array
// вправа 1
let week=[
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'Пʼятниця',
    'Субота',
    'Неділя'
];
console.log(week);

//вправа 2
console.log(week[5]);
console.log(week[6]);

//вправа 3
week[5]='Субота - заняття з JS';
console.log(week);
week[6]='Неділя - вихідний';
console.log(week);

//вправа 4
let menu=[
    'Чоти сири',
    'Папероні',
    'Маргарита'
];
console.log(menu);
menu[3]='Мʼясна';
console.log(menu);

menu=[
    'Чотири сири', 159, true,
    'Папероні', 179, false,
    'Маргарита', 185, true,
    'Мʼясна', 200, true,
];
console.log(menu);

//вправа 6
console.log(menu[3]);
console.log(menu[4]);
console.log(menu[5]);

//вправа 7
menu=[
    ['Чотири сири', 159, true],
    ['Папероні', 179, false],
    ['Маргарита', 185, true],
    ['Мʼясна', 200, true]
];
console.log(menu);

//вправа 8
console.log(menu[1]);
console.log(menu[3]);

//вправа 9
console.log(menu[1][1]);
console.log(menu[3][1]);

//вправа 10
console.log(menu.length);
console.log(week.length);


let lastElMenu=menu[menu.length-1];
console.log(lastElMenu);


//вправа 11
let group1=['Саша', 'Олег', 'Жанна'];
let group2=['Таня', 'Наташа'];
let group=group1.concat(group2);
console.log(group);

//вправа 12
let menuPizzas=['Чотири сири','Маргарита','Папероні'];
let menuDrinks=['Сік','Молочний коктель','Чай','Кава'];
let menuDesserts=['Чізкейк','Сирник','Морозиво'];
let newMenu=menuPizzas.concat(menuDesserts, menuDrinks);
console.log(newMenu);

//вправа 13
let classGroup=[
    'Аня',
    'Ігор',
    'Саша',
    'Таня'
];
console.log(classGroup.indexOf('Таня'));