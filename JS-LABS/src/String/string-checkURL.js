// Viết hàm isSecureUrl(url) nhận vào là một url và trả về true nếu url có sử dụng phương thức bảo mật, ngược lại trả về false
// Quy ước URL được xem là có sử dụng phương thức bảo mật nếu bắt đầu bằng:
// https
// wss
// Tạm thời bỏ qua việc kiểm tra url có hoàn chỉnh hay không, chỉ quan tâm phương thức bảo mật
// Ví dụ:
// isSecureUrl('http://abc.com') --> false vì bắt đầu bằng http, không phải https
// isSecureUrl('https://ezfrontend.com') --> true
// isSecureUrl('wss://chat.ezfrontend.com') --> true
// isSecureUrl('ws://chat.abc.com') --> false

// Cách 1: indexOf()
function isSecureUrlV1(url) {
    return url.indexOf('https') >= 0 || url.indexOf('wss') >= 0;
}

// Cách 2: startsWith()
function isSecureUrlV2(url) {
    return url.startsWith('https') || url.startsWith('wss');
}
console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));
