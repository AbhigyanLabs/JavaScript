// // Example 1: Simple for loop (counts from 0 to 9)
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element); // Uncomment to see numbers 0–9
}



// // Example 2: Nested loops (generates multiplication table)
// // ⚠️ Be careful: i < 9999 and j < 9999 will print millions of lines!
for (let i = 1; i < 9999; i++) {
    for (let j = 0; j < 9999; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}



// // Example 3: Using "break"
// // Stops the loop immediately when i == 5
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break; // exits the loop completely
    }
    console.log(i); // prints numbers until break is hit
}


// // Example 4: Using "continue"
// // Skips the current iteration when i == 5 (but continues the loop)
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue; // skips printing '5', goes to next iteration
    }
    console.log(i); // prints all numbers except 5
}


// Example 1: While loop with index
let index = 0;

// While loop will keep running until index <= 10
while (index <= 10) {
    console.log(`Value of index is ${index}`); // Prints the current value of index
    index = index + 2; // Increments index by 2 each time
}

// Example 2: Iterating over an array using while loop
let myArray = ["flash", "batman", "superman"];
let arr = 0;

// Loop runs until arr < myArray.length (3 elements in array)
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`); // Prints current element from array
    arr = arr + 1; // Moves to the next index
}

// Example 3: Do-while loop
let score = 11;

// Do-while loop runs the block at least once, even if condition is false
do {
    console.log(`score is ${score}`); // Prints score
    score++; // Increments score
} while (score <= 10); // Condition check happens after execution 