import { countStudents } from './countStudents';

describe('countStudents()', () => {
    it('should return 0 if not array or array is empty', () => {
        expect(countStudents([])).toBe(0);
        expect(countStudents({})).toBe(0);
        expect(countStudents('')).toBe(0);
        expect(countStudents(1)).toBe(0);
        expect(countStudents(true)).toBe(0);
    });
    it('should return correct if there is no male student', () => {
        const studentList = [
            { id: 1, gender: 'female' },
            { id: 2, gender: 'female' },
        ];
        expect(countStudents(studentList)).toBe(0);
    });
    it('should return correct if there is male student', () => {
        const studentList = [
            { id: 1, gender: 'male' },
            { id: 2, gender: 'female' },
            { id: 3, gender: 'male' },
        ];
        expect(countStudents(studentList)).toBe(2);
    });
});
