// Tìm email đầu tiên trong mảng
// Viết hàm findFirstEmail(strList) để tìm ra email hợp lệ đầu tiên có trong mảng strList
// Ðiều kiện của một email hợp lệ:
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trường hợp không tìm thấy email thoả yêu cầu thì trả về undefined

function isEmail(str) {
    if (!str) return false;

    const hasDomain = str.includes('.com') || str.includes('.vn') || str.includes('.com.vn');
    if (str.includes('@') && hasDomain) {
        const x = str.split('@')[0].length >= 3;
        const y = str.split('@')[1].split('.')[0].length >= 3;
        if (x && y) return true;
    }

    return false;
}

export function findFirstEmail(strList) {
    if (!Array.isArray(strList) || strList.length === 0) return undefined;

    for (let i = 0; i < strList.length; i++) {
        const str = strList[i];
        if (isEmail(str)) return str;
    }
    return undefined;
}
