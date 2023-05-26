/*let answer1Element=document.getElementById("answer-1");
console.log(answer1Element.innerHTML);
let newAnswer1=prompt('Ваше прізвище:');
answer1Element.innerHTML=newAnswer1;

let answer2Element=document.getElementById("answer-2");
console.log(answer2Element.innerHTML);
let newAnswer2=prompt("Ваше ім'я:");
answer2Element.innerHTML=newAnswer2;

let answer3Element=document.getElementById("answer-3");
console.log(answer3Element.innerHTML);
let newAnswer3=prompt('Клас, в який ви ходите:');
answer3Element.innerHTML=newAnswer3;*/

let newAnswer1=prompt('Ваше прізвище:');
$("#answer-1").text(newAnswer1);

let newAnswer2=prompt('Ваше імʼя:');
$("#answer-2").text(newAnswer2);

let newAnswer3=prompt('Клас, в який ви ходите:');
$("#answer-3").text(newAnswer3);

$("body").append("<p>Дякую за відповіді!</p>");