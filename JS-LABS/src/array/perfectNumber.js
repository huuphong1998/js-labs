// Kiểm tra mảng có phải tất cả đều là số hoàn hảo hay không
// Viết hàm isAllPerfectNumbers(numberList) nhận vào mảng số nguyên dương
// Trả về true nếu tất cả đều là số hoàn hảo, ngược lại trả về false
// Ví dụ:
// isAllPerfectNumbers([]) --> false
// isAllPerfectNumbers([1, 6]) --> false vì 1 không phải là số hoàn hảo
// isAllPerfectNumbers([1,2,3]) --> false
// isAllPerfectNumbers([6]) --> true vì 6 là số hoàn hảo
// isAllPerfectNumbers([6, 28]) --> true vì 6 và 28 đều là số hoàn hảo
// Viết hàm bằng 3 cách khác nhau:
// 1. Sử dụng for...i với cách tiếp cận là return false nếu phát hiện có một số không phải là số hoàn hảo
// 2. Sử dụng reduce() với cách tiếp cận là đếm số lượng số hoàn hảo, nếu nó bằng với length của array, nếu bằng return
// true, ngược lại return false
// 3. Sử dụng every()

function isPerfectNumber(n) {
    if (n < 1) return false;

    let sumDivisor = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) sumDivisor += i;
    }

    return sumDivisor === n;
}

// using for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (!isPerfectNumber(numberList[i])) return false;
    }

    return true;
}
console.log(isAllPerfectNumbersV1([6, 28]));
console.log(isAllPerfectNumbersV1([]));

// using reduce: check if the number of perfect numbers is equal to length
function isAllPerfectNumbersV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let checkPerfectNum = [];
    numberList.reduce((acc, currentValue) => {
        if (isPerfectNumber(currentValue)) checkPerfectNum.push(currentValue);
    }, 0);

    return checkPerfectNum.length === numberList.length;
}
console.log(isAllPerfectNumbersV2([6, 28]));
console.log(isAllPerfectNumbersV2([]));

// using every()
function isAllPerfectNumbersV3(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    return numberList.every((number) => isPerfectNumber(number));
}
console.log(isAllPerfectNumbersV3([6, 28]));
console.log(isAllPerfectNumbersV3([]));
