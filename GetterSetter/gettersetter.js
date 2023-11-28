class Customer {
    constructor(fname, email, password){
        this.fname = fname;
        this.email =  email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()

    }
    set email(val){
        this._email = val;
    }
}

const newCust = new Customer("fname","dummy@gmail.com",12345);
console.log(newCust.email)