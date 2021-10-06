// Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
// Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
// hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.

function isStudentLessThan5(obj) {
    if (!obj) return false;

    let result = [];
    for (const key in obj.marks) {
        if (obj.marks[key] < 5) result.push(key);
    }
    return result.length === 1 ? true : false;
}

export function findStudent(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        if (isStudentLessThan5(student)) return student;
    }

    return undefined;
}
