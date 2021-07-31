// constructor property
// every object in javascript has constructor property
// that references to the function that was used to c0reate and object

// constructor way to create a string
let string = new String("hello");
// literal way to create
let string1 = "hello"; // 'hello', `hello`

// constructor way to create a booelan
let bool1 = new Boolean(true);
// literal way to create
let bool2 = false;

// constructor way to create a number
let num1 = new Number(2);
// literal way to create
let num2 = 6;

// in javascript are basically the functions
// function constructor to create this object
function CreateCircle(radius) {
    this.radius = radius;
    this.area = function () {
        return PI * this.radius ** 2;
    };
}

const circle5 = new CreateCircle(4);
