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
const oldCustomer = new Candidate("OldCustomer")

newCustomer.addNewProduct()

newCustomer.logMe()

// oldCustomer.addNewProduct() // we get the error , since we are not having the method addNewProduct() init -> and it is parent class 

// Here Mentor is child class -> we can inheritance the properties of the parent class(Candidate).

// Here is the syntax to check the instanceof which object belongs to which class

console.log(newCustomer instanceof Candidate);
console.log(newCustomer instanceof Mentor)

console.log(oldCustomer instanceof Candidate);
console.log(oldCustomer instanceof Mentor);
