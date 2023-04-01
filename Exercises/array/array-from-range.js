function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) output.push(i);
    return output;
}

const numbers = arrayFromRange(-10, -4);

console.log(numbers);
