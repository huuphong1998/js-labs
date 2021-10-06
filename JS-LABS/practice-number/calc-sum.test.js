import { calculateSum, calculateSumV2 } from './calc-sum';

// Tính S(n) = 1 + 2 + 3 +...+ n

describe('calculateSum()', () => {
    test('should return 0 when n <= 0', () => {
        expect(calculateSum(0)).toBe(0);
        expect(calculateSum(-1)).toBe(0);
    });
    test('should return sum when n > 0', () => {
        expect(calculateSum(1)).toBe(1);
        expect(calculateSum(2)).toBe(3);
        expect(calculateSum(10)).toBe(55);
    });
});

describe('calculateSumV2()', () => {
    test('should return 0 when n <= 0', () => {
        expect(calculateSumV2(0)).toBe(0);
        expect(calculateSumV2(-1)).toBe(0);
    });
    test('should return sum when n > 0', () => {
        expect(calculateSumV2(1)).toBe(1);
        expect(calculateSumV2(2)).toBe(3);
        expect(calculateSumV2(10)).toBe(55);
    });
});
