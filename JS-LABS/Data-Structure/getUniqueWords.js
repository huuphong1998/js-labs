// Lấy danh sách các từ khác nhau trong câu
// Viết hàm getUniqueWords(sentence) nhận vào một string snetence và trả về một mảng các từ unique có trong câu
// sentence có thể là chuỗi rỗng, trong trường hợp này trả về mảng rỗng
// không tính khoảng trắng là một từ
// Ví dụ: getUniqueWords('frontend is easy but easy to die') --> ['frontend', 'is', 'easy', 'but', 'to', 'die']

function getUniqueWords(sentence) {
    if (sentence.length === 0) return [];

    const uniqueWords = sentence.split(' ').filter((x) => x !== '');
    const result = uniqueWords.reduce((flagObject, word) => {
        flagObject[word] = flagObject[word] === undefined ? 1 : flagObject[word] + 1;
        return flagObject;
    }, {});

    return Object.keys(result);
}

console.log(getUniqueWords('frontend      is easy but easy to die'));
