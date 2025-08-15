// ------------------- Object Literals -------------------

// Symbol – unique property key
const mySym = Symbol("key1");

// Creating an object using object literal
const JsUser = {
    name: "Abhigyan",
    "full name": "Abhigyan Singh",
    age: 24,
    [mySym]: "lion",  // Symbol property
    location: "Lucknow",
    email: "abhigyansingh47@gmail.com",
    isLogged: false
};

// Accessing properties
console.log(JsUser.name);           // "Abhigyan"
console.log(JsUser["full name"]);   // "Abhigyan Singh"
console.log(JsUser[mySym]);         // "lion"

// Updating properties
JsUser.email = "user@google.com";
JsUser.email = "user@chatgpt.com";

// Freeze object to prevent changes (optional)
// Object.freeze(JsUser);

// Adding methods
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// Calling methods
JsUser.greeting();      // Hello JS user
JsUser.greetingTwo();   // Hello JS user, Abhigyan




// ================================
// JavaScript Objects & Arrays
// ================================

// ---------- 1. Singleton Object Creation ----------

// Using constructor (less common)
const tinderUser1 = new Object(); 

// Using object literal (preferred)
const tinderUser2 = {};            

// Adding properties dynamically
tinderUser2.id = "1234abc";       
tinderUser2.name = "sam";         
tinderUser2.isLoggedIn = false;   

// ---------- 2. Nested Objects & Optional Chaining ----------
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhigyan",
            lastname: "Singh"
        }
    }
};

// Safe access with optional chaining
console.log(regularUser.fullname?.userfullname.lastname); // "Singh"

// ---------- 3. Merging Objects ----------
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// Merge obj2 into obj1 (modifies obj1)
const obj3 = Object.assign(obj1, obj2); 

// Merge into a new object (obj1 not modified)
const obj4 = Object.assign({}, obj1, obj2); 

// Using spread operator (modern)
const obj5 = {...obj1, ...obj2}; 

// ---------- 4. Array of Objects ----------
const noventoUsers = [
    { username: "titan", age: 27 },
    { username: "terror", age: 23 },
    { username: "tamako", age: 56 },
    { username: "amane", age: 18 }
];

// Access objects by index
console.log(noventoUsers[2].username); // "tamako"

// ---------- 5. Object Utilities ----------
console.log(Object.keys(tinderUser2));     // ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser2));   // ["1234abc", "sam", false]
console.log(Object.entries(tinderUser2));  // [["id", "1234abc"], ["name", "sam"], ["isLoggedIn", false]]
console.log(tinderUser2.hasOwnProperty('isLoggedIn')); // true

// Destructuring
// Destructuring in JavaScript is a short and convenient way to extract values from arrays or properties 
// from objects and store them directly into variables. Instead of accessing values one-by-one, 
// destructuring lets you "unpack" them in a single statement.

const user = {
    name: "Abhigyan",
    age: 24,
    location: "Lucknow"
};

// Destructuring the object
const { name, age } = user;      // const { property1, property2 } = objectName;

console.log(name); // "Abhigyan"
console.log(age);  // 24