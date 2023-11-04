//simple decleration
// let num = 400

//Explict Declaration , using new object 

const balances = new Number(100)
// console.log(balances)

// console.log(balances.toString()) // convert number to string
//toFixed returns a string with decimal points in the range 0-20 digits
// console.log(balances.toFixed(2))

// console.log(balances.toString().length)

//toPrecision returns string, with precision according range 1-21
const otherNumber = 23.45678943

// console.log(otherNumber.toPrecision(4))

const otherNum = 123.896767
// console.log(otherNum.toPrecision(3)) // results => 124

// to print with commas
//toLocaleString method returns a string of input number with commas

const tenLakhs = 1000000
// console.log(tenLakhs.toLocaleString("en-IN"))

/*********           MATHS ************* */

// console.log(Math)
// console.log(Math.abs(-34))
// console.log(Math.round(4.46554)) // roundoff
// console.log(Math.ceil(4.023)) // top value
// console.log(Math.floor(4.9)) //low

// To find minimum and maximum values from the given array we can use in bilut methods Math.min & Math.max

// console.log(Math.min(-987,3,3,4,5,43))
// console.log(Math.max(9785,439843,3,433422,3434,322))

//random

// returns the value in range 0 - 1 with decimal points
console.log(Math.random())
console.log(Math.random()*10 + 1)
//roundof lowest value we can use floor above
console.log(Math.floor(Math.random()*10) + 1)
//better representation
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))












