// function setElement(type, content, append, clas) {
//     const x = document.createElement(type);
//     x.textContent = content;
//     append.append(x);
//     x.classList.add(clas);
//     return x;
// }
// nowdate = new Date();
const today = new Date(); // today's date
// const tomorrow = new Date(today.setDate(today.getDate() + 1)); // tomorrow's date
// // document.addEventListener("onbeforeunload", () => {
// //     return " Changes that you made may not be saved.";
// // })
// let todolist = [];
// let datetodolist = []
// const container = setElement("div", null, document.body, "divclas");
// const newnote = setElement("button", "New note!", document.querySelector(".divclas"), "newtextbut");
// newnote.addEventListener("click", () => {
//     thetext.style.display = "flex";
//     newnote.style.display = "none"
//     thetext.value = null;
// })

// const thetext = setElement("textarea", null, document.querySelector(".divclas"), "mytext");
// thetext.addEventListener("blur", () => {
//     save();
//     newnote.style.display = "flex"
//     // document.body.style.backgroundColor = "blue";
// })
// thetext.style.display = "none";
// const savebut = setElement("button", "Save!", document.querySelector(".divclas"), "savebut");
// const mybutton = document.querySelector(".submit").addEventListener("click", myfunction6())
function myFunction6() {

    var x = document.querySelector(".date-input");

    x.defaultValue = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);;
    console.log(today)
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    // setElement("p", null, document.body, "demo")
    if (defaultVal == currentVal) {
        document.querySelector("#demo").innerHTML = "Default value and current value is the same: "
            + x.defaultValue + " and " + x.value
            + "<br>Change the value of the date field to see the difference!";
    } else {
        document.querySelector("#demo").innerHTML = "The default value was: " + defaultVal
            + "<br>The new, current value is: " + currentVal;
    }
}

const date = new Date();
// (Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
const options = { month: 'numeric', day: 'numeric', year: 'numeric' };
console.log(date.toLocaleDateString('ko-KR', options));
// "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = 'UTC';
options.timeZoneName = 'short';
console.log(date.toLocaleDateString('en-US', options));

var p = document.createElement("INPUT");
p.setAttribute("type", "date");
document.body.append(p);
p.defaultValue = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
p.addEventListener("click", () => {

    var defaultVal = p.defaultValue;
    var currentVal = p.value;
    // setElement("p", null, document.body, "demo")
    if (defaultVal == currentVal) {
        document.querySelector("#demo").innerHTML = "Default value and current value is the same: "
            + p.defaultValue + " and " + p.value
            + "<br>Change the value of the date field to see the difference!";
    } else {
        document.querySelector("#demo").innerHTML = "The default value was: " + defaultVal
            + "<br>The new, current value is: " + currentVal;
    }
})

// function init() {
//     if (document.querySelector(".divlist")) {
//         document.querySelector(".divlist").remove();
//     }

//     if (localStorage.getItem("todolist")) {
//         todolist = JSON.parse(localStorage.getItem("todolist",));
//         datetodolist = JSON.parse(localStorage.getItem("datetodolist",));
//         const divlists = setElement("div", null, document.body, "divlists");
//         if (!localStorage.getItem("todolist") || !localStorage.getItem("datetodolist")) {
//             localStorage.setItem("todolist", JSON.stringify([]));
//             localStorage.setItem("datetodolist", JSON.stringify([]))
//         }
//         for (const d in todolist) {
//             // let dindex = todolist.indexOf(d);
//             // todolist.push(thetext.value);
//             const divlist = setElement("div", null, document.querySelector(".divlists"), "divlist");
//             const newtext = setElement("p", `${JSON.stringify(todolist[d]).slice(0, 15)} `, divlist, "todolist");
//             const datetext = setElement("ul", `${datetodolist[d]}`, divlist, "datelist");
//             const delbut = setElement("button", "Delete", divlist, "delbut");
//             const editbut = setElement("button", "Done!", divlist, "editbut");
//             const setBut = setElement("button", "Stting", divlist, "setBut");
//             setBut.addEventListener("click", () => {
//                 thetext.style.display = "flex";
//                 const editedt = todolist.slice(d, d + 1);
//                 thetext.value = null;
//                 thetext.value = editedt[0];
//                 setElement("div", null, document.body, "test_time");
//                 const doing = setElement("h1", null, document.querySelector("#mydiv"), "doing");
//                 // const input = setElement("input", null, document.querySelector("#mydiv"), "test_time");
//                 doing.textContent = editedt[0];
//                 // document.getElementById('#mycalendar').value = tomorrow.toISOString().split('T')[0];
//                 console.log() // input.type = "datetime-local"
//             })


//             editbut.addEventListener("click", function () {
//                 // this.setAttribute("disbaled", true);
//                 // const edittext = todolist.slice(dindex, dindex + 1);
//                 // let editdate = datetodolist.slice(dindex, dindex + 1);
//                 thetext.style.display = "flex";
//                 const editedt = todolist.slice(d, d + 1);
//                 thetext.value = null;
//                 thetext.value = editedt[0];
//                 // console.log("Visited index ", index, " with value ", value)};
//                 console.log(todolist.slice(d, d + 1));
//                 console.log(editedt[0]);
//                 // newtext.textContent;

//                 todolist.splice(d, 1);
//                 datetodolist.splice(d, 1);
//                 localStorage.setItem("todolist", JSON.stringify(todolist));
//                 localStorage.setItem("datetodolist", JSON.stringify(datetodolist));
//                 divlists.remove();

//                 init();
//             })
//             delbut.addEventListener("click", function () {
//                 this.setAttribute("disbaled", true);

//                 let text = "Are you sure about delete the note!";
//                 if (confirm(text) == true) {
//                     todolist.splice(d, 1);
//                     localStorage.setItem("todolist", JSON.stringify(todolist));
//                     datetodolist.splice(d, 1);
//                     localStorage.setItem("datetodolist", JSON.stringify(datetodolist));
//                     divlist.remove();
//                 }

//             })

//         }
//     }

//     // )
//     // const reset = setElement("button", "Reset", document.querySelector(".divclas"), "reset");
//     // reset.addEventListener("click", function () {

//     // })
// }
// // init();
// // savebut.addEventListener("click", () => { save() });

// // function onChangeDate() {
// //     var datedft = document.getElementById('mycalendar').value;

// //     var date = new Date(datedft);
// //     date.setDate(date.getDate() + 1)
// //     var newformat = date.toISOString();
// //     document.getElementById('mycalendar').value = newformat
// // }
// function save() {

//     if (!thetext.value == "") {
//         todolist = JSON.parse(localStorage.getItem("todolist"));
//         datetodolist = JSON.parse(localStorage.getItem("datetodolist"));
//         todolist.push(thetext.value);
//         datetodolist.push(nowdate.toDateString())
//         localStorage.setItem("todolist", JSON.stringify(todolist));
//         localStorage.setItem("datetodolist", JSON.stringify(datetodolist));
//         thetext.value = null;
//     }
//     // else {
//     //     alert("nothing to save!")
//     // }
//     if (document.querySelector(".divlists")) {
//         document.querySelector(".divlists").remove();
//     }
//     thetext.style.display = "none";

//     init();

// };