

// att the first time document loads
let newList = [];

newList = localStorage.getItem('a');
console.log(newList);
// when document loads again
// document.addEventListener("DOMContentLoaded", () => {
//     let newList = localStorage;
//     click();
// });

    // localStorage.getItem("name");
    // function click(){
    const signinButton = document.getElementById("Btn");
signinButton.addEventListener("click" , e => {
    
    const inputUser = document.querySelector("signupUsername").value;
    const inputPassword = document.querySelector(".passwordIn").value;
    
    newList = newList.concat({ userName: inputUser, password: inputPassword });
    const a = newList;
        // register();
        // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
        console.log(localStorage);
    localStorage.setItem("a", JSON.stringify(a));
    // JSON.parse(a) = newList;
    console.log(a);
    
});
    
    // var pas = localStorage.key(2);
   
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