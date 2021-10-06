// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:
// true nếu số lượng keys của 2 object bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)
// ngược lại là false
// Ví dụ:
// isEqual({}, {}) --> true
// isEqual({name: 'Bob'}, {name: 'Alice'}) --> false
// isEqual({name: 'Bob'}, {name: 'Bob'}) --> true
// isEqual({name: 'Bob'}, {name: 'Bob', age: 18}) --> false

function isEqualV1(obj1, obj2) {
    let keyObj1 = '';
    let keyObj2 = '';
    let valueObj1 = '';
    let valueObj2 = '';

    for (const key in obj1) {
        keyObj1 = key;
        valueObj1 = obj1[key];
    }

    for (const key in obj2) {
        keyObj2 = key;
        valueObj2 = obj2[key];
    }

    return keyObj1 === keyObj2 && valueObj1 === valueObj2;
}

console.log(isEqualV1({}, {}));
console.log(isEqualV1({ name: 'Bob' }, { name: 'Bob', age: 18 }));

function isEqualV2(obj1, obj2) {
    if (Object.keys(obj1).length !== 0 && Object.keys(obj2).length === 0) return false;

    let valueObj1 = '';
    let valueObj2 = '';
    for (const key in obj1) {
        valueObj1 += obj1[key];
    }
    for (const key in obj2) {
        valueObj2 += obj2[key];
    }

    return Object.keys(obj1).join('') === Object.keys(obj2).join('') && valueObj1 === valueObj2;
}
console.log(isEqualV2({ name: 'bob', math: 9 }, { name: 'bob', math: 9 }));

function isEqualV3(obj1, obj2) {
    if (Object.keys(obj1).length !== 0 && Object.keys(obj2).length === 0) return false;

    return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}
console.log(isEqualV3({}, {}));
console.log(isEqualV3({ name: 'Bob' }, { name: 'Bob', age: 18 }));
