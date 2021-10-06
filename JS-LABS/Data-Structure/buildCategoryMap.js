// Xây dựng category map từ category list
// Viết hàm buildCategoryMap(categoryList) nhận vào là mảng categoryList cà trả về cái map tương ứng.
// Tiếp cận bài này bằng cả 2 cách: object hoặc Map
// buildCategoryMapV1(categoryList): sử dụng object
// buildCategoryMapV2(categoryList): sử dụng Map
// Ví dụ:
// const categoryList = [
//     { id: 1, name: 'iphone' },
//     { id: 2, name: 'macbook' },
// ];

// expect(buildCategoryMapV1(categoryList)).toEqual({
//     1: { id: 1, name: 'iphone' },
//     2: { id: 2, name: 'macbook' },
// });

const categoryList = [
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook' },
];

// using object
function buildCategoryMapV1(categoryList) {
    if (!Array.isArray(categoryList) || categoryList.length === 0) return {};

    return categoryList.reduce((map, category) => {
        map[category.id] = category;

        return map;
    }, {});
}

// console.log(buildCategoryMapV1(categoryList));

// using Map
function buildCategoryMapV2(categoryList) {
    if (!Array.isArray(categoryList) || categoryList.length === 0) return new Map();

    // using reduce
    return categoryList.reduce((map, category) => {
        map.set(category.id, category);

        return map;
    }, new Map());
}

console.log(buildCategoryMapV2(categoryList));
