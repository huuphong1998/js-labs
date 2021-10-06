import { classifyStudentV3 } from './if-else';

describe('classifyStudentV3()', () => {
    test('should return Invalid mark! when n < 0', () => {
        expect(classifyStudentV3(-1)).toBe('Invalid mark!');
    });

    test('should return Invalid mark! when n > 10', () => {
        expect(classifyStudentV3(11)).toBe('Invalid mark!');
    });

    test('should return Exellence when n > 8', () => {
        expect(classifyStudentV3(9)).toBe('Excellence');
        expect(classifyStudentV3(10)).toBe('Excellence');
    });

    test('should return Good when n in [7-8]', () => {
        expect(classifyStudentV3(7)).toBe('Good');
        expect(classifyStudentV3(8)).toBe('Good');
    });

    test('should return Not Good when n in [4-6]', () => {
        [4, 5, 6].forEach((n) => {
            expect(classifyStudentV3(n)).toBe('Not Good');
        });
    });

    test('should return Bad when n in [1-3]', () => {
        [1, 2, 3].forEach((n) => {
            expect(classifyStudentV3(n)).toBe('Bad');
        });
    });
});
