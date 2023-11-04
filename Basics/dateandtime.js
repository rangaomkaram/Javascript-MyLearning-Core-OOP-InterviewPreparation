// Date has been a long-standing pain point in ECMAScript.his is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), that brings a modern date/time API to the ECMAScript language.

// let myDate = new Date()
// const dateInString = myDate.toString()
// const dateInLocalStr = (myDate.toLocaleString())
// const dateStr = (myDate.toDateString())
// const isoStr = (myDate.toISOString())
// const timeStr = (myDate.toTimeString())
// const json = (myDate.toJSON())
// const locDateStr = (myDate.toLocaleDateString())
// const utcStr = (myDate.toUTCString())

// console.table([dateInString,dateInLocalStr,dateStr,isoStr,timeStr,json,locDateStr,utcStr])
// console.log(typeof(myDate),myDate);

// let createDate = new Date(2023,0,28)  // month  starts from 0 , but this is not suitable
// console.log(createDate.toDateString());

// let createDate = new Date(2023,0,23,5,3,45)
// console.log(createDate.toLocaleString())

// let createDate = new Date("2021-1-23") // yy-mm-dd
// let createDate = new Date("01-23-2022") //mm-dd-yy
// let createDate = new Date("11-10-2023")  //
// let createDate = new Date("17-10-2023")  // Don't enter dd-mm-yy format => results Invalid Date.
// console.log(createDate.toLocaleString())

//TimeStamp to know exact time with millisec from jan 1970 as per mdn doc

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // return long int in millisec

// let createDateNow = new Date("10-17-2023")
// console.log(createDateNow.getTime())
// //from millisec to sec
// console.log(Date.now()/1000)
// //To round of => use Math.floor
// console.log(Math.floor(Date.now()/1000))



// let newDate = new Date()
// console.log(newDate)

// console.log(newDate.getMonth()) // it get month start from zero to get exact month add + 1
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())


let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) //get in milliseconds

