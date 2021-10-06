import { findLastPerfectSquare } from './findLastPerfectSquare';

describe('findLastPerfectSquare()', () => {
    it('should return undefined when not an array or empty', () => {
        expect(findLastPerfectSquare([])).toBeUndefined();
        expect(findLastPerfectSquare({})).toBeUndefined();
        expect(findLastPerfectSquare('')).toBeUndefined();
        expect(findLastPerfectSquare(true)).toBeUndefined();
        expect(findLastPerfectSquare(1)).toBeUndefined();
    });
    it('should return undefined when there is no perfect square number', () => {
        expect(findLastPerfectSquare([2, 3, 5])).toBeUndefined();
    });
    it('should return correct last perfect square number', () => {
        expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
    });
});
