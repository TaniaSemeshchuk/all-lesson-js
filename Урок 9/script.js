window.onload=function(){
    let canvaTeacher=document.getElementById('canvasTeacher');
    let ctx1=canvaTeacher.getContext('2d');
    let imgTeacher=document.getElementById('photoTeacher');
    ctx1.drawImage(imgTeacher, 10, 10, 80, 91.38);

    let canvaPupil1=document.getElementById('canvasPupil1');
    let ctx2=canvaPupil1.getContext('2d'); 
    let imgPupil1=document.getElementById('photoGirl');
    ctx2.drawImage(imgPupil1, 10, 10, 80, 80); 
    
    let canvaPupil2=document.getElementById('canvasPupil2');
    let ctx3=canvaPupil2.getContext('2d');
    let imgPupil2=document.getElementById('photoBoy');
    ctx3.drawImage(imgPupil2, 10, 10, 80, 80);

    let canvaPupil3=document.getElementById('canvasPupil3');
    let ctx4=canvaPupil3.getContext('2d');
    let imgPupil3=document.getElementById('photoBoy');
    ctx4.drawImage(imgPupil3, 10, 10, 80, 80);
}

let canvasTeacher=document.getElementById('canvasTeacher');
let ctx1=canvasTeacher.getContext('2d');
ctx1.font='30px Tahoma';
ctx1.fillText('Тетяна', 110, 50);
ctx1.font='22px Tahoma';
ctx1.fillText('вчителька', 110, 80);

let canvaPupil1=document.getElementById('canvasPupil1');
let ctx2=canvaPupil1.getContext('2d');
ctx2.fillStyle='#dcdcdc';
ctx2.fillRect(0, 0, 300, 100);
ctx2.fillStyle='#000000';
ctx2.font='30px Tahoma';
ctx2.fillText('Аня', 110, 65);

let canvaPupil2=document.getElementById('canvasPupil2');
let ctx3=canvaPupil2.getContext('2d');
ctx3.fillStyle='#dcdcdc';
ctx3.fillRect(0, 0, 300, 100);
ctx3.fillStyle='#000000';
ctx3.font='30px Tahoma';
ctx3.fillText('Ігор', 110, 65);

let canvaPupil3=document.getElementById('canvasPupil3');
let ctx4=canvaPupil3.getContext('2d');
ctx4.fillStyle='#dcdcdc';
ctx4.fillRect(0, 0, 300, 100);
ctx4.fillStyle='#000000';
ctx4.font='30px Tahoma';
ctx4.fillText('Саша', 110, 65);

$('h1').slideDown(1000);

$('#canvasTeacher').delay(1200);
$('#canvasTeacher').slideDown(1500);

$('#canvasPupil1').delay(2300);
$('#canvasPupil1').slideDown(1500);

$('#canvasPupil2').delay(2300);
$('#canvasPupil2').slideDown(1500);

$('#canvasPupil3').delay(2300);
$('#canvasPupil3').slideDown(1500);