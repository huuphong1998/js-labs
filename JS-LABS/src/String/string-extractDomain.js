// Viết hàm extractDomain(email) nhận vào địa chỉ email, trả về phần domain sau ký tự @
// Ví dụ:
// extractDomain('') --> ''
// extractDomain('alice@gmail.com') --> 'gmail.com'
// extractDomain('bob@abc.com') --> 'abc.com'

// Cách 1: split()
function extractDomainV1(email) {
    if (email === '' || !email.includes('@')) return '';

    return email.split('@')[1];
}

// Cách 2: indexOf() and slice()
function extractDomainV2(email) {
    if (email === '' || !email.includes('@')) return '';

    const nameEmail = email.indexOf('@');
    return email.slice(nameEmail + 1);
}
console.log(extractDomainV2(''));
console.log(extractDomainV2('qwdwqdwqdwq'));
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));
