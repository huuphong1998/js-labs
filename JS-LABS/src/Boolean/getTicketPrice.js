// Viết hàm lấy giá vé theo số tuổi
// Khi khách hàng vào tham quan khu du lịch, tùy thuộc vào độ tuổi mà có giá vé khác nhau
// Hãy viết một hàm nhận vào dộ tuổi của khách hàng, trả về giá vé tương ứng
// Bảng giá như sau:
// Dưới 6 tuổi hoặc từ 70 tuổi trở lên là được FREE (trả về 0)
// Từ 6 - 12 tuổi giá vé là 20.000VND
// Trên 12 tuổi thì đông giá 50.000VND
// Viết hàm function getTicketPrice(age) để mình lấy được giá tiền khi biết tuổi của khách hàng
// Trả về một con số nguyên
// -1 nếu dữ liệu không hợp lệ
// 0 nếu free
// các giá tiền nếu tuổi hợp lệ
// Gỉa sử người sống thọ nhất là 125 tuổi

export function getTicketPrice(age) {
    if (age <= 0 || age > 125) return -1;

    if (age < 6 || age >= 70) return 0;
    if (age <= 12) return 20000;

    return 50000;
}
