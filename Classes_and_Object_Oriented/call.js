//

function setUser(username){
    this.username = username
}

function createUser(username, email, password){
    // setUser(username) // here we gave only reference 
    // to call the explicity we use "call" keyword
    //The object to be used as the current object.Calls a method of an object, substituting another object for the current object.
    setUser.call(username)
    this.email = email
    this.password = password
}

const tea = new createUser("uday","udaykumarsesha@gmail.com",3456)
console.log(tea);// we only get the email and password output but we can't  
