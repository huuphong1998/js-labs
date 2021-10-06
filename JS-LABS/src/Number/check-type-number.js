// Write a function to check if a number is odd/even (Kiểm tra chẵn lẻ)
function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 === 1;
}

// Write a function to check if a number is divisible by 5 (Kiểm tra có chia hết cho 5 không)
function isDivisibleBy5(n) {
    return n % 5 === 0;
}

// Write a function to check if a number is perfect square (Kiểm tra có phải là số chính phương không)
function isPerfectSquare(n) {
    if (n <= 0) return false;

    const sqrtN = Math.sqrt(n);
    const sqrtNInt = Math.trunc(sqrtN);

    return sqrtNInt * sqrtNInt === n;
}
console.log(isPerfectSquare(9));
