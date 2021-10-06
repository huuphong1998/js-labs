// Tìm url cuối cùng trong mảng
// Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
// Ðiều kiện cho một URL hợp lệ:
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ

function isUrl(str) {
    if (str === '') return false;

    const hasProtocol = ['http', 'https', 'ws', 'wss'];
    const hasDomain = ['.com', '.vn', '.com.vn'];
    for (let i = 0; i < hasProtocol.length; i++) {
        const x = str.startsWith(hasProtocol[i]);
        for (let j = 0; j < hasDomain.length; j++) {
            const y = str.endsWith(hasDomain[j]);
            if (x && y) return str.split('://')[1].split(hasDomain[j])[0].length >= 3;
        }
    }

    return false;
}

export function findLastUrl(strList) {
    if (!Array.isArray(strList) || strList.length === 0) return undefined;

    let result = '';
    for (let i = 0; i < strList.length; i++) {
        const str = strList[i];
        if (isUrl(str)) result = str;
    }

    return result !== '' ? result : undefined;
}
