const user = {
    name : "ranga",
    price : 455,
    
    welcomeMessage : function (){
        //this is current context 
        console.log(`${this.name} ,welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage
// user.welcomeMessage()
// context change to uday
// user.name = "uday"
// user.welcomeMessage()

// console.log(this)  // return  empty {} -> since it is node env

//inside browser there is global object -> window 

function tea(){
        // console.log(this)
}
tea()

// if you print this keyword  block scope of fucntion , then it gives as shown below.


/*  *****output****
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 41.438399970531464,
      nodeStart: 2.4971999526023865,
      v8Start: 6.298699975013733,
      bootstrapComplete: 27.39549994468689,
      environment: 13.922299981117249,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1698213881045.269
  },
  fetch: [AsyncFunction: fetch]
}


*/


// function getUser(){
//     let username = "ranga"
//     console.log(this)
// }

// getUser() // it also same output as shown above

// function getName(){
//     let name = "Ranga"
//     console.log(this.name)
// }

// getName() // return undefined // this keyword works unders object context not in the function scope.




// const coffee = function(){
//     let name = "Bru"
//     console.log(this.name)
// }

// coffee() // return undefined // this keyword works unders object context not in the function scope. Even we Function expression also.

// Arrow function

// const chai = () =>{
//     let name = "RedLabel"
//     console.log(this.name)
// }

// chai() //return undefined // this keyword works unders object context not in the function scope. Even we use arrow functions also.

const square = (num) =>{
    return num ** 2
}

console.log(square(34))

// Implict return in same line 

const implictReturnSquare = (data) => data ** 2

console.log(implictReturnSquare(225))











