// Logical Operators

//  Nếu là số dương thì...
function checkNumber1() {
    if (n > 0) {
        // code...
    }
}

// Nếu là số dương chẳn thì...
function checkNumber2() {
    if (n > 0 && n % 2 === 0) {
        // code...
    }
}

// Nếu là số dương chẳn và lớn hơn 10 thì...
function checkNumber3() {
    if (n > 0 && n % 2 === 0 && n > 10) {
        // code...
    }
}

// Nếu là số dương chẳn chia hết cho 5 và lớn hơn 10 thì...
function checkNumber4() {
    if (n > 0 && n % 2 === 0 && n % 5 === 0 && n > 10) {
        // code...
    }
}

// Nếu là số dương chẳn hoặc số âm lẻ thì...
function checkNumber5() {
    const isEvenPositive = n > 0 && n % 2 === 0;
    const isOddNegative = n < 0 && n % 2 !== 0;
    if (isEvenPositive || isOddNegative) {
        // code...
    }
}
