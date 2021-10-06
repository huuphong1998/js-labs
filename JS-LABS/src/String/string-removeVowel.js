// Viết hàm removeVowel(str) để tìm và remove tất cả nguyên âm có trong câu văn đầu vào.
// Nguyên âm là các ký tự: u, e, o, a, i
// Ví dụ:
// removeVowel("") --> ""
// removeVowel("say hello") --> "sy hll" vì a, e, o là nguyên âm nên đã bị xóa
// Giả định là mỗi nguyên âm trong str chỉ xuất hiện một lần
// Trường hợp chuỗi sau khi bỏ các nguyên âm có dư khoảng trắng ở đầu hoặc cuối chuỗi, thì hãy bỏ luôn các khoảng trắng
// thừa này nhé.

function removeVowelV1(str) {
    if (str === '') return '';

    return str.replace(/[aeiou]/g, '').trim();
}
console.log(removeVowelV1('aeou hyoe'));

function removeVowelV2(str) {
    if (str === '') return '';

    let result = str.toLowerCase();
    if (result.includes('a')) result = result.replace('a', '');
    if (result.includes('e')) result = result.replace('e', '');
    if (result.includes('o')) result = result.replace('o', '');
    if (result.includes('u')) result = result.replace('u', '');
    if (result.includes('i')) result = result.replace('i', '');

    return result.trim();
}
console.log(removeVowelV2('say hello'));
