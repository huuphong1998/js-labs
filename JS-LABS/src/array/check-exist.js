// every

// Cách 1
export function checkIfAllEvenV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let isValid = true;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 !== 0) {
            isValid = false;
            break;
        }
    }

    return isValid;
}

// Cách 2
export function checkIfAllEvenV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 !== 0) return false;
    }

    return true;
}

// console.log(checkIfAllEvenV2([2, 1, 3]));
// console.log(checkIfAllEvenV2([2, 4, 6]));

// some
function checkIfAllEvenV3(numberList) {
    if (!Array.isArray(numberList)) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) return true;
    }

    return false;
}
// console.log(checkIfAllEvenV3([2, 1, 3]));
// console.log(checkIfAllEvenV3([3, 5, 7]));

// indexOf
function findIndex(arr, searchElement) {
    if (!Array.isArray(arr)) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) return i;
    }

    return -1;
}

// console.log(findIndex(['easy', 'frontend', 'huu', 'phong', 'huu'], 'huu'));
// console.log(findIndex(['easy', 'frontend', 'huu', 'phong'], 'abc'));

// lastIndexOf
function lastIndexOf(arr, searchElement) {
    if (!Array.isArray(arr)) return -1;

    let result;
    for (let i = 0; i < arr.length; i++) {
        if (searchElement !== arr[i]) result = -1;
        result = i;
    }
    return result;
}

// console.log(lastIndexOf([5, 3, 5, 7, 5, 5], 5));

//includes
function includes(arr, searchElement) {
    if (!Array.isArray(arr)) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) return true;
    }

    return false;
}
// console.log(includes(['easy', 'frontend', 'huu', 'phong', 'huu'], 'false'));
