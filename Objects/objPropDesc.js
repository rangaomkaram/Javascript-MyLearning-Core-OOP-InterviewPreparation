
//Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.@param o — Object that contains the property. @param p — Name of the property.

//syntax (method) ObjectConstructor.getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined

// Object.getOwnPropertyDescriptor()

const Customer = {
    fname : "Raja",
    order : 12345,
    ProductName: "MiniToyCar"
}