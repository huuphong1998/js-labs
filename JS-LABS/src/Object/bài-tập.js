// Object exercise
// 1. Create an object student with name is Easy Frontend and age is 18.
const student = {};
student.name = 'Easy Frontend';
student.age = 18;

// -------
const student = {
    name: 'Easy Frontend',
    age: 18,
};
console.log(student);

// 2. Check if an object is empty (means have no keys)
// { } ---> no keys ---> length of key list is 0
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));

// 3.Get average mark of an object
// calcAvgMark({math: 10, english: 8}) ---> 9
function calcAvgMark(mark) {
    if (!mark) return -1;

    // avg = sum / length

    const length = Object.keys(mark).length;
    let sum = 0;

    for (const key in mark) {
        const value = mark[key];
        sum += value;
    }

    return (sum / length).toFixed(1);
}
console.log(calcAvgMark({ math: 10, english: 7 }));
