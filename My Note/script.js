function setElement(type, content, append, clas) {
    const x = document.createElement(type);
    x.textContent = content;
    append.append(x);
    x.classList.add(clas);
    return x;
}
nowdate = new Date();

document.addEventListener("onbeforeunload", () => {
    return " Changes that you made may not be saved.";
})
let dagbok = [];
let datedagbok = []
const container = setElement("div", null, document.body, "divclas");
const newnote = setElement("button", "New note!", document.querySelector(".divclas"), "newtextbut");
newnote.addEventListener("click", () => {
    thetext.style.display = "flex";
    newnote.style.display = "none"
    thetext.value = null;
})

const thetext = setElement("textarea", null, document.querySelector(".divclas"), "mytext");
thetext.addEventListener("blur", () => {
    save();
    newnote.style.display = "flex"
    // document.body.style.backgroundColor = "blue";
})
thetext.style.display = "none";
// const savebut = setElement("button", "Save!", document.querySelector(".divclas"), "savebut");

function init() {
    if (document.querySelector(".divlist")) {
        document.querySelector(".divlist").remove();
    }

    if (localStorage.getItem("dagbok")) {
        dagbok = JSON.parse(localStorage.getItem("dagbok",));
        datedagbok = JSON.parse(localStorage.getItem("datedagbok",));
        const divlists = setElement("div", null, document.body, "divlists");
        if (!localStorage.getItem("dagbok") || !localStorage.getItem("datedagbok")) {
            localStorage.setItem("dagbok", JSON.stringify([]));
            localStorage.setItem("datedagbok", JSON.stringify([]))
        }
        for (const d in dagbok) {
            // let dindex = dagbok.indexOf(d);
            // dagbok.push(thetext.value);
            const divlist = setElement("div", null, document.querySelector(".divlists"), "divlist");
            const newtext = setElement("p", `${JSON.stringify(dagbok[d]).slice(0, 15)} `, divlist, "todolist");
            const datetext = setElement("ul", `${datedagbok[d]}`, divlist, "datelist");
            const delbut = setElement("button", "Delete", divlist, "delbut");
            const editbut = setElement("button", "Edit", divlist, "editbut");
            const showbut = setElement("button", "show", divlist, "showbut");
            showbut.addEventListener("click", () => {
                thetext.style.display = "flex";
                const editedt = dagbok.slice(d, d + 1);
                thetext.value = null;
                thetext.value = editedt[0];
            })
            editbut.addEventListener("click", function () {
                // this.setAttribute("disbaled", true);

                // const edittext = dagbok.slice(dindex, dindex + 1);
                // let editdate = datedagbok.slice(dindex, dindex + 1);
                thetext.style.display = "flex";
                const editedt = dagbok.slice(d, d + 1);
                thetext.value = null;
                thetext.value = editedt[0];

                // console.log("Visited index ", index, " with value ", value)};
                console.log(dagbok.slice(d, d + 1));
                console.log(editedt[0]);
                // newtext.textContent;

                dagbok.splice(d, 1);
                datedagbok.splice(d, 1);
                localStorage.setItem("dagbok", JSON.stringify(dagbok));
                localStorage.setItem("datedagbok", JSON.stringify(datedagbok));
                divlists.remove();

                init();
            })
            delbut.addEventListener("click", function () {
                this.setAttribute("disbaled", true);

                let text = "Are you sure about delete the note!";
                if (confirm(text) == true) {
                    dagbok.splice(d, 1);
                    localStorage.setItem("dagbok", JSON.stringify(dagbok));
                    datedagbok.splice(d, 1);
                    localStorage.setItem("datedagbok", JSON.stringify(datedagbok));
                    divlist.remove();
                }

            })

        }
    }

    // )
    // const reset = setElement("button", "Reset", document.querySelector(".divclas"), "reset");
    // reset.addEventListener("click", function () {

    // })
}
init();
// savebut.addEventListener("click", () => { save() });


function save() {

    if (!thetext.value == "") {
        dagbok = JSON.parse(localStorage.getItem("dagbok"));
        datedagbok = JSON.parse(localStorage.getItem("datedagbok"));
        dagbok.push(thetext.value);
        datedagbok.push(nowdate.toDateString())
        localStorage.setItem("dagbok", JSON.stringify(dagbok));
        localStorage.setItem("datedagbok", JSON.stringify(datedagbok));
        thetext.value = null;
    }
    // else {
    //     alert("nothing to save!")
    // }
    if (document.querySelector(".divlists")) {
        document.querySelector(".divlists").remove();
    }
    thetext.style.display = "none";

    init();

};