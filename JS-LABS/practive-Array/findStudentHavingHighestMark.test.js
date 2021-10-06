import { findStudentHavingHighestMark } from './findStudentHavingHighestMark';

describe('findStudentHavingHighestMark()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findStudentHavingHighestMark([])).toBeUndefined();
        expect(findStudentHavingHighestMark({})).toBeUndefined();
        expect(findStudentHavingHighestMark('')).toBeUndefined();
        expect(findStudentHavingHighestMark(true)).toBeUndefined();
        expect(findStudentHavingHighestMark(1)).toBeUndefined();
    });
    it('should return correct student has the highest math score first', () => {
        const studentList = [
            { id: 1, name: 'Alice', math: 9 },
            { id: 2, name: 'Bob', math: 10 },
            { id: 3, name: 'John', math: 10 },
        ];

        expect(findStudentHavingHighestMark(studentList)).toEqual({ id: 2, name: 'Bob', math: 10 });
    });
});
