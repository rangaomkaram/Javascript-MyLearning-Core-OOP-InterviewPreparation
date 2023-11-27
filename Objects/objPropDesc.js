
//Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.@param o — Object that contains the property. @param p — Name of the property.

//syntax (method) ObjectConstructor.getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined

// Object.getOwnPropertyDescriptor()

const Customer = {
    fname : "Raja",
    order : 12345,
    ProductName: "MiniToyCar",
    orderfunc : function () {
        console.log(`customer details`);
        
    }
}

const descriptor = Object.getOwnPropertyDescriptor(Customer,"order")
console.log(descriptor);
//output: { value: 12345, writable: true, enumerable: true, configurable: true }


//We can define the object properties
// for multiple properties -> defineProperties
// for single property -> defineProperty

Object.defineProperty(Customer, "order", {
    writable:false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(Customer,"order"))



// for(let [key, value] of Customer){
//     console.log(`${key} ,${value}`)
// }
// output : Customer is not iterable

// To make the Customer iterable

for(let[key,value] of Object.entries(Customer)){
    console.log(`${key} :  ${value}`)
}

//ouput only fname and productname key-pairs will be iterable, since order property we made enumerable: false

//What if the function is there in the object:

//Check the if function is there ->

for (let [key, pair] of Object.entries(Customer)){
    if(typeof value !== 'function')
    console.log(`${key} : ${pair}`)
}

