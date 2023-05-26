//Обʼєкти Object

//вправа 1
let student={
    surname: 'Семещук',
    mane: 'Таня',
    form: 5
}

console.log(student);

//вправа 2
console.log(student.mane);

//вправа 3
console.log(Object.keys(student));

// вправа 4
let goods={};
goods.name='iPhone 14';
console.log(goods);
goods.price='1000$';
console.log(goods);
goods.number=8;
console.log(goods);

// вправа 5
let appleShop=[
    {name: 'iPhone 12', price: 800},
    {name: 'iPhone 13', price: 900},
    {name: 'iPhone 14', price: 1000}
];

console.log(appleShop);

//вправа 6
console.log(appleShop[1]);

//вправа 7
console.log(appleShop[0].name);

//вправа 8
let iPhone12={name: 'iPhone 12', price: 800, number: 5};
let iPhone13={name: 'iPhone 13', price: 900, number: 10};
let iPhone14={name: 'iPhone 14', price: 1000, number: 15};

appleShop=[iPhone12, iPhone13, iPhone14];
console.log(appleShop);

console.log(appleShop[1]);

console.log(appleShop[1].price);

//вправа 11
let balanse=500;
if (balanse >= appleShop[1].price){
    console.log('Вітаю з новим iPhone13!');
}
else{
    console.log('Нажаль у вас недостатнбо каштів(');
}