// Tính trung bình cộng của các số chẳn tỏng mảng
// Viết hàm calcAvgOfAllEvenNumbers(numberList) nhận vào là một mảng các số nguyên dương. Trả về một con số duy nhất cho
// biết trung bình cộng của tất cả các số có sẵn trong mảng, nếu kết quả là số thực thì làm tròn về số nguyên gần nhất
// Ví dụ:
// calcAvgOfAllEvenNumbers(1) --> 0 vì dữ liệu đầu vào không hợp lệ
// calcAvgOfAllEvenNumbers([]) --> 0
// calcAvgOfAllEvenNumbers([1]) --> 0
// calcAvgOfAllEvenNumbers([1, 2]) --> 2
// calcAvgOfAllEvenNumbers([1, 2, 4]) --> 3 vì có 2 số chẵn 2 + 4 = 6., trung bình cộng lấy 6 / 2 = 3
// calcAvgOfAllEvenNumbers([1, 2, 4, 8]) --> 5 vì có 3 số chẵn 2 + 4 + 8 = 14, trung bình cộng lấy 14 / 3 = 4.6 --> 5

function calcAvgOfAllEvenNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length <= 1) return 0;

    let evenNumberList = [];
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) evenNumberList.push(numberList[i]);
    }

    const result = evenNumberList.length >= 1 ? evenNumberList.reduce((sum, number) => sum + number) : 0;
    return result === 0 ? 0 : Math.round(result / evenNumberList.length);
}

console.log(calcAvgOfAllEvenNumbers([3, 5, 7]));
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));
console.log(calcAvgOfAllEvenNumbers([1, 2]));
