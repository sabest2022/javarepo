const gate = document.querySelector(".gate");
const text = document.querySelector(".gate p");
const form = document.querySelector(".form");
const inputuser = document.querySelector(".userInput");
const inputpass = document.querySelector(".passInput");
const openGateBtn = document.querySelector(".openGateBtn");
const walkoutBtn = document.querySelector(".walkoutBtn");
const secretcode = "223344"
let usersData = [
    {
        username: "saeed",
        password: "12345",
    },
    {
        username: "sh",
        password: "0",
    },
]





//hämta från locaalStorage om man är inlogad

function init() {
    // const isLoggedIn =JSON.parse(localStorage.getItem("isLoggeIn"))
    if (!localStorage.getItem("my list")) {
        success()
    } else {
        let dataList = [];
        console.log("your are loged in!")
        // localStorage.setItem("my list", inputuser.value)
        dataList = dataList.concat({ userName: inputUser.value });
        const a = dataList
        // register();
        // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
        console.log(a);
        localStorage.setItem("my list", JSON.stringify(a));
    }
}
// init()
// vid lyckad inloggning, spara till localStorage
function login() {
    localStorage.setItem("my list", JSON.stringify(true))
}
function success() {
    // var newList = [];
    console.log("sss")

    // document.addEventListener("DOMContentLoaded", () => {

    let newList = JSON.parse(localStorage.getItem("my list"))
    localStorage.setItem("my list", newList)
    console.log(newList);
    // document.addEventListener("DOMContentLoaded", () => {

    const signinButton = document.getElementById("Btn");
    signinButton.addEventListener("click", e => {

        const inputUser = document.querySelector(".userInput").value;
        const inputPassword = document.querySelector(".passInput").value;

        newList = newList.concat({ userName: inputUser, password: inputPassword });
        const a = newList
        // register();
        // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
        console.log(a);
        localStorage.setItem("my list", JSON.stringify(a));
        // var pas = localStorage.key(2);
    });
    console.log()
}
// vid utloggning tar vi bort infon fron localStorage
function logout() {
    localStorage.removeItem("my list)")
    fail()
}

function fail() {
    console.log("fail")
}





// for (let i = 0; i < localStorage.length; i++) {
//     if (localStorage.getItem("my list, i") === usersData[i].username && inputpass.value === usersData[i].password) {
//         renderSuccessUI();
//         return;
//     }







openGateBtn.addEventListener("click", cheackCode);
walkoutBtn.addEventListener("click", walkout);

function cheackCode() {
    for (let i = 0; i < usersData.length; i++) {
        if (inputuser.value === usersData[i].username && inputpass.value === usersData[i].password) {
            renderSuccessUI();
            return;
        }
    }
    renderFailUI();
}

function renderSuccessUI() {
    gate.style.backgroundColor = "green";

    text.innerText = "You are loged in";
    form.style.display = "none";
    walkoutBtn.style.display = "block";
    init()
}
function renderFailUI() {
    text.innerText = " Wrong Password/Username";
    gate.style.backgroundColor = "red";
    reset()
}

function walkout() {
    gate.style.backgroundColor = "blueviolet";
    text.innerText = "Check in again!";
    walkoutBtn.style.display = "none";
    form.style.display = "block";
    reset()

}
function reset() {
    inputuser.value = "";
    inputpass.value = "";
}