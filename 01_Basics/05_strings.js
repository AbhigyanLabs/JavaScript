// Ways of concatination
const name = "Abhigyan"
const repoCount = 5

// console.log(name + " " + repoCount + " Labs")

// Better way - Sring-Interpolation
// console.log(`My name is ${name} and I have ${repoCount} repositories.`)

const gameName = new String('AbhigyanLabs')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('b'));

// const newString = gameName.substring(2,12);
// console.log(newString);

const anotherString = gameName.slice(-12);
console.log(anotherString);

const newStringOne = "   Gyani   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://abhigyan.com/labs%30singh"
console.log(url.replace('%30', '-'))
console.log(url.includes('%30'))