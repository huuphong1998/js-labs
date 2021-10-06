import { findMaxSumArray } from './findMaxSumArray';

describe('findMaxSumArray()', () => {
    it('should return 0 when not an array or empty', () => {
        expect(findMaxSumArray([])).toBe(0);
        expect(findMaxSumArray({})).toBe(0);
        expect(findMaxSumArray('')).toBe(0);
        expect(findMaxSumArray(true)).toBe(0);
        expect(findMaxSumArray(1)).toBe(0);
    });
    it('should return 0 when not sub array increasing', () => {
        expect(findMaxSumArray([9, 8, 7, 6, 5, 4])).toBe(0);
    });
    it('should return correct sum of sub array increasing list', () => {
        expect(findMaxSumArray([1, 2, 3])).toBe(6);
        expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toBe(30);
    });
});
