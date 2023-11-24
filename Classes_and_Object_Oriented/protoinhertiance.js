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

    addNewProduct(){
        console.log(`Added new product of course for the candidate by ${this.username}`);
    }

}

const newCustomer = new Mentor("CandidatefName","CandidateEmail","pwd1233");

newCustomer.addNewProduct()