// Bài toán đổi tiền ATM
// Viết hàm withdraw(amount) để giúp máy ATM biết trả ra bao nhiêu tờ tiền của các mệnh giá khác nhau.
// Giả sử máy ATM đang có 2 tờ 500k, 5 tờ 200k, 10 tờ 100k và 100 tờ 50k (tổng tiền là 8 triệu đồng)
// Viết hàm nhận vào số tiền, trả về object với định dạng như sau:
// {
//     k500: a,
//     k200: b,
//     k100: c,
//     k50: d
// }
// Trong đó a,b,c,d lần lượt là số lượng tờ tiền tương ứng đổi được
// Lưu ý: ưu tiên đổi tiền lớn trước, khi hết tiền lớn mới dùng tiền nhỏ
// Trường hợp máy ATM không đủ tiền, thì trả về chuỗi 'Insufficient balance from ATM'
// Số tiền nhận vào phải là bội số của 50.000đ, nếu sai thì trả về chuỗi 'Invalid balance'
// Ví dụ:
// withdraw(850000) --> {k500: 1, k200: 1, k100: 1, k50: 1}
// withdraw(200000) --> {k500: 0, k200: 0, k100: 2, k50: 0}
// withdraw(125000) --> 'Invalid balance'
// withdraw(9000000) --> 'Insufficient balance'

const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

const SUM_MONEY =
    K500_QUANTITY * K500_VALUE + K200_QUANTITY * K200_VALUE + K100_QUANTITY * K100_VALUE + K50_QUANTITY * K50_VALUE;

function withdraw(amount) {
    if (!Number.isInteger(amount / BASE_UNIT)) return 'Invalid balance';
    if (amount > SUM_MONEY) return 'Insufficient balance from ATM';

    const moneyObject = {
        k500: 0,
        k200: 0,
        k100: 0,
        k50: 0,
    };

    moneyObject.k500 = amount < K500_VALUE * K500_QUANTITY ? Math.trunc(amount / K500_VALUE) : K500_QUANTITY;
    amount -= moneyObject.k500 * K500_VALUE;
    moneyObject.k200 = amount < K200_VALUE * K200_QUANTITY ? Math.trunc(amount / K200_VALUE) : K200_QUANTITY;
    amount -= moneyObject.k200 * K200_VALUE;
    moneyObject.k100 = amount < K100_VALUE * K100_QUANTITY ? Math.trunc(amount / K100_VALUE) : K100_QUANTITY;
    amount -= moneyObject.k100 * K100_VALUE;
    moneyObject.k50 = amount / K50_VALUE;

    return moneyObject;
}
console.log(withdraw(8000000));

// const K500_QUANTITY = 2;
// const K200_QUANTITY = 5;
// const K100_QUANTITY = 10;
// const K50_QUANTITY = 100;

// const K500_VALUE = 500000;
// const K200_VALUE = 200000;
// const K100_VALUE = 100000;
// const K50_VALUE = 50000;

// const BASE_UNIT = 50000;

// const SUM_MONEY =
//     K500_QUANTITY * K500_VALUE + K200_QUANTITY * K200_VALUE + K100_QUANTITY * K100_VALUE + K50_QUANTITY * K50_VALUE;

// function withdraw(amount) {
//     if (amount > SUM_MONEY) return 'Insufficient balance from ATM';
//     if (amount % BASE_UNIT !== 0) return 'Invalid balance';
//     const a = Math.floor(amount / K500_VALUE) <= K500_QUANTITY ? Math.floor(amount / K500_VALUE) : K500_QUANTITY;
//     amount -= a * K500_VALUE;
//     const b = Math.floor(amount / K200_VALUE) <= K200_QUANTITY ? Math.floor(amount / K200_VALUE) : K200_QUANTITY;
//     amount -= b * K200_VALUE;
//     const c = Math.floor(amount / K100_VALUE) <= K100_QUANTITY ? Math.floor(amount / K100_VALUE) : K100_QUANTITY;
//     amount -= c * K100_VALUE;
//     const d = amount / K50_VALUE;
//     return { k500: a, k200: b, k100: c, k50: d };
// }
// console.log(withdraw(200000));
