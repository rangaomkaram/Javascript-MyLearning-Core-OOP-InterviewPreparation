
When the `new` keyword is used in JavaScript, it performs several actions behind the scenes:

1. **Creates a new empty object:** When you use `new`, it allocates memory space for a new object.

2. **Sets the prototype:** The new object is linked to a prototype. This prototype is usually the `prototype` property of the constructor function from which the object is created.

3. **Executes the constructor function:** The constructor function specified by `new` is called with the newly created object assigned to `this`. Within the constructor function, properties and methods can be added to the object using `this`.

4. **Returns the object:** If the constructor function doesn’t explicitly return anything, the newly created object is returned automatically. However, if the constructor returns an object explicitly, that object is returned instead of the newly created one.

Here's an example to illustrate this process:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    // No explicit return statement
}

const john = new Person('John', 30);
console.log(john); // Outputs: Person { name: 'John', age: 30 }
```

In this example:
- `new Person('John', 30)` creates a new instance of the `Person` object.
- The `Person` function acts as a constructor that initializes properties (`name` and `age`) on the newly created object using `this`.
- The `new` keyword implicitly returns the created object (`john` in this case) unless the constructor returns a different object explicitly.

It's important to note that using `new` with a function is a way to create instances of objects based on that function as a constructor. If the function isn't intended to be a constructor, using `new` might lead to unexpected behavior or errors.

/*

A new object is created: The new keyword initiates the creation of a new JavaScript Object.

A prototype is linked: The newly created object gets linked to the prototype property of constructor function. This means that it has access to properties  and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has called, if it doesn't return non-primitive value(object, Array, function etc..), the newly created object is returned.


*/