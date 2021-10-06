// Sắp xếp thứ tự giảm dần sử dụng bubble sort
// Viết hàm bubbleSort(numberList) nhận vào danh sachs số và trả về mảng được trả về theo thứ tự giảm dần
// Trường hợp numberList không phải mảng hoăc rỗng thì trả về mảng rỗng mới
// Trường hợp có sắp xếp, cần thực hiện trực tiếp trên mảng truyền vào, nên khi trả về, vẫn trả về mảng lúc truyền vào,
// không phải mảng mới nhé. Hàm sort() của javascript cũng làm vậy nha mọi người.

function bubbleSort(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    for (let i = numberList.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (numberList[j] < numberList[j + 1]) {
                let temp = numberList[j];
                numberList[j] = numberList[j + 1];
                numberList[j + 1] = temp;
            }
        }
    }

    return numberList;
}
console.log(bubbleSort([1, 9, 3, 8, 5, 7, 6]));
