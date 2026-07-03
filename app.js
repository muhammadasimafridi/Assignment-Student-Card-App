let body= document.querySelector("body");
let container = document.querySelector(".container");
let imgUrl = document.querySelector("#img-url");
let name = document.querySelector("#name");
let age = document.querySelector("#age");
let stdClass = document.querySelector("#std-class");
let subBtn = document.querySelector(".sub-btn");
let cardBox = document.querySelector(".card-box");


subBtn.addEventListener("click", () => {
    
    let card = document.createElement("div");
    cardBox.appendChild(card);
    cardBox.classList.add("non-hidden");

    card = `<img src="${imgUrl.value}" class="pic"></img>
        <p class="name-title"><b>Student Name:</b> ${name.value}</p>
        <p class="age-title"><b>Student Age:</b> ${age.value}</p>
        <p class="class-title"><b>Class:</b> ${stdClass.value}</p>`;

        cardBox.innerHTML = card;

        name.value = "";
        age.value = "";
        stdClass.value = "";
        imgUrl.value = "";
});
