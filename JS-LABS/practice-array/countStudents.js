// Đếm số lượng học sinh có giới tính là nam
// Viết hàm countStudents(studentList) nhận vào là một mảng studentList và trả về số lượng student có gender là male
// Lưu ý:
// Nếu truyền vào không phải là mảng hoặc mảng rỗng thì trả về 0
// Mỗi object student sẽ có 2 keys: id và gender
// Thuộc tính gender sẽ có 1 trong 2 giá trị: 'male' hoặc 'female'
// Ví dụ:
// should return 0 because there is no male student
// countStudents([
//     {id: 1, gender: 'female'},
//     {id: 2, gender: 'female'}
// ])
// should return 1 because there is one student with gender='male'
// countStudents([
//     {id: 1, gender: 'male'},
//     {id: 2, gender: 'female'}
// ])

export function countStudents(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return 0;

    return studentList.reduce((totalStudentMale, student) => {
        if (student.gender === 'male') totalStudentMale += 1;
        return totalStudentMale;
    }, 0);
}
