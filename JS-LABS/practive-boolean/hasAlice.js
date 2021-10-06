// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không? (không phân biệt
// hoa thường)
// for...i
// forEach
// find
// findIndex
// filter

function isAlice(student) {
    if (!student) return false;

    return student.gender === 'female' && student.name.toLowerCase() === 'alice';
}

// for...i
// export function hasAlice(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return false;

//     for (let i = 0; i < studentList.length; i++) {
//         const student = studentList[i];
//         if (isAlice(student)) return true;
//     }

//     return false;
// }

// forEach
// export function hasAlice(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return false;

//     let hasAliceFlag = false;
//     studentList.forEach((student) => {
//         if (isAlice(student)) hasAliceFlag = true;
//     });

//     return hasAliceFlag;
// }

// find
// export function hasAlice(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return false;

//     // return !!studentList.find((student) => isAlice(student));
//     // return Boolean(studentList.find((student) => isAlice(student)));
//     return Boolean(studentList.find(isAlice));
// }

// findIndex (RECOMMENED)
export function hasAlice(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;

    // return studentList.findIndex((student) => isAlice(student)) >= 0;
    return studentList.findIndex(isAlice) >= 0;
}

// filter
// export function hasAlice(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return false;

//     return studentList.filter(isAlice).length > 0;
// }
