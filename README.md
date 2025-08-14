# JavaScript
Notes repo. for JavaScript tutorial.


# Content

In **JavaScript**, *scope* means **where in your code a variable or function can be accessed**.

---

### **1. Global Scope**

* Declared outside of any block/function → accessible anywhere.

```js
let name = "Abhigyan"; // global
console.log(name); // ✅ accessible here

function greet() {
    console.log(name); // ✅ accessible inside functions too
}
```

---

### **2. Function Scope**

* Variables declared inside a function (`var`, `let`, `const`) are only accessible in that function.

```js
function test() {
    let x = 10;
    console.log(x); // ✅ works
}
console.log(x); // ❌ Error: x is not defined
```

---

### **3. Block Scope**

* Variables declared with `let` or `const` inside `{}` are only accessible inside that block.

```js
if (true) {
    let y = 5;
    console.log(y); // ✅ works here
}
console.log(y); // ❌ Error: y is not defined
```

> `var` **ignores block scope** and leaks outside the block (old JS behavior).

---

### **4. Lexical Scope**

* Inner functions can access variables from their outer functions.

```js
function outer() {
    let a = "Outer Var";
    function inner() {
        console.log(a); // ✅ can access outer variable
    }
    inner();
}
outer();
```

---
# Data Types
JavaScript has **8 main data types** — split into **primitive** and **non-primitive**.

In JavaScript, **primitive** and **non-primitive** (reference) types are categorized based on **how the data is stored and accessed in memory**.

* **Primitive types** → Stored **directly** in the stack as a single value.
* **Non-primitive types** → Store a **reference (address)** to the object in the heap.

That’s why primitives are **copied by value**, while non-primitives are **copied by reference**.

   ### **Primitive Type** *(immutable, stored directly)*


1. **String** – text data

   ```js
   let name = "Abhigyan";
   ```
2. **Number** – integers & decimals (no separate int/float)

   ```js
   let age = 20;
   ```
3. **Boolean** – true or false

   ```js
   let isStudent = true;
   ```
4. **Undefined** – declared but not assigned

   ```js
   let city;
   ```
5. **Null** – intentional empty value, also a standalone value.

   ```js
   let price = null;
   ```
6. **Symbol** – unique identifier, used for uniqueness

   ```js
   let id = Symbol("id");
   ```
7. **BigInt** – large integers beyond Number limits

   ```js
   let bigNum = 123456789012345678901234567890n;
   ```

---

### **Non-Primitive Type** *(Reference Type)*

8. **Object** – collections of key–value pairs, arrays, functions, etc.

   ```js
   let user = { name: "Abhigyan", age: 20 };
   ```

In JavaScript, **reference data types** (non-primitives) store a **memory reference** to the actual data in the heap.

## **Main reference types:**

* **Object**
* **Array**
* **Function**
* **Date**
* **RegExp**
* **Map**, **Set**, **WeakMap**, **WeakSet**
* Any custom object you create

**Key points:**

* Copied **by reference**, not by value.
* Comparing two different references with `===` is **false**, even if they have the same content.

Example:

```javascript
let a = { name: "Abhigyan" };
let b = a;
b.name = "Alex";

console.log(a.name); // "Alex" (because a and b reference same object)
```

## Note -> **JavaScript is dynamically typed**.

That means you **don’t need to declare the data type** of a variable; the type is determined **at runtime** based on the value assigned, and it can change later.

Example:

```javascript
let x = 5;      // number
x = "Hello";    // now a string
```

---

## Memory

In JavaScript (and most programming languages), **stack** and **heap** are two different areas of memory with different purposes:

---

### **1. Stack** 🗂️

