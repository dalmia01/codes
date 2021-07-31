const PI = 3.14;

// object literal
// creation of object using curly braces syntax
// problem redundant code
let circle1 = {
    radius: 2,
    location: { x: 1, y: 1 },
    area: function () {
        return PI * this.radius ** 2;
    },
};

let circle2 = {
    radius: 6,
    location: { x: 2, y: 3 },
    area: function () {
        return PI * this.radius ** 2;
    },
};

console.log("circle1 : ", circle1.area());
console.log("circle2 : ", circle2.area());

// Factory function
function createCircle(radius, locX, locY) {
    return {
        radius,
        location: { x: locX, y: locY },
        area: function () {
            return PI * this.radius ** 2;
        },
    };
}

const circle3 = createCircle(2, 1, 3);
console.log("circle3 : ", circle3.area());

// constructor function
// use new keyword to create an instance of that object
// new keyword createsa an empty object{}
// then it assigns/refers this keyword to refer to that newly instantiated object.
// then returns automatically that obejct

function CreateCircle(radius) {
    this.radius = radius;
    this.area = function () {
        return PI * this.radius ** 2;
    };
}

const circle4 = new CreateCircle(5);
console.log("circle 4 : ", circle4.area());

// both factory and cosntructor function approach are similar nothing much of a difference
// both are regular javascript functions
