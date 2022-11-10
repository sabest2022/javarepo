const myArray = [
    "has",
    "love",
    "delicate",
    "I",
    "language",
    "have",
    "juice",
    "got",
    "symphony",
    "milk",
    "beutiful",
    "shine",
    "she",
    "egg",
    "nice",
    "day",
    "now",
    "nighty",
    "stare",
    "know",
    "bed",
    "lake",
    "why",
    "avoid",
    "bad",
    "pad",
    "because",
    "skin",
]
function setElement(type, content, append, clas) {
    const x = document.createElement(type);
    x.textContent = content;
    append.append(x);
    x.classList.add(clas);
    // x.addEventListener("click", () => { even() });
    return x;
}
// setElement("div", null, document.body, "maincontent");



// myArray.forEach(document.querySelector(".ordklas"), () => {

// });
// myArray.forEach(element => {

// });
onload = init()
function init() {
    localStorage.clear();
    // worda.setAttribute("disable", false);
    // worda.classList.remove("blue");
}


setElement("div", null, document.body, "maincontent");


function setElements(type, content, father, klas) {
    const x = document.createElement(type);
    x.textContent = content;
    father.append(x);
    x.classList.add(klas);
    // x.addEventListener("click", () => { even() });
    return x;
}
for (let ord of myArray) {

    const words = setElements("button", ord, document.querySelector(".maincontent"), `${ord}`);
    let x = Math.floor(Math.random() * 60) - 30;
    const y = `transform:rotate(${x}deg)`
    words.style = y
    console.log(x)
    words.addEventListener("click", () => {
        // words.setAttribute("disable", true);
        // worda.style.color = "red";
        words.classList.add("red");
        words.classList.add("blue");
        if (!localStorage.getItem("mywords")) {
            localStorage.setItem("mywords", JSON.stringify([ord]))
        }
        else {
            const word = JSON.parse(localStorage.getItem("mywords"));
            // console.log(word);
            word.push(ord);
            localStorage.setItem("mywords", JSON.stringify(word));
            // document.querySelector(`.${ord}`).style.display = "none";
        }
    })
    // myword.addEventListener("click", function () 
}
// function even() {
// worda.setAttribute("disable", true);
// // worda.style.color = "red";
// worda.classList.add("red")
// worda.classList.add("blue");
// if (!localStorage.getItem("mywords")) {
//     localStorage.setItem("mywords", JSON.stringify([]))
// }
// else {
//     const word = JSON.parse(localStorage.getItem("mywords"));
//     // console.log(word);
//     word.push(`${worda.textContent}`);
//     localStorage.setItem("mywords", JSON.stringify(word));
//     // document.querySelector(`.${ord}`).style.display = "none";
// }
// }

// document.querySelector(".sentence").style.display = "none";
// div buttons show poesi and reset
setElement("div", null, document.body, "content");

// div poesi content
// setElement("div", null, document.body, "sentDiv");
// button poesi, action eventListener
setElement("h1", null, document.querySelector(".content"), "sentence");
setElement("button", "show your poem", document.querySelector(".content"), "poem");
document.querySelector(".poem").addEventListener("click", () => {
    if (document.querySelector(".sentence").textContent = null) {
        document.querySelector(".sentence").textContent = " Pick up some words!"
    };
    let poesi = JSON.parse(localStorage.getItem("mywords"));
    // console.log(poesi);
    let t = 'your poem: ';
    for (let i = 0; i < poesi.length; i++) {
        // console.log(i);
        // console.log(poesi[i]);
        t = t.concat(`  ${poesi[i]}`);
    }

    document.querySelector(".sentence").textContent = t
});

// button reset
const reset = setElement("button", "Reset", document.querySelector(".content"), "reset");
reset.addEventListener("click", () => {
    document.querySelectorAll(".blue").forEach(element => {
        element.classList.remove('blue', 'red');
        document.querySelector(".sentence").textContent = null;
        localStorage.clear()
    });
});


// document.querySelectorAll(".form__input").forEach(inputElement => {
//     inputElement.addEventListener("blur", e => {
//         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
//             setInputError(inputElement, "Username must be at least 8 characters in length");
//         }
//     });
//     inputElement.addEventListener("input", e => {
//         clearInputError(inputElement);
//     });
// });