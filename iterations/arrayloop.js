//for of loop
 
// ["" , "", ""]

//[{},{},{}]

const  arr =[1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`value of arr: ${num}`)
    
}


const message = "Get the Website user from DataBases"

for (const msg of message) {
    // console.log(`Each char is : ${msg}`)
}

//Maps 

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection

const map = new Map()
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('JP',"Japan")
map.set("DE","Germany")
map.set("FR", "France")

// console.log(map)

for (const countries of map) {
    // console.log(countries)
}

// acess only keys then ,

for (const [key,value] of map) {
    // console.log(key)  
    // console.log(`${key}  :- ${value}`) 
}

// for (const [key,value] of map) {
//     console.log(value)
// }

// for (const [code ,countryName] of map) {
//     console.log(countryName)
// }




const myObj = {
    'Game' : "NFS",
    "Game1" : "PUBG",
    "Game2" : "Cricket"
 }

//  for (const [key , value] of myObj) {
//     console.log(`${key} :- ${value}`)  //myObj is not iterable
//  }
























// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// Expected output: 2