const numbers = [1, 2, 3, 4, 1, 1];

function except(array, exclude) {
    // Solution 1
    // return array.filter((value) => !exclude.includes(value));

    // Solution 2
    const output = [];
    for (let element of array)
        if (!exclude.includes(element)) output.push(element);

    // Solution 3
    // for (let element of array) {
    //     let isExist = false;
    //     for (let item of exclude)
    //         if (element === item) {
    //             isExist = true;
    //             break;
    //         }
    //     if (!isExist) output.push(element);
    // }

    return output;
}

const output1 = except(numbers, [1]);
const output2 = except(numbers, [1, 2]);
const output3 = except(numbers, [1, 2, 3, 4]);
console.log(output1, output2, output3);
