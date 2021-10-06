import { findFirstPositiveEven } from './findFirstPositiveEven';

describe('findFirstPositiveEven()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findFirstPositiveEven([])).toBeUndefined();
        expect(findFirstPositiveEven({})).toBeUndefined();
        expect(findFirstPositiveEven('')).toBeUndefined();
        expect(findFirstPositiveEven(true)).toBeUndefined();
        expect(findFirstPositiveEven(1)).toBeUndefined();
    });
    it('should return undefined when no even positive number', () => {
        expect(findFirstPositiveEven([1, 3, 5])).toBeUndefined();
    });
    it('should return correct first even positive number', () => {
        expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
        expect(findFirstPositiveEven([1, 2, 5, 6])).toBe(2);
    });
});
