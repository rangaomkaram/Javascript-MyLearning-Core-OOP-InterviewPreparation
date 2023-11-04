//Array 
// const myArr = [0,1,2,3,4,5]
// console.log(myArr[0])

// //Array Decelartion using array constructor

// const newArr = new Array(2,3,344,34,32)
// console.log(newArr[2])
// //Array Methods

// newArr.push(45)
// newArr.pop()
// console.log(newArr)

// //to insert the element at start
// newArr.unshift(9)
// console.log(newArr)

// //to check the elements in the array
// console.log(newArr.includes(9)) //  return boolean true
// console.log(newArr.indexOf(3))// return the position of element in the Array -> 

// join

// const arrN = new Array(3,4,4,5,3.4,3)
// console.log(arrN)
// const joinArr = arrN.join() // return in string format
// console.log(typeof joinArr) //
// console.log(joinArr)


// slice, splice methods

// const  myArr = new Array(0,1,2,3,4,5)

//slice is method
// console.log("Original : ",myArr)

// console.log("Slice : ",myArr.slice(1,3))
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

//@param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// console.log("afterSLice  : ",myArr)

//splice , remove the elements from the array 

/*
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@returns — An array containing the elements that were deleted.
*/

// console.log(myArr.splice(1,3))
// console.log("Original Array After Splice:",myArr)



//merge 




// marvel_heros.push(telugu_heros)

// console.log(marvel_heros)
//to access balakrishna
// console.log("Jai Balayyah",marvel_heros[4][1])

//concat method

const marvel_heros = ["thor","SpiderMan","Hulk","IronMan"]
const telugu_heros = ["chiru","BalaKrishna","Nagarjuna"]
// marvel_heros.concat(telugu_heros)
console.log(marvel_heros)
console.log(telugu_heros)
marvel_heros.concat(telugu_heros)
console.log("all:",marvel_heros)


