function findIndex(arr, callbackFn) {
    if (!Array.isArray(arr)) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (callbackFn(arr[i], i)) return i;
    }

    return -1;
}

console.log(findIndex([1, 3, 5], (number) => number % 2 === 0));
