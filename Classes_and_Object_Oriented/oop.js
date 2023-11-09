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
console.log(user.getUserDetails())
console.log(this) // global context -> empty object
