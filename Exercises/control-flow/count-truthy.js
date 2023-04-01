function countTruthy(array) {
    let count = 0;
    for (let item of array) if (item) count++;
    return count;
}

const array = [
    undefined,
    null,
    "",
    false,
    0,
    NaN,
    true,
    "Dariush",
    23,
    1,
    2,
    3,
];

console.log(countTruthy(array));
