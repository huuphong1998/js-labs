// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó.
// Yêu cầu:
// Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
// Nếu hành khách nhỏ hơn hoặc bằng 4 thì dùng xe 4 chỗ
// Trả về con sô duy nhất là tổng của 2 loại xe taxi cần phải gọi.
// Ví dụ:
// getTaxiCount(3) --> 1 xe 4 chỗ
// getTaxiCount(6) --> 1 xe 7 chỗ
// getTaxiCount(10) --> 2 xe vì 1 xe 7 chỗ và 1 xe 4 chỗ
// getTaxiCount(20) --> 3 xe 7 chỗ

// Cách 1
export function getTaxiCountV1(passengersCount) {
    if (passengersCount <= 0) return 0;

    let y = Math.trunc(passengersCount / 7);
    let x = passengersCount % 7;

    if (x === 0) return y;

    return y + 1;
}
// console.log(getTaxiCount(2));

// Cách 2
export function getTaxiCountV2(passengersCount) {
    if (passengersCount <= 0) return 0;
    return Math.ceil(passengersCount / 7);
}
// console.log(getTaxiCount2(6));
