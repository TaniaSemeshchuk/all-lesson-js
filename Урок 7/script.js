// Цикли

//вправа 1
let number=1;

while (number <= 10){
    console.log(number);
    number++;
}

number=10;

while (number >=1){
    console.log(number);
    number--;
}

//вправа 2
for(number=10; number<=20; number++){
    console.log(number);
}

for(number=20; number>=10; number--){
    console.log(number);
}

//вправа 3
let passwords=[
    '123456',
    '1234567',
    '12345678',
    '123456789'
];

for (let i=0; i<passwords.length; i++){
    if (passwords[i].length>=8){
        console.log(passwords[i]+' - це надійний пароль');
    }

    else{
        console.log(passwords[i]+' - це поганий пароль');
    }
}

//Функції

//вправа 4

/*let myName=function(){
    alert('Таня');
};

myName();*/

//вправа 5
let add=function(number1, number2){
    alert(number1+number2);
};

//add(100,200);

//вправа 6
/*let myNameLength=function(name){
    return name.length;
}

let myName=myNameLength('Таня');
alert('У моєму імені '+myName+' букв');*/

// вправа 7

let code='123';

let discount=function(myCode){
    if (myCode==code){
        return 'У вас є знижка 30%';
    }

    else {
        return 'У вас немає знижки';
    }
}

let verify=discount('123');
alert(verify);


