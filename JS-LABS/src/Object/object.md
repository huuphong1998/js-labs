##############

-   Lấy value của key

*   Dùng dot operator để truy cập key của object
*   Dùng square brackets để truy cập dynamic key của object, kể cả key có space

-   So sánh object

*   Khi so sánh tham chiếu (object, array, function) thì địa chỉ tham chiếu sẽ được đem ra so sánh. Nếu cùng trỏ về một địa chỉ tham chiếu thì sẽ trả về true, còn lại là false

-   Pass by value

function changePrimitive(name, age) {
name = 'Easy Frontend';
age = 18;
}

let name = 'Easy';
let age = 17;
changePrimitive(name, age)
console.log(name) // 'Easy'
console.log(age) // 17

-   Pass by reference

function changeReference(student) {
student.name = 'Easy Frontend';
student.age = 18;
}

const student = {
name: 'Easy',
age: 17
}
console.log(student.name) // 'Easy Frontend'
console.log(student.age) // 18

-   Duyệt keys của object

*   Dùng Object.keys(object) --> [key]
*   Dùng forEach
*   Dùng for...in
