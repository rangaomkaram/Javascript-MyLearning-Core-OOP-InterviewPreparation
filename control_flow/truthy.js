const  userEmail = 'r@omkaram.ai'

if (userEmail) {
    console.log("got the user email")
} else {
    console.log("Don't have user email")
}

// if string have some value the condition will take as true and execute the truty block

// what if string is empty as shown ""(empty string) -> aware whitespaces (" ") then consider as value in the string.

const username = ""

if(username){
    console.log("got the user name")
}else{
    console.log("Don't have any user name")
}


// Falsy values are shown below

/**
 * False 
 * 0
 * -0
 * BigInt 0n
 * null
 * undefined
 * NaN
 * ""
 */

//Truthy values

/**
 * true
 * 1
 * "0"
 * []
 * "false" , " " , ' '
 * {}
 * function(){} 
*/

userArr = []

// How to check the empty array 
if (userArr.length === 0) {
    console.log("Array is empty")
    
}

//How to check the empty Object

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty")
}

// some question

/**
 * false == 0 -> returns true
 * '' == 0 -> returns true
 * 0 == "" -> returns true
 * false == '' -> returns true
 */


//Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10

val1 = null ?? 10

let war1;

war1 = undefined ?? 15

// console.log(val1)
// console.log(war1)

let war2;

war2 = null ?? 34 ?? 20

// console.log(war2)


//Terinary Operator

// short form of if-else ?

// condition ? true : false

const coffeePrice = 234
coffeePrice <= 100 ? console.log("lessthan 100 ruppee") : console.log('more than 80')