// Kiểm tra số hoàn hảo
// Viết hàm isPerfectNumber(n) để kiểm tra n có phải là số hoàn hảo hay không?
// Với n thỏa điều kiện 1 < n < 1000
// Trả về true nếu đúng, ngược lại là false
// Số hoàn hảo là số mà tổng của tất cả ước số (không tính chính nó, tức từ 1 đến n - 1) bằng chính nó.
// Ví dụ: 6 = 1 + 2 + 3 (như vậy 6 là một số hoàn hảo)
// Gợi ý: không nhất thiết phải chạy tới (n - 1) để tìm ra tất cả các ước số của n

function isPerfectNumber(n) {
    if (n < 1 || n > 1000) return false;

    let sumDivisor = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) sumDivisor += i;
    }

    return sumDivisor === n;
}
console.log(isPerfectNumber(1));
