// "hello" + "world" // this is string concatination

// const name = "Ranga"
// const repoCount = 50

// console.log(name + repoCount + "Values") // this is outdated syntax

//backtick ' which is string interpolation

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// string declaration using object and constructor

const firstName = new String("ranga")

// console.log(typeof(firstName))
// console.log(firstName.length)

// console.log(firstName.__proto__)

// console.log(firstName[0])
// console.log(firstName.toUpperCase())
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('a'));


//string methods
//  const newName = firstName.substring(0,100)
//  console.log(newName)

//  const otherName = firstName.slice(-2,4)
//  console.log(otherName)

//Trim method is used to remove start and end whitespaces in the text/string/charaters.

// const name2 = "Ranga Sesha Uday Kumar    "
// const trimedName = name2.trim()
// console.log(trimedName)

//split is a method ,string -> substring with special seperator   funtions which  return in an array
// const name3 = "jai-sri-ram"
// const splitedname = name3.split('-')
// console.log(splitedname)

//inculde is a method,returns boolean(true, then checks the substring position is >,=== else false )
// console.log(name3.includes('ram'))


// const name4= "uday kumar"

//charcodeAt is a method which returns a unique code value present in the index of string.
// console.log(name4.charCodeAt(0))

// let lastName = "Raju"
//endsWith is a method, return boolean(true, then search sequence of the characters for endposition is equal,else false)
// console.log(lastName.endsWith("u"))
// let name4 = "akash"
// let name5 = "akashererer"
// console.log(name4.localeCompare(name5))
// const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
// let items_data = items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// console.log(items_data)

// const url = "https://github.com/%39omkaram"

// console.log(url.replace("%39","-"))
