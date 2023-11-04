
// console.log(a)
// console.log(b)
// console.log(c)

//scope

{

}

//var c = 300

let a = 400

if(true){
    // block scope 
    let a = 10
    const b = 23
    console.log("Inside block:",a)
    // var c = 30
}

// console.log(a) // ReferenceError: a is not defined
// console.log(b) //ReferenceError: b is not defined
// console.log(c) // if return the values outside the scope
// even if you assign value globally using var and ib block also it return the value in block, which problematic for different developers working on same project 
// to avoid let is used 

console.log(a)

// golbal scope in browser using console is different from node environment(code env) global scope