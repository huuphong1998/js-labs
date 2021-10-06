// Chia mảng nhỏ thành nhiều mảng con
// Viết hàm chunk Array(array, size) để chia nhỏ array thành nhiều mảng con có length là size. Ví dụ, array có 5 phần tử
// và size = 2 --> tức là chia nhỏ ra thành nhiều mảng con, mỗi mảng có 2 phần tử. Từ đó, suy ra kết quả sẽ được 3 chunks,
// chunk 1 và chunk 2 có 2 phần tử, và chunk số 3 có 1 phần tử
// Lưu ý:
// Với array là mảng bất kỳ, size là kích thước của mảng con cần chia nhỏ
// Trường hợp array không phải là mảng hoặc size không hợp lệ (nhỏ hơn hoặc bằng 0) thì trả về []
// Trường hợp array không chia đều được cho các mảng con, thì mảng có phần tử ít nhất nằm ở cuối mảng
// Trường hợp số lượng chunk tạo ra nhiều hơn 20 thì throw new Error('Too many chunks')
// Ví dụ:
// chunkArray({}) --> []
// chunkArray([]) --> []
// chunkArray([1, 2, 3], -1) --> []
// chunkArray([1, 2, 3], 2) --> [[1, 2], [3]]
// chunkArray([1, 2, 3], 1) --> [[1], [2], [3]]
// chunkArray([1, 2, 3], 3) --> [[1, 2, 3]]

export function chunkArray(array, size) {
    if (!Array.isArray(array) || array.length === 0 || size <= 0) return [];
    if (array.length / size > 20) throw new Error('Too many chunks');

    const subArrayList = [];
    let subArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array.length >= size) subArray.push(array[i]);
        if (subArray.length === size) {
            subArrayList.push(subArray);
            subArray = [];
            if (array.length % size !== 0) size -= 1;
        }
    }

    return subArrayList;
}
