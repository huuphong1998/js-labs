// Tìm số âm lẻ cuối cùng trong mảng
// Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList

export function findLastNegativeOdd(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let result = 0;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (number % 2 !== 0 && number < 0) result = number;
    }

    return result !== 0 ? result : undefined;
}
