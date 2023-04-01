// circle.radius = 2;
// circle.area = 20; (readonly)

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
};

// We CANNOT do that
// circle.area = 50;
console.log(circle.radius, circle.area);
