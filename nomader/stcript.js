const title = document.querySelector("#title");

const classClick = "clicked"

function handleClick() {
    title.classList.toggle(classClick);
}


function init() {
    
    window.addEventListener("click", handleClick);
}
init();