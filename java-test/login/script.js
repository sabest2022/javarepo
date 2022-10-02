const gate = document.querySelector(".gate");
const text = document.querySelector(".text");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const openGateBtn = document.querySelector(".openGatebtn");
const walkoutBtn = document.querySelector(".openGatebtn");

let UsersData[
    {
        username: saeedaskari,
        password: saeed12345,
    },
    {
        username: shahrad2020,
        password: vinter2022,
    },
]

openGateBtn.addEventListener("click", "hej");

function cheackCode() {
    if (inputUser.value === usercode) {
        renderSuccessfulUI();
    } else {
        renderFailUI();
    }
}

function renderSuccessUI() {
    gate.style.backgrundColor = "green";
    text.innerText = "You are inloged";
    form.style.display = "none";
    walkoutBtn.style.display = "block";
}
function renderFailUI() {
    text.innerText = " Wrong Password/Username";
    input.value = "";
}

function walkOutI() {
    gate.style.backgrundColor = "red";
    text.innerText = "";
    walkoutBtn.style.display = "none;"
}