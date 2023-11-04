// reduce

//The reduce() method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as accumulator. The final value of accumulator (which is the value returned from callbackFn on the final iteration of the array) becomes the return value of reduce().

// const array1 = [1, 2, 3, 4]

// const intializeValue = 0;

// const sumWithIntial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     intializeValue
// );

// console.log(sumWithIntial);




const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc,currentValue)=>{
    console.log(`accumlator : ${acc} and CurrentValue : ${currentValue}`)
    return acc + currentValue
},0)

console.log(myTotal)





