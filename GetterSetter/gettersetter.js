class Customer {
    constructor(fname, email, password){
        this.fname = fname;
        this.email =  email;
        this.password = password;
    }

    get email(){
        return this.email.toString()

    }
}

const newCust = new Customer("fname","dummy@gmail.com",12345);
console.log(newCust.password)