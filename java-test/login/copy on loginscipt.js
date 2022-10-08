
const myData = [{
    User: "fredrik", Pass: "1234",
}, {
    User: "saeed", Pass: "bey"
}, {
    User: "hamed", Pass: "2345"
}];

const username = document.querySelector(".userIn");
const pass = document.querySelector(".passwordIn");





//this function is the first step to check whether user is registered on databank or not! if yes, then redirect to register() if not, redirects to sign up()
const openGateBtn = document.querySelector("#openBtn");

openGateBtn.addEventListener("click", cheackCode);
// walkoutBtn.addEventListener("click", walkout);
function cheackCode() {

    console.log(username.value);
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].User === username.value && myData[i].Pass === pass.value) {
            registered();
            return
        }
    }
    signup();
}
// function init(){
//     // console.log(user +pass);
//  for (let i=0 ; i<= myData.length; i++)  { 
//     if(user.value === myData[i].username && pass.value === myData[i].pass){
// registered() } else{ 
// signup()
// }}
// }
// init() 


// to check if user is listed on localstorage, if not so adds the username to localstorage, if yes countinue to log in page


function registered() {
    // if localStorage not exist, so make it
    if (!localStorage.getItem("mylist")) {
        localStorage.setItem("mylist", JSON.stringify([{
            User: "", Pass: "",
        }]));
    }

    let locallist = JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);
    for (let i = 0; i < locallist.length; i++) {
        if (locallist[i].User == username.value) {
            login();
            return;
        }
    }
    locallist.push({ User: username.value });
    localStorage.setItem("mylist", JSON.stringify(locallist));
}

function login() {
    // div("login").display: block;
    // div("signin").display:none;
    document.getElementById("welcome").style.display = "block";

}

function signup() {
    const regBtn = document.querySelector("#regBtn");

    regBtn.addEventListener("click", signupreg);
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    loginForm.classList.add("form-hidden");
    createAccountForm.classList.remove("form-hidden");
    const newUsername = document.querySelector(".newuserIn");
    const newPassword = document.querySelector(".newpasswordIn");

    function signupreg() {
        // if localStorage not exist, so make it
        if (!localStorage.getItem("mylist")) {
            localStorage.setItem("mylist", JSON.stringify([{
                User: "", Pass: "",
            }]));
        }

        let locallist = JSON.parse(localStorage.getItem('mylist'));
        console.log(locallist);
        // for  (let i = 0 ; i< locallist.length; i++)  {
        //      if(locallist[i].User == username.value){ 


        locallist.push({ User: newUsername.value, pass: newPassword });
        localStorage.setItem("mylist", JSON.stringify(locallist));
    }
    signupreg()
    console.log("shopuld sign up!")
}