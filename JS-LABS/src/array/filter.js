function filter(arr, callbackFn) {
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callbackFn(element, i)) {
            newArray.push(element);
        }
    }

    return newArray;
}

console.log(filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0));
console.log(filter([1, 2, 3, 4, 5, 6], (x, idx) => x % 2 === 0 && idx % 2 === 1));
