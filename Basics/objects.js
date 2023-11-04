// Objects
//singleton 
// below is singleton creation
//Object.create

//Object literals


// const user = {
//     name:"Ranga",
//     "sur Name":"Omkaram",
//     age : 20,
//     location:"Hyderabad",
//     email: "ranga@yahoomail.com",
//     isLoggedIn: false,
//     lastLoginDaysList : ["Monday","Tuesday","Friday"]
// }

//how to access the object properties

// console.log(user.name)
//But prefer to access by below apporach  
// console.log(user["age"],'\t',user["name"])

//why better approach let access surname

// console.log(user["sur Name"])

//symbol datatype

// const sym = Symbol("key1")
// console.log(sym)

//How to declare the symbol in the object

// const  newUser = {
//     fname:"RangaSesha",
//     "Last Name":"Omkaram",
//     [sym] : "myKey",
//     "pincode" : "517501"
// }

// console.table([newUser['fname'],newUser["Last Name"],newUser[sym],newUser["pincode"]])

//for symbol declartion and accessing is vary in the object as below

const mySym = Symbol("Key2")
const youSym = Symbol("Key3")

let symbolUser = {
    [mySym] : "my2ndKey",
    [youSym] : "my3rdKey"

}

// let access 

// console.log(symbolUser[mySym])
// console.log(symbolUser[youSym])

//Add objects 
symbolUser.mail = "ranga@chatgpt.com"
symbolUser['city'] = "Mumbai"

// console.log(symbolUser)

//How to freeze the object
symbolUser.zipcode = "DE-300484"
// freeze the object as below so that it won;t change any properties

// Object.freeze(symbolUser)
symbolUser.zipcode = "US-900033"
symbolUser["Lname"] = "OMKARAM"

console.log(symbolUser)

// add fucntions to object
symbolUser.greeting = function(){
    console.log("Hi user Symbol")
}

symbolUser.greetingTwo = function(){
//use keyword this to get access of current object properties
    console.log(`Hi user, your name is:${this.Lname},and you're city is :${this.city}`)
}
//how to access the function

console.log(symbolUser.greeting())
console.log(symbolUser.greetingTwo())
