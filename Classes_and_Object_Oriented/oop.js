//  object

const user = {
    username : "Ranga",
    isLoggedin : true,
    loginCount: 5,
    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`username:${user.username}`)
        // console.log(`username:${username}`) -> this will give reference error
        // console.log(`username: ${this.username}`) // this context (functional context)
        console.log(this)


    }
}



// console.log(user.loginCount)
// console.log(user.getUserDetails())
// console.log(this) // global context -> empty object

const user2 = {
    username: "sesha",
    loginSuccess : true,
    successCount : 4,
    getDetails:function(){
        console.log(this.username)
    }
}

// Above is repeatative task -> object literals

// Constructor 

/*
new is keyword used to have constructor function, which is used to have multiple object instances.
*/

// const promiseOne = new Promise()

// const date = new Date()


function User(userName, loginCount, isLoggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    this.meassage = function(){
        console.log(`Welcome ${this.userName}`)
    }

    return this

}

// const userOne = User("Ranga",12,true)
// console.log(userOne)

//Over-ride the objects

// const userOne = User("Ranga",12,true);
// const userTwo = User("Sesha",4,false);
// console.log(userOne) // even though , you would like to print the userOne object from user function -> "But it overrides the first and print the latest one".


// TO avoid over-riding the new keyword constructor as shown below

const userOne = new User("Uday",34,false);
const userTwo = new User("Ranga",12,true);
// console.log(userOne)
console.log(userOne.constructor) // constructor which gives function reference.
// console.log(userTwo)

//instanceOf -> if there -> returns true.
console.log(userOne instanceof User)
console.log(userTwo instanceof User)








