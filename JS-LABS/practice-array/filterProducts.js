// Tìm các sản phẩm có giá tiền lớn hơn 100.000đ
// Viết hàm filterProducts(productList) nhận vào danh sách các sản phẩm và trả về các sản phẩm có giá lớn hơn 100000
// Ví dụ:
// should return [] because there is no product having price > 100000
// filterProducts([
//     {id: 1, price: 10000},
//     {id: 2, price: 50000},
//     {id: 3, price: 70000},
// ])
// filterProducts([
//     {id: 1, price: 100000},
//     {id: 2, price: 150000},
//     {id: 3, price: 270000},
// ])
// should return a list of products having price > 100000
// [
//     {id: 2, price: 150000}
//     {id: 3, price: 270000},
// ]

// export function filterProducts(productList) {
//     if (!Array.isArray(productList) || productList.length === 0) return [];

//     let result = [];
//     for (let i = 0; i < productList.length; i++) {
//         const product = productList[i];
//         if (product.price > 100000) result.push(product);
//     }
//     return result;
// }
export function filterProducts(productList) {
    if (!Array.isArray(productList) || productList.length === 0) return [];

    return productList.reduce((result, product) => {
        if (product.price > 100000) result.push(product);
        return result;
    }, []);
}
