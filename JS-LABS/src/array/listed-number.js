// Liệt kê các số trong khoảng [a, b]
// Viết hàm createArrayInRange(a, b) để tạo ra mảng gồm các số nằm trong khoảng [a, b] (có bao gồm a và b)
// Với a, b là các số thỏa điều kiện sau: -100 < a < b < 100
// Trả về một array chứa các số trong khoảng từ a tới b
// Ví dụ:
// createArrayInRange(1, 5) --> [1, 2, 3, 4 ,5]
// createArrayInRange(-2, 1) --> [-2, -1, 0, 1]
// Hãy viết bằng 2 cách:
// 1. Dùng for...i
// 2. Dùng Array.from()

// v1: for...i
function createArrayInRangeI(a, b) {
    if (a < -100 || b > 100 || a > b) return [];

    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }

    return result;
}
console.log(createArrayInRangeI(-3, 3));

// v2: Array.from()
function createArrayInRangeFrom(a, b) {
    if (a < -100 || b > 100 || a > b) return [];

    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
console.log(createArrayInRangeFrom(-3, 3));
