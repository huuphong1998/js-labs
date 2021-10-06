// Kiểm tra mảng có chứa số nguyên tố hay không?
// Viết hàm hasPrime(numberList) nhận vào là một mảng số nguyên dương
// Trả về true nếu có ít nhất một số nguyên tố, ngược lại là false
// Viết bằng 5 cách khác nhau:
// Sử dụng for...i
// Sử dụng forEach()
// Sử dụng find()
// Sử dụng findIndex()
// Sử dụng some()

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// Using for...i
function hasPrimeV1(numberList) {
    if (!Array.isArray(numberList)) return false;

    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) return true;
    }
    return false;
}
console.log(hasPrimeV1([1, 1, 0, 1]));

// Using forEach()
function hasPrimeV2(numberList) {
    if (!Array.isArray(numberList)) return false;

    let checkNumPrime = false;
    numberList.forEach((number) => {
        if (isPrime(number)) checkNumPrime = true;
    });

    return checkNumPrime;
}
console.log(hasPrimeV2([1, 1, 0, 1]));

// Using find()
function hasPrimeV3(numberList) {
    if (!Array.isArray(numberList)) return false;

    return numberList.find((number) => isPrime(number)) > 0;
}
console.log(hasPrimeV3([1, 1, 0, 1]));

// Using findIndex()
function hasPrimeV4(numberList) {
    if (!Array.isArray(numberList)) return false;

    return numberList.findIndex((number) => isPrime(number)) > -1;
}
console.log(hasPrimeV4([1, 1, 0, 1]));

// Using some()
function hasPrimeV5(numberList) {
    if (!Array.isArray(numberList)) return false;

    return numberList.some((number) => isPrime(number));
}
console.log(hasPrimeV5([1, 1, 0, 1]));
