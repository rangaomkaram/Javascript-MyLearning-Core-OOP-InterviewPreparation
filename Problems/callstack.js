// function one(){
//     console.log("one")
// }

// function two(){
//     console.log("two")
// }

// function three(){
//     console.log("three")
// }

// one()
// two()
// three()


// call stack 

function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log('three')
}

one()
two()
three()

//if you call one -> goes to one and two , two three -> two -> three -> three.