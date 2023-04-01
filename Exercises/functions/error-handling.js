const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid array.");
    }

    const count = array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement) return ++accumulator;
        return accumulator;
    }, 0);

    return count;
}

try {
    const count = countOccurrences(true, 1);
    console.log(count);
} catch (error) {
    console.log(error.message);
}
