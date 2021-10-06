// 1. Print numbers: 1 --> 10
// 2. Print even numbers: [2, 4, 6, 8, 10]
// 3. Print even numbers but less than n

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// 2. Print even numbers: [2, 4, 6, 8, 10]
function printEvenNumers() {
    let result = [];
    for (let i = 2; i <= 10; i += 2) {
        result.push(i);
    }

    return result;
}
console.log(printEvenNumers());

// 3. Print even numbers but less than n
function printEvenNumersN(n) {
    if (n < 2) return;

    for (let i = 2; i < n; i += 2) {
        console.log(i);
    }
}
printEvenNumersN(14);
