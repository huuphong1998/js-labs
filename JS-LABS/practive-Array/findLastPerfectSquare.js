// Tìm số chính phương cuối cùng trong mảng
// Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng numberList

function isPerfectSquare(n) {
    if (n <= 0) return undefined;

    const sqrtN = Math.sqrt(n);
    const sqrtNInt = Math.trunc(sqrtN);

    return sqrtNInt * sqrtNInt === n;
}

export function findLastPerfectSquare(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let result = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (isPerfectSquare(numberList[i])) result = numberList[i];
    }

    return result !== 0 ? result : undefined;
}
