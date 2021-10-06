// Tìm student có điểm trung bình môn thấp nhất cuối cùng
// Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
// cuối cùng trong mảng.

function caclAverage(obj) {
    if (!obj) return -1;

    return ((obj.math + obj.english) / 2).toFixed(1);
}

export function findLastStudentHavingMinAvg(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return undefined;

    let result = 11;
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        if (caclAverage(student) <= result) result = student;
    }

    return result;
}
