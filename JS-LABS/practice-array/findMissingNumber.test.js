import { findMissingNumber } from './findMissingNumber';

describe('findMissingNumber()', () => {
    it('should return undefined when parameters invalid', () => {
        expect(findMissingNumber([], 6)).toBeUndefined();
        expect(findMissingNumber({}, 6)).toBeUndefined();
        expect(findMissingNumber('', 6)).toBeUndefined();
        expect(findMissingNumber(true, 6)).toBeUndefined();
        expect(findMissingNumber([5, 6, 7, 8, 9], 0)).toBeUndefined();
    });
    it('should return undefined when the missing number is not found', () => {
        expect(findMissingNumber([5, 6, 7, 8, 9, 10], 10)).toBeUndefined();
    });
    it('should return correct missing number', () => {
        expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
        expect(findMissingNumber([5], 6)).toBe(6);
    });
});
