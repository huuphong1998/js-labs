import { findLastStudentHavingMinAvg } from './findLastStudentHavingMinAvg';

describe('findLastStudentHavingMinAvg()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findLastStudentHavingMinAvg([])).toBeUndefined();
        expect(findLastStudentHavingMinAvg({})).toBeUndefined();
        expect(findLastStudentHavingMinAvg('')).toBeUndefined();
        expect(findLastStudentHavingMinAvg(true)).toBeUndefined();
        expect(findLastStudentHavingMinAvg(1)).toBeUndefined();
    });
    it('should return correct student has the lowest GPA in the last subject', () => {
        const studentList = [
            { id: 1, name: 'Alice', math: 9, english: 9 },
            { id: 2, name: 'Bob', math: 5, english: 5 },
            { id: 3, name: 'John', math: 5, english: 5 },
        ];

        expect(findLastStudentHavingMinAvg(studentList)).toEqual({ id: 3, name: 'John', math: 5, english: 5 });
    });
});
