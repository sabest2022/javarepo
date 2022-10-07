

// var newList = [
//     {Username:"hamid",
//     password:"123",
//     },
//     {   Username:"vahid",
//         password:"1234",
//     },
//     {   Username:"ali",
//     password:"123",
// }];

// let datalist = [{Username:""},];
//    for (let i = 0; i < newList.length; i++) {
//         datalist.push(newList[i].Username);
//      }

//      localStorage.setItem("my list", JSON.stringify(datalist));

// console.log(newList);
// // document.addEventListener("DOMContentLoaded", () => {
//     // localStorage.getItem("name");
//     const signinButton = document.getElementById("Btn");
//     signinButton.addEventListener("click" , e => {
    
//     const inputUser = document.querySelector(".userIn").value;
//     const inputPassword = document.querySelector(".passwordIn").value;
    
//     datalist = datalist.concat(  inputUser );
    
      
//         console.log(datalist);
//     localStorage.setItem("my list", JSON.stringify(datalist));
   
// });




const myData = [{
    User: "fredrik" , Pass:"12342",
},{
    User: "saeed" , Pass:"bey"
},{
    User: "hamed", Pass:"2345" 
} ];
    
    const username = document.querySelector(".userIn");
    const pass = document.querySelector(".passwordIn");
    
  
    
    
     
    //this function is the first step to check whether user is registered on databank or not! if yes, then redirect to register() if not, redirects to sign up()
    const openGateBtn = document.querySelector("#openBtn");
    
    openGateBtn.addEventListener("click", cheackCode);
// walkoutBtn.addEventListener("click", walkout);

function cheackCode() {
    
    console.log(username.value);
    for (let i = 0; i <= myData.length; i++) {
        if (myData[i].User === username.value && myData[i].Pass === pass.value ) {
            registered();
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
    localStorage.setItem("my list", JSON.stringify([{
        User: "fredrik" , Pass:"12342",}]));

    function registered() {
    let locallist= JSON.parse(localStorage.getItem('my list'));
    console.log(locallist);
    for  (let i = 0 ; i<= localStorage.length; i++)  {
         if(locallist[i].User == username.value){ 
            login();
            return;
        }  }
        locallist.push({User: username.value});
        localStorage.setItem("mylist", JSON.stringify(locallist));
    }
    
    function login(){
    // div("login").display: block;
    // div("signin").display:none;
    document.getElementById("welcome").style.display = "block";

    }
    
     function signup(){
    // document.load/signup page setting
    // onclick. => 
    console.log("shopuld sign up!")
    // document.getElementById("signup").style.display = "block";
    // document.getElementsByClassName(".form").style.display = "block";
    // div("signup").display: block;
    // div("signin").display:none;
    }

//hämta från locaalStorage om man är inlogad

// function init() {
//     // const isLoggedIn =JSON.parse(localStorage.getItem("isLoggeIn"))
//     if (!localStorage.getItem("my list")) {
//         console.log(inputUser)
//         success()
//     }
// }

// init()
// // vid lyckad inloggning, spara till localStorage
// function login() {
//     localStorage.setItem("isLoggedIn", JSON.stringify(true))
// }

// function success() {
//     console.log()
// }

// // vid utloggning tar vi bort infon fron localStorage
// function logout() {
//     localStorage.removeItem("isloggedId)")
//     fail()
// }

// function fail() {
//     console.log("fail")
// }
// });


// get info in localaStorage
// function getItem(key){
//     if (key){
//         try{
//             return JSON.parse(localStorage.getItem(key));
//         }
//         catch(e){
//             return localStorage.getItem(key);
//         }
//     }
// }

// retrive localStorage
// var objects = {};
// for (var i = 0, len = localStorage.length; i < len; i++) {
//   objects[localStorage.key(i)] = getItem(localStorage.key(i));
// }
// console.log(objects);
// for (var o in objects) {
//     getItem(o, objects[o]);
//  }
// let allUser = [
//     {
//         username: "saeed",
//         password: "1234",
//     }, {
//         userName: "Hami",
//         password: "2345"
//     }
// ];
// localStorage.setItem("allUser", JSON.stringify(allUser));
// allUser = allUser.concat(newList);
// console.log(allUser);
// function register(){
    
    
    
    
// }

// console.log(allUser);


// const myList = JSON.parse(localStorage.getItem("allUser"));
// console.log(myList);
// console.log(typeof myList);

// console.log(typeof newList);
// console.log(newList);



// let input1 = { firstNmae: "" };
// const walkoutBtn = document.querySelector("#btn");
// walkoutBtn.addEventListener("click", walkout);

// function walkout() {
//     const inputUser = document.querySelector(".userIn").value;
//             const inputPassword = document.querySelector(".passwordIn").value;
//             newList = newList.concat({ userName: inputUser, password: inputPassword });
//             // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
//             console.log(newList);
    
// }



// document.querySelector(".btn").addEventListener("click", e => {
    
//     const inputUser = document.querySelector(".userIn").value;
//     const inputPassword = document.querySelector(".passwordIn").value;
//     newList = newList.concat({ userName: inputUser, password: inputPassword });
//     // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
//     console.log(newList);
// });

// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }

// document.querySelectorAll(".form__input").forEach(inputElement => {
//     inputElement.addEventListener("blur", e => {
//         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//             setInputError(inputElement, "Username must be at least 10 characters in length");
//         } else if (e.target.id === "signupPass" && e.target.value.length > 0 && e.target.value.length < 7) {
//             setInputError(inputElement, "Password must be at least 67 characters in length");
//         }
//     });

//     inputElement.addEventListener("input", e => {
//         clearInputError(inputElement);
//     });
// });