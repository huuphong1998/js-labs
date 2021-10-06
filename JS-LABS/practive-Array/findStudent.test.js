import { findStudent } from './findStudent';

describe('findStudent()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findStudent([])).toBeUndefined();
        expect(findStudent({})).toBeUndefined();
        expect(findStudent('')).toBeUndefined();
        expect(findStudent(true)).toBeUndefined();
        expect(findStudent(1)).toBeUndefined();
    });
    it('should return undefined when there is no first student with all marks >= 5', () => {
        const studentList = [
            { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
            { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
            { id: 3, name: 'John', marks: { math: 6, english: 7, programming: 9 } },
            { id: 4, name: 'Sarah', marks: { math: 8, english: 9, programming: 10 } },
        ];
        expect(findStudent(studentList)).toBeUndefined();
    });
    it('should return correct the first student with all marks >= 5', () => {
        const studentList = [
            { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
            { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
            { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
            { id: 4, name: 'Sarah', marks: { math: 2, english: 9, programming: 10 } },
        ];
        expect(findStudent(studentList)).toEqual({
            id: 3,
            name: 'John',
            marks: { math: 4, english: 7, programming: 9 },
        });
    });
});
