// Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
// Viết hàm findMaxSumArray(numberList) để tìm ra mảng con tăng dần có tổng lớn nhất và trả về tổng của mảng con đó

function sumArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;

    return arr.reduce((sum, number) => (sum += number), 0);
}

export function findMaxSumArray(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    const subArrayList = [];
    let subArray = [];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < numberList[i + 1]) subArray.push(numberList[i]);

        if (subArray.length > 0 && (numberList[i] > numberList[i + 1] || i === numberList.length - 1)) {
            subArray.push(numberList[i]);
            subArrayList.push(subArray);
            subArray = [];
        }
    }

    return subArrayList.reduce((maxSum, subArrCurr) => {
        if (sumArray(subArrCurr) > maxSum) maxSum = sumArray(subArrCurr);

        return maxSum;
    }, 0);
}
