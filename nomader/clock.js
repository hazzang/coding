const clockCounter = document.querySelector(".js-clock"),
clockDate = clockCounter.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const secound = date.getSeconds();
    clockDate.innerText = `${hours < 10 ? `0${hours}` : hours}:${minute < 10 ? `0${minute}` : minute}:${secound < 10 ? `0${secound}`: secound}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();