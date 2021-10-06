// Viết hàm uniqueLetters(str) nhận vào là một chuỗi và trả về một chuỗi mới thỏa điều kiện sau đây:
// Giữ lại những ký tự chỉ xuất hiện một lần
// Những ký tự xuất hiện 2 lần trở lên sẽ bị remove ra khỏi chuỗi
// Ví dụ:
// uniqueLetters('') --> ''
// uniqueLetters('abc') --> 'abc'
// uniqueLetters('easy frontend') --> 'asy frotd' (các ký tự e, n bị remove vì xuất hiện 2 lần)
// uniqueLetters('aabccddeff') --> 'be' (các ký tự a, c, d, f bị remove vì xuất hiện 2 lần)

export function uniqueLetters(str) {
    if (str === '') return '';

    let unique = {};
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        unique[letter] = unique[letter] === undefined ? 1 : unique[letter] + 1;
    }
    for (const key in unique) {
        if (unique[key] === 1) result += key;
    }

    return result;
}
