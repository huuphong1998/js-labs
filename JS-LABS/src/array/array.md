######

ARRAY OBJECT

-   Static methods

*   Array.isArray(arr): Kiểm tra arr có phải là mảng không?
*   Array.from(): Tạo mảng mới từ các dữ liệu khác như Set, Iterable,...

-   Instance props

*   const numberList = [1,2,3]
*   numberList.length; // 3

-   Instance methods
-   Nhóm hàm kiểm tra phần tử có tồn tại không?

*   every(callbackFn): Kiểm tra tất cả phần tử thỏa điều kiện
*   some(callbackFn): Kiểm tra có một phần tử thỏa điều kiện
*   indexOf(searchElement): Tìm vị trí đầu tiên của phần tử searchElement
*   lastIndexOf(searchElement): Tìm vị trí cuối cùng của phần tử searchElement
*   includes(searchElement): Kiểm tra có chứa phần tử searchElement không.
*   find(callbackFn): Tìm phần tử đầu tiên thỏa điều kiện
*   findIndex(callbackFn): Tìm vị trí của phần tử đầu tiên thỏa điều kiện

-   Nhóm hàm thêm xóa phần tử

*   push(element0, ..., elementN): Thêm cuối mảng
*   pop(): Xóa cuối mảng
*   shift(): Xóa đầu mảng
*   unshift(element0, ..., elementN): Thêm đầu mảng
*   splice(start, deleteCount, item1, ..., itemN): Xóa/thêm giữa mảng

-   Nhóm hàm hay sử dụng

*   forEach(callbackFn): Duyệt mảng
*   map(callbackFn): Biến đổi mảng
*   filter(callbackFn): Lọc mảng theo điều kiện
*   slice(start, end): Lấy mảng con
*   reduce(): Duyệt mảng và tính toán cho ra kết quả cuối cùng

-   Và một số hàm khác

*   fill(value, start = 0, end = arr.length): Filll value từ start đến end
*   join(): Biến đổi mảng thành chuỗi
*   concat(): Nối mảng
*   reverse(): Đảo ngược mảng
*   sort(): Sắp xếp mảng
