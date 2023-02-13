const dateCountDown = new Date('Feb 14 2023')

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secondEl = document.getElementById("second");

function countDown(){
    const currentDate = new Date();

    const totalSeconds = Math.floor((dateCountDown - currentDate)/1000);

    const days = Math.floor(totalSeconds / 60 / 60 / 24);
    const hours = Math.floor(totalSeconds / 60 / 60  )%24;
    const mins = Math.floor(totalSeconds / 60 )%60;
    const seconds = totalSeconds %60;


    dayEl.innerHTML = fomatText(days);
    hourEl.innerHTML = fomatText(hours);
    minEl.innerHTML = fomatText(mins);
    secondEl.innerHTML = fomatText(seconds);
}


function fomatText(time){
    return time<10? (`0${time}`):(`${time}`)
}
setInterval(countDown, 1000)