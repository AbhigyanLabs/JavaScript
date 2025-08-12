let score = true

// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof (valueInNumber))
// console.log(valueInNumber)

//"33" => 33
// "33abs" => NaN

let isLoggedIn = "asdf"
// console.log(typeof (isLoggedIn))
//let val = Boolean(isLoggedIn)
// console.log(typeof (val))
// console.log(val)


// ************** operations ***************

let val = 87
let negVal = -val
// console.log(negVal)

// console.log(2**4) // 2^4

let str1 = "hello"
let str2 = " abhigyan"

let str = str1+str2
// console.log(str)

// console.log("1"+4+2)    //string concatenation, because the first operand is a string
// console.log("34"+4)
// console.log(2+4+"4")    //number addition, both operands are numbers

// ******* Pre and Postfix operator ********

let a = 5;
let b = 5;

// Prefix (++a): Increment first, then use
console.log(++a); // a becomes 6, then prints 6

// Postfix (b++): Use first, then increment
console.log(b++); // prints 5, then b becomes 6

// Final values
console.log("a =", a); // 6
console.log("b =", b); // 6
