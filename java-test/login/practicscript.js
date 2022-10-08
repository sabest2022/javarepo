

//hämta från locaalStorage om man är inlogad

function init() {
    // const isLoggedIn =JSON.parse(localStorage.getItem("isLoggeIn"))
    if (!localStorage.getItem("isLoggedIn")) {
        success()
    }
}

init()
// vid lyckad inloggning, spara till localStorage
function login() {
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
}

function success() {
    console.log()
}

// vid utloggning tar vi bort infon fron localStorage
function logout() {
    localStorage.removeItem("isloggedId)")
    fail()
}

function () fail() {
    console.log("fail")
}
