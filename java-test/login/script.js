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
        username: "shah",
        password: "2022",
    },
]

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

    text.innerText = "You are inloged";
    form.style.display = "none";
    walkoutBtn.style.display = "block";
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