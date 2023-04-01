const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;
    // Checking for outbound
    if (position >= array.length || position < 0) {
        console.error("Invalid offset");
        return;
    }

    const output = [...array];

    // Solution1: Swap
    // const firstItem = output[index];
    // output[index] = output[position];
    // output[position] = firstItem;

    // Solution2: using splice
    // remove item and then add it
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);

    return output;
}

const output = move(numbers, 1, 1);

console.log(output);

// [0][1][2][3]
// 0 + 2 = 2
