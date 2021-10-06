// Thống kê số lần xuất hiện của các số trong mảng
// Viết hàm statisticsNumbers(numberList) để thống kê số lần xuất hiện của các số trong mảng numberList

export function statisticsNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return {};

    return numberList.reduce((result, number) => {
        result[number] = result[number] === undefined ? 1 : result[number] + 1;

        return result;
    }, {});
}
