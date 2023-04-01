// sum (1, 2, 3, 4) => 10

// Mosh Solution
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

    return items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
}

// My Solution
// function sum(parameter) {
//     let array = [...arguments];

//     if (Array.isArray(parameter)) array = parameter;

//     return array.reduce((a, c) => a + c);
// }

console.log(sum(1));
console.log(sum([1]));
console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));
