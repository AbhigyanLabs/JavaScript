// ==========================
// FOR...OF LOOP
// ==========================
// Used for iterating directly over values of arrays, strings, maps, etc.

const arr = [1, 2, 3, 4, 5, 6, 7];

// Looping over array elements
for (const num of arr) {
    console.log(num); // Prints each number in array
}

// Example with string
const greeting = "Hello world";

// Iterating over each character in the string
for (const greet of greeting) {
    if (greet == " ") continue; // Skip spaces
    console.log(`Each char is ${greet}`);
}



// ==========================
// MAPS
// ==========================
// Map stores key-value pairs and only allows unique keys

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India");  // Duplicate key → ignored

console.log(map); // Shows full map content

// Iterating over map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// FOR...OF LOOP cannot be used to iterate over objects for them we use FOR...IN 

// ==========================
// FOR...IN LOOP
// ==========================
// Used for iterating over object properties (keys)

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
};

// Printing keys
for (const key in myObject) {
    console.log(key); 
}

// Printing values
for (const key in myObject) {
    console.log(myObject[key]);
}

// Printing both key and value
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// ==========================
// FOR...IN WITH ARRAYS
// ==========================
// Unlike for...of, "for...in" iterates over *indexes* of an array.

const programming = ["js", "rb", "python", "java", "cpp"];

// Prints array elements using index
for (const key in programming) {
    console.log(programming[key]);
}

// Prints only indexes
for (const key in programming) {
    console.log(key);
}



// ==========================
// FOR...IN WITH MAP → ⚠ Not usable
// ==========================
// Maps are NOT directly iterable using for...in
// This will not print anything
for (const key in map) {
    console.log(key);
}



// ==========================
// forEach LOOP
// ==========================
// Used with arrays; executes callback function for each element.

const coding = ["js", "rb", "python", "java", "cpp"];

// Basic anonymous function
coding.forEach(function (val) {
    console.log(val);
});

// Using arrow function
coding.forEach((item) => {
    console.log(item);
});

// Passing a separate function
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

// Accessing element, index, and whole array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});



// ==========================
// forEach WITH ARRAY OF OBJECTS
// ==========================
const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java",       languageFileName: "java" },
    { languageName: "python",     languageFileName: "py" },
    { languageName: "golang",     languageFileName: "go" }
];

// Iterating over objects in array
myCoding.forEach((item) => {
    console.log(item.languageName, ":-", item.languageFileName);
});
