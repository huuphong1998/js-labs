import { isIncreasingNumberV1, isIncreasingNumberV2 } from './IncreaseNumber';

describe('isIncreasingNumberV1(n)', () => {
    test('should return false when n <= 0', () => {
        expect(isIncreasingNumberV1(0)).toBe(false);
    });
    test('should return false when n >= 1000000', () => {
        expect(isIncreasingNumberV1(1200000)).toBe(false);
    });
    test('should return false when n < 10', () => {
        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasingNumberV1(x)).toBe(false);
        });
    });
    test('should return false when n not an increasing number', () => {
        [11, 222, 333, 4444, 55555, 666666, 21, 312, 4325, 31231, 657235].forEach((x) => {
            expect(isIncreasingNumberV1(x)).toBe(false);
        });
    });
    test('should return false when n is an increasing number', () => {
        [12, 123, 3457, 45789, 345678].forEach((x) => {
            expect(isIncreasingNumberV1(x)).toBe(true);
        });
    });
});

describe('isIncreasingNumberV2(n)', () => {
    test('should return false when n <= 0', () => {
        expect(isIncreasingNumberV2(0)).toBe(false);
    });
    test('should return false when n >= 1000000', () => {
        expect(isIncreasingNumberV2(1200000)).toBe(false);
    });
    test('should return false when n < 10', () => {
        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasingNumberV2(x)).toBe(false);
        });
    });
    test('should return false when n not an increasing number', () => {
        [11, 222, 333, 4444, 55555, 666666, 21, 312, 4325, 31231, 657235].forEach((x) => {
            expect(isIncreasingNumberV2(x)).toBe(false);
        });
    });
    test('should return false when n is an increasing number', () => {
        [12, 123, 3457, 45789, 345678].forEach((x) => {
            expect(isIncreasingNumberV2(x)).toBe(true);
        });
    });
});
