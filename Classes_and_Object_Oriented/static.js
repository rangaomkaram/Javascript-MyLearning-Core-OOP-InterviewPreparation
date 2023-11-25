class Consumer{
    constructor(firstname){
        this.firstname = firstname;
    }

    logIN(){
        console.log(`Consumer Name: ${this.firstname}`)
    }

    // create unique user_id
    // static keyword is used to stop the access for object instances.
    // Even if it is inheritance instances also , stop the access.

    static createUserId(){
        return `34567`
    }
}

const user = new Consumer("Uday");
console.log(user.createUserId())

/*

In JavaScript, the static keyword is used to define a static method or property for a class. When you declare a method or property as static within a class, it means that it's associated with the class itself rather than with instances created from the class.

*/

// Second Example

class MyClass {
    static myStaticMethod() {
      console.log('Execution  of  a static method');
    }
  
    static myStaticProperty = 'to get the Static property value';
  }
  
  // Calling the static method without creating an instance
  MyClass.myStaticMethod(); 
  
  // Accessing the static property without creating an instance
  console.log(MyClass.myStaticProperty); 