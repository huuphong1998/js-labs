// Viết hàm compareNumber(a, b) nhận vào 2 số nguyên a, b bất kỳ.
// Trả về:
// 1 nếu a > b
// 0 nếu a = b
// -1 nếu a < b
// Ví dụ:
// compareNumber(3, 5) --> -1
// compareNumber(9, 7) --> 1
// compareNumber(6, 6) --> 0

function compareNumber(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;

    return -1;
}
console.log(compareNumber(1, 1));
