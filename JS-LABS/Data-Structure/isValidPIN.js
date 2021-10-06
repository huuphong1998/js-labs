// Kiểm tra PIN hợp lệ
// Viết hàm isValidPIN(pin) nhận vào chuỗi mã pin và kiểm tra tính hợp lệ của nó.
// Một mã pin hợp lệ cần thỏa các điều kiện sau:
// Độ dài phải là 6
// Mã pin chỉ chứa toàn chữ số
// Mã pin không được là chuỗi tăng giảm liên tiếp. Ví dụ: 123456, 543210, 456789,... đều là không hợp lệ
// Mỗi chữ số không đưuọc xuất hiện quá 2 lần. Ví dụ: 111234, 123233, 454545,... đều là không hợp lệ
// Trả về true nếu hợp lệ, ngược lại trả về false

// const PIN_LENGTH = 6;
// function isValidPIN(pin) {
//     if (pin.length !== PIN_LENGTH) return false;

//     let isIncrement = true;
//     let isDecrement = true;
//     const digitMap = {};
//     for (let i = 0; i < PIN_LENGTH; i++) {
//         if (pin[i] < '0' || pin[i] > '9') return false;

//         if (pin[i] >= pin[i + 1]) isIncrement = false;
//         if (pin[i] <= pin[i + 1]) isDecrement = false;

//         digitMap[pin[i]] = (digitMap[pin[i]] || 0) + 1;
//         if (digitMap[pin[i]] > 2) return false;
//     }

//     if (isIncrement || isDecrement) return false;

//     return true;
// }

const PIN_LENGTH = 6;
function isValidPIN(pin) {
    if (pin.length !== PIN_LENGTH) return false;

    // should contains digit only
    const hasNonDigit = Array.from(pin).some((x) => x < '0' || x > '9');
    if (hasNonDigit) return false;

    // should not be a simple sequence number
    const increaseNumber = '0123456789';
    const decreaseNumber = '9876543210';
    if (increaseNumber.includes(pin) || decreaseNumber.includes(pin)) return false;

    // should not contain digit appearing more than 2 times
    const digitSet = new Set(pin);
    const hasDigitMoreThanTwice = [...digitSet].some((x) => Array.from(pin).filter((y) => y === x).length > 2);
    if (hasDigitMoreThanTwice) return false;

    return true;
}
console.log(isValidPIN(123233));
