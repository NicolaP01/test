function changetext() {
    document.getElementById("testo").innerText = "Ciao, Javascript!";
}

function changecolor() {
    let titolo = document.getElementById("titolo")
    titolo.style.color = "red"
}

function addP() {
    let body = document.getElementById("body");
    let p = document.createElement("p");
    p.innerText = "Nuovo paragrafo aggiunto!";
    body.appendChild(p);
}

function removeElement() {
    let ul = document.getElementById("ul");
    ul.lastElementChild.remove();
}

function changeImg() {
    let img = document.getElementById("immagine");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Golden_retriever_stehfoto.jpg/800px-Golden_retriever_stehfoto.jpg"
}

function addClass() {
    let box = document.getElementById("box");
    box.classList.add("box");
}

function addEvent() {
    let button = document.getElementById("clicca");
    button.addEventListener("click", function () {
        document.body.style.backgroundColor = "orange";
    })
}
window.onload = addEvent;

addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
        let div = document.getElementById("quadrato");
        mover = mover + 1;
        div.style.marginLeft = mover + "cm";
    }
    else if(event.key == "ArrowLeft"){
        let div = document.getElementById("quadrato");
        mover = mover - 1;
        div.style.marginLeft = mover + "cm";
    }
    else if(event.key == "ArrowDown"){
        let div = document.getElementById("quadrato");
        moved = moved + 1;
        div.style.marginTop = moved + "cm";
    }
    else if(event.key == "ArrowUp"){
        let div = document.getElementById("quadrato");
        moved = moved - 1;
        div.style.marginTop = moved + "cm";
    }

})
let mover = 0;
let moved = 0;

function hideShow() {
    let para = document.getElementById("testoNascosto");
    if (para.hidden == false) {
        para.hidden = true;
    }
    else {
        para.hidden = false;
    }
}

let count = 0;
function incrementa() {
    let span = document.getElementById("contatore");
    span.innerText = ++count;
}

function decrementa() {
    let span = document.getElementById("contatore");
    span.innerText = --count;
}