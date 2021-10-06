// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của mỗi từ trong str
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

export function statisticsWordsV1(str) {
    if (str === '') return {};

    const statistics = {};
    str.split(' ')
        .filter((x) => x !== '')
        .forEach((word) => {
            if (statistics[word]) {
                statistics[word] += 1;
            } else {
                statistics[word] = 1;
            }
        });

    return statistics;
}

export function statisticsWordsV2(str) {
    if (str === '') return {};

    return str
        .split(' ')
        .filter((x) => x !== '')
        .reduce((statistics, word) => {
            statistics[word] = statistics[word] !== undefined ? (statistics[word] += 1) : 1;

            return statistics;
        }, {});
}
