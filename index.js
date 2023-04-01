const numbers = [1, 2, 3, 4, 1];

function countOccurrences(array, searchElement) {
    // if (!Array.isArray(array)) {
    //     throw new Error("Invalid array.");
    // }

    try {
        const count = array.reduce((accumulator, currentValue) => {
            if (currentValue === searchElement) return ++accumulator;
            return accumulator;
        }, 0);

        return count;
    } catch (error) {
        console.log(error);
    }
}

const count = countOccurrences(true, 1);
console.log(count);
