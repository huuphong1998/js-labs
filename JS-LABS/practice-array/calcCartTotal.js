// Tính tổng tiền giỏ hàng
// Viết hàm calcCartTotal(cartItemList) nhận vào danh sách các item trong giỏ hàng và trả về tổng tiền của giỏ hàng đó
// Lưu ý:
// cartItemList có thể không phải là mảng
// Trường hợp cartItemList là mảng, thì sẽ là mảng của các object cartItem
// Mỗi cartItem sễ có 3 keys: id, product và quantity
// Ví dụ:
// should return 500000 = 100000 * 4 + 50000 * 2
// calcCartTotal([
//     {id: 1, product: {id: 1, price: 100000}, quantity: 4},
//     {id: 2, product: {id: 2, price: 50000}, quantity: 2},
// ])
// Dùng reduce để cài đặt hàm này nhé

export function calcCartTotal(cartItemList) {
    if (!Array.isArray(cartItemList) || cartItemList.length === 0) return 0;

    return cartItemList.reduce((totalMoney, cartItem) => {
        return totalMoney + cartItem.product.price * cartItem.quantity;
    }, 0);
}
