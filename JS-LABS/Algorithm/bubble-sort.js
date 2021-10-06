function bubbleSort(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    // sorting
    for (let i = numberList.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (numberList[j] > numberList[j + 1]) {
                // swap j and j + 1
                const temp = numberList[j];
                numberList[j] = numberList[j + 1];
                numberList[j + 1] = temp;

                // [x,y] = [y,x]
                // [numberList[j + 1], numberList[j]] = [numberList[j], numberList[j + 1]];
            }
        }
    }

    return numberList;
}
console.log(bubbleSort([2, 1, 4, 3]));
