
const y = [
    "red",
    "blue",
    "white",
    "red",
    "darkblue",
    "aliceblue",
    "aqua",
    "beige",
    "azure",
    "bisque",
    "blueviolet",
    "brown",
    "cadetblue",
    "burlywood",
    "chartreuse",
    "chocolate",
    "coral",
    "crimson",
    "cyan",
    "darkgray",
    "darkgreen",
    "darkorange",
    "darkolivegreen",
    "darkred",
    "darkorchid",
];

// const myinp = document.createElement("input");
// document.body.append(myinp);
// const mybut = document.createElement("button");
// document.body.append(mybut);
// mybut.textContent = 'Click me!'
// // const resbut = document.createElement("button");
// // document.body.append(resbut);
// // resbut.textContent = 'reset!'

// const resbut = document.createElement("button");
// document.body.append(resbut);
// resbut.textContent = 'Reset!'


// const myh = document.createElement("h1");
// document.body.append(myh);
// // myh.innerText = "string";
// // let str = 'Saeedoea';
// // let t = str.replaceAll('e' && 'a', 'B');
// // console.log(t);
// // console.log('Saeed'.replace('e', 'B'));
// // for (let x = 0; x < str.length; x++) {

// // if (str.charAt(x) === 'a' || 'e') {
// mybut.addEventListener("click", () => {
//     myh.innerText = myinp.value.replace(/e|a|e|o|i|u|fuck/gi, '*');
// })
// resbut.addEventListener("click", function () {
//     myh.innerText = null;
//     myinp.value = null;
//     this.textContent = "kjkljkj";
//     console.log(this)
// })


// // changeStr('Saeed Askeerian');
// // console.log(str.charAt(x))
// // }

// // console.log(str.charAt(x));
// // str.replace('a', 'k');
// // console.log(str);
// // }
// const mydate = new Date();
// const mydate2 = new Date(2000, 12, 10);
// console.log(mydate + mydate2);


// function foo() {
//     let i = 0;
//     for (const value of arguments) {
//         console.log(value);
//         // console.log(arguments);
//         i++;
//         console.log(i)
//     }
// }



// const x = ["fall", "fisk", "my", "doode"]
// // fo("fall", "fisk", "my", "dood");


// function fo() {
//     let i = 0;
//     while (arguments[i]) {
//         // console.log(arguments[i]);
//         // // console.log(arguments);
//         // console.log(i)
//         i++;
//     }
// }
// fo("fall", "fisk", "my", "doode");

// function fol() {

//     for (const r in y) {
//         console.log(y[r]);
//         // console.log(arguments);
//         console.log(r)

//     }
//     for (const o of y) {
//         console.log(o);
//     }
// }

// class form {
//     constructor(name, family, address, tel) {
//         this.name = name;
//         this.family = family;
//         this.address = address;
//         this.tel = tel
//     }
// }
// function Car(name, family, address, tel) {
//     this.name = name;
//     this.family = family;
//     this.address = address;
//     this.tel = tel
// }


// // const data = [];
// // data.push(new form("saeed", "askarian", "stallgatan"));
// // console.log(data);
// // data.push(new form("sume", "sayad", "Stallgatan", "073829897"));
// // console.log(data);

// const data1 = [
//     {
//         name: "saeed",
//         family: "askarian",
//         address: "stallgatan",

//     },
//     {
//         name: "sume",
//         family: "Sayad",
//         address: "stallgatan1",
//         tel: 097266,
//         fun: function () {
//             return this.tel;
//         },

//     }
// ];

// // console.log(data1)
// const test = {
//     prop: 42,
//     func: function () {
//         return this.prop;
//     },
// };
// // console.log(data1[1].fun());
// // console.log(test.func());


// var test2 = {
//     prop: 48,


//     func: () => {
//         test2 = this
//         return this.prop;
//     },
// };
// // console.log(test2.func());


// function sum() {
//     return this.a + this.b + this.c;
//     // return a + b + c;
// }
// function bum(a, b, c) {
//     return a * b * c;
// }
// function bu() {
//     return this.a * this.b * this.c;
//     // return a + b + c;
// }

// const o = {
//     a: 8,
//     b: 2,
//     c: 3,
//     get average() {
//         return (this.a + this.b + this.c) / 3;
//     }
// };

// Object.defineProperty(o, 'sum', {
//     get: sum,
//     // enumerable: true,
//     // configurable: true,
// });

// Object.defineProperty(o, 'bu', {
//     get: bu,
//     // enumerable: true,
//     // configurable: true,
// });

// Object.defineProperties(o, {
//     'property1': {
//         get: sum,
//     },
//     'property2': {
//         value: "my value",
//     },
//     'property3': {
//         value: bum(3, 2, 4),
//     },
//     // 'property1': {
//     //     get: m,
//     // },
//     // enumerable: true,
//     // configurable: true,
// });
// // console.log(o.bu, o.sum);s

// // console.log(o.average, o.sum); // 2, 6

// // this on the object's prototype chain
// const k = {
//     f() {
//         return this.a + this.b;
//     },
// };
// const p = Object.create(k);
// p.a = 1;
// p.b = 4;

// // console.log(p.f()); // 5

// // console.log(Object.values(o));
// // console.log(Object.values(data));
// // console.log(Object.keys(data));
// // console.log(Object.values(data1));
// // console.log(Object.keys(data1));
// // console.log(Object.keys(y))
// // these two codes do the same job
// // for (a of Object.values(y)) {
// //     console.log(a)
// // }

// // for (a in Object.keys(y)) {
// //     console.log(a)
// //     console.log(y[a]);
// // }
// // let b = "";
// // let t = 0;
// // while (y[t]) {
// //     b += `${y[t]},`;
// //     t++
// // }

// // fo(b);
// // fo(y[1], y[2], y[3]);
// const object = ["fall", "fisk", "my", "doode"];
// // { a: 1, b: 2, c: 3 };

// // for (const pro in object) {
// //     console.log(`${pro}: ${object[pro]}`);
// // }

const ages = [4, "12", 12, 16, 20];

function checkAge(age) {
    return age > 12;
}

console.log(ages.find(checkAge));

console.log(ages);
ages.find((value, index, arr) => {
    if (value == 12) {
        console.log("There is some element with index number/s: ", index, arr)
    }
})

console.log(ages.filter(el => el != 12));

const fruits = ["Kiwi", "Orange", "Apple", "Mango"];
const iterators = fruits.entries()
for (k of iterators) {
    console.log(k);
}




console.log(fruits.every(elem => elem === "Kiwi"));
console.log(fruits.some(elem => elem === "Kiwi"));

console.log(fruits.fill("Kiwi", 0, 5));

console.log(fruits.every(elem => elem == "Kiwi"));

const numbers = [45, 4, 9, 16, 25];
let txt = " ";
y.forEach(myFunction);
const pp = document.createElement("p");
document.body.append(pp);

pp.innerHTML = txt;
function myFunction(value, index, array) {
    txt += index + " : " + value.slice(0, 1).toUpperCase() + value.slice(1) + "<br>";

}
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction2);
console.log(numbers2)
function myFunction2(value) {
    return value * 2;
}


