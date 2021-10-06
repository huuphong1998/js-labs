// Viết hàm mergeArray(a, b) nhận vào 2 mảng số nguyên dương và trả về mảng gộp của cả 2 mảng số và loại bỏ đi các số trùng
// nhau. Lưu ý:
// a, b có thể là bất cứ kiểu dữ liệu gì
// Khi a, b là mảng thì a, b sẽ là mảng các số nguyên dương
// Mỗi mảng a, b sẽ chứa những con số không trùng nhau
// Ví dụ:
// mergeArray(1, true) --> []
// mergeArray([], []) --> []
// mergeArray([], [1, 2, 3]) --> [1, 2, 3]
// mergeArray([1, 2 , 3], [2, 3, 4]) --> [1, 2, 3, 4] vì 2, 3 trùng nhau nên khi gộp mảng chỉ giữ lại một số

export function mergeArray(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return [];
    if (a.length === 0 && b.length === 0) return [];
    if (a.length === 0) return b;
    if (b.length === 0) return a;

    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) a.push(b[i]);
    }

    return a;
}
