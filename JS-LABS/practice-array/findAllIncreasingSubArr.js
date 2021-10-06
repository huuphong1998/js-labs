// Tìm các mảng con tăng dần
// Viết hàm findAllIncreasingSubArr(numberList) để tìm ra tất cả các mảng con tăng dần có trong mảng numberList
// Mảng có tính chất tăng dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn lớn hơn phần tử liền trước nó
// (trừ phần tử đầu tiên)

export function findAllIncreasingSubArr(numberList) {
    if (!Array.isArray(numberList) || numberList.length <= 1) return [];

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

    return subArrayList;
}
