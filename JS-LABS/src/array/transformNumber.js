// Biến đổi mảng với f(i) = f(i - 1) + f(i + 1)
// Viết hàm tranformNumbers(numberList) để biến đổi các số hiện tịa của mảng numberList thành các số mới theo công thức
// f(i) = f(i - 1) + f(i + 1) với i là index
// Tạm dịch nôm na là phần tử ở vị trí i sẽ bằng tổng của 2 phần tử bên cạnh
// Trường hợp đầu mảng và cuối mảng sẽ bằng phần tử liền kề
// Trường hợp mảng có ít hơn một phần tử thì sẽ giữ nguyên, không biến đổi
// Lưu ý: mảng trả về là một mảng mới, không phải là mảng truyền vào nhé
// Ví dụ:
// transformNumber([]) --> []
// transformNumber([1]) --> [1]
// transformNumber([5, 10]) --> [10, 5]
// transformNumber([2, 4, 6, 8]) --> [4, 8, 12, 6]
// Đặt mảng đầu vào là a, mảng trả về là b, ta có:
// b[0] = a[1] = 4 (đầu mảng)
// b[1] = a[0] + a[2] = 2 + 6 = 8
// b[2] = a[1] + a[3] = 4 + 8 = 12
// b[3] = a[2] = 6 (cuối mảng)
// Viết hàm này theo 3 cách
// Dùng for...i
// Dùng forEach()
// Dùng map()

// using for...i
function transformNumberV1(numberList) {
    if (!Array.isArray(numberList)) return undefined;
    if (numberList.length <= 2) return [...numberList].reverse();

    let result = [];
    for (let i = 0; i < numberList.length; i++) {
        const leftNum = numberList[i - 1] ? numberList[i - 1] : 0;
        const rightNum = numberList[i + 1] ? numberList[i + 1] : 0;
        result.push(leftNum + rightNum);
    }

    return result;
}
console.log(transformNumberV1([2, 4, 6, 8, 12]));
console.log(transformNumberV1([2, 4]));

// using forEach()
function transformNumberV2(numberList) {
    if (!Array.isArray(numberList)) return undefined;
    if (numberList.length <= 2) return [...numberList].reverse();

    let result = [];
    numberList.forEach((number, i, array) => {
        const leftNum = array[i - 1] ? array[i - 1] : 0;
        const rightNum = array[i + 1] ? array[i + 1] : 0;
        result.push(leftNum + rightNum);
    });

    return result;
}
console.log(transformNumberV2([2, 4, 6, 8, 12]));
console.log(transformNumberV2([2, 4]));

// using map()
function transformNumberV3(numberList) {
    if (!Array.isArray(numberList)) return undefined;
    if (numberList.length <= 2) return [...numberList].reverse();

    let result = [];
    numberList.map((number, i, array) => {
        const leftNum = array[i - 1] ? array[i - 1] : 0;
        const rightNum = array[i + 1] ? array[i + 1] : 0;
        result.push(leftNum + rightNum);
    });

    return result;
}
console.log(transformNumberV3([2, 4, 6, 8, 12]));
console.log(transformNumberV3([2, 4]));
