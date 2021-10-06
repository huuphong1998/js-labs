import { findLastNegativeOdd } from './findLastNegativeOdd';

describe('findLastNegativeOdd()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findLastNegativeOdd([])).toBeUndefined();
        expect(findLastNegativeOdd({})).toBeUndefined();
        expect(findLastNegativeOdd('')).toBeUndefined();
        expect(findLastNegativeOdd(true)).toBeUndefined();
        expect(findLastNegativeOdd(1)).toBeUndefined();
    });
    it('should return undefined when no odd negative number', () => {
        expect(findLastNegativeOdd([1, 3, 5])).toBeUndefined();
    });
    it('should return correct last odd negative number', () => {
        expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
    });
});
