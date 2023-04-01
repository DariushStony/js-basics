// Constructor Function

// First letter should be uppercase (Pascal Notation)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draws");
    };
    /*
        We don't have to explicitly add
        the statement here in this function,
        this will happen under the hood.
     */
    // return this;
}

const circle = new Circle(1);

// When we use new operatro 3 things happen
// 1. new create an empty object
// const x = {};
// 2. set this to point to that empty object

// 3. return that object from Contructor function

console.log(circle);
