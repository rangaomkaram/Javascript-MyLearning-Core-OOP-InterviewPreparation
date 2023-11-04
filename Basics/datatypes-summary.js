// Primitive data types

/*
1.string
2.Number
3.Boolean
4.null
5.undefined
6.symbol -> unqiue 
7.BigInt
*/

// const score = "marks"
// const num = 123
// const isLoggedIn = true
// const empty = null
// let wifi;

// const id = Symbol("1123") // symbol will return unique valuw
// const sec_id = Symbol("1123")

// console.table([id,sec_id,score,num,isLoggedIn,empty,wifi])

// console.log(id === sec_id)
//Symbol will return unique value.Even we gave same parameters in Symbol => false

//BigInt represent
// const bigNumber = 123456789123456789n

// Non-Primitive or Reference 

/*
1. Array
2. Objects
3. Functions

*/

// const heros = ["Hanuman","SriRam","Krishna","Arjuna"]

// let obj = {
//     fname: "Ranga",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Welcome to fucntional world")
// }

//to know which datatype using typeof function

//http://262.ecma-international.org/5.1/#sec-11.4.3 

// console.table([typeof(bigNumber),typeof(id),typeof(sec_id),typeof(score),
//                     typeof(empty),typeof(wifi),typeof(isLoggedIn)])


// console.table([typeof(heros),typeof(obj),typeof(myFunction)])

// ***********************************************************************

/*
1.Stack(Primitive)
2.Heap(Non-Primitive)
*/

let fname = "ranga"
let myname = fname
myname = "sesha"

console.log(fname)
console.log(myname)
