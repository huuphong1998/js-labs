import { findStudentById } from './findStudentById';

describe('findStudentById(studentList, studentId)', () => {
    it('should return -1 if list is empty', () => {
        expect(findStudentById([])).toBe(-1);
        expect(findStudentById([], -1)).toBe(-1);
        expect(findStudentById([], 0)).toBe(-1);
        expect(findStudentById([], 1)).toBe(-1);
        expect(findStudentById([], 2)).toBe(-1);
    });
    it('should return -1 if list doesnt have target id', () => {
        const studentList = [
            { id: 1, name: 'Easy' },
            { id: 2, name: 'Frontend' },
        ];
        expect(findStudentById(studentList, 0)).toBe(-1);
        expect(findStudentById(studentList, 3)).toBe(-1);
    });
    it('should return correct index if list has target id', () => {
        const studentList = [
            { id: 1, name: 'Easy' },
            { id: 2, name: 'Frontend' },
        ];
        expect(findStudentById(studentList, 1)).toBe(0);
        expect(findStudentById(studentList, 2)).toBe(1);
    });
});
