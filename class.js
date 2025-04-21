// Defining the class
class Human {
    // Public properties
    age = 13;
    name = 80;
    ht = 180;

    // Private property
    #wt = "hellow";

    // Constructor
    constructor(newAge, newHeight) {
        this.age = newAge;
        this.ht = newHeight;
    }

    // Public method
    walking() {
        console.log("I am walking");
    }

    // Public method with fixed typo (was conslole.log)
    running() {
        console.log("I am running");
    }

    // Getter for private property
    get fetchName() {
        return this.#wt;
    }

    // Setter for private property
    set modifyName(val) {
        this.#wt = val;
    }
}

// Creating object with constructor values
let obj = new Human(40, 170);

// Accessing public properties
console.log("Age:", obj.age);         // Output: 40
console.log("Height:", obj.ht);       // Output: 170

// Attempting to access private field directly (will fail)
// console.log(obj.wt); // ❌ This will be undefined or throw error if strict

// Correctly using getter for private field
console.log("Private value using getter:", obj.fetchName);

// Modifying private value using setter
obj.modifyName = "updated value";
console.log("Updated private value:", obj.fetchName);

// Using class methods
obj.walking();
obj.running();

// Logging the entire object (note: private fields are not shown)
console.log("Object:", obj);


