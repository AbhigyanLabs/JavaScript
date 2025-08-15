// ==========================
// 1. Object with "this" keyword
// ==========================
const user = {
    username: "AbhigyanLabs",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // Refers to 'user' object here
    }
};

// user.welcomeMessage();
user.username = "sam";
// user.welcomeMessage();


// ==========================
// 2. "this" in global scope
// ==========================
console.log(this); 
// In browsers: 'window', in Node.js: '{}'


// ==========================
// 3. "this" inside normal function
// ==========================
function chai() {
    let username = "Himawari";
    console.log(this.username); // ❌ 'this' here refers to global object (undefined in strict mode)
}
chai();


// ==========================
// 4. "this" inside function expression
// ==========================
const cahi = function () {
    let username = "Himawari";
    console.log(this.username); // ❌ Works same as normal function
};


// ==========================
// 5. "this" inside arrow function
// ==========================
// const chai = () => {
//     let username = "Himawari";
//     console.log(this); // ❌ Arrow functions don't bind 'this', takes from outer scope
// };

// chai();


// ==========================
// 6. Basic Arrow Function
// ==========================
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
};
console.log(addTwo(3, 4)); // Output: 7


// ==========================
// 7. Implicit return in Arrow Function
// ==========================
const addTo = (num1, num2) => (num1 + num2); // No 'return' keyword needed
console.log(addTo(3, 4)); // Output: 7


const addThree = (num1, num2, num3) => ({ username: "abhigyan" });
// Arrow function named addThree that takes three parameters: num1, num2, num3
// The parentheses () around the parameters are required because there’s more than one parameter
// We are using implicit return here — no "return" keyword is needed
// The object literal { username: "abhigyan" } is wrapped in parentheses to avoid confusion
// Without parentheses, JavaScript would treat {} as a function body, not an object

// Example usage:
console.log(addThree(1, 2, 3));
// Output: { username: 'abhigyan' }
