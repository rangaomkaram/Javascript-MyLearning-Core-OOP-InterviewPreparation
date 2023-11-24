// After ES6 we got class , which is syntatical sugar 

class User  {
    //consturctor
    // Properties  and methods

    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // function decelaration in class

    encryptPassword(){
        return `${this.password}def`
    }

    changeUserNameFirstCapLetter(){
        return `${this.username.charAt(0).toUpperCase() + this.username.slice(1)}`
    }

    //get captial letter of each word in full name

    captialEachLetterofWord(){
        this.username = this.username.split(" ");
        for (let index = 0; index < this.username.length; index++) {
            this.username[index] = this.username[index].charAt(0).toUpperCase() + this.username[index].slice(1);   
        }
        return this.username.join(" ")
    }
}

const firstObj = new User("uday","udaykumar@mail.com",345)

// console.log(firstObj.encryptPassword())
// console.log(firstObj.changeUserNameFirstCapLetter())

const secUser = new User("full name first name last name","uday@mail.com",34534);
console.log(secUser.captialEachLetterofWord())

// class concept underhood , what happens -> let's see

function Customer(username, email, password) {
    this.username  = username;
    this.email = email;
    this.password = password;    
}

Customer.prototype.encryptPassword = function () {
    return `${this.password}3r4`;    
}

const thirdCustomer = new Customer("Customername", "customer@email.com", 234334);

console.log(thirdCustomer.encryptPassword())