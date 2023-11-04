//Immediately invoked Function Expressions (IIFE)

function DBconnect(){
    console.log(`Connect the SQL Database`)
}

// DBconnect()


// how to use iife (Immediately invoked Function expressions)

(function connectSQL(){
    console.log('Sql is connected')
})();

//() -> IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function. ()

// Advantages of IIFE: Do not create unnecessary global variables and functions. Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.

(() =>{
    console.log(`iife through arrow function`)
})();

// TypeError: (intermediate value)(...) is not a function

(function immediateife(){
    // named iife
    console.log('IIFE using () ()');

})();

// we can pass the arguments at iife (immediate invoked function expression)

((fname) => {
    console.log(`using arrow function iife: ${fname}`);
})('Ranga sesha');