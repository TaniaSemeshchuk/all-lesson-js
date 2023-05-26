/*for(i=0; i<3; i++){
$("#button").fadeOut(3000);
$("#button").fadeIn(3000);
}*/

/*$("#button").fadeOut(3000);
$("#button").delay(5000);
$("#button").fadeIn(3000);*/

/*$("#button").fadeTo(3000, 0.3);
$("#button").fadeTo(3000, 1);*/

/*let message=function(){
    alert('Навчатися з Digital Learning - це круто!');
}

setTimeout(message, 5000);*/

let counter=1;
let printMessage=function(){
    console.log('Ти дивишся сюди'+counter+' секунд!');
    counter++;
}

setInterval(printMessage, 1000);