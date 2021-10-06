// Đếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng
// P1: add unique numbers to a new array --> length
// P2: using object map --> keys of object
// P3: reduce

// P1: add unique numbers to a new array --> length
// export function countUniqueNumbers(numberList) {
//     if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//     const uniqueNumberList = [];
//     for (let i = 0; i < numberList.length; i++) {
//         const number = numberList[i];
//         if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
//     }

//     return uniqueNumberList.length;
// }

// P2: using object map --> keys of objects
// export function countUniqueNumbers(numberList) {
//     if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//     const flag = {};
//     for (let i = 0; i < numberList.length; i++) {
//         const number = numberList[i];
//         flag[number] = true;
//     }

//     return Object.keys(flag).length;
// }

// P3: using reduce
export function countUniqueNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;

    const flag = numberList.reduce((flag, number) => {
        flag[number] = true;

        return flag;
    }, {});

    return Object.keys(flag).length;
}
