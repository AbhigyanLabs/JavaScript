# JAVASCRIPT
Code repo for Java script tutorial.


# Content

Four types of scope are-
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

**Main reference types:**

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

**JavaScript is dynamically typed**.

That means you **don’t need to declare the data type** of a variable; the type is determined **at runtime** based on the value assigned, and it can change later.

Example:

```javascript
let x = 5;      // number
x = "Hello";    // now a string
```

---

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