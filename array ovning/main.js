
const myinp = document.createElement("input");
document.body.append(myinp);
const mybut = document.createElement("button");
document.body.append(mybut);
mybut.textContent = 'Click me!'
// const resbut = document.createElement("button");
// document.body.append(resbut);
// resbut.textContent = 'reset!'

const resbut = document.createElement("button");
document.body.append(resbut);
resbut.textContent = 'Reset!'


const myh = document.createElement("h1");
document.body.append(myh);
// myh.innerText = "string";
// let str = 'Saeedoea';
// let t = str.replaceAll('e' && 'a', 'B');
// console.log(t);
// console.log('Saeed'.replace('e', 'B'));
// for (let x = 0; x < str.length; x++) {

// if (str.charAt(x) === 'a' || 'e') {
mybut.addEventListener("click", () => {
    myh.innerText = myinp.value.replace(/e|a|e|o|i|u|fuck/gi, '*');
})
resbut.addEventListener("click", () => {
    myh.innerText = null;
    myinp.value = null;
})


// changeStr('Saeed Askeerian');
// console.log(str.charAt(x))
// }

    // console.log(str.charAt(x));
    // str.replace('a', 'k');
    // console.log(str);
// }
