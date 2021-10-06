// Viết hàm getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một sô nguyên dương n (0 <= n < 1000)
// Ví dụ:
// getMaxDigit(1) --> 1
// getMaxDigit(12) --> 2
// getMaxDigit(123) --> 3
// getMaxDigit(921) --> 9
// Trường hợp dữ liệu không hợp lệ, nằm ngoài vùng cho phép của n thì trả về -1
// Lưu ý: Không sử dụng vòng lặp.

function getMaxDigitV1(n) {
    if (n < 0 || n >= 1000) return -1;

    if (n.toString().length === 1) return n;

    if (n.toString().length === 2) {
        const getTensTwoNumber = Math.trunc(n / 10);
        const getOnesTwoNumber = n % 10;

        return getTensTwoNumber > getOnesTwoNumber ? getTensTwoNumber : getOnesTwoNumber;
    }

    if (n.toString().length === 3) {
        let max = Math.trunc(n / 100);
        const getTensThreeNumber = Math.trunc((n % 100) / 10);
        const getOnesThreeNumber = n % 10;

        if (getTensThreeNumber > max) max = getTensThreeNumber;
        if (getOnesThreeNumber > max) max = getOnesThreeNumber;

        return max;
    }
}
console.log(getMaxDigitV1(1000));

function getMaxDigitV2(n) {
    if (n < 0 || n >= 1000) return -1;

    let max = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    if (n < 10) return n;
    if (n < 100) {
        const tens = Math.trunc(n / 10);

        return tens > max ? tens : max;
    }
    if (tens > max) max = tens;
    if (hundreds > max) max = hundreds;

    return max;
}
console.log(getMaxDigitV2(1000));
