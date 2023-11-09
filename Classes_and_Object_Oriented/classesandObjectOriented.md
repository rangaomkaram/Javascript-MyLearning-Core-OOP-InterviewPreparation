# JavaScript introduced class syntax in ECMAScript 6 (ES6),
##### JavaScript is Prototype-based language , classes are primarily syntatic sugar over the  exisiting prototype-based inheritance mechanisms.


Here's an example of defining a class in JavaScript using the ES6 class syntax:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person('John', 30);
person1.sayHello(); // Outputs: Hello, my name is John and I'm 30 years old.

```
<p>In this example, Person is defined as a class, and instances of the class are created using the new keyword. The class has a constructor method and a sayHello method, which are used to initialize objects and perform actions, respectively.

However, it's important to note that under the hood, JavaScript's class syntax is still based on prototypes. It provides a more structured and syntactically convenient way to work with objects and inheritance, making it easier for developers to write and read object-oriented code. This class syntax has been widely adopted and is commonly used in modern JavaScript development. So, while JavaScript doesn't have traditional classes in the same sense as some other object-oriented languages, it does have class-like constructs with the introduction of ES6 class syntax.</p>