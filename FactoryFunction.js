// Factory Function
function createCircle(radius) {
    return {
        radius,
        // Short syntax for defining function
        draw() {
            console.log("Draw");
        },
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

console.log(circle1);
console.log(circle2);
