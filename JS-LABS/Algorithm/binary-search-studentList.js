// Tìm kiếm student theo tên sử dụng binary search
// Viết hàm binarySearch(studentList, searchName) để nhận vào một danh sách studentList, cùng với cái tên searchName cần
// tìm, trả về vị trí của student có tên trùng với tên cần tìm.
// Trường hợp dữ liệu không hợp lệ (có thể studentList hoặc searchName) thì trả về -1
// searchName rỗng hoặc chỉ chứa khoảng trắng được xem là không hợp lệ
// Truyền không đủ 2 tham số cũng là không hợp lệ
// Phải dùng binary search dạng không đệ quy cho bài này
// Khi so sánh tên không phân biệt hoa thường, bỏ qua khoảng trắng thừa đầu cuối. Ví dụ: 'jOHn ' và 'john' sẽ được tính
// là macth
// Dữ liệu đầu vào là một danh sách studentList đã được sắp xếp tăng dần theo name

function binarySearch(studentList, searchName) {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1;
    if (searchName === '' || searchName === ' ' || arguments.length < 2) return -1;

    let left = 0;
    let right = studentList.length - 1;

    while (left <= right) {
        const mid = left + Math.trunc((right - left) / 2);
        if (studentList[mid].name.toLowerCase().trim() === searchName.toLowerCase().trim()) return mid;

        if (searchName.toLowerCase().trim() > studentList[mid].name.toLowerCase().trim()) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const studentList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'John' },
];
console.log(binarySearch(studentList, 'Bob'));
