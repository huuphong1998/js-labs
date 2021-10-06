// Liệt kê ước số của số nguyên dương n
// Viết hàm getDivisorList(n) nhận vào số nguyên dương (1 <= n <= 1000) và trả về một mảng các ước số của n
// Ví dụ:
// getDivisorList(1) --> [1]
// getDivisorList(10) --> [1, 2, 5, 10]
// getDivisorList(12) --> [1, 2, 3, 4, 6, 12]
// Hãy viết hàm này bằng 3 cách tiếp cận:
// 1. Sử dụng for...i từ 1 tới n getDivisorListV1(n)
// 2. Sử dụng Array.from() và filter() để lặp từ 1 tới n getDivisorListV2(n)
// 3. Sử dụng Array.from() và forEach() và sort(). Đồng thời chỉ lặp đến căn bậc 2 của n getDivisorListV3(n)

// Using for...i to loop from 1 to n
function getDivisorListV1(n) {
    if (n < 1 || n > 1000) return [];

    let result = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) result.push(i);
    }

    return result;
}
console.log(getDivisorListV1(20));

// Using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    if (n < 1 || n > 1000) return [];

    return Array.from(Array(n), (_, i) => i + 1).filter((x) => n % x === 0);
}
console.log(getDivisorListV2(20));

// Using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
    if (n < 1 || n > 1000) return [];

    let result = [];
    Array.from(Array(Math.trunc(Math.sqrt(n))), (_, i) => i + 1).forEach((x) => {
        if (n % x === 0) {
            result.push(x);

            if (x * x !== n) result.push(n / x);
        }
    });

    return result.sort((a, b) => a - b);
}
console.log(getDivisorListV3(20));
