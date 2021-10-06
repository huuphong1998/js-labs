// Kiểm tra độ mạnh của mật khẩu
// Viết hàm isStrongPassword(password) nhận vào là một chuỗi password, trả về true nếu là mật khẩu mạnh, ngược lại trả về false
// Một mật khẩu mạnh là cần thỏa các điều kiện sau:
// 1. Có ít nhất 8 ký tự
// 2. Có ít nhất một ký tự hoa
// 3. Có ít nhất một ký tự thường
// 4. Có ít nhất một chữ số
// 5. Có ít nhất một trong các ký tự đặc biệt này: !@#$%^&*()
// Ví dụ:
// isStrongPassword('') --> false
// isStrongPassword('super strong') --> false
// isStrongPassword('Sup3rC0o!') --> true

const specialCharList = ['!', '@', '#', '$', '%', '^', '&', '^', '*', '(', ')'];

function isSpecialChar(password) {
    for (let i = 0; i < password.length; i++) {
        if (specialCharList.includes(password[i])) return true;
    }

    return false;
}

export function isStrongPassword(password) {
    if (password === '' || password.length < 8) return false;

    const hasCharUppercase = password.split('').findIndex((x) => x.toUpperCase()) >= 0;
    const hasCharLowercase = password.split('').findIndex((x) => x.toLowerCase()) >= 0;
    const hasDigit = password.split('').findIndex((x) => Number(+x)) >= 0;
    const hasSpecialCharacter = isSpecialChar(password);

    return hasCharUppercase && hasCharLowercase && hasDigit && hasSpecialCharacter;
}

// console.log(isStrongPassword('Sup3rC0o!'));
