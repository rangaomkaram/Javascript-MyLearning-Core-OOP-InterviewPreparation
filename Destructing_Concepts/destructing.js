//How to destructure 

// Array :

const user = ["ranga","sesha"]

// using position / indexes
console.log(user[0]); 
console.log(user[1]);


// Destructure

const [firstname,lastname] = ["ranga","sesha"];

console.log(firstname)
console.log(lastname)


// Object

const userObj = {
    fname: "uday",
    lname: "raja"
}

console.log(userObj.fname);
console.log(userObj.lname);

const {fsname, lsname} = {
    fsname: "Rang",
    lsname: "oak"
}

console.log(fsname);
console.log(lsname)

