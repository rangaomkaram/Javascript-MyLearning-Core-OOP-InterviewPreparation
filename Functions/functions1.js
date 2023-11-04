// Functions are reusable for repetative tasks
function getName()
{
    console.log("R")
    console.log("A")
    console.log("N")
    console.log("G")
    console.log("A")
    console.log("S")
}

// getName() // call function

//if write like below -> it represents reference

// getName

// getSquare(num) -> num is a parameter of the function name : getSquare
// function getSquare(num){

//     // Scope or function definition

//     console.log(num * num)

// }

//to call fucntion -> getSqaure(5) , here 5 is argument of call function name: getSquare()

// getSquare(5)

// we can  store in variable 

// const result = getSquare(5)

// console.log(`square:${result}`) // undefined

// why  under result   -> we get undefined.

// we can slove by using below approach -> since in above the function is not returning any value. simply it is just printing , using console.log

// function getAdd(num1,num2){
//     let result = num1 + num2
//     return result
// }

// const result = getAdd(45,55)
// console.log(`using return we get : total result ${result}`)

// you can't print or any execution of code after return in function as shown below:

// function getMultiply(first,second){
//     let resMultiply = first * second
//     return resMultiply
//     console.log("we can't execute or print after return statement in the scope/block of the fucntions.")
// }

// const resMultiply = getMultiply(9,7)
// console.log(`${resMultiply} -> get multiplication result`)

// you can print or any execution of code above  return statement  in function as shown below:

// function getCube(num){
//     let cube = num **3
//     console.log(`we can execute or print above the return statement in the scope or block of the funtions.`)
//     return cube
// }

// const resCube = getCube(89)
// console.log(`result of cube: ${resCube}`)

//since in  javascript is dynamically type, we have to check the user to give correct input to work function. To work function properly, we  can use conditinal statements.


// different ways to assign values (arguments) of function to the parameters of the function.

function loginUserMessage(username){
    return `${username} just loggedin.`
}

// console.log(loginUserMessage('Ranga')) //Ranga just loggedin.

//when you don't pass any argument -> return give undefined, let's see how

// console.log(loginUserMessage()) //undefined just loggedin.
// if you pass empty string " " -> then returns empty with remaining statement.

// console.log(loginUserMessage(" "))//   just loggedin.

// how block or scope works in functions as shown below

// function loggedIn(email){
//     if(email === undefined){
//         console.log("Please enter the email address.")
//     }
//     return `${email} just loggedin here.`
// }

// console.log(loggedIn()) //  Please enter the email address. //undefined just loggedin here.

//give return statement in if conditional then below return won't work.

// function signIn(name){
//     if(name === undefined){
//         console.log("Please enter the name of user")
//         return 
//     }
//     return `${name} just signin.`  // -> this statement won't execute
// }

// console.log(signIn()) //Please enter the name of user //undefined

// other way to approach

// function signIn(emailId){
//     if(!emailId){
//         console.log("Please enter the emailId of user")
//         return
//     }
//     return `${emailId} is just signin.`
// }
//Please enter the emailId of user //undefined
// console.log(signIn())

// how to assign parameter of function through arguments, in below we gave single arguments and return single item price

// function calculateCartPrice(item1){
//     return item1
// }

// console.log(calculateCartPrice(234))

// what if , we add more arguments to the funtions // how many items will return

// console.log(calculateCartPrice(234, 456, 678, 890)) // -> prints / return only first single item price 

// To slove above problem , by using rest operator ...parameter , we can give n no.of arguments in the function as shown below.

//use of rest operator ...items
// function calculateCartPrice(...items){
//     return items
// }

// console.log(calculateCartPrice(45,67,54,6,45,642,5456,4542,34)) // -> blindle all items prices, return in an array. 

// other approach to only return remaining items using rest operator

function calculateCartPrice(val1, val2, ...items){
    return items
}

// console.log(calculateCartPrice(100,200,300,400,500,600)) // returns [300,400,500,600] -> won't inculde val1, val2 -> 100,200

//objects

// const user = {
//     username : "Ranga",
//     prices: 345
// }

//how pass the object in funtions

// function handleObject(anyObj){
//     console.log(`username is ${anyObj.username} and price is ${anyObj.price }`)
// }

// handleObject(user)

// we can pass object directly 

handleObject({
    username : "uday",
    price : 342
})

// pass array

const newArr = [200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArr))
console.log(returnSecondValue([200,450,303,44,3])) // directly pass array.