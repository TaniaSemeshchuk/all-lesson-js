// Умовний оператор. Логічний тип даних

// boolean булевий тип даних, логічний тип даних
// true - правда, істина
// false - неправда, хиба

console.log(true);
console.log(false);

// && - і
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// вправа 1
let hadShower=true;
let hadBackpack=true;
let finish=hadShower && hadBackpack;
console.log('Піде у школу? ', finish);

// || - або 
// вправа 2
let hasApple=true;
let hasOrange=false;
finish=hasApple || hasOrange;
console.log('Чи щось взяв?', finish);

// ! - ні (заперечення)
console.log(!hasApple);
console.log(!hadShower);
console.log(!hasOrange);

// вправа 3
let goJS=true;
let isMon = !goJS;
let isTues = !goJS;
let isSat = !goJS;
let isTurs =!goJS;
let isFri=!goJS;
let isSaturday=goJS;
let isSun=!goJS;

console.log(isMon);

// > - більше, >= - більше-дорівнює
// вправа 4/5
let myAge=18;
let ageRest=18;
let verify=myAge >= ageRest;
console.log('Можна заходити на сайт?', verify);

// < - менше <= - менше-дорівнює
// вправа 6/7
myAge=12;
ageRest=12;
verify=myAge <= ageRest;
console.log('Тобі менше 12?', verify);

// вправа 8
let ageSasha=12;
let ageTania=11;
verify= ageSasha == ageTania;
console.log('Вони оного віку?', verify);

// вправа 9
myAge=9;
let adult=false;
verify= (myAge >= 12) || (myAge < 12 && adult == true)
console.log('Мене пустять на фільм?', verify);

// дз гроші = 1000$ купити щось = 500$ Чи куплю я?