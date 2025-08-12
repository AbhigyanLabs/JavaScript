const accountID = 144535
let accountEmail = "abhigyansingh47@gmail.com"
var accountPassword = "7392"
accountCity = "Jaipur"
let accountState = null
let accountType;

// accountID = 2  Not Allowed

accountEmail = "abhigyan@gmail.com"
accountPassword = "3523653"
accountCity = "Bengaluru"

console.log(accountID);
console.table([accountState, accountID, accountEmail, accountPassword, accountCity, accountType])

/*
Prefer not to use var - Because it doesn't follow block scope and function scope.
*/