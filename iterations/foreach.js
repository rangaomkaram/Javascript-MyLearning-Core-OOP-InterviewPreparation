//forEach loop

//(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

// array.forEach(element => {
    
// });

const programslang = ["JS" , "Ruby" ,"Java", "Cpp" , "R" , "Python" , "C" , "Golang" , "Koltin" ,"Swift"] 

programslang.forEach( function(programs) {
    // console.log(programs);
})

// programslang.forEach((data)=>{
//     console.log(data)
// })

// function printMe(item){
//     console.log(item)
// }

// programslang.forEach(printMe)


// programslang.forEach( (item,index, arr) => {
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        language : "Javascript",
        fileExtension : 'js'
    },
    {
        language : "Python",
        fileExtension : 'py'
    },
    {
        language : "Ruby",
        fileExtension : 'rb'
    }
]

//Access the object values using forEach

myCoding.forEach((values) => {
    console.log(values.language,':', values.fileExtension)
})