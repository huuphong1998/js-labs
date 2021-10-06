// Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tr n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ sô
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false
// Ví dụ:
// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false

export function isIncreasingNumberV1(n) {
    if (n <= 0 || n >= 1000000 || n < 10) return false;

    let remaining = n;
    let prevDigit = 10;

    while (remaining > 0) {
        // if found an invalid case return false
        const lastDigit = remaining % 10;
        if (lastDigit >= prevDigit) return false;

        // update prevDigit to lastDigit
        prevDigit = lastDigit;

        // remove the last digit from remaining
        remaining = Math.trunc(remaining / 10);
    }

    return true;
}

export function isIncreasingNumberV2(n) {
    if (n <= 0 || n >= 1000000 || n < 10) return false;

    const numberString = n.toString();
    for (let i = 1; i < numberString.length; i++) {
        if (numberString[i] <= numberString[i - 1]) return false;
    }

    return true;
}
