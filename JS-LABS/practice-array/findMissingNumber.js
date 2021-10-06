// Tìm một số bị thiếu trong một mảng từ [5...n]
// Viết hàm findMissingNumber(numberList, n) để tìm ra con số bị thiếu trong dãy số [5...n]
// Mỗi số chỉ xuất hiện một lần trong mảng
// Chắn chắn sẽ luôn có một con số bị thiếu trong mảng (không hơn, không kém)

export function findMissingNumber(numberList, n) {
    if (!Array.isArray(numberList) || numberList.length === 0 || n < 5) return undefined;

    for (let i = 5; i <= n; i++) {
        if (!numberList.includes(i)) return i;
    }

    return undefined;
}
