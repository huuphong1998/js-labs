// Kiểm tra đóng mở ngoặc có đúng và đủ cặp không?
// Viết hàm isValidBracketPairs(str) nhận vào một string là một biểu thức chứa các dấu ngoặc [], {}, () và trả về
// true nếu biểu thức đóng mở ngoặc đúng
// ngược lại trả về false
// Ví dụ:
// isValidBracketPairs('(a + b) * (c + d)') --> true
// isValidBracketPairs('(a + b * c[1') --> thiếu dấu đóng ngoặc
// Gợi ý: sử dụng stack để xử lý bài toán này

function isValidBracketPairs(str) {
    if (str.length === 0) return true;

    let stack = [];

    function getTop(stack) {
        return stack[stack.length - 1];
    }

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        const hasRoundBracket = letter === ')' && getTop(stack) === '(';
        const hasSharpBracket = letter === '}' && getTop(stack) === '{';
        const hasSquareBracket = letter === ']' && getTop(stack) === '[';

        if (letter === '(' || letter === '{' || letter === '[') stack.push(letter);
        if (hasRoundBracket || hasSharpBracket || hasSquareBracket) stack.pop();
    }

    return stack.length === 0 ? true : false;
}

console.log(isValidBracketPairs('((a + b) * {c + d}}'));
