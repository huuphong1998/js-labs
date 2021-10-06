import { hasAlice } from './hasAlice';

describe('hasAlice()', () => {
    it('should return false for empty array', () => {
        expect(hasAlice([])).toBe(false);
    });
    it('should return false for array doesnt has Alice', () => {
        const studentList = [
            { id: 1, name: 'Bob', gender: 'female' },
            { id: 2, name: 'Alice', gender: 'male' },
        ];
        expect(hasAlice(studentList)).toBe(false);
    });
    it('should return true for has Alice', () => {
        const studentList = [
            { id: 1, name: 'Bob', gender: 'female' },
            { id: 2, name: 'Alice', gender: 'female' },
        ];
        expect(hasAlice(studentList)).toBe(true);
    });
});
