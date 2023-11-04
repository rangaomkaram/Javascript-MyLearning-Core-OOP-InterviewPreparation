// nested scope

function one(){
    const username = "Ranga"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) 

    two()
}

// one()

if(true){
    const user = "Ranga"
    if (user === "Ranga") {
        const website = " Youtube"
        // console.log(user + website)   
    }
    // console.log(website) 
}

// console.log(user)

// ****************************************//

console.log(addOne(5))

function addOne(num){
    return num + 1

}

addOne(5)
// console.log(addOne(5))

//Function Expressions

addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num){
    return num + 2
}

addTwo(5)

//hoisting 

