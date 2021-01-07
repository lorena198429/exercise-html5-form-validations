let divs2 = document.querySelectorAll("div");

divs2.forEach((div) => {
    div.addEventListener("click", function (evento) {
        console.log(evento);
    })
})

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = generateRandomColor();
})

let form = document.querySelector("form");

let token = document.createElement("input");
token.type = "hidden";
token.value = "sdfwoeyriowerioweriyweriweyr";
form.appendChild(token);

form.addEventListener("submit", e => {
    e.preventDefault();

    e.target.submit();
})


let username = document.querySelector("#username");
username.addEventListener("keyup", e => {
    console.log(e.target.value);
    let div = document.querySelector("div");
    div.innerHTML = e.target.value;
})


