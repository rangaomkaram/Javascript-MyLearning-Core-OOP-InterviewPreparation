//High Order Loops

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