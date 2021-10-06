// map(mappingFn)
// map(transformFn)
// map(callbackFn)
function map(arr, mappingFn) {
    if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFn(element, i);
        newArray.push(newElement);
    }

    return newArray;
}
console.log(map([1, 2, 3, 4], (x) => x + 1));
console.log(map([1, 2, 3, 4], (x) => x * 2));

// even index: increment by 1
// odd index: multiply with 2
console.log(map([1, 2, 3, 4], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));
