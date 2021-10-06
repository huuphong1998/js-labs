// Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là đối xứng, ngược
// lại trả về false
// Gỉa sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số (0 --> 999)
// Số đối xứng là số mà đọc từ trái sang phải nó giống như đọc từ phải sang trái
// Ví dụ: 1, 22, 33, 121, 222, 353, 373, ...
// Lưu ý: không dùng chuỗi, mảng, chỉ xử lý bằng số

function isSymmetricNumberV1(n) {
    if (n.toString().length > 3 || n < 0) return false;

    if (n.toString().length === 1) return true;
    if (n.toString().length === 2) {
        if (n % 11 === 0) return true;
    }
    if (n.toString().length === 3) {
        const getOnes = n % 10;
        const getHundreds = Math.trunc(n / 100);
        if (getOnes === getHundreds) return true;
    }

    return false;
}
console.log(isSymmetricNumber(-1000));

function isSymmetricNumberV2(n) {
    if (n < 0 || n > 999) return false;

    if (n < 10 || n % 11 === 0 || n % 111 === 0) return true;
    const ones = n % 10;
    const hundreds = Math.trunc(n / 100);
    return hundreds === ones;
}
