// Xóa các số trùng nhau trong mảng
// Viết hàm removeDuplicatedNumbers(numberList) để xóa tất cả các số xuất hiện hơn 1 lần

export function removeDuplicatedNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    let flag = {};
    let result = [];
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        flag[number] = flag[number] === undefined ? 1 : flag[number] + 1;
        if (flag[number] > 1) delete flag[number];
    }
    for (const key in flag) {
        result.push(Number(key));
    }

    return result;
}
