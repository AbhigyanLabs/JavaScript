// -----------------------------
// Conditional Statements in JavaScript
// -----------------------------

let age = 20;

// if statement → runs only if condition is true
if (age >= 18) {
    console.log("You are an adult.");
}

// if-else statement → choose between two conditions
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are eligible to vote.");
}

// if-else if-else ladder → multiple conditions
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// switch statement → better for fixed values
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // ✅ matches day=3
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// -----------------------------
// Block scope inside if
// -----------------------------
let score = 343;

if (score > 100) {
    const power = "fly"; // block-scoped variable
    console.log("User power inside block:", power);
}

// Below works but "power" is now global because no let/const used
power = "fly"; 
console.log(`User power outside: ${power}`);

// -----------------------------
// Short-hand if (single line)
// -----------------------------
let balance = 354;
if (balance > 500) console.log("test"), console.log("test2");

// -----------------------------
// Logical Operators (&&, ||)
// -----------------------------
const userloggedIn = true;
const debitcard = true;

// AND (both conditions must be true)
if (userloggedIn && debitcard) {
    console.log("Allow Shopping");
}

// OR (at least one condition must be true)
if (userloggedIn || debitcard) {
    console.log("Allow Shopping");
}