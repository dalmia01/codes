// value types  (primitive)
Number;
String;
Boolean;
Symbol;
undefined;
null;

// Reference types  (objects)
Object;
Function;
Array;

// variables created using primitive values are independent variables
// when we copy that variable only value gets copied but it does not point to that variable
// so change to one will not reflect to thte other

let x = 10;
let y = x;

x = 20;
console.log(x); // 20
console.log(y); // 10

// variables created using referenct types values are dependent variables
// when we copy that variable only instead of value it does point to that variable
// so change to one will  reflect to the other
// both are pointing to the same object in memory.
// primitive types are passed by value
// objects are passed by references

let x = { value: 10 };
let y = x;

x.value = 20;
console.log(x); // {value:20}
console.log(y); // {value:20}

// adding/ removing properties
// properties are dynamic to these objects
// can add or remove properties, methods when needed

x.location = 5;
x["location"] = 5; // used to access dynamic property names , also can be used when property with specaial characters

let propertyname = "location";
x[propertyname];

// delete a property
delete x.location;
delete x["location"];

// enumerating a properties

const circle = {
    radius: 4,
    area: function () {
        return 3.14 * this.radius ** 2;
    },
};

// looping on object properties /methods

// will lopp over both methods and properties of an object
for (let key in circle) {
    console.log(key, circle[key]); // radius, 4 ; // area , f area(){return 3.14 * this.radius**2}

    // adding condition to check whether it is a property or a method

    if (typeof circle[key] !== "function") {
        console.log(key, circle[key]); // radius , 4
    }
}

let keys = Object.keys(circle); // ['radius','area'];  returns a array of all properties/methods keys as an array

// to check whether property exist on an object

if ("area" in circle) {
} // return true
