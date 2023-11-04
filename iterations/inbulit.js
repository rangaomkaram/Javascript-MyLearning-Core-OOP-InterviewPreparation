
const programslang = ["JS" , "Ruby" ,"Java", "Cpp" , "R" , "Python" , "C" , "Golang" , "Koltin" ,"Swift"] 

// const values = programslang.forEach( function(programs) {
//     console.log(programs);
//     return programs
// })

//forEach ->won't return 

// console.log(values)

//filter
/*
filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.

*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter((num) => num > 5 )

// if you scope then use return keyword
// const newNums = nums.filter( (num) =>{
//     return num > 5
// })

// const newNums = []

// nums.forEach( (num) =>{
//     if(num > 5){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const fictionBooks  =  books.filter( (bk) => {
//     return bk.genre === "Fiction"
// })

// console.log(fictionBooks)


// get books which publish after 1995 and one science

// const getBooksScience = books.filter( (data) =>{
//     return (data.publish >= 1995 && data.genre === "Science")
// })

// console.log(getBooksScience)

// const getHistoryBooks = books.filter((data) => {
//     return (data.genre === "History")
// })

// console.log(getHistoryBooks)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const  newTens = myNums.map((data) => {
//     return data + 10
// })

// console.log(newTens)


//chaining the inbuilit methods 

// const newNums = myNums.map((data1) => data1 - 20)
//                 .map((data2) => (data2) + 40)
//                 .filter((final) => final > 25)

// console.log(newNums)

//breakdown the chain

// const newMap1 = myNums.map((num) => num -20 )
// console.log(newMap1)

// const newMap2 = newMap1.map((num) => num + 40)
// console.log(newMap2)

// const newfilter = newMap2.filter((getNum) =>  getNum > 25)
// console.log(newfilter)

// console.log(newNums == newfilter)

// const new1 = [1,3]
// const new2 = [1,3]

// console.log(new1 === new2)