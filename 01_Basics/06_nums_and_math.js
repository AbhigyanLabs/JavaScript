const score = 100
// console.log(score)

// console.log(typeof score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.83726;
// console.log(otherNumber.toPrecision(2));

const hundred = 200000000
// console.log(hundred.toLocaleString('en-IN'))
// console.log(hundred.toLocaleString())

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.56));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(400));
// console.log(Math.max(4, 0, 0, 7, 86));
// console.log(Math.min(4, 0, -0, 7, 86));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min + 1)) + min)