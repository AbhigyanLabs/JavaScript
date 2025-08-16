// Example of reduce() with a simple array
const myNum = [1, 2, 3, 4];

// Using reduce() to sum up all elements in the array
// Syntax: array.reduce(callback, initialValue)
// callback = (accumulator, currentValue) => { ... }
// initialValue = starting value of accumulator
const myTotal = myNum.reduce((acc, curr) => acc + curr, 0);
// Here: acc starts at 0 → (0+1=1) → (1+2=3) → (3+3=6) → (6+4=10)

console.log(myTotal); // Output: 10


// Shopping cart example
const shoppingCart = [
    { itemName: "JavaScript Course", price: 2999 },
    { itemName: "Python Course", price: 2499 },
    { itemName: "Java Course", price: 2799 },
    { itemName: "Data Structures & Algorithms", price: 3999 },
    { itemName: "Web Development Bootcamp", price: 4999 },
    { itemName: "ReactJS Course", price: 3499 },
    { itemName: "Node.js Course", price: 3199 },
    { itemName: "Machine Learning Course", price: 5999 }
];

// Using reduce() to calculate the total price of all items
// acc → accumulator (total so far)
// item → current object from shoppingCart
// acc + item.price → adds each price to the running total
// initialValue = 0 (so we start adding from 0)
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 32942