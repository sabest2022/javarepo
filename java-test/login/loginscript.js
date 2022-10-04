
let allUser = [
    {
        username: "saeed",
        password: "1234",
    }, {
        userName: "Hami",
        password: "2345"
    }

];
// console.log(allUser);
localStorage.setItem("allUser", JSON.stringify(allUser));

// const myList = JSON.parse(localStorage.getItem("allUser"));
// console.log(myList);
// console.log(typeof myList);
let newList = [{
    userName: "baz",
    password: "124",
}];
// console.log(typeof newList);
// console.log(newList);

allUser = allUser.concat(newList);
console.log(allUser);
localStorage.setItem("allUser", JSON.stringify(allUser));
var pas = localStorage.key(2);

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



document.querySelector("#btn").addEventListener("click" , e => {

        const inputUser = document.querySelector(".userIn").value;
        const inputPassword = document.querySelector(".passwordIn").value;
        newList = newList.concat({ userName: inputUser, password: inputPassword });
        // newList = newList.concat({ password: inputPassword, lastName: "kjk" });
        console.log(newList);
    });


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