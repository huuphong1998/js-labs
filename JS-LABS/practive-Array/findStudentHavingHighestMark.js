// Tìm student có điểm môn toán lớn nhất đầu tiên
// Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất.

export function findStudentHavingHighestMark(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

    const highestMark = studentList[0].math;
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        if (student.math > highestMark) return student;
    }

    return studentList[0];
}
