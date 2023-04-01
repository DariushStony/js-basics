const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
    // Solution 1:
    // let count = 0;
    // for (let element of array) if (element === searchElement) count++;

    // Solution 2:
    const count = array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement) return ++accumulator;
        return accumulator;
    }, 0);

    return count;
}

const count = countOccurrences(numbers, 1);

console.log(count);
