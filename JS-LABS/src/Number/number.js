// Write a function to calculate the area of a rectangle (Tính diện tích hình chữ nhật)
function calcAreaOfRectangle(a, b) {
    if (a <= 0 || b <= 0) return -1;

    return a * b;
}

console.log(calcAreaOfRectangle(0, 1));
console.log(calcAreaOfRectangle(4, 3));

// Write a function to calculate perimeter of the rectangle (Tính chu vi hình chữ nhật)
function calcPerimeterOfRectangle(a, b) {
    if (a <= 0 || b <= 0) return -1;

    return (a + b) * 2;
}
console.log(calcPerimeterOfRectangle(0, 1));
console.log(calcPerimeterOfRectangle(4, 3));

// Write a function to calculate the area of a circle (Tính diện tích hình vuông)
function calcAreaOfCircle(r) {
    if (r <= 0) return -1;

    return Math.PI * r * r;
}
console.log(calcAreaOfCircle(6));
