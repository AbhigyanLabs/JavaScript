if (true) {
    let a = 34;   // block-scoped
    const b = 76; // block-scoped
    var c = 87;   // function/global-scoped
}

console.log(c); // ✅ Works
// console.log(a); // ❌ Error
// console.log(b); // ❌ Error

// ======================
// 1. Lexical Scope
// ======================

function one() {
    const username = "AbhigyanLabs";

    function two() {
        const website = "youtube";
        console.log(username); // ✅ Can access parent's variable
    }

    // console.log(website); // ❌ website is only inside 'two'
    two();
}
one();


// ======================
// 2. Block Scope
// ======================

if (true) {
    const username = "sma"; // Block scoped
    if (username === "sma") {
        const website = " youtube";
        console.log(username + website); // ✅ Both exist in this block
    }
    // console.log(website); // ❌ website only exists inside inner if block
}
// console.log(username); // ❌ username only exists inside outer if block


// ======================
// 3. Hoisting Examples
// ======================

// ✅ Works: function declaration is hoisted
console.log(addOne(5)); // Output: 6

function addOne(num) {
    return num + 1;
}

// ❌ Will throw ReferenceError if uncommented:
// console.log(addTwo(6));

const addTwo = function(num) { // Function expression
    return num + 2;
};

console.log(addTwo(6)); // ✅ Works now: Output: 8