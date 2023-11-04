// Variables 

const accountId = 13456
let accountEmail = "rangasesha.uday@gmail.com"
var accountPassword = "sejn@122"

accountCity = "Raipur"

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "hchchc@hotmail.com"
accountPassword = "23212321"
accountCity = "Jaipur" // but this not pefer

let accountState

console.log(accountEmail);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])

//scope{  } -> to avoid the scope problem
/*
prefer not use var , because of issue in block scope and fucntional scope
*/
// for (let index = 0; index < array.length; index++) 
// {
//     const element = array[index];
    
// }

