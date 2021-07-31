// ABSTRACTION

// hide detials and complexity
// show / expose only esentials
// private properties and methdos to factory / constructor function
// assign that property / method as a local to that function

// counter, defaulytlocation and optimizeLoaction are local to the class Cicle
// cannot be accesed from outisde of that class
// usecase - the publci methods of the class circle will still have the access to its local and parent variables with the idea of closure in javascript
// so any change to that local vriables from inner functions will still be with that object even though it returned/ scope ends
// these local variables will preserve their state because they are part of closures

function Circle(radius) {
    let counter = 0;
    let defaultLocation = { x: 0, y: 0 };
    let optimizeLocation = function () {
        // do some inner hidden fucntionality
        counter++;
    };
    this.radius = radius;
    this.area = function () {
        optimizeLocation();
        return this.radius ** 2 + counter;
    };
}

let circleCons1 = new Circle(4);
let circleCons2 = new Circle(4);

// Getters and setters
// using getters and setters we create private variables

function CircleCreation(radius) {
    let counter = 0;
    let resetlocation = { x: 1, y: 1 };
    this.radius = radius;
    this.area = function () {
        counter++;
        return this.radius ** 2 + counter;
    };

    Object.defineProperty(this, "counter", {
        get: function () {
            return counter;
        },
    });

    Object.defineProperty(this, "resetlocation", {
        set: function (value) {
            resetLocation = value;
        },
    });
}

let circleCons6 = new CircleCreation(5);
circleCons6.counter = 5; // this will not modify counter as there is no setter used to modify
circleCons6.resetLocation = 5; // this will modify resetLocation , since setter function is defined in it.
