// Array - In JS can be mixed datatypes.
const myArr = [1,2,4,5,7,8,3,65]
const myHeros = ["shaktiman", "me"]

const arr = new Array(24, 46, 54, 45)
// console.log(arr[3]);


// Array Methods

myArr.push(765)
// console.log(myArr)
// myArr.unshift(760)
// console.log(myArr);

const newArr = myArr.join()

// console.log(typeof myArr)
// console.log(typeof newArr)

// slice & splice

console.log("A " + myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B " + myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C " + myArr)