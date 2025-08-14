// -------------------- Arrays in JS --------------------
// Can store mixed datatypes
const myArr = [1, 2, 4, 5, 7, 8, 3, 65];
const myHeros = ["shaktiman", "me"];
const arr = new Array(24, 46, 54, 45); // another way to create an array

// Accessing elements
// console.log(arr[3]); // 45

// -------------------- Array Methods --------------------

// Add elements
myArr.push(765);        // add at end
myArr.unshift(760);     // add at start

// Join elements into string
const newArr = myArr.join(); 
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string

// -------------------- Slice & Splice --------------------

// slice(start, end) → returns new array, original unchanged
const myn1 = myArr.slice(1, 3);
// console.log(myn1); 
// console.log(myArr); // original unchanged

// splice(start, deleteCount) → modifies original array
const myn2 = myArr.splice(1, 3);
// console.log(myn2); 
// console.log(myArr); // original changed

// -------------------- Combining Arrays --------------------
const marvel = ["antman", "spiderman"];
const dc = ["flash", "batman", "superman"];

// concat → combines without modifying originals
const combined = marvel.concat(dc); 
// console.log(combined);

// Spread → combines arrays
const newHeros = [...dc, ...marvel]; 
// console.log(newHeros);

// -------------------- Nested & Complex Arrays --------------------
const complexArr = [2, [3, 4, 2], 7, [8, [4, [5, 67], 45, 9], 37], 98, 68];

// flat(depth) → flattens nested arrays
const easy = complexArr.flat(2);
// console.log(easy);

// -------------------- Array Utilities --------------------
console.log(Array.isArray("Abhigyan")); // false
console.log(Array.from("Hitesh"));      // ['H','i','t','e','s','h']
console.log(Array.from({name: "Hitesh"})); // [] → object without length ignored

// Array.of → creates array from arguments
let score1 = 76, score2 = 45, score3 = 78, score4 = 29;
console.log(Array.of(score1, score2, score3, score4)); // [76, 45, 78, 29]