* Stores **primitive values** (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
* Fixed size, fast access.
* Data is stored **by value** (copy is created).
* Variables in the stack are removed automatically when they go out of scope.

**Example (code):**

```javascript
let youtubename = "AbhigyanLabs"; // stored directly in stack
let anothername = youtubename;    // a copy is made
anothername = "Tech Incarnate";   // only this copy changes

console.log(youtubename); // "AbhigyanLabs"
console.log(anothername); // "Tech Incarnate"
```

---

### **2. Heap** 📦

* Stores **non-primitive values** (`object`, `array`, `function`, etc.).
* Dynamic size, slower access than stack.
* Data is stored **by reference** (stack holds a pointer to the object in heap).
* Changing one reference affects all variables pointing to that object.

**Example (code):**

```javascript
let userOne = {
    email: "abhigyan@google.com",
    age: 22
};

let userTwo = userOne; // both point to same heap object
userTwo.email = "vidyanshu@google.com"; // changes the shared object

console.log(userOne.email); // "vidyanshu@google.com"
console.log(userTwo.email); // "vidyanshu@google.com"
```

---


✅ **Quick Summary**

| Feature      | Stack      | Heap                |
| ------------ | ---------- | ------------------- |
| Stores       | Primitives | Objects & functions |
| Access speed | Fast       | Slower              |
| Storage type | Value      | Reference           |
| Size         | Fixed      | Dynamic             |


# Comparisons

**JS Comparison vs Equality**

* **Comparison (`<`, `>`, `<=`, `>=`)** → Converts to numbers

  * `null` → `0`
  * `undefined` → `NaN` (always false)

* **Loose equality (`==`)** → Type conversion

  * `null == undefined` → `true`
  * Else, `null` only equals itself

* **Strict equality (`===`)** → No conversion

  * Types must match exactly

=== in JavaScript is strict equality → compares value + type without type conversion.
---
In modern JavaScript, **template literals (`${}`)** are preferred over string concatenation with `+`.

**Example:**

```javascript
// Using +
let name = "Abhigyan";
let greeting = "Hello, " + name + "!";
console.log(greeting); // Hello, Abhigyan!

// Using template literal
let greeting2 = `Hello, ${name}!`;
console.log(greeting2); // Hello, Abhigyan!
```

**Why `${}` is better:**

* Cleaner and more readable for multiple variables.
* Supports multi-line strings easily.
* Reduces errors from missing spaces or quotes.

In short: **always prefer `` `${}` `` over `+` concatenation** in modern JS.

---

### **🔢 Numbers**

* JavaScript has **only one numeric type**:
* `Number.MAX_VALUE` → largest positive number (\~1.79e308)
* `Number.MIN_VALUE` → smallest positive number (>0, \~5e-324)
* `Number.MAX_SAFE_INTEGER` → `9007199254740991`
* `Number.MIN_SAFE_INTEGER` → `-9007199254740991`
* `Number.isNaN(value)` → checks if value is NaN (better than `isNaN()` global).
* `Number.isFinite(value)` → checks if value is a finite number.
* `parseInt("42")` → converts string to integer.
* `parseFloat("42.5")` → converts string to floating number.
* `toFixed(n)` → formats number to `n` decimal places (returns string).

---

### **📐 Math object**

* `Math.PI` → 3.141592653589793
* `Math.abs(x)` → absolute value.
* `Math.round(x)` → rounds to nearest integer.
* `Math.ceil(x)` → rounds up.
* `Math.floor(x)` → rounds down.
* `Math.trunc(x)` → removes decimal without rounding.
* `Math.sqrt(x)` → square root.
* `Math.pow(a, b)` → a raised to power b (`a ** b` is shorter).
* `Math.random()` → random number 0 ≤ x < 1.
* **Random in range**:

  ```js
  Math.floor(Math.random() * (max - min + 1)) + min
  ```
* `Math.min(...values)` / `Math.max(...values)` → smallest/largest value.
* `Math.sign(x)` → returns `1`, `-1`, or `0` depending on sign of x.

---

💡 **Tip:** Avoid direct equality checks with floating-point numbers (`0.1 + 0.2 === 0.3` → false). Use a small tolerance:

```js
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
```

---

📌 Math & Number in JavaScript
│
├── 🔢 Number Constants
│   ├─ Number.MAX_VALUE
│   ├─ Number.MIN_VALUE
│   ├─ Number.MAX_SAFE_INTEGER
│   ├─ Number.MIN_SAFE_INTEGER
│   ├─ Number.EPSILON
│
├── 🧮 Parsing & Conversion
│   ├─ parseInt("42")
│   ├─ parseFloat("42.5")
│   ├─ Number(value)
│   ├─ value.toFixed(n)
│
├── 📐 Rounding
│   ├─ Math.round(x)
│   ├─ Math.ceil(x)
│   ├─ Math.floor(x)
│   ├─ Math.trunc(x)
│
├── 🎲 Random
│   ├─ Math.random()  // 0 ≤ x < 1
│   └─ Range formula: Math.floor(Math.random() * (max - min + 1)) + min
│
├── 📊 Powers & Roots
│   ├─ Math.pow(a, b) / a ** b
│   ├─ Math.sqrt(x)
│   ├─ Math.cbrt(x)
│
├── 📏 Comparison
│   ├─ Math.min(...values)
│   ├─ Math.max(...values)
│   ├─ Math.sign(x)
│   ├─ Number.isFinite(x)
│   ├─ Number.isNaN(x)
│
└── 💡 Tip
    └─ Floating-point check:
       Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON

# Dates

## JavaScript Date Methods Quick Reference
   Date is an object

# JavaScript Date Methods Quick Reference

```js
let myDate = new Date();

console.log(myDate.toString()); 
// Full date & time string in the system's local time zone.
// Example : Thu Aug 14 2025 09:02:17 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString()); 
// Date & time in ISO 8601 format (always UTC).
// Example: 2025-08-14T09:02:17.123Z

console.log(myDate.toJSON()); 
// Same as toISOString(), used for JSON serialization.
// Example: 2025-08-14T09:02:17.123Z

console.log(myDate.toDateString()); 
// Human-readable date only (no time).
// Example: Thu Aug 14 2025

console.log(myDate.toLocaleDateString()); 
// Date only, formatted for the default or given locale.
// Default (en-US): 8/14/2025
// India (en-IN): 14/8/2025

console.log(myDate.toLocaleString()); 
// Date & time, formatted for the default or given locale.
// Default (en-US): 8/14/2025, 9:02:17 AM
// India (en-IN): 14/8/2025, 2:32:17 pm

console.log(myDate.toLocaleTimeString()); 
// Time only, formatted for the default or given locale.
// Default (en-US): 9:02:17 AM
// India (en-IN): 2:32:17 pm


# JavaScript Arrays – Quick Notes

* **Shallow Copy:** Changes in **nested objects/arrays** of the copy **also affect the original**. Only top-level changes are independent.

* **Deep Copy:** Changes in the copy **do NOT affect the original**, even for nested objects/arrays.


## Slice & Splice

**slice()** → returns a **new array**, original **unchanged**.
**splice()** → **changes the original array** (remove/add elements).

**Example:**

```javascript
let arr = [1,2,3,4];
arr.slice(1,3); // [2,3], arr unchanged
arr.splice(1,2); // removes 2 & 3, arr = [1,4]
```

---


## 1. Array Basics

* Can store **mixed datatypes**.
* Two ways to create:

```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
```

* Access elements: `arr[0]`, `arr[1]`…

---

## 2. Adding/Removing Elements

| Method      | Description                   |
| ----------- | ----------------------------- |
| `push()`    | Add element at **end**        |
| `pop()`     | Remove element from **end**   |
| `unshift()` | Add element at **start**      |
| `shift()`   | Remove element from **start** |

---

## 3. Slice & Splice

* **slice(start, end)** → returns **new array**, original unchanged.
* **splice(start, deleteCount, …items)** → **modifies original array**.

```javascript
let arr = [1,2,3,4];
arr.slice(1,3); // [2,3], original unchanged
arr.splice(1,2); // removes 2 & 3, arr = [1,4]
```

---

## 4. Combining Arrays

* **concat()** → combines arrays without changing originals.
* **Spread operator (`...`)** → combine multiple arrays easily.

```javascript
const combined = [...arr1, ...arr2];
```

---

## 5. Nested Arrays

* **flat(depth)** → flattens nested arrays to specified depth.

```javascript
let arr = [1,[2,3,[4]]];
arr.flat(2); // [1,2,3,4]
```

---

## 6. Array Utilities

| Method            | Description                              |
| ----------------- | ---------------------------------------- |
| `Array.isArray()` | Check if a value is an array             |
| `Array.from()`    | Convert iterable (string, etc.) to array |
| `Array.of()`      | Create array from arguments              |

```javascript
Array.from("Hello"); // ['H','e','l','l','o']
Array.of(1,2,3);    // [1,2,3]
```

---

✅ **Tips**

* Use **slice** for safe copies.
* Use **splice** for editing original array.
* Spread operator `...` is handy for combining arrays.
* Use `flat()` for nested arrays.

---
