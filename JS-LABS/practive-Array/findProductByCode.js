// Tìm vị trí của sản phẩm có mã code là = abc
// Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code

export function findProductByCode(productList, code) {
    if (!Array.isArray(productList) || productList.length === 0) return -1;

    // for (let i = 0; i < productList.length; i++) {
    //     const product = productList[i];
    //     if (product.code === code) return i;
    // }

    // return productList.reduce((result, product, index) => {
    //     if (product.code === code) return index;

    //     return result;
    // }, -1);

    return productList.findIndex((product) => product.code === code);
}
