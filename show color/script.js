const x = [
    "red",
    "blue",
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
    "orange",
    "white"
]
let i = 0;
// while (x[i]) {
//     console.log(x[i]);
//     i++
// }
let text = "";

// do {
//     text += "Saeed" + i;
//     i++
//     console.log(text);
// }




while (i < x.length) {
    text += i
    timut(i)
    i++
    console.log(i);
}
function timut(i) {
    setTimeout(() => {
        console.log(i);
        console.log(x[i]);
    }, 1000 + i * 1000);
}



// for (s of x) {
//     console.log(s);
//     i++;
//     timut2();

// }
// function timut2() {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 + i * 1000);
// }

function setElement(type, content, append, klas) {
    const d = document.createElement(type);
    d.textContent = content;
    append.append(d);
    d.classList.add(klas);
}

setElement("div", null, document.body, "maincontent");

for (var p = 0; p < x.length; p++) {
    timut2(p);
}
function timut2(p) {
    setTimeout(() => {
        // console.log(p);
        // console.log(x[p]);
        setElement("h1", `${p + 1}. ${x[p]}`, document.querySelector(".maincontent"), `${x[p]}`);
        document.querySelector(`.${x[p]}`).style.backgroundColor = `${x[p]}`;
        document.body.style.backgroundColor = `${x[p]}`;
        let myvar = Math.floor(Math.random() * 90) - 45;
        let mystyle = `color:${x[p]}; transform : rotate(${myvar}deg);`;
        document.querySelector(`.${x[p]}`).style = mystyle;

    }, 1000 + p * 500);

}

