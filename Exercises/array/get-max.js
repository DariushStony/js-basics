const numbers = [1, 2, 3, 4];

function getMax(array) {
    if (array.length === 0) return undefined;

    // Solution 1:
    // let max = array[0];
    // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

    // Solution 2:
    const max = array.reduce((accumulator, currentValue) =>
        currentValue > accumulator ? currentValue : accumulator
    );

    return max;
}

const max = getMax(numbers);

console.log(max);
