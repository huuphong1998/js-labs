// Viết hàm getFullName(firstName, lastName) nhận vào firstName và lastName và trả về chuỗi fullName
// Quy tắc để tạo chuỗi fullName như sau:
// firstName và lastName là optional (có thể không có)
// fullName không có khoảng trắng thừa ở đầu và cuối chuỗi
// firstName và lastName cần phải viết hoa chữ cái đầu tiên, chữ cái còn lại là viết thường
// Ví dụ:
// getFullName('Alice') --> 'Alice'
// getFullName('Alice', '') --> 'Alice'
// getFullName('', 'Nguyen') --> 'Nguyen'
// getFullName('Bod', 'Tran') --> 'Bod Tran'
// getFullName('john', 'pHAm') --> 'Join Pham'

function capitalize(str) {
    return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();
}

function getFullName(firstName, lastName, callback) {
    if (arguments.length === 2) return arguments[0];
    if (firstName === '') return lastName;
    if (lastName === '') return firstName;

    const newFirstName = callback(firstName);
    const newLastName = callback(lastName);

    return `${newFirstName} ${newLastName}`;
}
console.log(getFullName('   john      ', '      pHAm     ', capitalize));
console.log(getFullName('Bod', 'Tran', capitalize));
console.log(getFullName('Alice', '', capitalize));
console.log(getFullName('Alice', capitalize));
console.log(getFullName('', 'Nguyen', capitalize));
