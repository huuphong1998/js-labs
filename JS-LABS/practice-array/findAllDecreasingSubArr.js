// Tìm các mảng con giảm dần có ít nhất 3 phần tử
// Viết hàm findAllDecreasingSubArr(numberList) để tìm ra tất cả các mảng con giảm dần có độ dài ít nhất 3 phần tử
// Mảng có tính chất giảm dần phải có ít nhất 2 phần tử và phần tử tại vị trí bất kỳ luôn nhỏ hơn phần tử liền kề trước nó
// (trừ phần tử đầu tiên)

export function findAllDecreasingSubArr(numberList) {
    if (!Array.isArray(numberList) || numberList.length < 3) return [];

    const subArrayList = [];
    let subArray = [];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > numberList[i + 1]) subArray.push(numberList[i]);

        if (subArray.length > 1 && (numberList[i] < numberList[i + 1] || i === numberList.length - 1)) {
            subArray.push(numberList[i]);
            subArrayList.push(subArray);
            subArray = [];
        }
    }

    return subArrayList;
}
