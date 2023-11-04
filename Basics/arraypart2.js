// const marvel_heros = ["thor","SpiderMan","Hulk","IronMan"]
// const telugu_heros = ["chiru","BalaKrishna","Nagarjuna"]

/*
Combines two or more arrays. This method returns a new array without modifying any existing arrays.
@param items — Additional arrays and/or items to add to the end of the array.
*/
// let allheros = marvel_heros.concat(telugu_heros)
// console.log(allheros)

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

//using spread operator pefer
// we can add more number of array at once

// const Heros = [...marvel_heros,...telugu_heros]
// console.log(Heros)


//flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// // @param depth — The maximum recursion depth
// const exaArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

// const real_Arr = exaArr.flat(2)
// console.log(real_Arr)

// const anotheArr = [1,2,3,[4,5,6],7,[8,9,[3,4,5,[4.5,67]]]]

//if don't know the depth of the array  the use 'Infinity' keyword in flat method
// const real_anotherArr = anotheArr.flat(Infinity)
// console.log(real_anotherArr)


//isArray , Array.from , Array.of


console.log(Array.isArray('Ranga')) // false
console.log(Array.from("Ranga")) // Creates an array from iterable object
//since we have to give object -> need to explicitily tell which one to convert KEY / VALUE
console.log(Array.from({name:"Ranga"})) // returns empty object


let scoreA = 100
let scoreB = 200
let scoreC = 300

console.log(Array.of(scoreA,scoreB,scoreC))
