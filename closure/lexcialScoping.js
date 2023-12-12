// function init() {
//     let getName = "GoodName";

//     function displayName() {
//         console.log(getName);
        
//     }
//     displayName();
// }

// init();

function outer() {
    let getName = "Hey This is outer access";

    function inner() {
        let innerAccess = "Hey this inner access secret";
        console.log(`Get the outer :${getName}`);
    }
    function innerTwo() {
        console.log(`innerTwo:,${getName}`);
        // console.log(innerAccess)
        
    }
    inner()
    innerTwo()
    
}

outer()
// console.log(`TOO Outer:,${getName}`)