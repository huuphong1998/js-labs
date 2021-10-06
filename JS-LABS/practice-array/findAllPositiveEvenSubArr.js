// Tìm các mảng con có chứa số dương chẳn liên tiếp
// Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương chẳn

export function findAllPositiveEvenSubArr(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    const subArrayList = [];
    let subArray = [];

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];

        if (number > 0 && number % 2 === 0) subArray.push(number);

        // check if we need to reset subarr
        const needToRest = number % 2 === 1 || number < 0 || i === numberList.length - 1;
        if (subArray.length > 0 && needToRest) {
            subArrayList.push(subArray);
            subArray = []; // reset subarr
        }
    }

    return subArrayList;
}
