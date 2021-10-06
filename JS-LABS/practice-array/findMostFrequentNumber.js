// Tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng numberList, trường hợp
// có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên

export function findMostFrequentNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    const statistics = {};
    let maxKey = undefined;

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];

        // update statistics
        statistics[number] = statistics[number] === undefined ? 1 : statistics[number] + 1;

        // check maxKey
        if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
            maxKey = number;
        }
    }

    // let maxKey = undefined;
    // for (const key in statistics) {
    //     if (maxKey === undefined || statistics[key] > statistics[maxKey]) {
    //         maxKey = key;
    //     }
    // }

    return Number.parseInt(maxKey);
}
