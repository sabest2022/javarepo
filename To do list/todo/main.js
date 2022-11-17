// function exitwarning() {
//     return "you should save your to do list!"
// }
addEventListener('load', function (e) {

    if (!localStorage.getItem("donelist")) {
        localStorage.setItem("donelist", JSON.stringify([]))
    }
    const x = document.querySelector('#test');
    //-- x.innerHTML = 'date';

    const a = document.querySelector('#tes');

    let d = new Date()
    x.textContent = d.toLocaleDateString()
    //-- a.append(d.toLocaleDateString());
    let g = d.toJSON()

    a.append(g.slice(0, 10))

    const f = document.querySelector("#myDate");
    f.defaultValue = g.slice(0, 10);
    x.textContent = f.defaultValue;



    a.textContent = f.defaultValue.slice(0, 10);

    const timeStart = document.querySelector('#start[type="time"]');
    const timeEnd = document.querySelector('#end[type="time"]');

    let s = d.toLocaleTimeString("it-IT");
    s = s.slice(0, 5);
    a.append(s)
    timeStart.value = s;
    timeEnd.value = s;
    const myTitle = document.querySelector("#myTitle");

    const myPlace = document.querySelector("#myPlace");

    const myDate = document.querySelector("#myDate");

    const c = document.querySelector("#mybut");
    c.addEventListener("click", () => {

        c.innerText = timeStart.value;
        const k = document.querySelector('#te');

        const tol = document.querySelector('#tol');


        if (!localStorage.getItem("list")) {
            localStorage.setItem("list", JSON.stringify([]))
        }
        let cf = localStorage.getItem("list");
        console.log(cf)
        let pl = JSON.parse(localStorage.getItem("list"))
        console.log(pl);
        pl.push({ title: myTitle.value, myPlace: myPlace.value, date: myDate.value, time: s });
        console.log(pl[1], pl[0]);

        localStorage.setItem("list", JSON.stringify(pl));
        const ls = localStorage.getItem("list");
        show();


    })
});
function setElement(type, content, append, clas) {
    const x = document.createElement(type);
    x.textContent = content;
    append.append(x);
    x.classList.add(clas);
    return x;
}

function show() {

    let pl = JSON.parse(localStorage.getItem("list"))
    const j = document.querySelector('#t');
    let e = JSON.parse(localStorage.getItem("list"));
    j.textContent = pl[0].title + pl[0].date;
    for (obj in e) {
        const x = setElement("div", null, document.body, "div-content");
        setElement("p", `Title: ${e[obj].title} Place: ${e[obj].myPlace} Date: ${e[obj].date}, Start Time: ${e[obj].timeStart}, End Time: ${e[obj].timeEnd}`, x, "content")
        // tol.append(e[obj].date);
        const radio = setElement("input", "one!", x, "radio");
        radio.type = "radio"; radio.setAttribute("id", "done");
        const lable = setElement("lable", "Done!", x, "lable");
        lable.setAttribute("for", "done");
        // this function move to does to done list category
        radio.addEventListener("click", function () {
            let dl = JSON.parse(localStorage.getItem("donelist"))
            const donelist = pl.slice(obj, obj + 1);
            dl.push(donelist);
            localStorage.setItem("donelist", JSON.stringify(dl));
            pl = pl.splice(obj, 1);
            localStorage.setItem("list", JSON.stringify(pl));
            x.remove()
        });

        // .append(e.title, e myPlace, "   ", e.date)
    }
}


function myArr1() {
    for (let i = 0; i < this.length; i++) {
        const x = document.createElement("p");
        x.textContent = this[i];
        document.body.append(x);
        x.classList.add("myClas");
    }
};
const thear = ["saeeed", "askarian", "fdsgvdrs"];
// thear.myPElemnt();
const thearr = [{ name: "Saeed" }, { fam: "Askaryan", name: "Shahyad" }];

function myArr2() {
    for (i in this) {
        const x = document.createElement("p");
        x.textContent = `Name: ${this[i].name}, Family: ${this[i].fam}`;
        document.body.append(x);
        x.classList.add("myClas");
    }
};
// thearr.myPElemnts();
const kw = JSON.parse(localStorage.getItem("list"));
console.log(kw);

Array.prototype.myPElements = function () {
    const z = setElement("div", null, document.body, "all-content");
    for (i in this) {
        console.log(i);
        console.log(this);
        const k = setElement("div", null, z, "div-content");
        const x = document.createElement("p");
        x.textContent = `Title: ${this[i].title} Place: ${this[i].myPlace} Date: ${this[i].date}, Start Time: ${this[i].timeStart}, End Time: ${this[i].timeEnd}`;
        k.append(x);
        x.classList.add("myClas");
        const radio = setElement("input", "one!", k, "radio");
        radio.type = "radio"; radio.setAttribute("id", "done");
        const lable = setElement("lable", "Done!", k, "lable");
        lable.setAttribute("for", "done");
    }
};
kw.myPElements();

