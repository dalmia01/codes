// Bubble class
// blueprint for bubbles
class Bubble {
    // sets / constructs -  initial x, y position of bubble instance
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // changes x, y positions of bubble
    // random used to geta number in between some , here -5 and 5
    // add this random to current postions and then they will be changed
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    // display a bubble object on a canvas
    // stroke what color
    // strokewieght - stroke boundary
    // no fill empty
    // ellipse - type of shape
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let randomNumberX = random(1, 400);
        let randomNumberY = random(1, 300);
        // instance of bubble
        let bubble = new Bubble(randomNumberX, randomNumberY);
        // pushing bubbles instance in bubbles array
        bubbles.push(bubble);
    }
}

function draw() {
    background(0);
    for (let bubble of bubbles) {
        bubble.move();
        bubble.show();
    }
}
