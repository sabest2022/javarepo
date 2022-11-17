// function traning(y) {
//     const x = Math.floor((Math.random() * y));
//     console.log(x);
// }
// traning(6);
// traning(6);
// traning(10);
// traning(100)
// const backColor = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     })
// }
// function mycolor() {
//     const w = JSON.parse(localStorage.getItem("color"));
//     // for (let col of w)
//     for (let i = 0; i < w.length; i++) {
//         // let x = 0;
//         backColor(w[i], 1000);
//         console.log(w[i])
//         // .then(() => backColor(col, 1000))
//         // x++
//     }
// }

mycolor();
function mycolor() {
    if (localStorage.getItem("color")) {
        const w = JSON.parse(localStorage.getItem("color"));
        for (var i = 0; i < w.length; i++) {
            changecolor(i)
        }
        function changecolor(i) {
            setTimeout(() => {
                document.body.style.backgroundColor = w[i];
                console.log(w[i])
            }, 1000 + i * 1000);

        }
    }
}

// function mycolor() {
//     if (localStorage.getItem) {
//         const w = JSON.parse(localStorage.getItem("color"));
//         for (var i = 0; i < w.length; i++) {
//             delay(i)
//         }
//         function delay(i) {
//             setTimeout(() => {
//                 document.body.style.backgroundColor = w[i];
//                 console.log(w[i])
//             }, 1000 + i * 1000);

//         }
//     }
// }

// function ini() {

//     if (localStorage.getItem("color")) {
//         const w = JSON.parse(localStorage.getItem("color"));
//         for (let col of w) {
//             setTimeout(console.log(col), 1500);
//             document.body.style.backgroundColor = col;
//         }
//     }
// }
// ini()

const d = document.createElement("div")
d.classList = "mydiv";
document.body.append(d);
const error = setElement("h3", null, document.body, "error");
const a = document.createElement("input");
a.classList.add("myinput")
document.querySelector(".mydiv").append(a);
const b = document.createElement("button");
b.classList.add("mybut")
document.querySelector(".mydiv").append(b);
b.textContent = "Save color!"

const colors = [
    "blue",
    "black",
    "white",
    "red",
    "darkblue",
    "aliceblue",
    "aqua",
    "beige",
    "azure",
    "bisque",
    "blueviolet",
    "brown",
    "cadetblue",
    "burlywood",
    "chartreuse",
    "chocolate",
    "coral",
    "crimson",
    "cyan",
    "darkgray",
    "darkgreen",
    "darkorange",
    "darkolivegreen",
    "darkred",
    "darkorchid",
    "darksalmon",
    "deeppink",
    "dimgray",
    "dodgerblue",
    "firebrick",
    "florawhite",
    "gainsboro",
    "ghostwhite",
    "gold",
    "hotpink",
    "ivory",
    "khaki",
    "indigo",
    "lightgreen",
    "lightskyblue",
    "lightpink",
    "linen",
    "magenta",
    "midnightblue",
    "navy",
    "olive",
    "oldlace",
    "orange",
    "orangered",
    "pink",
    "peru",
    "plum",
    "purple",
    "salmon",
    "seagreen",
    "seashell",
    "silver",
    "skyblue",
    "snow",
    "springgreen",
    "teal",
    "violet",
    "yellow",
    "yellowgreen",
    "whitesmoke",
]
function setElement(type, content, append, klas) {
    const x = document.createElement(type);
    append.append(x);
    x.textContent = content;
    x.classList = klas;
    // x.style.color = klas;
    x.classList.add("mycolor");
    return x;
}
setElement("div", null, document.body, "maincontent");
for (colo of colors) {
    const myobj = setElement("div", colo, document.querySelector(".maincontent"), colo);
    let myvar = Math.floor(Math.random() * 90) - 45;
    let mystyle = `color:${colo}; transform : rotate(${myvar}deg);`;
    document.querySelector(`.${colo}`).style = mystyle;
    myobj.addEventListener("click", () => {
        a.value = myobj.textContent
    })
}

const reset = setElement("button", "Reset", document.body, "reset");
reset.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("color", JSON.stringify([]))
})

b.addEventListener("click", () => {
    // for (const color of colors) {
    //     if (a.value === color) {
    //         document.body.style.backgroundColor = a.value;
    //         if (!localStorage.getItem("color")) {
    //             localStorage.setItem("color", JSON.stringify([]))
    //         }
    //         let ls = JSON.parse(localStorage.getItem("color"));
    //         ls.push(a.value)
    //         console.log(ls);
    //         localStorage.setItem("color", JSON.stringify(ls))
    //     }

    //     // else {            }
    // }

    if (colors.includes(a.value)) {
        document.body.style.backgroundColor = a.value;
        if (!localStorage.getItem("color")) {
            localStorage.setItem("color", JSON.stringify([]))
        }
        let ls = JSON.parse(localStorage.getItem("color"));
        ls.push(a.value)
        console.log(ls);
        localStorage.setItem("color", JSON.stringify(ls))
    } else {
        console.log("ogiltig färg!")
        error.textContent = "ogiltig färg!"
    }
});
// let myvar = Math.floor(Math.random()*90)-45;
