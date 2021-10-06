// Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
// Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
// Từ cần tìm có độ dài không quá 5
// Từ cần tìm không có chứa khoảng trắng (space)
// Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string.

export function findLongestWord(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return '';

    let newWordList = [];
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i];
        if (word.length <= 5 && !word.includes(' ')) newWordList.push(word);
    }

    const result = newWordList.reduce((acc, word) => {
        if (word.length > acc.length) acc = word;

        return acc;
    }, '');

    return newWordList.length > 0 ? result : '';
}
