// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue

function reduce(arr, callbackFn, initialValue) {
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
        throw new Error('Invalid parameters');
    }
    if (arr.length === 0) {
        if (initialValue === undefined) throw new Error('Should have initialValue when arr is empty');

        return initialValue;
    }

    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue ? initialValue : arr[0];

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callbackFn(accumulator, arr[i], i);
    }

    return accumulator;
}

console.log(reduce([1, 2, 3, 4], (prevSum, number) => prevSum + number, 0));
