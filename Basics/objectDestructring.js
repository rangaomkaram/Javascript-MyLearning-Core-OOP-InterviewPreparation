
const course = {
    name : "JavaScript",
    price : "499",
    javaScriptInstructor: "RangaSesha"
}

// accessing the property values in different apporaches

//Approach 1 using . dot method
console.log("dot method approacg:",course.javaScriptInstructor) 

// using obj {}
const {javaScriptInstructor} = course

console.log("object key approach:",javaScriptInstructor)

// using obj {original key : alias key} as shown below


const {javaScriptInstructor : Instructor} = course

console.log("Alias Approach:",Instructor)


// Destructuring  -> example in React

//  

// from above arrow function by default props will be there as shown below

// const  bar = (props.firm) => {

// }  -> instead props.firm we can write ({frim}) as shown below

// const navbar = ({firm}) => {

// }

// navbar(firm = "Ranga")

//JSON -> JavaScript Object Notation

// {
//     "fname" : "Ranga",
//     "course": "Javascript",
//     "price" : "free" 
// }

// API in arrray format as shown below

// [
//     {},
//     {},
//     {}
// ]