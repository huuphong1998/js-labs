// Random a number in range of [0, n] with n = 10
function randomNumber(n) {
    if (n <= 0) return -1;

    const random = Math.random() * n;
    return Math.round(random);
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// Random a number in range of [a, b] with a < b
function randomNumberInRange(a, b) {
    if (a >= b) return -1;

    const random = Math.random() * (b - a);
    return Math.round(random) + a;
}

console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(1, 3));
console.log(randomNumberInRange(11, 33));
console.log(randomNumberInRange(11, 33));
console.log(randomNumberInRange(11, 33));
console.log(randomNumberInRange(11, 33));
console.log(randomNumberInRange(111, 333));
console.log(randomNumberInRange(111, 333));
console.log(randomNumberInRange(111, 333));
console.log(randomNumberInRange(1111, 3333));
console.log(randomNumberInRange(1111, 3333));
console.log(randomNumberInRange(1111, 3333));
console.log(randomNumberInRange(1111, 3333));
