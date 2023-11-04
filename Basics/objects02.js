//singleton

// let instaUser = new Object()

let instaUser = {}

//Add properties to the object

instaUser.id = "UNICODE0102023"
instaUser.name = "Sesha"
instaUser.isLoggedIn = false

// console.log(instaUser)

const newUser = {
    email : "uday@chatgpt.com",
    allNames : {
        userFullName : {
            firstName : "Uday",
            lastName : "Kumar",
        }
    }
}

// console.log(newUser.allNames)
//chaining
// console.log(newUser.allNames.userFullName.firstName)
// console.log(newUser.allNames.userFullName.lastName)

//we can check the key is present or not as shown below
// console.log(newUser.allNames?.userFullName.lastName)

//Merge objects

const objFirst  = {0: "a", 1: "b"}
const objSecond = {2: "c", 3: "d"}


// const mergeObj = {objFirst,objSecond}
// console.log("wrongly merged :",mergeObj)

//How to merge or spread the objects

// const obj3 = Object.assign({},objFirst,objSecond)
// console.log(obj3) //output : { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

//using spreading operator 

const obj3 = {...objFirst,...objSecond}
// console.log(obj3)
//output : { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }


const users = [
    {
        id: 1,
        email: "ranga@google.com",
    },
    {
        id : 2,
        email : "omkaram@yahoomail.com"
    },
    {
        id : 3,
        email : "om@yahoomail.com"
    },
]

// access the object properties from array 
// console.log(users[1].email) 


// console.log(instaUser)
//output :  { id: 'UNICODE0102023', name: 'Sesha', isLoggedIn: false }

//to get the all keys from object we can use the method Object.key('desired obj')

// console.log(Object.keys(instaUser)) 
//Object.keys methods return the keys in an array.
// output : [ 'id', 'name', 'isLoggedIn' ]

//similarly we can get the values from the object using the Object.values("Desired obj")

// console.log(Object.values(instaUser))
//Object.values methods retruns the values in order -> in an array.

/* output : 
[ 'UNICODE0102023', 'Sesha', false ]
*/

// entries Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object
//Returns an array of key/values of the enumerable properties of an object
console.log(Object.entries(instaUser))
/* 
output:
[
  [ 'id', 'UNICODE0102023' ],
  [ 'name', 'Sesha' ],
  [ 'isLoggedIn', false ]
]

*/

// in objects hasOwnProperty methods : Determines whether an object has a property with the specified name

// console.log(instaUser.hasOwnProperty('isLoggedIn')) //  returns true , since it has the property isLoggedIn












