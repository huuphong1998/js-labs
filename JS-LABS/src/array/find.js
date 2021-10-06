// find(callbackFn)
// find(x => x > 0)

// Cách 1
function findFirstEvenV1(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    let firstEven;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) {
            firstEven = number;
            break;
        }
    }

    return firstEven;
}
console.log(findFirstEvenV1([1, 2, 3, 4, 5]));

// Cách 2
function findFirstEvenV2(numberList) {
    if (!Array.isArray(numberList)) return undefined;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) return numberList[i];
    }

    return undefined;
}
console.log(findFirstEvenV2([1, 2, 3, 4, 5]));

// Cách 3: Điều kiện bất kỳ
function findFirstEvenV3(numberList, callbackFn) {
    if (!Array.isArray(numberList)) return undefined;

    for (let i = 0; i < numberList.length; i++) {
        if (callbackFn(numberList[i], i)) return numberList[i];
    }

    return undefined;
}

console.log(findFirstEvenV3([1, 2, 3, 4, 5], (number) => number % 2 === 0));
