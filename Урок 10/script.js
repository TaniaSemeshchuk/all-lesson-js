window.onload=click;

function click(){
    let button=document.getElementById("btn");
    button.onclick=fatum;
}

function fatum(){
    let fatumMesseges=[
        'На тебе сьогодні чекає хороший день',
        'Всі справи завершаться успіхом',
        'Cьогодні відпочинь'
    ];

    let rand=Math.floor(Math.random()*fatumMesseges.length);
    alert(fatumMesseges[rand]);
}