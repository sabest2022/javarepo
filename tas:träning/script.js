function traning(y) {
    const x = Math.floor((Math.random() * y));
    console.log(x);
}
traning(6);
traning(6);
traning(10);
traning(100)

const d = document.createElement("div")
d.classList = "mydiv";
document.body.append(d);
const a = document.createElement("input");
a.classList.add("myinput")
document.querySelector(".mydiv").append(a);
const b = document.createElement("button");
b.classList.add("mybut")
document.querySelector(".mydiv").append(b);
b.textContent = "Save color!"

const colors = [
    "blue",
    "black",
    "white",
    "red"
]
b.addEventListener("click", () => {
    for (const color of colors) {
        if (a.value === color) {
            document.body.style.backgroundColor = a.value;
            let ls = JSON.parse(localStorage.getItem("color"));
            ls.push(a.value);
            localStorage.setItem("color", ls)
        } else {
            console.log("ogiltig färg!")
        }
    }

});