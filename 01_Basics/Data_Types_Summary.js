// Primitive Data Types

// const isLoggedIn = false
// let userEmail;

// const id = Symbol('123')
// const roll = Symbol('123')

// console.log(id == roll) //false
// console.log(id === roll) //false

// const bigNumber = 945202580999n   //bigInt is defined by adding n in end
// console.log(typeof bigNumber)

// Reference Data Types - Array, Object, Functions

// const heros = ["abhigyan", "dogesh", "Jhonny"] //object

// let myObj = {
//     name : "AbhigyanLabs",
//     age : 22
// }

// console.log({
//     Sex : "male",
//     age : 23
// })

// const myFunction = function() {
//     console.log("Hello World");
// }

// console.log(typeof myFunction)


// ***************************************************************

// Memory

//Stack

let youtubename = "AbhigyanLabs"; // primitive stored in stack
let anothername = youtubename;    // a copy is made
anothername = "Tech Incarnate";   // changes only this copy

console.log(youtubename); // "AbhigyanLabs"
console.log(anothername); // "Tech Incarnate"


// Heap

let userOne = {
    email: "abhigyan@google.com",
    age: 22
};

let userTwo = userOne;             // both point to same heap object
userTwo.email = "vidyanshu@google.com"; // changes reflect in both

console.log(userOne.email); // "vidyanshu@google.com"
console.log(userTwo.email); // "vidyanshu@google.com"