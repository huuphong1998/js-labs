import { isSubArray } from './isSubArray';

describe('isSubArray()', () => {
    it('should return false if a or b is not an array', () => {
        expect(isSubArray(1, [1])).toBe(false);
        expect(isSubArray([1], '')).toBe(false);
        expect(isSubArray({}, true)).toBe(false);
    });
    it('should return true if a empty', () => {
        expect(isSubArray([], [1])).toBe(true);
    });
    it('should return false if a has length greater than b', () => {
        expect(isSubArray([1, 2], [1])).toBe(false);
    });
    it('should return false if a is not a sub array of b', () => {
        expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
    });
    it('should return true if a is a sub array of b', () => {
        expect(isSubArray([1, 2], [4, 10, 1, 2, 3])).toBe(true);
    });
});
