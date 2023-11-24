// let myName = "Ranga   "

// console.log(myName.trim().length)

let superHeros = ["Hanuman","Ram","laxman","Agasthya"]
let marvelHeros = ["thor","sipderman"]

let heroPower ={
    thor : "hammer",
    sipderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.sipderman}`);
    }

}

Object.prototype.ranga = function(){
    console.log(`ranga is present in all objects`);
}

marvelHeros.ranga()

heroPower.ranga()

// How to inject prototype to array

Array.prototype.heyRanga = function(){
    console.log(`Hey Ranga this array prototype`);
}

marvelHeros.heyRanga()
// heroPower.heyRanga() // we get the error  since it heroPower is object 

//inhertiance 

const User = {
    fname: "tea",
    email: "tea@google.com",
}

const Mentor = {
    makeVideo: true
}

const TechSupport = {

    isAvailable: false

}

const QCSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true, 
    __proto__: TechSupport //__proto__ is used to borrow the properties of other objects.
}

//__proto__ is used to borrow the properties of other objects.

Mentor.__proto__ = User 

// modern syntax

Object.setPrototypeOf(TechSupport, Mentor)


let getName = "prototypeinheritance    "

String.prototype.actualLength = function(){
    // console.log(`This context :${this} `)
    // console.log(`This :${this.fname} `)
    console.log(`The actual Length is : ${this.trim().length} `);

}

getName.actualLength()

"RangaSesha".actualLength()
"treeOak".actualLength()