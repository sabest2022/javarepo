function setElement(type, content, append, clas) {
    const x = document.createElement(type);
    x.textContent = content;
    append.append(x);
    x.classList.add(clas);
    return x;
}
// const mainDiv = setElement("div", null, document.body, "mainDiv");
// const reminderBut = setElement("button", "New to do!", document.querySelector(".mainDiv"), "remindBut");
// // reminderBut.addEventListener("click", () => {
// const newInput = setElement("input", null, document.querySelector(".mainDiv"), "newInput");
const nowdate = new Date();
function init() {
    if (document.querySelector("mainDiv")) {
        document.querySelector("mainDiv").remove()
    }
    const mainDiv = setElement("div", null, document.body, "mainDiv");
    const reminderBut = setElement("button", "New to do!", document.querySelector(".mainDiv"), "remindBut");
    // reminderBut.addEventListener("click", () => {
    const newInput = setElement("input", null, document.querySelector(".mainDiv"), "newInput");

    if (!localStorage.getItem("todolist") || !localStorage.getItem("datetodo")) {
        localStorage.setItem("todolist", JSON.stringify([]));
        localStorage.setItem("datetodo", JSON.stringify([]))
    }
    if (localStorage.getItem("todolist")) {

        todolist = JSON.parse(localStorage.getItem("todolist",));
        console.log(todolist);
        datetodo = JSON.parse(localStorage.getItem("datetodo",));
        for (d in todolist) {
            const contDiv = setElement("div", null, document.body, "contDiv");
            const showtodo = setElement("p", todolist[d], contDiv, "showtodo");
            showtodo.addEventListener("click", () => {

                newPage()
            })
        }
    }
    reminderBut.addEventListener("click", () => {
        if (!newInput.value == "") {
            todolist = JSON.parse(localStorage.getItem("todolist"));
            datetodo = JSON.parse(localStorage.getItem("datetodo"));
            todolist.push(newInput.value);
            console.log(datetodo);
            datetodo.push(nowdate.toDateString())
            localStorage.setItem("todolist", JSON.stringify(todolist));
            localStorage.setItem("datetodo", JSON.stringify(datetodo));
            newInput.value = null;
            // init();
        }
    })
}

// console.log(nowdate);
init();

// })

function newPage() {

}
