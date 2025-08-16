// Conditional Statements in JavaScript

const userEmail = "abhigyanlabs";

// Simple if-else check
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// ---------- Falsy values in JS ----------
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// ---------- Truthy values in JS ----------
// "0", 'false', " ", [], {}, function(){}

// Example: Checking empty array
const arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}

// Example: Checking empty object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ---------- Comparisons ----------
// false == 0   → true
// false == ""  → true
// 0 == ""      → true

// ---------- Nullish Coalescing Operator (??) ----------
// Used for null or undefined handling
let val1 = 33 ?? 23;          // → 33
let val2 = null ?? 23;        // → 23
let val3 = undefined ?? 23;   // → 23
let val4 = undefined ?? null ?? 87; // → 87

console.log(val1); 
console.log(val2); 
console.log(val3); 
console.log(val4);

// ---------- Ternary Operator ----------
// condition ? true_case : false_case
const icetea = 100;
icetea <= 80 ? console.log("less than or equal to 80") : console.log("more than 80");