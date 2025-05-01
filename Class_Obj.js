// Defining the class
class Human {
    // Public properties
    Age = 13;
    name = 80;
    Height = 180;

    // Private property
    #wt = "hellow";

    //Parameter  Constructor
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

//Create the default functuion in the  js file 


function sayName(myName = "Babbar"){
    console.log("My name is ", myName);
}
sayName("hellow");


 //function is to run different type of the operation 

function sayName(name = "Md Istekhar Alam "){
    console.log("my name is :" ,name);
}
sayName("love Babbar");

//create the multiple default parameter 
function MulName(lastName = "hellow jee", firstName){
    console.log( lastName," ", "Babbar");
}
MulName("Md Istekhar Alam");

//Multiple default dependent parameter 
function solve (value = {age : 14, wt: 90, ht: 190}){
    console.log()
}


//use the properties of the maths
console.log("Babbar");
console.log(Math.PI);
console.log(Math.min(4,6,90,456,72,));
console.log(Math.round(2.5));
console.log(Math.ceil(1.1));


//Creation of the date 
let curr = new Date();
let date = new Date('june 21 may');
let newDate = new Date('may 2025');
console.log(newDate);









