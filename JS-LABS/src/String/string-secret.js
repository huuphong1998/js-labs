// Viết hàm findSecret(code) để tìm ra chuỗi mật với quy tắc như sau.
// Bỏ đi các ký tự hoa trong code, chuỗi còn lại chính là mã cần tìm
// Lưu ý: không dùng hàm replaceAll() và không dùng regular expression (regexp)
// Ví dụ:
// findSecret('SUPERCODE') --> ''
// findSecret('SUPERhelloCODE') --> 'hello'
// findSecret('eaABFHsyUEYSfrontJSKJSHend') --> 'easyfrontend'

function findSecretV1(code) {
    if (code.toUpperCase() === code) return '';
    if (code.toLowerCase() === code) return code;

    let result = '';
    for (let i = 0; i < code.length; i++) {
        if (code[i].toLowerCase() === code[i]) {
            result += code[i];
        }
    }

    return result;
}
console.log(findSecretV1(''));

function findSecretV2(code) {
    if (code.toUpperCase() === code) return '';
    if (code.toLowerCase() === code) return code;

    return code
        .split('')
        .filter((item) => item !== item.toUpperCase())
        .join('');
}
console.log(findSecretV2('GUKGyguUYGtfyTjytvfYTFt'));
