// Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ
// for...i
// filter
// delegate: ủy thác, ủy quyền

function getTheFirstDigit(number) {
    const unsignedNumber = Math.abs(number);
    const firstDigitCharacter = unsignedNumber.toString().charAt(0);

    return Number.parseInt(firstDigitCharacter);
}

// for...i
// export function findAllNumbers(numberList) {
//     if (!Array.isArray(numberList) || numberList.length === 0) return [];

//     const filteredList = [];
//     for (let i = 0; i < numberList.length; i++) {
//         const number = numberList[i];
//         const firstDigit = getTheFirstDigit(number);
//         if (firstDigit % 2 === 1) filteredList.push(number);
//     }

//     return filteredList;
// }

// filter
export function findAllNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    return numberList.filter((number) => getTheFirstDigit(number) % 2 === 1);
}
