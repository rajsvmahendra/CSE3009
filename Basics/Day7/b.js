
// function greet(name){
//     console.log("hello"+name);
// }

// const greet = function (name) {
//     console.log("hello"+name);
// }

// function calc(num1, num2) {
//     console.log(num1+num2);
//     console.log(num1/num2);
//     console.log(num1*num2);
// }

// calc(3,6);

// const square = x => x*x;
// console.log(square(855));

// function(){
//     console.log("hello")
// }

// const greet = function(){
//     console.log("hello");
// };
// greet();

// (function{
//     console.log("hello!")
// }) ();

// (function(name){
//     console.log("hello "+name);
// })("RAJ");

// function greet(name, callback){
//     console.log("hello " + name);
//     callback()
// };
// greet ("Rajsv", function(){
//     console.log("welcome!")
// });

// let fruits = ["apple", "Banana", "Mango"];
// console.log(fruits[0,1])

// const students = ["Raj", "Yash", "Mehak", "Bob", "Charlie"]
// console.log(students[0]);
// students.push("Aditya");
// console.log(students);
// students.shift()
// students[0]="Priya";
// console.log(students);
// Array.isArray(students);

// let obj = {
//     Name: "Rajsv",
//     class: "P-143",
//     City: "Lucknow"
// };

// const person = {};
// person.Name="John";

// let text = obj.Name + "," + obj.class;
// console.log(text);

// function Employee(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// Constructors are Object Prototypes.

// let fruits = ["apple", "Banana", "Mango"];
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// fruits.forEach(fruit => {
//     console.log(fruit);
// });

// for(let i in fruits){
//     console.log(i); //index
//     console.log(fruits[i]);
// };

// for(let i of fruits){
//     console.log(i); 
// };

// let x= 10;
// let y= x;
// y = 30
// console.log(x);
// console.log(y);

//js store memory in two areas Stack and Heap
//When you assign an Array to a variable, 
// JavaScript doesn't copy the data; 
// it copies the reference (the memory address). 
// This is called Pass by Reference.

// let x = ["apple", "banana"];
// let y = x; 
// let y = [..x];
// y.push("mango");
// y.pop();
// console.log(x); 
// console.log(y); 

// y now points to the SAME memory location as x

// let arr1 = [1,2,[3,4]];
// let arr2 = [...arr1];
// console.log("before",arr2);

// arr2[2][0]= 99;
// console.log("after",arr2)

let heading = document.getElementById("title");
heading.innerText = "Hi there!";

let paragraph = document.getElementsByClassName("para")[0];
paragraph.innerText = "There you can find my work and contact me!"

let po = document.getElementsByTagName("p");
po[0].style.color = "blue";
po[1].style.color = "red";

let btn = document.querySelector(".btn")
// btn.addEventListener("click", ()=>
//     {alert("hired")});

btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});