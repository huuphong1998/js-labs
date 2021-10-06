// Tìm số dương nhỏ nhất trong mảng
// Viết hàm findMinPositive(numberList) để tìm ra số dương nhỏ nhất trong mảng

export function findMinPositive(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let minPositiveList = [];
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 === 0) minPositiveList.push(number);
    }
    const result = minPositiveList.reduce((minPositive, number) => {
        if (number < minPositive) minPositive = number;

        return minPositive;
    }, Number.POSITIVE_INFINITY);

    return minPositiveList.length > 0 ? result : undefined;
}
