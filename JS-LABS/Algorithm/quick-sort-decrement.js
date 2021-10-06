// Sắp xếp giảm dần sử dụng quick sort
// Tương tự như bài giảng, viết hàm quickSort() và partition() để nhận vào là một mảng số, trả về là một mảng đã được sắp
// xếp giảm dần

function partition(numberList, left, right) {
    const mid = left + Math.trunc((right - left) / 2);
    const pivot = numberList[mid];

    let i = left;
    let j = right;

    while (i <= j) {
        while (numberList[i] > pivot) i++;
        while (numberList[j] < pivot) j--;

        if (i < j) {
            const temp = numberList[i];
            numberList[i] = numberList[j];
            numberList[j] = temp;
        }

        if (i <= j) {
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(numberList, left, right) {
    // base condition / termination point
    if (left >= right) return numberList;

    const pivotPosition = partition(numberList, left, right);

    quickSort(numberList, left, pivotPosition - 1);
    quickSort(numberList, pivotPosition, right);

    return numberList;
}

console.log(quickSort([1, 4, 6, 9, 5], 0, 4));


