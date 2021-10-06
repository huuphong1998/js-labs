// Tìm số lớn thứ 2 trong mảng
// Viết hàm findSecondLargestNumber(numberList) để tìm ra số lớn thứ 2 trong mảng numberList

export function findSecondLargestNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

    let result = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < numberList[i + 1]) result = numberList[i];
    }

    return result !== Number.NEGATIVE_INFINITY ? result : undefined;
}
