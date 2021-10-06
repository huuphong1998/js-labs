// Tìm vị trí của student có id cho trước
// Viết hàm findStudentById(studetnList, studentId) để tìm ra vị trí của student có id bằng với studentId
// for...i
// findIndex

// for...i
// export function findStudentById(studentList, studentId) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return -1;

//     for (let i = 0; i < studentList.length; i++) {
//         const student = studentList[i];
//         if (student.id === studentId) return i;
//     }

//     return -1;
// }

// findIndex
export function findStudentById(studentList, studentId) {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1;

    return studentList.findIndex((student) => student.id === studentId);
}
