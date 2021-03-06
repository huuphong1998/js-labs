// Kiểm tra mảng a có phải là mảng con của mảng b
// Viết hàm isSubArray(a, b) để kiểm tra xem a có phải là mảng con của b không?
// Nếu a là mảng rỗng thì luôn trả về true
// Nếu a có độ dài lớn hơn b thì luôn trả về false
// Trả về true nếu toàn bộ mảng a nằm trong mảng b theo đúng thứ tự của từng phần tử trong mảng a

export function isSubArray(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length === 0) return true;

    return a.every((x) => b.includes(x));
}
