//if

// if (true) {
    
// }

// if (false) {

//     // under this scope , the code will not be executable
    
// }

// //  -> less than <,>,>=,<=, comparable operators === (strictly equal), !=, ==, !==
// // === is used if typeof data same 

// const temperature = 45

// // if(temperature < 50){
// //     console.log(`${temperature} is lessthan 50`)
// // }
// // console.log(`${temperature} is greater than 50`)

// // TO AVIOD ABOVE PROBLEM , WE HAVE OTHER KEYWORD ELSE

// if(temperature === 44){
//     console.log(`${temperature} is equal to 45`)
// }else {
//     console.log(`${temperature} is greaterthan 45.`)
// }

// console.log('Execute')

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }

// console.log(`user power outside scope:${power}`) // ReferenceError: power is not defined


// short hand notation

const balance = 1000

// if(balance > 500) console.log('test'); //implict scope is there

//unreadable code below
// if(balance > 500) console.log('test'),
// console.log(test2)


//nested if

// mulitple conditions
// if(balance < 500){
//     console.log("lessthan 500");
// } else if (balance < 750) {
//     console.log('lessthan 750');  

// } else if (balance < 900) {
//     console.log('lessthan 950')
    
// }else {
//     console.log('lessthan 1200')
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle  = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2===3) {
    console.log("Allow to buy the course    ")
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User is logged in.")
}


