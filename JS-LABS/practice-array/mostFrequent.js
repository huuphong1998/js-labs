// Tìm số xuất hiện nhiều nhất trong mảng
// Viết hàm mostFrequent(numberList) nhận vào là một mảng số và trả về số có lần xuất hiện nhiều nhất
// Lưu ý:
// Tham số truyền vào có thể không phải là mảng, lúc đó trả về undefined
// Trường hợp mảng rỗng, trả về undefined
// Trường hợp có nhiều số có cùng số lần xuất hiện, trả về số đầu tiên
// Ví dụ:
// mostFrequent(true) --> undefined
// mostFrequent() --> undefined
// mostFrequent([]) --> undefined
// mostFrequent([1, 2, 3]) --> 1
// mostFrequent([2, 1, 3]) --> 2

export function mostFrequent(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    let result = {};
    let maxKey = undefined;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];

        result[number] = result[number] === undefined ? 1 : result[number] + 1;

        if (maxKey === undefined || result[number] > result[maxKey]) maxKey = number;
    }

    return Number.parseInt(maxKey);
}
