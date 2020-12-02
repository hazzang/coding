const title = document.querySelector("#title");

const baseColor = "white";
const otherColor = "green";

function handleClick() {
    const correntColor = title.style.color;
    if(correntColor === baseColor) {
        title.style.color = otherColor;
    }else {
        title.style.color = baseColor;
    }
}


function init() {

    title.style.color = baseColor;
    window.addEventListener("click", handleClick);
}

init();
