// which gives the mechanism of Javascript 

function multipleBy5(num) {
    return num*5
    
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score,orginalPrice) {
    this.username = username;
    this.score = score;
    this.orginalPrice = orginalPrice;
}

createUser.prototype.increment = function() {
    this.orginalPrice = this.orginalPrice
    this.score++;
    console.log(`Book is increment by ${this.score - this.orginalPrice}`)
}

createUser.prototype.printMe = function(){
    console.log(`Price of the book is :${this.score}`);
}

const bookOne = new createUser("Ranga", 250,234)
const bookTwo = createUser("Teacher",340)

bookOne.increment()