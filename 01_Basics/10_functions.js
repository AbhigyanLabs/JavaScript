// -------------------------
// 1. Basic Function Example
// -------------------------
function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("G");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// Calling the function
// The function prints letters but returns undefined
console.log(sayMyName()); // Prints name letters, then "undefined" because no return value


// --------------------------------------
// 2. Parameters vs Arguments Difference
// --------------------------------------
function addNum(num1, num2) { // num1, num2 → PARAMETERS (placeholders)
    console.log(num1 + num2); // Adds them and prints the result
}

addNum(3, 7); // 3, 7 → ARGUMENTS (actual values passed) → Output: 10


// ---------------------------------
// 3. Default Parameters in a Function
// ---------------------------------
function logIn(userName = "sam") { // Default value is "sam"
    if (userName === undefined) {  // This condition won't run if a default value is provided
        console.log("Please enter the username");
        return;
    }
    return `${userName} just Logged In`;
}

console.log(logIn());      // No argument → uses default "sam"
console.log(logIn("Max")); // Output: Max just Logged In


// ----------------------
// 4. Rest Parameter (...)
 // ----------------------
// Rest parameter collects remaining arguments into an array
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // Returns only the rest values
}

console.log(calculateCartPrice(354, 56, 34, 89, 54, 223));
// val1=354, val2=56, num1=[34, 89, 54, 223]


// ----------------------
// 5. Passing Objects to Functions
// ----------------------
const user = {
    name: "Titan",
    price: 344
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// Passing predefined object
handleObject(user);

// Passing object directly
handleObject({
    name: "sam",
    price: 399
});


// ----------------------
// 6. Passing Arrays to Functions
// ----------------------
const arr = [34, 456, 879, 23];

function printSecond(array) {
    return array[1]; // Returns the second element
}

console.log(printSecond(arr));                 // Output: 456
console.log(printSecond([345, 57, 23, 890]));  // Output: 57
