const hourHand=document.querySelector('.hour-hand');
const minuteHand=document.querySelector('.minute-hand');
const secondHand=document.querySelector('.second-hand');

function clockTick(){
    const date= new Date();
    const second= date.getSeconds()/60;
    const minute=(second+date.getMinutes())/60;
    let hour=(minute+date.getHours())/60;

    rotateClockHand(secondHand,second);
    rotateClockHand(minuteHand,minute);
    rotateClockHand(hourHand,hour);
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate',rotation*360);
}
setInterval(clockTick,1000);
