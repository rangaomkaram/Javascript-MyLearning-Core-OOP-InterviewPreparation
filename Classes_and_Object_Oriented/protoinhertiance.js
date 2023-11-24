class Candidate {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Mentor extends Candidate{
    constructor(username, email, password){
        //Super keyword refer which class of constructor 
        super(username)
        this.email = email;
        this.password = password;
    }

}