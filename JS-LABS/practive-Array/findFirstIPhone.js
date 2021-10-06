// Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa thường)
// Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên

export function findFirstIPhone(productList) {
    if (!Array.isArray(productList) || productList.length === 0) return undefined;

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        if (product.name.toLowerCase().startsWith('iphone')) return product;
    }

    return undefined;
}
