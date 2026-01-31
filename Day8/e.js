// let input = document.getElementById("text")
// let button = document.getElementById("btn")
// let output = document.getElementById("output")
// let input2 = document.getElementById("text2")
// let button2 = document.getElementById("btn3")

// let btn2 = document.getElementById("btn2")


// button.addEventListener("click", function (e) {
//     e.preventDefault();
//     output.innerText = "Hello " + input.value;
// })

// input.addEventListener("input", () => {
//     console.log("Typing", input.value);
// })

// input.addEventListener("focus", () => {
//     input.style.border = "2px solid green"
// })

// input.addEventListener("blur", () => {
//     input.style.border = "2px solid red"
// })

// btn2.addEventListener("click", () => {
//     if
//         (document.body.style.backgroundColor == "white") {
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "white"
//     }
//     else {
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
//     }
// })

// input2.addEventListener("click", () => {
//     input2.type = "password"
// })

// button2.addEventListener("click", () => {
//     if (input2.type == "password") {
//         input2.type = "text"
//     } else {
//         input2.type = "password"
//     }
// })

// document.getElementById("parent").addEventListener("click",
//     (e) => {
//         console.log(e.target);
//         if (e.target.tagName == "BUTTON") {
//             console.log("Button clicked:", e.target.innerText);
//         }
//     })

// function greet(name, callback){
//     console.log("hello " + name);
//     callback()
// };
// greet ("Rajsv", function(){
//     console.log("welcome!")
// });

// function welcome(name){
//     console.log("hello" + name);
// }
// function processUser(callback){
//     let name = "RAJSV";
//     callback(name);
// }
// processUser(welcome);

// setTimeout(function(){
//     console.log(helloo)
// },3000);

// setTimeout(function(){
//     console.log("Executed after 2 seconds")
// },3000)

// setTimeout(callback,3000)

// function calc (a,b, operation){
//     return operation(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }


// console.log(calc(10,20,add));
// console.log(calc(10,20,sub));
// console.log(calc(10,20,mul));
// console.log(calc(10,20,div));

// const calcu = (a,b,op) => op(a,b);

// function outer(){
//     return function inner(){
//         console.log("HELLLL!!")
//     }
// }
// let a = outer();
// a();

// or we can write outer()()

// let num = [1, 2, 3, 4, 5];
// let a = num.map((val) => {
//     return val * 4
// }).filter((val) => {
//     return val % 2 === 0;
// }).reduce((val) => {
//     return val + val;
// })
// console.log(a);

// num.forEach(function (num) {
//     console.log(num);
// })

// //map
// let a = num.map((val) => {
//     console.log(val * 2);

// })
// console.log(a);
//filter
// let b = num.filter((val) => {
//     return val % 2 == 0;
// });
// console.log(b);

//reduce
// let c = num.reduce((acc, val) => {
//     return acc + val;
// });
// console.log(c);

// let a = setTimeout(function () {
//     console.log("Hello after 2 seconds");
// }, 3000);

// clearTimeout(a)

// setTimeout(() => {
//     console.log("b")
// }, 2000);
// console.log("a");
// console.log("c");

// async: task that take time but dont block the code
// sync: task that take time and block the code
// callback: function that is passed as an argument to another function
// await: keyword used with async function to wait for a promise to resolve

// console.log("start");
// setTimeout(() => {
//     console.log("Data loaded");
// }, 3000);
// console.log("end");

// function getUser(callback){
//     setTimeout(()=>{
//         console.log("User Fetched");
//         callback();
//     },2000)
// }

// function getPosts(callback){
//     setTimeout(()=>{
//         console.log("Posts Fetched");
//         callback();
//     },1000)
// }

// function getComment(callback){
//     setTimeout(()=>{
//         console.log("Comments Fetched");
//         callback();
//     },1000)
// }

// getUser(()=>{
//     getPosts(()=>{
//         getComment(()=>{
//             console.log("all data fetched");
//         });
//     });
// });