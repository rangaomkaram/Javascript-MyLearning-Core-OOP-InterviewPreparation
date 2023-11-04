// for 

/** for (intialize; conditional check ; incerment / decrement) {start executing} */



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

array = [1,2,3,4,5,5,5,54]

for (let intialize = 0; intialize < array.length; intialize++) {
    const element = array[intialize];
    if (element === 5){
        // console.log("5 is repeated element in the array")
    }
    // console.log(element)
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outerloop : ${10}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and innerloop : ${i}`)
        // console.log(i + "*" + j + '=' +i*j)
    }
}

heros = ['flash',"batman","superman","Aquaman"]
// console.log(heros.length)

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    // console.log(element)
    
}

//break and continue 


// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected ${index}`);
//         break
//     }
//     console.log(`Value of index is : ${index}`)   
// }

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`Value of index is : ${index}`)   
}



















