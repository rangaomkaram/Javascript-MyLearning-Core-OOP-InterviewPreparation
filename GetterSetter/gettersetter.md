In JavaScript, getter and setter methods are used to control access to an object's properties. They allow you to define custom behavior when getting and setting values on an object.

### Getter Method:
A getter method is used to get the value of a property. It is defined using the `get` keyword followed by the method name.

```javascript
const obj = {
  _value: 0, // conventionally using an underscore to indicate a private variable

  get value() {
    return this._value;
  }
};

console.log(obj.value); // Accessing the value property using the getter method
```

### Setter Method:
A setter method is used to set the value of a property. It is defined using the `set` keyword followed by the method name.

```javascript
const obj = {
  _value: 0,

  set value(newValue) {
    this._value = newValue;
  }
};

obj.value = 42; // Setting the value property using the setter method
console.log(obj.value); // Accessing the value property using the getter method
```

### Combined Getter and Setter:
You can use both getter and setter methods for a property within the same object.

```javascript
const obj = {
  _value: 0,

  get value() {
    return this._value;
  },

  set value(newValue) {
    this._value = newValue;
  }
};

console.log(obj.value); // Accessing the value property using the getter method
obj.value = 100; // Setting the value property using the setter method
console.log(obj.value); // Accessing the updated value property
```

Using getters and setters allows you to control how properties are accessed and modified, enabling validation, computation, or side effects when interacting with object properties.