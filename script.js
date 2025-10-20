let time = 0;
let countdownInterval;

const countdownEl = document.getElementById('countdown');
const inputEl = document.getElementById('time-input');
const buttonEl = document.getElementById('my-button');

buttonEl.onclick = function () {
    const startingMinutes = parseFloat(inputEl.value);
    time = startingMinutes * 60;
    console.log("Timer set for", startingMinutes, "minutes");
    
}

setInterval(updateCountdown, 1000);

function updateCountdown () {
    if (time > 0) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;

    }else{
        countdownEl.innerHTML = "0:00";
    }
}
