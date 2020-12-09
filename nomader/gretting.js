const form = document.querySelector(".js-form"),
input = form.querySelector(".input"),
gretting = document.querySelector(".js-greetings");

const userLs = "currentUser";
const showingCn = "showing";

function saveName(text){
    localStorage.setItem(userLs, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintingGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(showingCn);
    form.addEventListener("submit", handleSubmit);
}

function paintingGreeting(Text){
    form.classList.remove(showingCn);
    gretting.classList.add(showingCn);
    gretting.innerText = `Hellow ${Text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(userLs);
    if(currentUser === null){
        askForName(currentUser);
    }else {
        paintingGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();