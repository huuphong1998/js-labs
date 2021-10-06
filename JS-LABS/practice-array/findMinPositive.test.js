import { findMinPositive } from './findMinPositive';

describe('findMinPositive()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findMinPositive([])).toBeUndefined();
        expect(findMinPositive({})).toBeUndefined();
        expect(findMinPositive('')).toBeUndefined();
        expect(findMinPositive(true)).toBeUndefined();
        expect(findMinPositive(1)).toBeUndefined();
    });
    it('should return undefined when no positive number', () => {
        expect(findMinPositive([-1, -5])).toBeUndefined();
    });
    it('should return correct the smallest positive number ', () => {
        expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
    });
});
